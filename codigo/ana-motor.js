  /* ===== Ana: busca a resposta mais parecida na base do zElo (sem IA generativa) =====
     1. Normaliza o texto (minúsculas, sem acento, sem pontuação).
     2. Troca sinônimos e gírias por uma palavra-base (ex.: "birra", "surto" -> "crise").
     3. Corrige erros de digitação comparando com o vocabulário da base (distância de edição).
     4. Compara com cada pergunta da base, dando mais peso às palavras raras (TF-IDF simples),
        e soma um pouco de semelhança por trechos de 3 letras para frases curtas.
     5. Se nada passa do limite, oferece as perguntas mais próximas em vez de inventar. */
  var zAna = (function () {
    var PARADAS = (
      "a o e é de da do das dos em no na nos nas um uma uns umas para pra pro por com sem que se " +
      "eu me mim meu minha meus minhas voce vc voces seu sua seus suas ele ela eles elas lhe nos " +
      "isso isto esse essa este esta aquele aquela ai aqui la ja tambem mais muito muita bem so " +
      "ao aos como qual quais quando onde porque pq por que oque o que e ou mas entao tipo " +
      "ta to tou estou esta estao sou ser foi era tem tenho temos ter fazer faco faz pode posso " +
      "consigo dar sobre ola oi bom boa dia tarde noite favor ajuda queria quero gostaria saber " +
      "algum alguma alguem coisa coisas gente nao sim filho filha crianca pessoa"
    )
      .split(" ")
      .reduce(function (m, w) {
        m[w] = 1;
        return m;
      }, {});
    // palavras que importam mesmo sendo "comuns" em outro contexto
    ["nao", "filho", "filha", "crianca", "pessoa", "noite", "dia", "ajuda"].forEach(function (w) {
      delete PARADAS[w];
    });
    ["nao", "ajuda"].forEach(function (w) {
      PARADAS[w] = 1;
    });

    function normalizar(t) {
      return (t || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    function raiz(w) {
      if (w.length > 5 && /coes$/.test(w)) return w.slice(0, -4) + "cao";
      if (w.length > 5 && /oes$/.test(w)) return w.slice(0, -3) + "ao";
      if (w.length > 4 && /s$/.test(w)) return w.slice(0, -1);
      return w;
    }
    var SIN = {};
    function sinonimos(lista) {
      lista.forEach(function (grupo) {
        var base = grupo[0];
        grupo.forEach(function (w) {
          SIN[raiz(normalizar(w))] = base;
        });
      });
    }
    function lev(a, b, max) {
      if (Math.abs(a.length - b.length) > max) return max + 1;
      var prev = [],
        cur,
        i,
        j;
      for (j = 0; j <= b.length; j++) prev[j] = j;
      for (i = 1; i <= a.length; i++) {
        cur = [i];
        var menor = i;
        for (j = 1; j <= b.length; j++) {
          var custo = a[i - 1] === b[j - 1] ? 0 : 1;
          cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + custo);
          if (cur[j] < menor) menor = cur[j];
        }
        if (menor > max) return max + 1;
        prev = cur;
      }
      return prev[b.length];
    }
    var VOCAB = {},
      VOCAB_LISTA = [],
      CACHE = {};
    function corrigir(w) {
      if (VOCAB[w] || w.length < 4) return w;
      if (CACHE[w] !== void 0) return CACHE[w];
      var max = w.length <= 5 ? 1 : 2,
        melhor = w,
        dist = max + 1;
      for (var k = 0; k < VOCAB_LISTA.length; k++) {
        var v = VOCAB_LISTA[k];
        if (v.length < 4) continue;
        var d = lev(w, v, max);
        if (d < dist || (d === dist && v[0] === w[0] && melhor[0] !== w[0])) {
          dist = d;
          melhor = v;
        }
        if (dist === 0) break;
      }
      CACHE[w] = dist <= max ? melhor : w;
      return CACHE[w];
    }
    function termos(t, corrige) {
      var saida = [];
      normalizar(t)
        .split(" ")
        .forEach(function (w) {
          if (!w || PARADAS[w]) return;
          w = raiz(w);
          if (SIN[w]) w = SIN[w];
          else if (corrige) {
            var c = corrigir(w);
            w = SIN[c] || c;
          }
          if (!PARADAS[w] && saida.indexOf(w) < 0) saida.push(w);
        });
      return saida;
    }
    function trigramas(t) {
      var s = "  " + normalizar(t) + " ",
        m = {};
      for (var i = 0; i < s.length - 2; i++) m[s.slice(i, i + 3)] = 1;
      return m;
    }
    function dice(a, b) {
      var n = 0,
        na = 0,
        nb = 0,
        k;
      for (k in a) {
        na++;
        if (b[k]) n++;
      }
      for (k in b) nb++;
      return na + nb ? (2 * n) / (na + nb) : 0;
    }

    var BASE = [],
      IDF = {};
    function preparar(base, listaSinonimos) {
      sinonimos(listaSinonimos);
      BASE = base.map(function (e) {
        return {
          id: e.id,
          tema: e.tema,
          perguntas: e.perguntas,
          resposta: e.resposta,
          links: e.links,
          sugestoes: e.sugestoes,
          variantes: e.perguntas.map(function (p) {
            return { termos: termos(p, !1), tri: trigramas(p) };
          }),
        };
      });
      var df = {};
      BASE.forEach(function (e) {
        var vistos = {};
        e.variantes.forEach(function (v) {
          v.termos.forEach(function (w) {
            vistos[w] = 1;
            if (!VOCAB[w]) {
              VOCAB[w] = 1;
              VOCAB_LISTA.push(w);
            }
          });
        });
        Object.keys(vistos).forEach(function (w) {
          df[w] = (df[w] || 0) + 1;
        });
      });
      Object.keys(SIN).forEach(function (w) {
        if (!VOCAB[w]) {
          VOCAB[w] = 1;
          VOCAB_LISTA.push(w);
        }
      });
      var n = BASE.length;
      Object.keys(df).forEach(function (w) {
        IDF[w] = Math.log(1 + n / df[w]);
      });
    }
    function peso(w) {
      return IDF[w] || Math.log(1 + BASE.length);
    }
    function pontuar(q) {
      var qt = termos(q, !0),
        qtri = trigramas(q),
        somaQ = qt.reduce(function (s, w) {
          return s + peso(w);
        }, 0);
      return BASE.map(function (e) {
        var melhor = 0;
        e.variantes.forEach(function (v) {
          var comum = 0,
            somaV = 0;
          v.termos.forEach(function (w) {
            somaV += peso(w);
            if (qt.indexOf(w) >= 0) comum += peso(w);
          });
          var cos = somaQ && somaV ? comum / Math.sqrt(somaQ * somaV) : 0,
            // palavras da pergunta que a base não cobre puxam a nota para baixo
            cobertura = somaQ ? comum / somaQ : 0,
            pts = 0.82 * cos * (0.45 + 0.55 * cobertura) + 0.18 * dice(qtri, v.tri);
          if (pts > melhor) melhor = pts;
        });
        return { e: e, pts: melhor };
      }).sort(function (a, b) {
        return b.pts - a.pts;
      });
    }
    return {
      preparar: preparar,
      termos: termos,
      buscar: function (q) {
        var r = pontuar(q);
        return { melhor: r[0], lista: r.slice(0, 4) };
      },
    };
  })();
