  // ---------- Banco de dados (Supabase) ----------
  // Só liga quando prototipo/config.js tem a URL e a chave. Sem elas, o protótipo
  // funciona como antes, com tudo na memória da página.
  var zBanco = (() => {
    let cfg = window.zEloBanco || {},
      sb = cfg.url && cfg.chave && window.supabase ? window.supabase.createClient(cfg.url, cfg.chave) : null,
      uid = null,
      erroTexto = (e) => {
        let m = ((e && e.message) || "").toLowerCase();
        if (m.includes("invalid login")) return "E-mail ou senha n\xE3o conferem.";
        if (m.includes("already registered") || m.includes("already been registered")) return "J\xE1 existe uma conta com este e-mail. Tente entrar.";
        if (m.includes("email not confirmed")) return "Falta confirmar o e-mail. Abra o link que enviamos para voc\xEA.";
        if (m.includes("password")) return "A senha precisa ter pelo menos 6 caracteres.";
        if (m.includes("fetch") || m.includes("network")) return "Sem conex\xE3o com o servidor. Confira a internet e tente de novo.";
        return "N\xE3o deu certo agora. Tente de novo em instantes.";
      },
      quando = (iso) => {
        let min = Math.round((Date.now() - new Date(iso)) / 6e4);
        if (min < 2) return "agora";
        if (min < 60) return "h\xE1 " + min + " minutos";
        if (min < 1440) return "h\xE1 " + Math.round(min / 60) + (min < 120 ? " hora" : " horas");
        let d = new Date(iso);
        return "em " + d.getDate() + "/" + (d.getMonth() + 1);
      },
      // Em caso de falha ao gravar, o app continua funcionando e a gente só avisa no console
      grava = (p) => p.then((r) => (r && r.error && console.warn("zElo banco:", r.error.message), r)).catch((e) => console.warn("zElo banco:", e.message));
    return {
      ativo: !!sb,
      async entrar(email, senha) {
        let { data, error } = await sb.auth.signInWithPassword({ email, password: senha });
        if (error) throw new Error(erroTexto(error));
        uid = data.user.id;
        return data.user;
      },
      async criarConta(email, senha, nome) {
        let { data, error } = await sb.auth.signUp({ email, password: senha, options: { data: { nome } } });
        if (error) throw new Error(erroTexto(error));
        if (!data.session) throw new Error("Conta criada. Abra o link que enviamos para o seu e-mail e depois entre.");
        uid = data.user.id;
        return data.user;
      },
      async esqueci(email) {
        let { error } = await sb.auth.resetPasswordForEmail(email);
        if (error) throw new Error(erroTexto(error));
      },
      sair() {
        uid = null;
        return sb ? grava(sb.auth.signOut()) : null;
      },
      async carregar() {
        if (!uid) return null;
        let [pf, ag, tp, rs] = await Promise.all([
          sb.from("perfis").select("*").eq("id", uid).maybeSingle(),
          sb.from("agendamentos").select("*").eq("dono", uid),
          sb.from("topicos").select("*").order("criado_em", { ascending: !1 }),
          sb.from("respostas").select("*").order("criado_em", { ascending: !0 }),
        ]);
        let falha = [pf, ag, tp, rs].find((x) => x.error);
        if (falha) console.warn("zElo banco:", falha.error.message);
        return {
          perfil: pf.data || null,
          agenda: (ag.data || []).map((x) => ({ ...x.dados, id: x.id, profId: x.prof_id, diaId: x.dia, hora: x.hora, status: x.status, familia: "voce" })),
          topicos: (tp.data || []).map((x) => ({ ...x.dados, id: x.id, autorId: x.autor, quando: quando(x.criado_em) })),
          respostas: (rs.data || []).map((x) => ({ ...x.dados, id: x.id, topicoId: x.topico_id, autorId: x.autor, quando: quando(x.criado_em) })),
        };
      },
      salvarPerfil(nome, papel, dados) {
        if (!uid) return;
        return grava(sb.from("perfis").upsert({ id: uid, nome: nome || "", papel: papel || "responsavel", dados, atualizado_em: new Date().toISOString() }));
      },
      salvarAgenda(lista) {
        if (!uid || !lista.length) return;
        return grava(
          sb.from("agendamentos").upsert(
            lista.map((f) => {
              let { prof, dia, ...resto } = f;
              return { id: f.id, dono: uid, prof_id: f.profId, dia: f.diaId, hora: f.hora, status: f.status, dados: { ...resto, profNome: prof && prof.nome }, atualizado_em: new Date().toISOString() };
            }),
          ),
        );
      },
      novoTopico(t) {
        if (!uid) return;
        let { respostas, meuApoio, meuAjudou, ...dados } = t;
        return grava(sb.from("topicos").insert({ id: t.id, autor: uid, dados: { ...dados, etiquetas: (dados.etiquetas || []).filter((x) => x !== "Novo"), quando: null } }));
      },
      novaResposta(topicoId, r) {
        if (!uid) return;
        let { meuApoio, ...dados } = r;
        return grava(sb.from("respostas").insert({ id: r.id, topico_id: topicoId, autor: uid, dados: { ...dados, quando: null } }));
      },
      guardarPerguntaAna(texto) {
        if (!uid) return;
        return grava(sb.from("perguntas_ana").insert({ autor: uid, texto: texto.slice(0, 300) }));
      },
      get uid() {
        return uid;
      },
    };
  })();
