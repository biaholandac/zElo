  var P = N(yt()),
    // Nome usado nas telas -> ícone da biblioteca Solar (codigo/icones-solar.js)
    OS = Object.assign({}, zSolar, { mensagem: zSolar.chat, dica: zSolar.orientacoes, elo: zSolar.verificado });
  // Ícone Solar: traço no uso normal, cheio (cheio: true) no item atual do menu.
  // É sempre decorativo: quem usa o ícone põe uma palavra ao lado ou um nome acessível no botão.
  function la({ n: a, size: o = 20, cheio: c }) {
    let e = OS[a];
    if (!e) return null;
    return (0, P.jsx)("svg", {
      className: "ic",
      width: o,
      height: o,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      dangerouslySetInnerHTML: { __html: e[c ? 1 : 0] },
    });
  }
  // Botão. Sem "sec" é a ação principal (cheio); com "sec" é de contorno.
  // Regra: um só botão cheio por tela. "ocupado" trava o botão e troca o texto ("Salvando…").
  function ia({
    children: a,
    sec: o,
    peq: e,
    icone: t,
    fim: n,
    className: l = "",
    ocupado: oc,
    textoOcupado: to,
    ...s
  }) {
    let i = ["btn", o ? "btn--sec" : "", e ? "btn--peq" : "", oc ? "btn--ocupado" : "", l]
      .filter(Boolean)
      .join(" ");
    return (0, P.jsxs)("button", {
      type: "button",
      className: i,
      ...s,
      ...(oc ? { disabled: !0, "aria-busy": "true" } : {}),
      children: oc
        ? [(0, P.jsx)("span", { className: "giro", "aria-hidden": "true" }, "g"), to || "Aguarde…"]
        : [
            t && (0, P.jsx)(la, { n: t, size: 20 }, "i"),
            a,
            n && (0, P.jsx)(la, { n, size: 20 }, "f"),
          ],
    });
  }
  // Ação com retorno: trava o botão, mostra o texto de espera e só depois conclui.
  function zUseAcao(ms = 700) {
    let [oc, setOc] = (0, L.useState)(!1),
      t = (0, L.useRef)(null);
    (0, L.useEffect)(() => () => clearTimeout(t.current), []);
    return [
      oc,
      (fn) => {
        if (oc) return;
        setOc(!0);
        t.current = setTimeout(() => {
          setOc(!1);
          fn();
        }, ms);
      },
    ];
  }
  // "‹ Voltar" para as telas de entrada. Nas outras, a volta fica na barra do topo.
  function Ye({ onClick: a, children: o = "Voltar" }) {
    return (0, P.jsxs)("button", {
      type: "button",
      className: "link-voltar",
      onClick: a,
      children: [(0, P.jsx)(la, { n: "voltar", size: 20 }), o],
    });
  }
  function Do({ tipo: a = "info", palavra: o, children: e, ...t }) {
    let n = {
        info: ["informacao", ""],
        ok: ["confirmar", ""],
        aviso: ["atencao", "Aten\xE7\xE3o:"],
        erro: ["fechar", "Erro:"],
      },
      [l, s] = n[a],
      w = o || s;
    return (0, P.jsxs)("div", {
      className: `alerta alerta--${a}`,
      role: a === "erro" ? "alert" : "status",
      ...t,
      children: [
        (0, P.jsx)(la, { n: l, size: 20 }),
        (0, P.jsxs)("p", {
          children: [w && (0, P.jsx)("b", { children: w }), w ? " " : "", e],
        }),
      ],
    });
  }
  // Etiqueta neutra para categorias (área, assunto). Sem cor.
  function Bo({ children: a, icone: e }) {
    return (0, P.jsxs)("span", {
      className: "etiqueta",
      children: [e && (0, P.jsx)(la, { n: e, size: 16 }), a],
    });
  }
  // Status: etiqueta neutra com ponto colorido. Cada status tem sempre a mesma palavra, cor e ícone.
  var zStatusTipos = {
    confirmado: ["Confirmado", "verde", "confirmar"],
    aguardando: ["Aguardando", "ambar", "relogio"],
    cancelado: ["Cancelado", "vermelho", "cancelado"],
    novo: ["Novo", "azul", "novo"],
    hoje: ["Atende hoje", "azul", "calendario"],
    resolvido: ["Resolvido", "verde", "confirmar"],
    encerrado: ["Encerrado", "cinza", "historico"],
    realizado: ["Realizado", "azul", "historico"],
  };
  function zStatus({ s: k, extra: x }) {
    let [txt, cor, ic] = zStatusTipos[k];
    return (0, P.jsxs)("span", {
      className: "status status--" + cor,
      children: [
        (0, P.jsx)("span", { className: "status-ponto", "aria-hidden": "true" }),
        (0, P.jsx)(la, { n: ic, size: 16 }),
        txt,
        x && (0, P.jsx)("span", { className: "status-extra", children: x }),
      ],
    });
  }
  // Selo de profissional verificado (ícone de selo, não de link)
  function zSelo({ nome: n }) {
    return (0, P.jsxs)("span", {
      className: "selo",
      children: [(0, P.jsx)(la, { n: "verificado", size: 16 }), n ? "Verificado por " + n : "Verificado"],
    });
  }
  // Janela por cima da tela, para ações rápidas. Esc ou o X fecham. O foco fica dentro dela.
  function zJanela({ titulo: tt, sub: sb, fechar: f, children: c, larga: lg, rodape: rp }) {
    let ref = (0, L.useRef)(null),
      idt = (0, L.useId)();
    (0, L.useEffect)(() => {
      let antes = document.activeElement,
        el = ref.current;
      requestAnimationFrame(() => el && el.querySelector("h2")?.focus());
      let tecla = (e) => {
        if (e.key === "Escape") return (e.stopPropagation(), f());
        if (e.key !== "Tab" || !el) return;
        let fs = [...el.querySelectorAll('button:not([disabled]), input, select, textarea, [href], [tabindex="0"]')].filter((x) => x.offsetParent !== null);
        if (!fs.length) return;
        let pri = fs[0],
          ult = fs[fs.length - 1];
        e.shiftKey && document.activeElement === pri
          ? (e.preventDefault(), ult.focus())
          : !e.shiftKey && document.activeElement === ult && (e.preventDefault(), pri.focus());
      };
      document.addEventListener("keydown", tecla);
      document.documentElement.classList.add("com-janela");
      return () => {
        document.removeEventListener("keydown", tecla);
        document.documentElement.classList.remove("com-janela");
        antes && antes.focus && antes.focus({ preventScroll: !0 });
      };
    }, []);
    // Vai direto no body, para cobrir a tela inteira mesmo dentro de um bloco com animação
    return df().createPortal((0, P.jsx)("div", {
      className: "janela-veu",
      onMouseDown: (e) => e.target === e.currentTarget && f(),
      children: (0, P.jsxs)("div", {
        ref,
        className: "janela" + (lg ? " janela--larga" : ""),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": idt,
        children: [
          (0, P.jsxs)("div", {
            className: "janela-topo",
            children: [
              (0, P.jsxs)("div", {
                children: [
                  (0, P.jsx)("h2", { id: idt, tabIndex: -1, children: tt }),
                  sb && (0, P.jsx)("p", { className: "apoio", children: sb }),
                ],
              }),
              (0, P.jsx)("button", {
                type: "button",
                className: "janela-fechar",
                onClick: f,
                "aria-label": "Fechar",
                children: (0, P.jsx)(la, { n: "fechar", size: 24 }),
              }),
            ],
          }),
          (0, P.jsx)("div", { className: "janela-corpo", children: c }),
          rp && (0, P.jsx)("div", { className: "janela-rodape", children: rp }),
        ],
      }),
    }), document.body);
  }
  // Esqueleto no formato do conteúdo, mostrado por um instante ao trocar de tela
  function zEsqueleto({ tipo: t }) {
    let b = (cl, k) => (0, P.jsx)("span", { className: "esq " + cl }, k),
      linhas = (n) => Array.from({ length: n }, (_, k) => (0, P.jsxs)("div", { className: "esq-linha", children: [b("esq-t", 1), b("esq-m", 2)] }, k)),
      cartoes = (n) => (0, P.jsx)("div", { className: "esq-grade", children: Array.from({ length: n }, (_, k) => (0, P.jsxs)("div", { className: "esq-cartao", children: [b("esq-av", 1), b("esq-t", 2), b("esq-m", 3), b("esq-m esq-curto", 4)] }, k)) });
    return (0, P.jsxs)("div", {
      className: "esqueleto",
      role: "status",
      "aria-label": "Carregando",
      children: [
        b("esq-h1", "h"),
        t === "inicio" && (0, P.jsx)("div", { className: "esq-faixa", children: Array.from({ length: 3 }, (_, k) => b("esq-num", k)) }),
        t === "inicio" && b("esq-semana", "s"),
        (t === "grade" || t === "inicio") && cartoes(t === "inicio" ? 3 : 6),
        t === "lista" && (0, P.jsx)("div", { className: "esq-lista", children: linhas(6) }),
        t === "texto" && (0, P.jsx)("div", { className: "esq-lista", children: linhas(3) }),
      ],
    });
  }
  var Za = L2.default.forwardRef(function (
    {
      id: o,
      rotulo: e,
      ajuda: t,
      erro: n,
      como: l = "input",
      tipo: s = "text",
      children: i,
      ...c
    },
    m,
  ) {
    let I = l,
      f =
        [t ? `${o}-ajuda` : null, n ? `${o}-erro` : null]
          .filter(Boolean)
          .join(" ") || void 0,
      u = (0, P.jsx)(I, {
        ref: m,
        id: o,
        className: "campo-entrada",
        "aria-invalid": n ? "true" : void 0,
        "aria-describedby": f,
        ...(l === "input" ? { type: s } : {}),
        ...c,
        children: i,
      });
    return (0, P.jsxs)("div", {
      className: "campo",
      "data-erro": n ? "true" : "false",
      children: [
        (0, P.jsx)("label", {
          className: "campo-rotulo",
          htmlFor: o,
          children: e,
        }),
        t &&
          (0, P.jsx)("span", {
            id: `${o}-ajuda`,
            className: "campo-ajuda apoio",
            children: t,
          }),
        l === "select"
          ? (0, P.jsxs)("div", {
              className: "campo-seletor",
              children: [u, (0, P.jsx)(la, { n: "avancar", size: 20 })],
            })
          : u,
        n &&
          (0, P.jsxs)("p", {
            id: `${o}-erro`,
            className: "erro-msg",
            role: "alert",
            children: [
              (0, P.jsx)(la, { n: "atencao", size: 20 }),
              (0, P.jsx)("span", { children: n }),
            ],
          }),
      ],
    });
  });
  // Lista de opções. "depois" põe um campo logo abaixo da opção que o abre (ex.: Outra).
  function Tm({ itens: a, valor: o, onChange: e, multi: t, rotulo: n, depois: dp }) {
    let comIcone = a.some((x) => x.ic);
    let l = (s) => (t ? o.includes(s) : o === s);
    return (0, P.jsx)("div", {
      className: comIcone ? "opcoes opcoes--cartoes" : "opcoes",
      role: t ? "group" : "radiogroup",
      "aria-label": n,
      children: a.map((s) => {
        let i = l(s.id),
          bt = (0, P.jsxs)(
          "button",
          {
            type: "button",
            className: "opcao",
            onClick: () => e(s.id),
            ...(t
              ? { "aria-pressed": i }
              : { role: "radio", "aria-checked": i }),
            ...(s.ic ? { className: "opcao opcao--cartao" } : {}),
            children: [
              s.ic && (0, P.jsx)("span", { className: "opcao-icone", "aria-hidden": "true", children: (0, P.jsx)(la, { n: s.ic, size: 24 }) }),
              (0, P.jsxs)("span", {
                className: "opcao-texto-livre",
                children: [
                  s.rotulo,
                  s.sub &&
                    (0, P.jsx)("span", {
                      className: "opcao-sub",
                      children: s.sub,
                    }),
                ],
              }),
              (0, P.jsx)("span", {
                className: `opcao-marca${t ? " opcao-marca--q" : ""}`,
                "aria-hidden": "true",
                children: i && (0, P.jsx)(la, { n: "confirmar", size: 20, cheio: !0 }),
              }),
            ],
          },
          s.id,
        );
        return dp && dp[s.id] ? (0, P.jsxs)(L.default.Fragment, { children: [bt, dp[s.id]] }, s.id) : bt;
      }),
    });
  }
  function Or() {
    requestAnimationFrame(() => {
      document
        .querySelector(
          'main [aria-invalid="true"], main [data-erro="true"] button',
        )
        ?.focus();
    });
  }
  var Em = [
      { id: "fisica", rotulo: "Defici\xEAncia f\xEDsica", sub: "Les\xE3o medular, amputa\xE7\xE3o, m\xE1 forma\xE7\xE3o, distrofia" },
      { id: "pc", rotulo: "Paralisia cerebral" },
      { id: "intelectual", rotulo: "Defici\xEAncia intelectual" },
      { id: "down", rotulo: "S\xEDndrome de Down" },
      { id: "tea", rotulo: "Transtorno do espectro autista (TEA)" },
      { id: "tdah", rotulo: "TDAH" },
      { id: "visual", rotulo: "Defici\xEAncia visual", sub: "Cegueira ou baixa vis\xE3o" },
      { id: "auditiva", rotulo: "Defici\xEAncia auditiva", sub: "Surdez ou perda auditiva" },
      { id: "surdocegueira", rotulo: "Surdocegueira" },
      { id: "psicossocial", rotulo: "Defici\xEAncia psicossocial", sub: "Esquizofrenia, transtorno bipolar e outros transtornos mentais graves" },
      { id: "zika", rotulo: "S\xEDndrome cong\xEAnita do Zika", sub: "Microcefalia" },
      { id: "rara", rotulo: "Doen\xE7a rara", sub: "AME, osteog\xEAnese imperfeita, s\xEDndromes gen\xE9ticas" },
      { id: "nanismo", rotulo: "Nanismo" },
      { id: "outra", rotulo: "Outra", sub: "Escreva qual \xE9" },
      { id: "nao-sei", rotulo: "Ainda n\xE3o sei" },
    ],
    El = [
      {
        id: "terapias",
        ic: "saude",
        rotulo: "Terapias e reabilita\xE7\xE3o",
        sub: "Terapia ocupacional, fisioterapia, fonoaudiologia",
      },
      {
        id: "emocional",
        ic: "apoio",
        rotulo: "Sa\xFAde emocional",
        sub: "Ansiedade, crises e mudan\xE7as de comportamento",
      },
      {
        id: "rotina",
        ic: "sono",
        rotulo: "Sono, alimenta\xE7\xE3o e rotina",
        sub: "Noites, refei\xE7\xF5es e manh\xE3s",
      },
      {
        id: "comunicacao",
        ic: "dialogo",
        rotulo: "Comunica\xE7\xE3o e fala",
        sub: "Entender e ser entendido",
      },
      {
        id: "mobilidade",
        ic: "movimento",
        rotulo: "Movimento e dor",
        sub: "Postura, mobilidade e desconforto",
      },
      {
        id: "cuidador",
        ic: "cuidado",
        rotulo: "Sa\xFAde de quem cuida",
        sub: "Cansa\xE7o, pausas e apoio",
      },
    ],
    Lm = [
      { id: "mobilidade", rotulo: "Usa cadeira de rodas ou andador" },
      { id: "fala", rotulo: "N\xE3o fala ou fala pouco" },
      { id: "sensorial", rotulo: "\xC9 sens\xEDvel a barulho, luz ou toque" },
      { id: "crises", rotulo: "Tem crises de comportamento (choro forte, agita\xE7\xE3o, agressividade)" },
      { id: "convulsoes", rotulo: "Tem convuls\xF5es (crises epil\xE9pticas)" },
      { id: "engolir", rotulo: "Tem dificuldade para engolir ou engasga" },
      { id: "remedio", rotulo: "Toma rem\xE9dio todos os dias" },
      { id: "sono", rotulo: "Dorme poucas horas" },
      { id: "nenhuma", rotulo: "Nenhuma dessas" },
    ],
    wm = [
      {
        id: "responsavel",
        rotulo: "Eu sou o respons\xE1vel",
        sub: "Cuido de uma pessoa com defici\xEAncia.",
      },
      {
        id: "pcd",
        rotulo: "Eu sou a pessoa com defici\xEAncia",
        sub: "Uso o zElo por conta pr\xF3pria.",
      },
    ],
    w2 = Object.fromEntries(El.map((a) => [a.id, a.rotulo])),
    N2 = {
      terapias: "Terapias",
      emocional: "Emocional",
      rotina: "Rotina",
      comunicacao: "Comunica\xE7\xE3o",
      mobilidade: "Movimento",
      cuidador: "Cuidador",
    },
    Nm = [
      {
        id: "t6",
        titulo: "Crises de choro no fim da tarde: como voc\xEAs lidam?",
        autor: "Eduarda",
        cidade: "Recife",
        quando: "h\xE1 30 minutos",
        etiquetas: ["Novo", "Emocional", "D\xFAvida"],
        dir: "emocional",
        apoio: 6,
        ajudou: 1,
        corpo:
          "Minha filha tem 7 anos e tem TEA. Quase todo dia, perto das cinco da tarde, ela entra em crise: chora alto, se joga no ch\xE3o e n\xE3o aceita colo. Eu fico perdida e acabo chorando junto. Algu\xE9m passa por isso? O que ajuda na hora?",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "h\xE1 20 minutos",
            apoio: 4,
            texto:
              "Aqui era na volta da escola. Ajudou deixar um cantinho quieto pronto, com a manta e os fones dela, e falar pouco na hora.",
          },
          {
            id: "r2",
            autor: "Dra. Beatriz Nogueira",
            cidade: "Recife",
            quando: "h\xE1 10 minutos",
            apoio: 8,
            profissional: !0,
            texto:
              "Como psic\xF3loga, sugiro observar o que vem antes: fome, cansa\xE7o, barulho, mudan\xE7a de atividade. Na hora, menos palavras e um lugar calmo. E voc\xEA tamb\xE9m merece apoio: se quiser, marque uma conversa em Atendimentos.",
          },
        ],
      },
      {
        id: "t7",
        titulo: "Meu filho n\xE3o fala: algu\xE9m usa pranchas com figuras?",
        autor: "Rog\xE9rio",
        cidade: "Camaragibe",
        quando: "h\xE1 2 dias",
        etiquetas: ["Comunica\xE7\xE3o", "D\xFAvida"],
        dir: "comunicacao",
        apoio: 5,
        ajudou: 2,
        corpo:
          "Ele tem 5 anos e se comunica apontando e puxando a gente pela m\xE3o. A fono falou em prancha de comunica\xE7\xE3o. Algu\xE9m j\xE1 usa em casa? Como come\xE7ou?",
        respostas: [
          {
            id: "r1",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 2 dias",
            apoio: 3,
            texto:
              "Come\xE7amos com quatro fotos: \xE1gua, comida, banheiro e brincar. Colamos na geladeira. Em um m\xEAs ele j\xE1 apontava sozinho.",
          },
        ],
      },
      {
        id: "t1",
        titulo: "Meu filho dorme pouco: o que funcionou a\xED?",
        autor: "Marina",
        cidade: "Recife",
        quando: "h\xE1 2 horas",
        etiquetas: ["Novo", "Rotina", "D\xFAvida"],
        dir: "rotina",
        apoio: 9,
        ajudou: 2,
        corpo:
          "Meu filho tem 9 anos e tem paralisia cerebral. H\xE1 tr\xEAs semanas ele acorda v\xE1rias vezes de madrugada e passa o dia irritado. J\xE1 diminu\xED a luz do quarto, mas n\xE3o mudou. Algu\xE9m passou por isso? O que ajudou?",
        respostas: [
          {
            id: "r1",
            autor: "Josenildo",
            cidade: "Olinda",
            quando: "h\xE1 1 hora",
            apoio: 5,
            texto:
              "Aqui ajudou manter o mesmo hor\xE1rio todos os dias, inclusive no fim de semana. Levou umas duas semanas para notar diferen\xE7a.",
          },
          {
            id: "r2",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 1 hora",
            apoio: 3,
            texto:
              "Tirei a tela uma hora antes de dormir e coloquei uma m\xFAsica baixa, sempre a mesma.",
          },
          {
            id: "r3",
            autor: "Ana Paula",
            cidade: "Paulista",
            quando: "h\xE1 40 minutos",
            apoio: 7,
            texto:
              "Vale levar ao m\xE9dico que acompanha. Aqui o sono ruim vinha de um desconforto que a gente n\xE3o via.",
          },
          {
            id: "r4",
            autor: "Dra. Beatriz Nogueira",
            cidade: "Recife",
            quando: "h\xE1 20 minutos",
            apoio: 6,
            profissional: !0,
            texto:
              "Como psic\xF3loga, sugiro anotar por duas semanas a hora de dormir, os despertares e o que aconteceu antes. Esse registro ajuda muito numa consulta. Se o sono n\xE3o melhorar, procure atendimento.",
          },
        ],
      },
      {
        id: "t2",
        titulo: "Terapeuta ocupacional pelo SUS: quanto tempo?",
        autor: "Josenildo",
        cidade: "Olinda",
        quando: "ontem",
        etiquetas: ["Sa\xFAde", "D\xFAvida"],
        dir: "terapias",
        apoio: 4,
        ajudou: 0,
        corpo:
          "Recebi o encaminhamento da unidade de sa\xFAde h\xE1 dois meses e ainda n\xE3o fui chamado. Algu\xE9m sabe se \xE9 normal esperar tanto? Enquanto isso, o que d\xE1 para fazer em casa?",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "ontem",
            apoio: 2,
            texto:
              "Aqui na minha regi\xE3o tamb\xE9m foram uns tr\xEAs meses. Pergunte na unidade em que posi\xE7\xE3o voc\xEA est\xE1 na fila.",
          },
          {
            id: "r2",
            autor: "Eduarda",
            cidade: "Recife",
            quando: "ontem",
            apoio: 4,
            texto:
              "D\xE1 para ligar na unidade e pedir o andamento. Tenha em m\xE3os o n\xFAmero do encaminhamento.",
          },
          {
            id: "r3",
            autor: "Dra. Helena Cavalcanti",
            cidade: "Recife",
            quando: "h\xE1 8 horas",
            apoio: 6,
            profissional: !0,
            texto:
              "Como terapeuta ocupacional, posso orientar algumas atividades de rotina para fazer em casa enquanto voc\xEA espera. Veja meus hor\xE1rios em Atendimentos.",
          },
        ],
      },
      {
        id: "t3",
        titulo: "Rotina de manh\xE3 que funcionou aqui em casa",
        autor: "Carla",
        cidade: "Jaboat\xE3o",
        quando: "h\xE1 3 dias",
        etiquetas: ["Resolvido", "Experi\xEAncia"],
        dir: "rotina",
        apoio: 12,
        ajudou: 5,
        resolvido: !0,
        corpo:
          "As manh\xE3s eram a parte mais dif\xEDcil. O que ajudou: separar a roupa na noite anterior, uma sequ\xEAncia de tr\xEAs fotos do que vem depois do caf\xE9 e dez minutos de sil\xEAncio antes de sair. N\xE3o resolve tudo, mas o clima em casa mudou.",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "h\xE1 2 dias",
            apoio: 2,
            texto:
              "Vou testar as tr\xEAs fotos amanh\xE3. Obrigada por detalhar.",
          },
        ],
      },
      {
        id: "t4",
        titulo: "Engasga com l\xEDquidos: j\xE1 passaram por isso?",
        autor: "Rog\xE9rio",
        cidade: "Camaragibe",
        quando: "h\xE1 5 dias",
        etiquetas: ["Sa\xFAde", "D\xFAvida"],
        dir: "terapias",
        apoio: 3,
        ajudou: 0,
        corpo:
          "Meu filho engasga com \xE1gua e suco quase toda refei\xE7\xE3o. A gente engrossa um pouco o l\xEDquido, mas fico com medo. Algu\xE9m j\xE1 fez avalia\xE7\xE3o com fonoaudi\xF3logo?",
        respostas: [
          {
            id: "r1",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 4 dias",
            apoio: 4,
            texto:
              "Aqui fizemos a avalia\xE7\xE3o e mudou a forma de oferecer. Vale marcar logo.",
          },
          {
            id: "r2",
            autor: "Dr. Rafael Tavares",
            cidade: "Recife",
            quando: "h\xE1 4 dias",
            apoio: 9,
            profissional: !0,
            texto:
              "Engasgos frequentes pedem avalia\xE7\xE3o de um fonoaudi\xF3logo. At\xE9 l\xE1, ofere\xE7a com a pessoa sentada, de costas retas, em pequenas por\xE7\xF5es. Se houver tosse com febre, procure atendimento m\xE9dico.",
          },
        ],
      },
      {
        id: "t5",
        titulo: "Quem cuida tamb\xE9m precisa de pausa: o que voc\xEAs fazem?",
        autor: "Ana Paula",
        cidade: "Paulista",
        quando: "h\xE1 1 semana",
        etiquetas: ["Cuidador", "Experi\xEAncia"],
        dir: "cuidador",
        apoio: 15,
        ajudou: 3,
        corpo:
          "Faz meses que n\xE3o tenho uma tarde s\xF3 para mim. Queria ouvir o que funciona para voc\xEAs, mesmo que seja pouco: meia hora, uma caminhada, uma liga\xE7\xE3o.",
        respostas: [
          {
            id: "r1",
            autor: "Eduarda",
            cidade: "Recife",
            quando: "h\xE1 6 dias",
            apoio: 5,
            texto:
              "Combinei com minha irm\xE3 uma hora fixa por semana. Pequeno, mas \xE9 meu.",
          },
        ],
      },
    ],
    Rr = [
      "Fisioterapia",
      "Fonoaudiologia",
      "Nutri\xE7\xE3o",
      "Psicologia",
      "Terapia ocupacional",
      "Enfermagem",
    ],
    zr = [
      {
        id: "d8",
        titulo: "Quando vem uma crise de comportamento",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "emocional",
        secoes: [
          [
            "Antes: repare no que vem antes",
            "Fome, sono, barulho, troca de atividade. Anotar por uma semana ajuda a ver o padr\xE3o e a se antecipar.",
          ],
          [
            "Durante: menos palavras, mais calma",
            "Fale pouco e devagar. Leve a pessoa para um lugar quieto e tire o que pode machucar. N\xE3o \xE9 hora de ensinar nem de brigar.",
          ],
          [
            "Depois: cuide de voc\xEA tamb\xE9m",
            "Respire, beba \xE1gua, pe\xE7a ajuda a algu\xE9m. Se as crises aumentarem, converse com um profissional em Atendimentos.",
          ],
        ],
      },
      {
        id: "d9",
        titulo: "Pranchas com figuras para se comunicar",
        autor: "Dr. Rafael Tavares",
        area: "Fonoaudiologia",
        tempo: "1 min",
        dir: "comunicacao",
        secoes: [
          [
            "Comece com poucas figuras",
            "Quatro ou cinco fotos do que a pessoa mais pede: \xE1gua, comida, banheiro, brincar. Deixe num lugar f\xE1cil de ver.",
          ],
          [
            "Use voc\xEA tamb\xE9m",
            "Aponte a figura enquanto fala a palavra. A pessoa aprende vendo voc\xEA usar.",
          ],
          [
            "Responda sempre",
            "Quando ela apontar, atenda logo. Assim ela entende que a prancha funciona.",
          ],
        ],
      },
      {
        id: "d1",
        titulo: "Como se preparar para uma consulta",
        autor: "Dra. Elisa Duarte",
        area: "Enfermagem",
        tempo: "1 min",
        dir: "terapias",
        secoes: [
          [
            "Anote antes",
            "Escreva o que mudou nas \xFAltimas semanas: sono, apetite, humor e crises. Datas ajudam o profissional a entender o quadro.",
          ],
          [
            "Leve a lista de rem\xE9dios",
            "Nome, dose e hor\xE1rio de cada um. Se puder, leve as caixas.",
          ],
          [
            "Fa\xE7a uma pergunta de cada vez",
            "Leve at\xE9 tr\xEAs d\xFAvidas. Pe\xE7a que repitam o que n\xE3o ficou claro e anote as respostas.",
          ],
        ],
      },
      {
        id: "d2",
        titulo: "Rotina visual para as manh\xE3s",
        autor: "Dra. Helena Cavalcanti",
        area: "Terapia ocupacional",
        tempo: "1 min",
        dir: "rotina",
        secoes: [
          [
            "Mostre o que vem depois",
            "Use tr\xEAs ou quatro fotos ou desenhos simples na ordem das tarefas: levantar, trocar de roupa, tomar caf\xE9, sair. A pessoa olha e sabe o que vem.",
          ],
          [
            "Prepare na noite anterior",
            "Separe a roupa e a mochila antes de dormir. Menos decis\xF5es de manh\xE3 deixam todo mundo com mais calma.",
          ],
          [
            "Avise antes de mudar",
            "Se o plano mudar, avise antes e mostre o que muda. Mudan\xE7a sem aviso costuma pesar mais.",
          ],
        ],
      },
      {
        id: "d3",
        titulo: "Jogos de fala para fazer na cozinha",
        autor: "Dr. Rafael Tavares",
        area: "Fonoaudiologia",
        tempo: "1 min",
        dir: "comunicacao",
        secoes: [
          [
            "Nomeie o que voc\xEA faz",
            "Fale devagar sobre o que est\xE1 fazendo: abrir, mexer, cortar, lavar. Repita as mesmas palavras em dias diferentes.",
          ],
          [
            "D\xEA duas escolhas",
            "Pergunte: \xE1gua ou suco? Espere a resposta, mesmo que seja um gesto ou um olhar. Responda com a palavra falada.",
          ],
          [
            "Pare quando cansar",
            "Cinco minutos por dia bastam. Se a pessoa se afastar, encerre sem insistir.",
          ],
        ],
      },
      {
        id: "d4",
        titulo: "Pausas curtas para quem cuida",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "cuidador",
        secoes: [
          [
            "Escolha uma pausa pequena",
            "Dez minutos sem tela, uma caminhada no quarteir\xE3o, um caf\xE9 sentado. O tamanho importa menos do que a repeti\xE7\xE3o.",
          ],
          [
            "Pe\xE7a um revezamento",
            "Combine com algu\xE9m da fam\xEDlia um hor\xE1rio fixo. Dizer o hor\xE1rio pesa menos do que pedir ajuda toda vez.",
          ],
          [
            "Procure apoio se o cansa\xE7o n\xE3o passa",
            "Cansa\xE7o que dura semanas merece conversa com um profissional. Procure a unidade de sa\xFAde ou use Atendimentos.",
          ],
        ],
      },
      {
        id: "d5",
        titulo: "Posi\xE7\xE3o para sentar durante as refei\xE7\xF5es",
        autor: "Dr. Diego Andrade",
        area: "Fisioterapia",
        tempo: "1 min",
        dir: "mobilidade",
        secoes: [
          [
            "P\xE9s apoiados",
            "Os p\xE9s devem ficar apoiados, no ch\xE3o ou em um banquinho. Isso ajuda o corpo a ficar firme e facilita engolir.",
          ],
          [
            "Mesa na altura do peito",
            "A mesa deve ficar perto da altura do peito, com os bra\xE7os apoiados. O prato fica \xE0 frente, n\xE3o ao lado.",
          ],
          [
            "Pe\xE7a avalia\xE7\xE3o presencial",
            "Cada corpo \xE9 diferente. Use estas dicas como ponto de partida e pe\xE7a orienta\xE7\xE3o a um fisioterapeuta.",
          ],
        ],
      },
      {
        id: "d6",
        titulo: "Sono: uma rotina para a noite",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "rotina",
        secoes: [
          [
            "Hor\xE1rio parecido todos os dias",
            "Dormir e acordar perto da mesma hora, inclusive no fim de semana, ajuda o corpo a aprender o ritmo.",
          ],
          [
            "Uma hora de calma",
            "Diminua luz, telas e barulho antes de dormir. Repita a mesma sequ\xEAncia: banho, pijama, m\xFAsica baixa.",
          ],
          [
            "Registre por duas semanas",
            "Anote a hora de dormir e os despertares. Se o sono n\xE3o melhora, leve o registro a um profissional.",
          ],
        ],
      },
      {
        id: "d7",
        titulo: "Sinais de dor em quem n\xE3o fala",
        autor: "Dr. Diego Andrade",
        area: "Fisioterapia",
        tempo: "1 min",
        dir: "mobilidade",
        secoes: [
          [
            "Observe o que mudou",
            "Choro, gemidos, recusa de comida, corpo mais r\xEDgido e mudan\xE7a de humor ou de postura podem indicar dor.",
          ],
          [
            "Anote quando acontece",
            "Registre a hora, o que a pessoa fazia e o que aliviou. Isso ajuda a achar a causa.",
          ],
          [
            "Avise um profissional",
            "Dor nova ou que n\xE3o passa merece avalia\xE7\xE3o. Use Atendimentos ou procure a unidade de sa\xFAde.",
          ],
        ],
      },
    ],
    At = [
      {
        id: "p1",
        nome: "Dra. Helena Cavalcanti",
        iniciais: "HC",
        area: "Terapia ocupacional",
        foco: "integra\xE7\xE3o sensorial e rotina infantil",
        registro: "CREFITO-1 28417-TO",
        onde: "Presencial na Boa Vista, Recife, ou online",
        modos: ["Presencial na Boa Vista, Recife", "Online por v\xEDdeo"],
        agora: !0,
        bio: "11 anos de atua\xE7\xE3o com crian\xE7as e adolescentes. Orienta a fam\xEDlia a organizar a rotina e a adaptar o ambiente em casa.",
        dias: ["Ter\xE7a", "Quinta", "S\xE1bado"],
        horas: ["09:00", "10:30", "14:00"],
      },
      {
        id: "p2",
        nome: "Dr. Rafael Tavares",
        iniciais: "RT",
        area: "Fonoaudiologia",
        foco: "comunica\xE7\xE3o alternativa e alimenta\xE7\xE3o",
        registro: "CRFa 4-09215",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Atua com crian\xE7as que falam pouco ou n\xE3o falam. Orienta jogos de comunica\xE7\xE3o e cuidados com a alimenta\xE7\xE3o.",
        dias: ["Segunda", "Quarta"],
        horas: ["10:30", "15:30"],
      },
      {
        id: "p3",
        nome: "Dra. Beatriz Nogueira",
        iniciais: "BN",
        area: "Psicologia",
        foco: "apoio a cuidadores e TEA",
        registro: "CRP 02/19421",
        onde: "Online por v\xEDdeo",
        agora: !1,
        bio: "Escuta fam\xEDlias em momentos de cansa\xE7o e de crise. Trabalha rotina de sono e manejo de comportamento.",
        dias: ["Ter\xE7a", "Quinta", "S\xE1bado"],
        horas: ["09:00", "14:00", "15:30"],
      },
      {
        id: "p4",
        nome: "Dr. Diego Andrade",
        iniciais: "DA",
        area: "Fisioterapia",
        foco: "neurofuncional e mobilidade",
        registro: "CREFITO-1 41266-F",
        onde: "Presencial em Olinda",
        agora: !1,
        bio: "Trabalha com paralisia cerebral, postura e transfer\xEAncias seguras. Ensina exerc\xEDcios curtos para fazer em casa.",
        dias: ["Segunda", "Quarta", "Sexta"],
        horas: ["09:00", "10:30"],
      },
      {
        id: "p5",
        nome: "Dra. Camila Rangel",
        iniciais: "CR",
        area: "Fisioterapia",
        foco: "exerc\xEDcios orientados para casa",
        registro: "CREFITO-1 39020-F",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Monta uma sequ\xEAncia simples de exerc\xEDcios com a fam\xEDlia e acompanha a evolu\xE7\xE3o por v\xEDdeo.",
        dias: ["Ter\xE7a", "Sexta"],
        horas: ["14:00", "15:30"],
      },
      {
        id: "p6",
        nome: "Dra. S\xF4nia Barreto",
        iniciais: "SB",
        area: "Fonoaudiologia",
        foco: "alimenta\xE7\xE3o e engasgos",
        registro: "CRFa 4-11873",
        onde: "Presencial em Jaboat\xE3o dos Guararapes",
        agora: !1,
        bio: "Avalia como a pessoa engole e orienta a forma de oferecer l\xEDquidos e alimentos com seguran\xE7a.",
        dias: ["Quinta", "Sexta"],
        horas: ["09:00", "10:30", "14:00"],
      },
      {
        id: "p7",
        nome: "Dr. Caio Vasconcelos",
        iniciais: "CV",
        area: "Psicologia",
        foco: "jovens e adultos com defici\xEAncia",
        registro: "CRP 02/23550",
        onde: "Presencial no Recife",
        agora: !1,
        bio: "Acompanha a pessoa com defici\xEAncia na escuta de suas pr\xF3prias quest\xF5es emocionais.",
        dias: ["Segunda", "Quarta", "S\xE1bado"],
        horas: ["10:30", "14:00"],
      },
      {
        id: "p8",
        nome: "Dra. Elisa Duarte",
        iniciais: "ED",
        area: "Enfermagem",
        foco: "cuidados no dia a dia e medica\xE7\xF5es",
        registro: "COREN-PE 612340",
        onde: "Online por v\xEDdeo",
        agora: !1,
        bio: "Orienta organiza\xE7\xE3o de hor\xE1rios de rem\xE9dios, sinais de alerta e preparo para consultas.",
        dias: ["Ter\xE7a", "Quarta", "Quinta"],
        horas: ["09:00", "15:30"],
      },
      {
        id: "p9",
        nome: "Dr. J\xFAlio Pimentel",
        iniciais: "JP",
        area: "Nutri\xE7\xE3o",
        foco: "alimenta\xE7\xE3o na defici\xEAncia",
        registro: "CRN-6 8841",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Ajuda fam\xEDlias a montar card\xE1pios poss\xEDveis na rotina, respeitando textura e seletividade.",
        dias: ["Segunda", "Sexta"],
        horas: ["10:30", "14:00"],
      },
    ],
    // Datas. O protótipo finge que hoje é segunda, 2 de novembro de 2026.
    zHoje = new Date(2026, 10, 2),
    // Até onde a agenda fica aberta para marcar: este mês e os próximos (ponto para o grupo revisar)
    zMesesAbertos = 3,
    zFimAgenda = new Date(zHoje.getFullYear(), zHoje.getMonth() + zMesesAbertos, 0),
    zSemNomes = ["Domingo", "Segunda", "Ter\xE7a", "Quarta", "Quinta", "Sexta", "S\xE1bado"],
    zMesNomes = ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var zDois = (n) => String(n).padStart(2, "0"),
    zIso = (d) => d.getFullYear() + "-" + zDois(d.getMonth() + 1) + "-" + zDois(d.getDate()),
    zData = (id) => {
      let [y, m, d] = String(id).split("-").map(Number);
      return new Date(y, m - 1, d);
    },
    zMesmoDia = (x, y) => zIso(x) === zIso(y),
    zDiasEntre = (x, y) => Math.round((zData(zIso(y)) - zData(zIso(x))) / 864e5);
  function zDiaRotulo(id) {
    if (!id) return "";
    let d = zData(id),
      t = d.getDate() + " de " + zMesNomes[d.getMonth()] + (d.getFullYear() !== zHoje.getFullYear() ? " de " + d.getFullYear() : "");
    return zMesmoDia(d, zHoje) ? "Hoje, " + zSemNomes[d.getDay()].toLowerCase() + ", " + t : zSemNomes[d.getDay()] + ", " + t;
  }
  // Horários livres de um profissional num dia. Vêm só do que o profissional informou
  // (dias da semana e horários em que atende), tirando os horários já marcados.
  // Para hoje valem só os horários de "Atende hoje". Alguns horários aparecem como já
  // ocupados por outras famílias, de forma fixa, para o protótipo parecer real.
  function zHorasDoDia(a, d, o = []) {
    if (d < zData(zIso(zHoje)) || d > zFimAgenda) return [];
    let hoje = zMesmoDia(d, zHoje),
      base = hoje ? (a.agora ? ["16:00", "16:30"] : []) : a.dias.includes(zSemNomes[d.getDay()]) ? a.horas : [],
      e = At.findIndex((n) => n.id === a.id),
      l = zDiasEntre(zHoje, d),
      id = zIso(d);
    return base
      .filter((i, c) => hoje || (e + l + c) % 4 !== 0)
      .filter((i) => !o.some((c) => c.diaId === id && c.hora === i && (!c.profId || c.profId === a.id) && c.status !== "cancelado"));
  }
  // Dias com horário livre num intervalo (padrão: os próximos 9 dias)
  function Ur(a, o = [], ini = zHoje, qtd = 9) {
    let t = [];
    for (let k = 0; k < qtd; k++) {
      let d = new Date(ini.getFullYear(), ini.getMonth(), ini.getDate() + k),
        h = zHorasDoDia(a, d, o);
      h.length && t.push({ id: zIso(d), rotulo: zDiaRotulo(zIso(d)), horas: h });
    }
    return t;
  }
  function zNovos(id, n) {
    return id === "chat"
      ? n + (n === 1 ? " mensagem nova" : " mensagens novas")
      : id === "notif"
        ? n + (n === 1 ? " nova" : " novas")
        : n + (n === 1 ? " novo" : " novos");
  }
  var zSort = (lista) =>
    [...lista].sort(
      (x, y) => zData(x.diaId) - zData(y.diaId) || x.hora.localeCompare(y.hora),
    );
  function zEmail(v) {
    let t = v.trim();
    if (!t) return "Falta o e-mail. Exemplo: maria@email.com";
    if (!t.includes("@")) return "Falta o @ no e-mail. Exemplo: maria@email.com";
    if (!/@[^@\s]+\.[^@\s]+$/.test(t))
      return "Falta o final do e-mail, como .com. Exemplo: maria@email.com";
    return "";
  }
  function zSenha(v) {
    if (v.length < 8)
      return v ? "Faltam caracteres na senha. Use pelo menos 8, com letras e n\xFAmeros." : "Falta a senha. Use pelo menos 8 caracteres, com letras e n\xFAmeros.";
    if (!/[a-zA-Z]/.test(v) || !/[0-9]/.test(v))
      return "Faltam letras ou n\xFAmeros na senha. Ela precisa ter os dois.";
    return "";
  }
  var M2 = (a, o) => Ur(a, o).reduce((e, t) => e + t.horas.length, 0);
  function D2(a, o) {
    let e = Ur(a, o)[0];
    return e
      ? `${e.rotulo}, \xE0s ${e.horas[0]}`
      : "Sem hor\xE1rios nesta semana";
  }
  var H2 = [
      ["193", "Bombeiros", "Resgate e inc\xEAndio."],
      ["190", "Pol\xEDcia Militar", "Viol\xEAncia ou amea\xE7a em andamento."],
      ["188", "CVV", "Apoio emocional, 24 horas."],
    ];
  var r = N(yt()),
    // Menu na ordem de uso: chat, atendimentos, fórum. Perfil fica no pé do menu e as notificações no sino.
    zS = [
      { id: "inicio", rotulo: "In\xEDcio", ic: "casa", tela: "inicio" },
      { id: "chat", rotulo: "Chat", ic: "chat", tela: "chat" },
      { id: "atend", rotulo: "Atendimentos", ic: "calendario", tela: "atendimentos" },
      { id: "forum", rotulo: "F\xF3rum", ic: "forum", tela: "forum" },
      { id: "dicas", rotulo: "Orienta\xE7\xF5es", ic: "orientacoes", tela: "dicas" },
    ],
    zItemPerfil = { id: "perfil", rotulo: "Perfil", ic: "perfil", tela: "perfil" },
    US = {
      inicio: "inicio",
      perfil: "perfil",
      diagnostico: "perfil",
      chat: "chat",
      forum: "forum",
      "forum-topico": "forum",
      "forum-novo": "forum",
      dicas: "dicas",
      dica: "dicas",
      atendimentos: "atend",
      sala: "atend",
      notificacoes: "notif",
    },
    // Nome de cada tela, para a barra do topo e para o "‹ Tela de origem"
    zNomeTela = {
      inicio: "In\xEDcio",
      chat: "Chat",
      atendimentos: "Atendimentos",
      forum: "F\xF3rum",
      "forum-topico": "T\xF3pico",
      dicas: "Orienta\xE7\xF5es",
      dica: "Orienta\xE7\xE3o",
      perfil: "Perfil",
      notificacoes: "Notifica\xE7\xF5es",
      ajuda: "Preciso de ajuda",
      sala: "Sala de v\xEDdeo",
    },
    // Telas fora do menu: mostram "‹ Tela de origem" na barra do topo
    zForaDoMenu = ["forum-topico", "dica", "notificacoes", "ajuda", "sala"],
    xS = [
      "objetivo",
      "login",
      "diagnostico-entrada",
      "cadastro",
      "privacidade",
      "status-voluntario",
    ];
  function zIniciais(nome) {
    let p = (nome || "").trim().split(/\s+/).filter(Boolean);
    if (!p.length) return "";
    return ((p[0][0] || "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  // Logo em uma cor só, que segue o tema (a cor vem da variável --logo)
  function zLogo() {
    return (0, r.jsx)("span", { className: "logo", role: "img", "aria-label": "zElo" });
  }
  // Atalho de tema na barra do topo: claro, escuro e alto contraste
  function zTemaMenu({ tema: v, setTema: A }) {
    let [ab, setAb] = (0, L.useState)(!1),
      ref = (0, L.useRef)(null),
      atual = jS.find((x) => x.id === v) || jS[0];
    (0, L.useEffect)(() => {
      if (!ab) return;
      let fora = (e) => ref.current && !ref.current.contains(e.target) && setAb(!1),
        esc = (e) => e.key === "Escape" && (setAb(!1), ref.current?.querySelector("button")?.focus());
      document.addEventListener("mousedown", fora);
      document.addEventListener("keydown", esc);
      return () => (document.removeEventListener("mousedown", fora), document.removeEventListener("keydown", esc));
    }, [ab]);
    return (0, r.jsxs)("div", {
      className: "tema-menu",
      ref,
      children: [
        (0, r.jsx)("button", {
          type: "button",
          className: "topo-botao",
          "aria-haspopup": "true",
          "aria-expanded": ab,
          "aria-label": "Tema: " + atual.rotulo + ". Trocar tema",
          onClick: () => setAb(!ab),
          children: (0, r.jsx)(la, { n: atual.ic, size: 24 }),
        }),
        ab &&
          (0, r.jsxs)("div", {
            className: "tema-pop",
            role: "group",
            "aria-label": "Tema",
            children: [
              (0, r.jsx)("p", { className: "tema-pop-titulo", children: "Tema" }),
              jS.map((x) =>
                (0, r.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "tema-op",
                    "aria-pressed": v === x.id,
                    onClick: () => (A(x.id), setAb(!1)),
                    children: [(0, r.jsx)(la, { n: x.ic, size: 20 }), x.rotulo, v === x.id && (0, r.jsx)(la, { n: "confirmar", size: 20, cheio: !0 })],
                  },
                  x.id,
                ),
              ),
            ],
          }),
      ],
    });
  }
  function qS({
    tema: a,
    setTema: st,
    atual: o,
    comMenu: e,
    irInicio: t,
    irPara: n,
    contadores: l,
    usuario: u,
    titulo: tt,
    voltar: vt,
    sair: sr,
    children: s,
  }) {
    let [saindo, setSaindo] = (0, L.useState)(!1),
      ini = zIniciais(u && u.nome),
      novos = { chat: 1, forum: 1 },
      itemMenu = (c, baixo) => {
        let at = o === c.id,
          q = l[c.id] || 0;
        return (0, r.jsx)(
          "li",
          {
            children: (0, r.jsxs)("button", {
              type: "button",
              className: baixo ? "aba-baixo" : "menu-item",
              onClick: () => n(c.tela),
              "aria-current": at ? "page" : void 0,
              "aria-label": q > 0 ? c.rotulo + ", " + zNovos(c.id, q) : void 0,
              children: [
                (0, r.jsxs)("span", {
                  className: "menu-icone",
                  children: [
                    (0, r.jsx)(la, { n: c.ic, size: baixo ? 24 : 20, cheio: at }),
                    baixo && q > 0 && (0, r.jsx)("span", { className: "contador contador--bolha" + (novos[c.id] ? " contador--novo" : ""), "aria-hidden": "true", children: q }),
                  ],
                }),
                (0, r.jsx)("span", { className: "menu-rotulo", children: c.rotulo }),
                !baixo && q > 0 && (0, r.jsx)("span", { className: "contador" + (novos[c.id] ? " contador--novo" : ""), "aria-hidden": "true", children: q }),
              ],
            }),
          },
          c.id,
        );
      },
      sino =
        e &&
        (0, r.jsxs)("button", {
          type: "button",
          className: "topo-botao",
          onClick: () => n("notificacoes"),
          "aria-current": o === "notif" ? "page" : void 0,
          "aria-label": l.notif > 0 ? "Notifica\xE7\xF5es, " + l.notif + (l.notif === 1 ? " nova" : " novas") : "Notifica\xE7\xF5es",
          children: [
            (0, r.jsx)(la, { n: "sino", size: 24, cheio: o === "notif" }),
            l.notif > 0 && (0, r.jsx)("span", { className: "contador contador--bolha contador--novo", "aria-hidden": "true", children: l.notif }),
          ],
        });
    return (0, r.jsxs)("div", {
      className: "app" + (e ? " app--menu" : " app--entrada"),
      children: [
        // Anúncio para leitores de tela quando chega mensagem nova no Chat fora da tela do Chat
        (0, r.jsx)("div", {
          className: "so-leitor",
          role: "status",
          "aria-live": "polite",
          children: e && o !== "chat" && l.chat > 0 ? "Chat: " + zNovos("chat", l.chat) : "",
        }),
        (0, r.jsx)("a", {
          className: "pular",
          href: "#principal",
          onClick: (c) => {
            (c.preventDefault(), document.getElementById("principal")?.focus());
          },
          children: "Pular para o conte\xFAdo",
        }),
        (0, r.jsxs)("aside", {
          className: "coluna",
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: "logo-link",
              onClick: t,
              "aria-label": "zElo. Ir para a tela inicial",
              children: (0, r.jsx)(zLogo, {}),
            }),
            e &&
              (0, r.jsx)("nav", {
                "aria-label": "Menu principal",
                children: (0, r.jsx)("ul", {
                  className: "menu",
                  children: zS.map((c) => itemMenu(c, !1)),
                }),
              }),
            e &&
              (0, r.jsxs)("div", {
                className: "coluna-fim",
                children: [
                  (0, r.jsx)("ul", {
                    className: "menu",
                    children: (0, r.jsx)("li", {
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        className: "menu-item menu-item--sair",
                        onClick: () => setSaindo(!0),
                        children: [(0, r.jsx)("span", { className: "menu-icone", children: (0, r.jsx)(la, { n: "sair", size: 20 }) }), (0, r.jsx)("span", { className: "menu-rotulo", children: "Sair do zElo" })],
                      }),
                    }),
                  }),
                  (0, r.jsxs)("button", {
                    type: "button",
                    className: "btn-emergencia",
                    onClick: () => n("ajuda"),
                    "aria-current": o === "ajuda" ? "page" : void 0,
                    children: [(0, r.jsx)(la, { n: "ajuda", size: 20 }), "Preciso de ajuda"],
                  }),
                ],
              }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "conteudo",
          children: [
            (0, r.jsxs)("header", {
              className: "topo",
              children: [
                (0, r.jsx)("button", {
                  type: "button",
                  className: "topo-logo",
                  onClick: t,
                  "aria-label": "zElo. Ir para a tela inicial",
                  children: (0, r.jsx)(zLogo, {}),
                }),
                e &&
                  (0, r.jsxs)("div", {
                    className: "topo-titulo",
                    children: [
                      vt &&
                        (0, r.jsxs)("button", {
                          type: "button",
                          className: "topo-voltar",
                          onClick: vt.ir,
                          children: [(0, r.jsx)(la, { n: "voltar", size: 20 }), vt.rotulo],
                        }),
                      (0, r.jsx)("p", { className: vt ? "topo-nome topo-nome--sub" : "topo-nome", children: tt }),
                    ],
                  }),
                (0, r.jsxs)("div", {
                  className: "topo-acoes",
                  children: [
                    (0, r.jsx)(zTemaMenu, { tema: a, setTema: st }),
                    sino,
                    e &&
                      (0, r.jsx)("button", {
                        type: "button",
                        className: "topo-avatar",
                        onClick: () => n("perfil"),
                        "aria-current": o === "perfil" ? "page" : void 0,
                        "aria-label": "Perfil",
                        children: ini || (0, r.jsx)(la, { n: "perfil", size: 20 }),
                      }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("main", { id: "principal", tabIndex: -1, children: s }),
            (0, r.jsx)("footer", {
              className: "rodape",
              children: (0, r.jsx)("span", { children: "Prot\xF3tipo com dados fict\xEDcios." }),
            }),
          ],
        }),
        e &&
          o !== "ajuda" &&
          (0, r.jsxs)("button", {
            type: "button",
            className: "ajuda-flutuante",
            onClick: () => n("ajuda"),
            children: [(0, r.jsx)(la, { n: "ajuda", size: 20 }), "Preciso de ajuda"],
          }),
        saindo &&
          (0, r.jsx)(zJanela, {
            titulo: "Sair do zElo?",
            sub: "Você volta para a primeira tela. Neste protótipo, o que você fez nesta visita é apagado.",
            fechar: () => setSaindo(!1),
            rodape: (0, r.jsxs)("div", {
              className: "acoes",
              children: [
                (0, r.jsx)(ia, { icone: "sair", onClick: () => (setSaindo(!1), sr && sr()), children: "Sair" }),
                (0, r.jsx)(ia, { sec: !0, onClick: () => setSaindo(!1), children: "Continuar no zElo" }),
              ],
            }),
            children: (0, r.jsx)("p", { className: "apoio", children: "Para entrar de novo, use o seu e-mail e a sua senha." }),
          }),
        e &&
          (0, r.jsx)("nav", {
            className: "barra-baixo",
            "aria-label": "Menu principal (celular)",
            children: (0, r.jsx)("ul", {
              children: zS.map((c) => itemMenu(c, !0)),
            }),
          }),
      ],
    });
  }
  // Tema: o claro é o padrão. Vale o que a pessoa escolheu antes; quem pede alto contraste no aparelho já começa nele.
  function zTemaInicial() {
    try {
      let t = localStorage.getItem("zelo-tema");
      if (t && jS.some((x) => x.id === t)) return t;
    } catch (x) {}
    let mq = (q) => window.matchMedia && window.matchMedia(q).matches;
    return mq("(prefers-contrast: more)") || mq("(forced-colors: active)") ? "alto-contraste" : "claro";
  }
  function zLetraInicial() {
    try {
      let t = localStorage.getItem("zelo-letra");
      if (t && zLetras.some((x) => x.id === t)) return t;
    } catch (x) {}
    return "padrao";
  }
  // Etapas da entrada, para a pessoa saber o que vem depois
  function zEtapasEntrada({ papel: pp, atual: at }) {
    let et = pp === "voluntario" ? ["Perfil", "Privacidade", "Cadastro", "Verifica\xE7\xE3o"] : ["Perfil", "Conta", "Privacidade", "Perguntas"],
      i = et.indexOf(at);
    return (0, r.jsx)("ol", {
      className: "etapas-entrada",
      "aria-label": "Etapa " + (i + 1) + " de " + et.length + ": " + at,
      children: et.map((x, k) =>
        (0, r.jsxs)(
          "li",
          {
            className: k < i ? "feita" : k === i ? "atual" : "",
            "aria-hidden": "true",
            children: [(0, r.jsx)("span", { className: "etapa-n", children: k < i ? (0, r.jsx)(la, { n: "confirmar", size: 16, cheio: !0 }) : k + 1 }), (0, r.jsx)("span", { className: "etapa-nome", children: x })],
          },
          x,
        ),
      ),
    });
  }
  // Privacidade antes de usar o app. O aceite necessário é um só; os opcionais começam
  // desmarcados e podem ser mudados depois no Perfil.
  // PONTO PARA REVISÃO: o texto é provisório. A política de privacidade e os termos ainda
  // precisam ser escritos e revisados pelo grupo antes de o app ir ao ar.
  function zPrivacidade({ papel: pp, priv: pv, setPriv: sp, continuar: ct, voltar: vt }) {
    let [rasc, setRasc] = (0, L.useState)({ ok: !1, cidade: !1, ana: !1, ...pv }),
      [tentou, setTentou] = (0, L.useState)(!1),
      [ocupado, agir] = zUseAcao(),
      vol = pp === "voluntario",
      itens = [
        ["perfil", "Conta", "Nome e e-mail, para voc\xEA entrar e receber os avisos dos atendimentos."],
        vol
          ? ["verificado", "Registro profissional", "N\xFAmero do conselho e o documento enviado. O documento \xE9 apagado depois da verifica\xE7\xE3o; fica s\xF3 o nome, o n\xFAmero e a data."]
          : ["saude", "Respostas sobre sa\xFAde", "Defici\xEAncia, \xE1reas de sa\xFAde e dia a dia, para mostrar profissionais e orienta\xE7\xF5es que combinam."],
        ["calendario", "Atendimentos", "Dia, hora e profissional, para a consulta acontecer. As chamadas de v\xEDdeo n\xE3o s\xE3o gravadas."],
        ["forum", "F\xF3rum", "O que voc\xEA publica no f\xF3rum fica vis\xEDvel para as outras pessoas do zElo."],
      ],
      caixa = (k, titulo, sub) =>
        (0, r.jsxs)("label", {
          className: "consentimento" + (rasc[k] ? " consentimento--on" : ""),
          children: [
            (0, r.jsx)("input", { type: "checkbox", checked: !!rasc[k], onChange: (ev) => setRasc({ ...rasc, [k]: ev.target.checked }), "aria-describedby": "cons-" + k }),
            (0, r.jsxs)("span", {
              children: [(0, r.jsx)("span", { className: "consentimento-titulo", children: titulo }), (0, r.jsx)("span", { id: "cons-" + k, className: "apoio", children: sub })],
            }),
          ],
        });
    return (0, r.jsxs)("section", {
      className: "entra privacidade",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("span", { className: "privacidade-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: "privacidade", size: 32 }) }),
            (0, r.jsx)("h1", { tabIndex: -1, children: "Seus dados no zElo" }),
            (0, r.jsx)("p", { className: "lead", children: "Antes de come\xE7ar, veja o que o zElo guarda e para qu\xEA. As escolhas opcionais podem ser mudadas depois, no Perfil." }),
          ],
        }),
        (0, r.jsx)("h2", { className: "h-pequeno", children: "O que guardamos" }),
        (0, r.jsx)("ul", {
          className: "dados-lista",
          children: itens.map(([ic, t, d]) =>
            (0, r.jsxs)(
              "li",
              {
                children: [
                  (0, r.jsx)("span", { className: "item-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: ic, size: 20 }) }),
                  (0, r.jsxs)("span", { children: [(0, r.jsx)("b", { children: t }), (0, r.jsx)("span", { className: "apoio", children: d })] }),
                ],
              },
              t,
            ),
          ),
        }),
        (0, r.jsx)("h2", { className: "h-pequeno secao-titulo-peq", children: "Necess\xE1rio para usar o zElo" }),
        caixa("ok", "Concordo com o uso dos meus dados como explicado acima", "Sem este aceite n\xE3o d\xE1 para usar o zElo."),
        tentou && !rasc.ok && (0, r.jsxs)("p", { className: "erro-msg", role: "alert", children: [(0, r.jsx)(la, { n: "atencao", size: 18 }), "Marque o aceite necess\xE1rio para continuar."] }),
        (0, r.jsx)("h2", { className: "h-pequeno secao-titulo-peq", children: "Opcional" }),
        (0, r.jsx)("p", { className: "apoio", style: { marginBottom: 12 }, children: "Voc\xEA usa o zElo do mesmo jeito marcando ou n\xE3o." }),
        caixa("cidade", "Mostrar minha cidade nas publica\xE7\xF5es do f\xF3rum", "Sem isso, aparece s\xF3 o seu nome."),
        caixa("ana", "Guardar as perguntas que a Ana n\xE3o souber responder", "A equipe usa a lista para ensinar respostas novas \xE0 Ana. Neste prot\xF3tipo ela fica s\xF3 neste aparelho."),
        (0, r.jsx)("div", {
          className: "alerta-bloco",
          style: { marginTop: 24 },
          children: (0, r.jsx)(Do, { tipo: "aviso", children: "Texto provis\xF3rio, para o grupo revisar. A pol\xEDtica de privacidade e os termos de uso ainda ser\xE3o escritos." }),
        }),
        (0, r.jsxs)("div", {
          className: "acoes",
          children: [
            (0, r.jsx)(ia, {
              fim: "avancar",
              ocupado,
              textoOcupado: "Salvando…",
              onClick: () => (setTentou(!0), rasc.ok && agir(() => (sp(rasc), ct()))),
              children: "Continuar",
            }),
            (0, r.jsx)(ia, { sec: !0, onClick: vt, children: "Voltar" }),
          ],
        }),
      ],
    });
  }
  function FS({ escolher: a }) {
    let op = (id, ic, tit, sub) =>
      (0, r.jsxs)(
        "button",
        {
          type: "button",
          className: "opcao opcao--entrada",
          onClick: () => a(id),
          children: [
            (0, r.jsx)("span", { className: "opcao-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: ic, size: 24 }) }),
            (0, r.jsxs)("span", {
              className: "opcao-texto",
              children: [tit, (0, r.jsx)("span", { className: "opcao-sub", children: sub })],
            }),
            (0, r.jsx)(la, { n: "avancar", size: 20 }),
          ],
        },
        id,
      );
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)("h1", { tabIndex: -1, children: "Boas-vindas ao zElo" }),
        (0, r.jsx)("p", {
          className: "lead",
          children: "O zElo d\xE1 dire\xE7\xE3o, ajuda e apoio para quem cuida de pessoas com defici\xEAncia, para a pr\xF3pria pessoa com defici\xEAncia e para profissionais de sa\xFAde que querem ajudar.",
        }),
        // Quem somos: texto provisório, para o grupo revisar
        (0, r.jsx)("p", {
          className: "apoio sobre-quem",
          children: "Quem somos: um grupo de estudantes que criou o zElo para aproximar fam\xEDlias e profissionais volunt\xE1rios num s\xF3 lugar.",
        }),
        (0, r.jsx)("h2", { className: "h-pequeno sobre-titulo", id: "sobre-h", children: "Por que usar o zElo" }),
        (0, r.jsx)("ul", {
          className: "sobre-lista",
          "aria-labelledby": "sobre-h",
          children: [
            ["verificado", "Consultas sem custo", "Com profissionais de sa\xFAde volunt\xE1rios, com o registro conferido. Online ou presencial."],
            ["chat", "D\xFAvidas respondidas", "A Ana responde perguntas do dia a dia e indica a quem recorrer."],
            ["forum", "Quem vive o mesmo", "No f\xF3rum voc\xEA troca experi\xEAncias com outras fam\xEDlias, e as respostas de profissionais aparecem primeiro."],
            ["orientacoes", "Orienta\xE7\xF5es pr\xE1ticas", "Textos curtos para o cuidado em casa, escritos por profissionais."],
          ].map(([ic, t0, d0]) =>
            (0, r.jsxs)("li", {
              className: "sobre-item",
              children: [
                (0, r.jsx)("span", { className: "sobre-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: ic, size: 22 }) }),
                (0, r.jsxs)("span", { children: [(0, r.jsx)("strong", { children: t0 }), (0, r.jsx)("span", { className: "apoio", children: d0 })] }),
              ],
            }, ic),
          ),
        }),
        (0, r.jsx)("h2", { className: "h-secao sobre-escolha", children: "Como voc\xEA quer usar o zElo?" }),
        (0, r.jsx)("p", { className: "apoio", children: "Escolha o seu perfil. Em seguida voc\xEA entra na conta e v\xEA como cuidamos dos seus dados." }),
        (0, r.jsxs)("div", {
          className: "objetivo-opcoes opcoes",
          children: [
            op("responsavel", "perfil", "Sou respons\xE1vel", "Cuido de uma pessoa com defici\xEAncia."),
            op("pcd", "apoio", "Sou a pessoa com defici\xEAncia", "Uso o zElo para cuidar da minha sa\xFAde."),
            op("voluntario", "verificado", "Sou volunt\xE1rio", "Sou profissional de sa\xFAde e quero ajudar."),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio nota-cras",
          children: "O zElo orienta quest\xF5es de sa\xFAde. Para benef\xEDcios, documentos e escola, procure o CRAS ou a pr\xF3pria escola.",
        }),
      ],
    });
  }
  function kS({ voltar: a, entrar: o, papel: pp, criarVoluntario: cv, modoInicial: mi }) {
    let [modo, setModo] = (0, L.useState)(mi || "entrar"),
      [nome, setNome] = (0, L.useState)(""),
      [e, t] = (0, L.useState)(""),
      [n, l] = (0, L.useState)(""),
      [s, i] = (0, L.useState)({}),
      [enviado, setEnviado] = (0, L.useState)(""),
      [erroB, setErroB] = (0, L.useState)(""),
      [esperaB, setEsperaB] = (0, L.useState)(!1),
      [ocupado0, agir] = zUseAcao(),
      ocupado = ocupado0 || esperaB,
      limpa = (k) => s[k] && i({ ...s, [k]: void 0 }),
      trocar = (m) => {
        (setModo(m), i({}), setEnviado(""));
        requestAnimationFrame(() =>
          document.querySelector("main h1")?.focus({ preventScroll: !0 }),
        );
      },
      vol = pp === "voluntario",
      titulos = {
        entrar: vol ? "Entre na sua conta de volunt\xE1rio" : "Que bom ter voc\xEA aqui",
        criar: "Crie sua conta",
        esqueci: "Esqueceu a senha?",
      },
      leads = {
        entrar: vol
          ? "Use o e-mail e a senha do seu cadastro."
          : "Entre para ver seus atendimentos, conversas e orienta\xE7\xF5es.",
        criar: "Depois, tr\xEAs perguntas r\xE1pidas para mostrar primeiro o que importa.",
        esqueci: "Digite o e-mail da sua conta. Enviamos um link para voc\xEA criar uma senha nova.",
      };
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, {
            onClick: () => (modo === "entrar" ? a() : trocar("entrar")),
          }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            children: [
              (0, r.jsx)("h1", { tabIndex: -1, children: titulos[modo] }),
              (0, r.jsx)("p", { className: "lead", children: leads[modo] }),
            ],
          }),
          (0, r.jsxs)("form", {
            className: "form-conta",
            onSubmit: (m) => {
              m.preventDefault();
              let I = {},
                em = zEmail(e);
              if ((em && (I.email = em), modo === "criar")) {
                nome.trim() || (I.nome = "Falta o seu nome. Exemplo: Maria Silva");
                let sn = zSenha(n);
                sn && (I.senha = sn);
              }
              if (modo === "entrar" && !n)
                I.senha = "Falta a senha. Escreva a senha da sua conta.";
              if ((i(I), Object.keys(I).length)) return Or();
              if (zBanco.ativo) {
                if (esperaB) return;
                setErroB("");
                setEsperaB(!0);
                let em2 = e.trim(),
                  p0 = modo === "esqueci" ? zBanco.esqueci(em2) : modo === "criar" ? zBanco.criarConta(em2, n, nome.trim()) : zBanco.entrar(em2, n);
                p0.then(
                  (u0) => (setEsperaB(!1), modo === "esqueci" ? setEnviado(em2) : o(em2, modo === "criar" ? nome.trim() : (u0 && u0.user_metadata && u0.user_metadata.nome) || "")),
                  (x) => (setEsperaB(!1), setErroB(x.message)),
                );
                return;
              }
              agir(() => (modo === "esqueci" ? setEnviado(e.trim()) : o(e.trim(), modo === "criar" ? nome.trim() : "")));
            },
            noValidate: !0,
            children: [
              erroB &&
                (0, r.jsx)("div", {
                  className: "alerta-bloco",
                  role: "alert",
                  children: (0, r.jsx)(Do, { tipo: "aviso", palavra: " ", children: erroB }),
                }),
              enviado &&
                (0, r.jsx)("div", {
                  className: "alerta-bloco",
                  children: (0, r.jsxs)(Do, {
                    tipo: "ok",
                    children: [
                      "Enviamos o link para ",
                      enviado,
                      zBanco.ativo ? ". Confira a caixa de entrada e o spam." : ". Neste prot\xF3tipo nenhum e-mail \xE9 enviado.",
                    ],
                  }),
                }),
              modo === "criar" &&
                (0, r.jsx)(Za, {
                  id: "c-nome",
                  rotulo: "Como podemos te chamar?",
                  autoComplete: "name",
                  value: nome,
                  onChange: (m) => (setNome(m.target.value), limpa("nome")),
                  erro: s.nome,
                }),
              (0, r.jsx)(Za, {
                id: "email",
                rotulo: "E-mail",
                tipo: "text",
                inputMode: "email",
                autoComplete: "email",
                placeholder: "seuemail@exemplo.com",
                value: e,
                onChange: (m) => (t(m.target.value), limpa("email")),
                erro: s.email,
              }),
              modo !== "esqueci" &&
                (0, r.jsx)(Za, {
                  id: "senha",
                  rotulo: "Senha",
                  ajuda:
                    modo === "criar"
                      ? "Pelo menos 8 caracteres, com letras e n\xFAmeros."
                      : void 0,
                  tipo: "password",
                  autoComplete: modo === "criar" ? "new-password" : "current-password",
                  value: n,
                  onChange: (m) => (l(m.target.value), limpa("senha")),
                  erro: s.senha,
                }),
              modo === "entrar" &&
                (0, r.jsx)("p", {
                  className: "link-direita",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => trocar("esqueci"),
                    children: "Esqueci minha senha",
                  }),
                }),
              (0, r.jsx)("div", {
                className: "acoes acoes--cheia",
                children: (0, r.jsx)(ia, {
                  type: "submit",
                  ocupado,
                  textoOcupado: modo === "criar" ? "Criando conta\u2026" : modo === "esqueci" ? "Enviando\u2026" : "Entrando\u2026",
                  children:
                    modo === "criar"
                      ? "Criar conta"
                      : modo === "esqueci"
                        ? "Enviar link"
                        : "Entrar",
                }),
              }),
              modo === "entrar" &&
                (0, r.jsxs)("p", {
                  className: "troca-conta",
                  children: [
                    vol ? "Ainda n\xE3o tem cadastro? " : "Primeira vez no zElo? ",
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => (vol ? cv() : trocar("criar")),
                      children: vol ? "Cadastre-se como volunt\xE1rio" : "Criar conta",
                    }),
                  ],
                }),
              modo === "criar" &&
                (0, r.jsxs)("p", {
                  className: "troca-conta",
                  children: [
                    "J\xE1 tem conta? ",
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => trocar("entrar"),
                      children: "Entrar",
                    }),
                  ],
                }),
              (0, r.jsxs)("p", {
                className: "apoio lgpd",
                children: [
                  (0, r.jsx)(la, { n: "cadeado", size: 16 }),
                  " Seus dados de sa\xFAde s\xE3o protegidos pela LGPD.",
                ],
              }),
            ],
          }),
        ],
      },
      modo,
    );
  }
  var _S = [
    {
      campo: "tipo",
      titulo: "Qual \xE9 a defici\xEAncia?",
      ajuda: "Pode escolher mais de uma. Sem diagn\xF3stico, escolha Ainda n\xE3o sei.",
      itens: Em,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o. Se escolheu Outra, escreva qual \xE9.",
    },
    {
      campo: "direcionamento",
      titulo: "Com que parte da sa\xFAde voc\xEA quer ajuda primeiro?",
      ajuda: "Pode escolher mais de uma. O que aparece primeiro no zElo segue esta resposta.",
      itens: El,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar.",
    },
    {
      campo: "especificidades",
      titulo: "Quais destas situa\xE7\xF5es fazem parte do dia a dia?",
      ajuda: "Escolha uma ou mais op\xE7\xF5es.",
      itens: Lm,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar.",
    },
  ];
  // Perguntas iniciais. Para o responsável, as perguntas usam o nome da pessoa cuidada.
  function zDe(diag, papel) {
    let nm = ((diag && diag.pessoa) || "").trim();
    return papel === "pcd" ? null : nm ? "de " + nm : "da pessoa que voc\xEA cuida";
  }
  function GS({
    passo: a,
    setPasso: o,
    diag: e,
    setDiag: t,
    concluir: n,
    sair: l,
    papel: pp,
    naJanela: nj,
  }) {
    let s = _S[a - 1],
      i = e[s.campo],
      resp = pp !== "pcd",
      de = zDe(e, pp),
      titulo =
        s.campo === "tipo"
          ? resp ? "Qual \xE9 a defici\xEAncia " + de + "?" : "Qual \xE9 a sua defici\xEAncia?"
          : s.campo === "especificidades"
            ? resp ? "Quais destas situa\xE7\xF5es fazem parte do dia a dia " + de + "?" : "Quais destas situa\xE7\xF5es fazem parte do seu dia a dia?"
            : s.titulo,
      faltaNome = s.campo === "tipo" && resp && !(e.pessoa || "").trim(),
      // Para o responsável, o nome vem primeiro e a pergunta da deficiência logo abaixo dele
      nomePrimeiro = s.campo === "tipo" && resp,
      c = (s.multi ? i.length > 0 : !!i) && !faltaNome && !(s.campo === "tipo" && i.includes("outra") && !(e.tipoOutra || "").trim()),
      [ocupado, agir] = zUseAcao(500),
      m = (I) => {
        if (!s.multi) return t({ ...e, [s.campo]: I });
        let f;
        let excl = ["nenhuma", "nao-sei"];
        if (excl.includes(I)) f = i.includes(I) ? [] : [I];
        else {
          let u = i.filter((g) => !excl.includes(g));
          f = u.includes(I) ? u.filter((g) => g !== I) : [...u, I];
        }
        t({ ...e, [s.campo]: f });
      },
      outra = (0, r.jsxs)("div", {
        className: "campo outra-campo",
        children: [
          (0, r.jsx)("label", { className: "campo-rotulo", htmlFor: "tipo-outra", children: "Qual defici\xEAncia?" }),
          (0, r.jsx)("input", {
            id: "tipo-outra",
            className: "campo-entrada",
            value: e.tipoOutra || "",
            maxLength: 80,
            autoComplete: "off",
            onChange: (I) => t({ ...e, tipoOutra: I.target.value }),
          }),
          (0, r.jsx)("span", { className: "campo-ajuda", children: "Se n\xE3o souber o nome, descreva do seu jeito." }),
        ],
      });
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          !nj && (0, r.jsx)(Ye, { onClick: () => (a === 1 ? l() : o(a - 1)) }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            children: [
              (0, r.jsx)("div", {
                className: "progresso",
                "aria-hidden": "true",
                children: _S.map((_, k) =>
                  (0, r.jsx)("span", { className: k < a ? "feito" : "" }, k),
                ),
              }),
              (0, r.jsxs)("p", {
                className: "passo",
                children: ["Passo ", a, " de ", _S.length, a === 1 ? " \xB7 leva menos de 2 minutos" : ""],
              }),
              (0, r.jsx)(nj ? "h3" : "h1", { tabIndex: -1, children: nomePrimeiro ? "Sobre a pessoa que voc\xEA cuida" : titulo }),
              s.ajuda && !nomePrimeiro && (0, r.jsx)("p", { className: "lead", children: s.ajuda }),
            ],
          }),
          s.campo === "tipo" &&
            resp &&
            (0, r.jsx)(Za, {
              id: "pessoa-nome",
              rotulo: "Nome da pessoa que voc\xEA cuida",
              ajuda: "Usamos o nome nos textos sobre ela. Pode ser um apelido.",
              value: e.pessoa || "",
              maxLength: 40,
              autoComplete: "off",
              onChange: (I) => t({ ...e, pessoa: I.target.value }),
            }),
          nomePrimeiro &&
            (0, r.jsxs)("div", {
              className: "pergunta-abaixo",
              children: [
                (0, r.jsx)(nj ? "h4" : "h2", { className: "h-pergunta", children: titulo }),
                s.ajuda && (0, r.jsx)("p", { className: "apoio", children: s.ajuda }),
              ],
            }),
          (0, r.jsx)(Tm, {
            itens: s.itens,
            valor: i,
            onChange: m,
            multi: s.multi,
            rotulo: titulo,
            depois: s.campo === "tipo" && i.includes("outra") ? { outra } : null,
          }),
          (0, r.jsxs)("div", {
            className: "acoes",
            children: [
              (0, r.jsx)(ia, {
                disabled: !c,
                "aria-disabled": !c,
                "aria-describedby": c ? void 0 : "diag-aviso",
                ocupado,
                textoOcupado: "Salvando…",
                onClick: () => c && (a === _S.length ? agir(n) : o(a + 1)),
                fim: a === _S.length ? void 0 : "avancar",
                children: a === _S.length ? "Concluir" : "Continuar",
              }),
              nj && a > 1 && (0, r.jsx)(ia, { sec: !0, onClick: () => o(a - 1), children: "Voltar" }),
              !c &&
                (0, r.jsx)("span", {
                  id: "diag-aviso",
                  className: "aviso",
                  role: "status",
                  children: faltaNome ? "Escreva o nome da pessoa e escolha pelo menos uma op\xE7\xE3o." : s.aviso,
                }),
            ],
          }),
        ],
      },
      a,
    );
  }
  function VS({ voltar: a, enviar: o, entrar: jaTenho }) {
    let [e, t] = (0, L.useState)({
        nome: "",
        email: "",
        senha: "",
        area: "",
        registro: "",
        cidade: "",
      }),
      [n, l] = (0, L.useState)(""),
      [s, i] = (0, L.useState)({}),
      c = (0, L.useRef)(null),
      [ocupado, agir] = zUseAcao(),
      m = (f) => (u) => {
        (t({ ...e, [f]: u.target.value }), s[f] && i({ ...s, [f]: void 0 }));
      };
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: a }),
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Cadastre-se como volunt\xE1rio",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Pedimos seus dados e o comprovante do seu registro profissional.",
            }),
          ],
        }),
        (0, r.jsxs)("form", {
          onSubmit: (f) => {
            f.preventDefault();
            let u = {};
            (e.nome.trim() ||
              (u.nome = "Falta o nome. Exemplo: Helena Cavalcanti"),
              zEmail(e.email) && (u.email = zEmail(e.email)),
              zSenha(e.senha) && (u.senha = zSenha(e.senha)),
              e.area ||
                (u.area = "Escolha a sua \xE1rea de atua\xE7\xE3o na lista."),
              e.registro.trim() ||
                (u.registro =
                  "Falta o n\xFAmero do registro no conselho. Exemplo: CREFITO-1 12345-TO"),
              e.cidade.trim() || (u.cidade = "Falta a cidade. Exemplo: Recife"),
              n ||
                (u.arquivo =
                  "Falta a comprova\xE7\xE3o do t\xEDtulo. Envie uma foto ou PDF do diploma ou da carteira do conselho."),
              i(u),
              Object.keys(u).length ? Or() : agir(() => o(e)));
          },
          noValidate: !0,
          children: [
            (0, r.jsx)(Za, {
              id: "nome",
              rotulo: "Nome completo",
              value: e.nome,
              onChange: m("nome"),
              erro: s.nome,
              autoComplete: "name",
            }),
            (0, r.jsx)(Za, {
              id: "email-v",
              rotulo: "E-mail",
              inputMode: "email",
              value: e.email,
              onChange: m("email"),
              erro: s.email,
              autoComplete: "email",
            }),
            (0, r.jsx)(Za, {
              id: "senha-v",
              rotulo: "Crie uma senha",
              ajuda: "Pelo menos 8 caracteres, com letras e n\xFAmeros.",
              tipo: "password",
              autoComplete: "new-password",
              value: e.senha,
              onChange: m("senha"),
              erro: s.senha,
            }),
            (0, r.jsxs)(Za, {
              id: "area",
              rotulo: "\xC1rea de atua\xE7\xE3o",
              como: "select",
              value: e.area,
              onChange: m("area"),
              erro: s.area,
              children: [
                (0, r.jsx)("option", {
                  value: "",
                  children: "Escolha uma \xE1rea",
                }),
                Rr.map((f) =>
                  (0, r.jsx)("option", { value: f, children: f }, f),
                ),
              ],
            }),
            (0, r.jsx)(Za, {
              id: "registro",
              rotulo: "Registro no conselho profissional",
              value: e.registro,
              onChange: m("registro"),
              erro: s.registro,
            }),
            (0, r.jsx)(Za, {
              id: "cidade",
              rotulo: "Cidade onde voc\xEA atua",
              value: e.cidade,
              onChange: m("cidade"),
              erro: s.cidade,
            }),
            (0, r.jsxs)("div", {
              className: "campo",
              "data-erro": s.arquivo ? "true" : "false",
              children: [
                (0, r.jsx)("span", {
                  className: "campo-rotulo",
                  id: "arq-rotulo",
                  children: "Comprova\xE7\xE3o do t\xEDtulo profissional",
                }),
                (0, r.jsx)("span", {
                  className: "campo-ajuda apoio",
                  children:
                    "Foto ou PDF do diploma ou da carteira do conselho. S\xF3 a pessoa da equipe que faz a verifica\xE7\xE3o v\xEA o arquivo, e ele \xE9 apagado depois da an\xE1lise.",
                }),
                (0, r.jsxs)("div", {
                  className: "arquivo-linha",
                  children: [
                    (0, r.jsx)(ia, {
                      sec: !0,
                      peq: !0,
                      icone: "adicionar",
                      onClick: () => c.current?.click(),
                      "aria-describedby": "arq-nome",
                      children: "Escolher arquivo",
                    }),
                    (0, r.jsx)("span", {
                      id: "arq-nome",
                      className: "arquivo-nome",
                      children: n || "Nenhum arquivo escolhido",
                    }),
                    (0, r.jsx)("input", {
                      ref: c,
                      type: "file",
                      accept: ".pdf,image/*",
                      className: "so-leitor",
                      tabIndex: -1,
                      "aria-labelledby": "arq-rotulo",
                      onChange: (f) => {
                        (l(f.target.files?.[0]?.name || ""),
                          s.arquivo && i({ ...s, arquivo: void 0 }));
                      },
                    }),
                  ],
                }),
                s.arquivo &&
                  (0, r.jsxs)("p", {
                    className: "erro-msg",
                    role: "alert",
                    children: [
                      (0, r.jsx)(la, { n: "atencao", size: 20 }),
                      (0, r.jsx)("span", { children: s.arquivo }),
                    ],
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "acoes",
              style: { marginTop: 32 },
              children: (0, r.jsx)(ia, {
                type: "submit",
                ocupado,
                textoOcupado: "Enviando\u2026",
                children: "Enviar cadastro",
              }),
            }),
            (0, r.jsxs)("p", {
              className: "troca-conta",
              children: [
                "J\xE1 tem cadastro? ",
                (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: jaTenho,
                  children: "Entrar",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function PS({ nome: a, aprovar: o, voltar: e }) {
    let [ocupado, agir] = zUseAcao(),
      etapa = (txt, st) =>
        (0, r.jsxs)("li", {
          children: [(0, r.jsx)("span", { children: txt }), st ? (0, r.jsx)(zStatus, { s: st }) : (0, r.jsx)("span", { className: "apoio", children: "Depois da an\xE1lise" })],
        });
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsxs)("h1", {
              tabIndex: -1,
              children: ["Recebemos seu cadastro, ", (a || "").split(" ")[0]],
            }),
            (0, r.jsx)("p", { className: "lead", children: "Uma pessoa da equipe zElo confere o seu documento em at\xE9 24 horas." }),
          ],
        }),
        (0, r.jsxs)("ul", {
          className: "etapas",
          children: [
            etapa("Cadastro enviado", "confirmado"),
            etapa("Consulta do registro no conselho", "confirmado"),
            etapa("An\xE1lise do documento pela equipe", "aguardando"),
            etapa("Acesso liberado", null),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio medida",
          children:
            "O resultado chega no seu e-mail. Depois da an\xE1lise, o documento \xE9 apagado. Guardamos s\xF3 o seu nome, o n\xFAmero do registro e a data.",
        }),
        (0, r.jsxs)("div", {
          className: "acoes",
          children: [
            (0, r.jsx)(ia, { onClick: () => agir(o), ocupado, textoOcupado: "Aprovando\u2026", children: "Simular aprova\xE7\xE3o" }),
            (0, r.jsx)(ia, { sec: !0, onClick: e, children: "Voltar ao in\xEDcio" }),
          ],
        }),
      ],
    });
  }
  function qr({ p: a }) {
    return (0, r.jsx)("span", {
      className: "avatar",
      "aria-hidden": "true",
      children: a.iniciais,
    });
  }
  // Cabeçalho de seção: título colado ao conteúdo e o atalho na mesma linha, à direita
  function zSecaoTopo({ id, titulo: t, sub: sb, atalho: at }) {
    return (0, r.jsxs)("div", {
      className: "secao-topo",
      children: [
        (0, r.jsxs)("div", {
          children: [(0, r.jsx)("h2", { id, children: t }), sb && (0, r.jsx)("p", { className: "apoio", children: sb })],
        }),
        at && (0, r.jsx)("button", { type: "button", className: "link secao-atalho", onClick: at[1], children: at[0] }),
      ],
    });
  }
  // Faixa de números: rótulo pequeno e número grande. Cada um leva à sua tela.
  function zNumeros({ itens: it, rotulo: rt }) {
    return (0, r.jsx)("ul", {
      className: "numeros",
      "aria-label": rt,
      children: it.map((x) =>
        (0, r.jsx)(
          "li",
          {
            children: (0, r.jsxs)("button", {
              type: "button",
              className: "numero",
              onClick: x.ir,
              children: [
                x.ic && (0, r.jsx)("span", { className: "numero-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: x.ic, size: 20 }) }),
                (0, r.jsx)("span", { className: "numero-rotulo", children: x.rotulo }),
                (0, r.jsx)("span", { className: "numero-valor", children: x.n }),
              ],
            }),
          },
          x.rotulo,
        ),
      ),
    });
  }
  // Faixa da semana com os dias que têm atendimento. O próximo fica em destaque.
  var zDiasSemana = [
    { id: "2026-11-02", sem: "Seg", n: 2 },
    { id: "2026-11-03", sem: "Ter", n: 3 },
    { id: "2026-11-04", sem: "Qua", n: 4 },
    { id: "2026-11-05", sem: "Qui", n: 5 },
    { id: "2026-11-06", sem: "Sex", n: 6 },
    { id: "2026-11-07", sem: "S\xE1b", n: 7 },
    { id: "2026-11-08", sem: "Dom", n: 8 },
  ];
  function zSemanaFaixa({ agenda: ag, proximo: m, ver: vr, agendar: agd }) {
    return (0, r.jsxs)("div", {
      className: "semana",
      children: [
        (0, r.jsx)("ol", {
          className: "semana-dias",
          "aria-label": "Esta semana, de 2 a 8 de novembro",
          children: zDiasSemana.map((d) => {
            let tem = ag.filter((x) => x.diaId === d.id),
              prox = m && m.diaId === d.id;
            return (0, r.jsxs)(
              "li",
              {
                className: "semana-dia" + (prox ? " semana-dia--prox" : "") + (d.id === zIso(zHoje) ? " semana-dia--hoje" : ""),
                "aria-label": (d.id === zIso(zHoje) ? "Hoje, " : "") + d.sem + " " + d.n + (tem.length ? ", " + tem.length + (tem.length === 1 ? " atendimento" : " atendimentos") : ""),
                children: [
                  (0, r.jsx)("span", { className: "semana-sem", "aria-hidden": "true", children: d.id === zIso(zHoje) ? "Hoje" : d.sem }),
                  (0, r.jsx)("span", { className: "semana-n", "aria-hidden": "true", children: d.n }),
                  (0, r.jsx)("span", { className: "semana-ponto" + (tem.length ? " semana-ponto--on" : ""), "aria-hidden": "true" }),
                ],
              },
              d.id,
            );
          }),
        }),
        m
          ? (0, r.jsxs)("div", {
              className: "semana-detalhe",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("p", { className: "semana-quando", children: ["O pr\xF3ximo atendimento \xE9 ", m.dia.toLowerCase().replace(/^hoje/, "hoje"), ", \xE0s ", m.hora] }),
                    (0, r.jsxs)("p", { className: "apoio", children: [m.prof.area, " com ", m.prof.nome, ". ", zOndeTexto(m), "."] }),
                  ],
                }),
                (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: vr, children: "Ver agendamento" }),
              ],
            })
          : (0, r.jsxs)("div", {
              className: "semana-detalhe",
              children: [
                (0, r.jsx)("p", { className: "apoio", children: "Nenhum atendimento marcado nesta semana. Escolha um profissional para marcar." }),
                (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: agd, children: "Ver profissionais" }),
              ],
            }),
      ],
    });
  }
  // Cartão de profissional, para a grade (Início e Atendimentos)
  function zCartaoProf({ p: f, agenda: ag, abrir: ab }) {
    let livres = M2(f, ag),
      ja = ag.some((x) => x.profId === f.id),
      online = /Online/.test(f.onde);
    return (0, r.jsxs)("article", {
      className: "cartao-prof",
      "aria-labelledby": "cp-" + f.id,
      children: [
        (0, r.jsxs)("div", {
          className: "cartao-prof-topo",
          children: [
            (0, r.jsx)(qr, { p: f }),
            f.agora && (0, r.jsx)(zStatus, { s: "hoje" }),
          ],
        }),
        (0, r.jsx)("h3", { id: "cp-" + f.id, className: "cartao-prof-nome", children: f.nome }),
        (0, r.jsx)(zSelo, {}),
        (0, r.jsxs)("p", { className: "cartao-prof-area", children: [f.area, (0, r.jsxs)("span", { className: "apoio", children: [" \xB7 ", f.foco] })] }),
        (0, r.jsxs)("p", {
          className: "cartao-prof-info",
          children: [(0, r.jsx)(la, { n: online && !f.modos ? "video" : "local", size: 16 }), f.modos ? "Presencial ou online" : online ? "Online por v\xEDdeo" : f.onde.replace(/^Presencial (em|na|no) /, "Presencial: ")],
        }),
        (0, r.jsxs)("p", {
          className: "cartao-prof-info",
          children: [(0, r.jsx)(la, { n: "relogio", size: 16 }), livres ? D2(f, ag).replace(/^Hoje, [^,]+, [^,]+/, "Hoje") : "Sem hor\xE1rios livres nesta semana"],
        }),
        ja && (0, r.jsx)("p", { className: "cartao-prof-ja", children: "Voc\xEA j\xE1 tem hor\xE1rio marcado." }),
        (0, r.jsx)("div", {
          className: "cartao-prof-acao",
          children: (0, r.jsx)(ia, {
            sec: !0,
            peq: !0,
            disabled: !livres,
            "aria-disabled": !livres,
            onClick: () => livres && ab(f.id),
            children: livres ? "Ver hor\xE1rios" : "Sem hor\xE1rios",
          }),
        }),
      ],
    });
  }
  function ZS({
    usuario: a,
    papel: o,
    diag: e,
    agenda: t,
    irPara: n,
    abrirTopico: l,
    abrirDica: s,
    abrirProf: i,
    numeros: nums,
  }) {
    let zAreas = {
        terapias: ["Terapia ocupacional", "Fisioterapia", "Fonoaudiologia"],
        emocional: ["Psicologia"],
        rotina: ["Terapia ocupacional", "Psicologia", "Nutri\xE7\xE3o"],
        comunicacao: ["Fonoaudiologia"],
        mobilidade: ["Fisioterapia"],
        cuidador: ["Psicologia"],
      },
      zRel = (f) => {
        let k = 0;
        (e.direcionamento.forEach((d) => {
          (zAreas[d] || []).includes(f.area) && (k += 2);
        }),
          (e.tipo || []).includes("tea") && /TEA/.test(f.foco) && (k += 2),
          (e.especificidades || []).includes("engolir") &&
            /engasg|alimenta/.test(f.foco) &&
            (k += 1));
        return k;
      },
      c = [...At]
        .map((f, k) => ({ f, k, rel: zRel(f) }))
        .filter((x) => x.rel > 0 || x.f.agora)
        .sort((x, y) => y.rel - x.rel || y.f.agora - x.f.agora || x.k - y.k)
        .map((x) => x.f),
      m = zSort(t)[0],
      pessoa = o === "responsavel" && (e.pessoa || "").trim(),
      ic = { "F\xF3rum": "forum", "Orienta\xE7\xE3o": "orientacoes", Atendimento: "calendario" },
      I = (0, L.useMemo)(() => {
        let f = e.direcionamento,
          u = Object.fromEntries(Nm.map((d) => [d.id, d])),
          g = Object.fromEntries(zr.map((d) => [d.id, d])),
          v = (d) =>
            `${d.respostas.length} ${d.respostas.length === 1 ? "resposta" : "respostas"}`,
          A = (d) => ({
            k: d,
            tipo: "F\xF3rum",
            titulo: u[d].titulo,
            meta: `${u[d].autor}${u[d].cidade ? ", " + u[d].cidade : ""} \xB7 ${v(u[d])}`,
            dir: u[d].dir,
            go: () => l(d),
          }),
          y = (d) => ({
            k: d,
            tipo: "Orienta\xE7\xE3o",
            titulo: g[d].titulo,
            meta: `${g[d].autor} \xB7 ${g[d].area}`,
            dir: g[d].dir,
            go: () => s(d),
          }),
          h = [
            A("t6"),
            y("d8"),
            A("t7"),
            y("d9"),
            A("t1"),
            y("d6"),
            A("t2"),
            y("d2"),
            {
              k: "a1",
              tipo: "Atendimento",
              titulo: "Terapia ocupacional: hor\xE1rios abertos nesta semana",
              meta: "Online e presencial em Recife",
              dir: "terapias",
              go: () => n("atendimentos"),
            },
            A("t3"),
            y("d4"),
            A("t4"),
            y("d3"),
            y("d5"),
            y("d7"),
            y("d1"),
            A("t5"),
          ];
        if (o === "voluntario")
          return [
            ...[A("t1"), A("t4"), A("t2")].map((S) => ({
              ...S,
              motivo: "Espera a resposta de um profissional",
            })),
            { ...A("t5"), motivo: "Conversa de quem cuida" },
            { ...y("d1"), motivo: "Orienta\xE7\xE3o recente da sua \xE1rea" },
          ].slice(0, 5);
        let p = (d) => (f.includes(d.dir) ? 0 : 1);
        return h
          .map((d, S) => ({ ...d, i: S }))
          .sort((d, S) => p(d) - p(S) || d.i - S.i)
          .slice(0, 5)
          .map((d) => ({
            ...d,
            motivo: f.includes(d.dir) ? `Voc\xEA escolheu ${w2[d.dir].toLowerCase()}` : "Para come\xE7ar",
          }));
      }, [e.direcionamento, o]);
    return (0, r.jsxs)("section", {
      className: "entra inicio",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca cabeca-linha cabeca--acolhe",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", {
                  tabIndex: -1,
                  children: a.nome ? `Ol\xE1, ${a.nome.split(" ")[0]}` : "Ol\xE1",
                }),
                (0, r.jsx)("p", {
                  className: "lead",
                  children:
                    o === "voluntario"
                      ? "Veja onde a sua resposta pode ajudar hoje."
                      : pessoa
                        ? "Respons\xE1vel por " + pessoa + "."
                        : o === "pcd"
                          ? "Sua conta pessoal."
                          : "Respons\xE1vel.",
                }),
              ],
            }),
            o === "voluntario"
              ? (0, r.jsx)(ia, { icone: "calendario", onClick: () => n("atendimentos"), children: "Ver minha agenda" })
              : (0, r.jsx)(ia, { icone: "calendario", onClick: () => n("atendimentos-buscar"), children: "Agendar consulta" }),
          ],
        }),
        nums && (0, r.jsx)(zNumeros, { itens: nums, rotulo: "Resumo" }),
        o !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "secao",
            children: [
              (0, r.jsx)(zSecaoTopo, { id: "semana-h", titulo: "Esta semana", atalho: ["Ver agendamentos", () => n("atendimentos-meus")] }),
              (0, r.jsx)(zSemanaFaixa, { agenda: t, proximo: m, ver: () => n("atendimentos-meus"), agendar: () => n("atendimentos-buscar") }),
            ],
          }),
        o !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "secao",
            children: [
              (0, r.jsx)(zSecaoTopo, {
                id: "disp-h",
                titulo: pessoa ? "Profissionais para " + pessoa : "Profissionais para voc\xEA",
                sub: "Escolhidos pelas suas respostas.",
                atalho: ["Ver todos", () => n("atendimentos-buscar")],
              }),
              (0, r.jsx)("div", {
                className: "grade-prof",
                role: "list",
                "aria-labelledby": "disp-h",
                children: c.slice(0, 3).map((f) => (0, r.jsx)("div", { role: "listitem", children: (0, r.jsx)(zCartaoProf, { p: f, agenda: t, abrir: i }) }, f.id)),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)(zSecaoTopo, {
              id: "feed-h",
              titulo: o === "voluntario" ? "Para voc\xEA responder" : "Para voc\xEA",
              sub: o === "voluntario" ? "Os temas em que a sua \xE1rea mais ajuda." : null,
              atalho: o === "voluntario" ? ["Ver o f\xF3rum", () => n("forum")] : ["Ver todas as orienta\xE7\xF5es", () => n("dicas")],
            }),
            (0, r.jsx)("ul", {
              className: "lista-linhas",
              "aria-labelledby": "feed-h",
              children: I.map((f) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "item-linha",
                      onClick: f.go,
                      children: [
                        (0, r.jsx)("span", { className: "item-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: ic[f.tipo], size: 20 }) }),
                        (0, r.jsxs)("span", {
                          className: "linha-texto",
                          children: [
                            (0, r.jsx)("span", { className: "linha-titulo", children: f.titulo }),
                            (0, r.jsxs)("span", { className: "apoio linha-meta", children: [f.tipo, " \xB7 ", f.meta, " \xB7 ", f.motivo] }),
                          ],
                        }),
                        (0, r.jsx)(la, { n: "avancar", size: 20 }),
                      ],
                    }),
                  },
                  f.k,
                ),
              ),
            }),
          ],
        }),
        (0, r.jsxs)("p", {
          className: "aviso-192",
          children: [
            (0, r.jsx)(la, { n: "telefone", size: 20 }),
            (0, r.jsxs)("span", {
              children: [
                "Em risco de vida, ligue 192. ",
                (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: () => n("ajuda"),
                  children: "Ver telefones e orienta\xE7\xF5es",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  var jS = [
      { id: "claro", rotulo: "Claro", ic: "sol", sub: "\xC9 o tema padr\xE3o." },
      { id: "escuro", rotulo: "Escuro", ic: "lua", sub: "Cansa menos a vista \xE0 noite." },
      { id: "alto-contraste", rotulo: "Alto contraste", ic: "contraste", sub: "Preto no branco, para quem enxerga pouco." },
    ],
    zLetras = [
      { id: "padrao", rotulo: "Padr\xE3o" },
      { id: "grande", rotulo: "Grande" },
      { id: "maior", rotulo: "Maior" },
    ];
  // Escolha em faixa (tema, tamanho da letra). Usa o mesmo estilo de selecionado do resto do app.
  function zSegmento({ itens: it, valor: v, mudar: md, rotulo: rt }) {
    return (0, r.jsx)("div", {
      className: "segmentado",
      role: "radiogroup",
      "aria-label": rt,
      children: it.map((x) =>
        (0, r.jsxs)(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": v === x.id,
            onClick: () => md(x.id),
            children: [x.ic && (0, r.jsx)(la, { n: x.ic, size: 20 }), x.rotulo],
          },
          x.id,
        ),
      ),
    });
  }
  function XS({
    usuario: a,
    setUsuario: o,
    diag: e,
    setDiag: sd,
    papel: t,
    tema: n,
    setTema: l,
    letra: lt,
    setLetra: slt,
    priv: pv,
    setPriv: spv,
    sair: i,
  }) {
    let [c, m] = (0, L.useState)(a.nome),
      [I, f] = (0, L.useState)(!1),
      [u, g] = (0, L.useState)(""),
      [ocupado, agir] = zUseAcao(),
      [refazer, setRefazer] = (0, L.useState)(null),
      [passo, setPasso] = (0, L.useState)(1),
      v = (y) => {
        if ((y.preventDefault(), !c.trim()))
          return g("Falta o nome. Exemplo: Marina");
        (g(""), agir(() => (o({ ...a, nome: c.trim() }), f(!0))));
      },
      A = (y, h) =>
        h
          .map((p) => y.find((d) => d.id === p)?.rotulo)
          .filter(Boolean)
          .join(", ") || "N\xE3o informado",
      resp = t === "responsavel",
      pessoa = (e.pessoa || "").trim(),
      papelTxt = { responsavel: "Respons\xE1vel", pcd: "Pessoa com defici\xEAncia", voluntario: "Volunt\xE1rio" }[t] || "";
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)("header", {
          className: "cabeca",
          children: (0, r.jsx)("h1", { tabIndex: -1, children: "Perfil" }),
        }),
        (0, r.jsxs)("div", {
          className: "bloco",
          children: [
            (0, r.jsxs)("div", {
              className: "bloco-topo",
              children: [
                (0, r.jsx)("span", { className: "avatar", "aria-hidden": "true", children: zIniciais(a.nome) || (0, r.jsx)(la, { n: "perfil", size: 20 }) }),
                (0, r.jsxs)("div", {
                  children: [(0, r.jsx)("h2", { children: "Voc\xEA" }), (0, r.jsx)("p", { className: "apoio", children: papelTxt })],
                }),
              ],
            }),
            (0, r.jsxs)("form", {
              onSubmit: v,
              noValidate: !0,
              children: [
                (0, r.jsx)(Za, {
                  id: "p-nome",
                  rotulo: "Seu nome",
                  value: c,
                  onChange: (y) => {
                    (m(y.target.value), f(!1), u && g(""));
                  },
                  erro: u,
                }),
                (0, r.jsx)(Za, {
                  id: "p-email",
                  rotulo: (0, r.jsxs)("span", {
                    className: "rotulo-bloqueado",
                    children: [(0, r.jsx)(la, { n: "cadeado", size: 16 }), "E-mail"],
                  }),
                  value: a.email,
                  readOnly: !0,
                  "aria-readonly": "true",
                  ajuda: "Para trocar o e-mail, pe\xE7a pelo chat.",
                }),
                I && (0, r.jsx)("div", { className: "alerta-bloco", children: (0, r.jsx)(Do, { tipo: "ok", children: "Altera\xE7\xF5es salvas." }) }),
                (0, r.jsx)(ia, { type: "submit", ocupado, textoOcupado: "Salvando…", children: "Salvar altera\xE7\xF5es" }),
              ],
            }),
          ],
        }),
        t !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "bloco",
            children: [
              (0, r.jsxs)("div", {
                className: "bloco-topo",
                children: [
                  (0, r.jsx)("span", { className: "avatar avatar--pessoa", "aria-hidden": "true", children: resp && pessoa ? zIniciais(pessoa) : (0, r.jsx)(la, { n: "apoio", size: 20 }) }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", { children: resp ? pessoa || "Pessoa cuidada" : "Sua sa\xFAde" }),
                      (0, r.jsx)("p", { className: "apoio", children: resp ? "Pessoa cuidada" : "O que o zElo mostra primeiro" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("dl", {
                children: [
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "Defici\xEAncia" }),
                      (0, r.jsx)("dd", {
                        children: A(Em, e.tipo || []).replace("Outra", e.tipoOutra ? "Outra: " + e.tipoOutra : "Outra"),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [(0, r.jsx)("dt", { children: "\xC1reas de sa\xFAde" }), (0, r.jsx)("dd", { children: A(El, e.direcionamento) })],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [(0, r.jsx)("dt", { children: "Dia a dia" }), (0, r.jsx)("dd", { children: A(Lm, e.especificidades) })],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "acoes",
                children: (0, r.jsx)(ia, {
                  sec: !0,
                  icone: "editar",
                  onClick: () => (setRefazer({ ...e }), setPasso(1)),
                  children: "Refazer as perguntas",
                }),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "bloco",
          children: [
            (0, r.jsx)("h2", { id: "acess-h", children: "Acessibilidade" }),
            (0, r.jsx)("h3", { className: "h-pequeno", children: "Tema" }),
            (0, r.jsx)(zSegmento, { itens: jS, valor: n, mudar: l, rotulo: "Tema" }),
            (0, r.jsx)("p", { className: "apoio campo-ajuda", children: (jS.find((x) => x.id === n) || jS[0]).sub }),
            (0, r.jsx)("h3", { className: "h-pequeno", style: { marginTop: 24 }, children: "Tamanho da letra" }),
            (0, r.jsx)(zSegmento, { itens: zLetras, valor: lt, mudar: slt, rotulo: "Tamanho da letra" }),
          ],
        }),
        pv &&
          (0, r.jsxs)("div", {
            className: "bloco",
            children: [
              (0, r.jsxs)("div", {
                className: "bloco-topo",
                children: [(0, r.jsx)("span", { className: "item-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: "privacidade", size: 20 }) }), (0, r.jsx)("h2", { children: "Privacidade" })],
              }),
              (0, r.jsx)("p", { className: "apoio", style: { marginBottom: 12 }, children: "Você aceitou o uso dos dados necessário para o zElo funcionar. As escolhas abaixo são opcionais." }),
              [
                ["cidade", "Mostrar minha cidade nas publicações do fórum"],
                ["ana", "Guardar as perguntas que a Ana não souber responder"],
              ].map(([k, t]) =>
                (0, r.jsxs)(
                  "label",
                  {
                    className: "consentimento" + (pv[k] ? " consentimento--on" : ""),
                    children: [(0, r.jsx)("input", { type: "checkbox", checked: !!pv[k], onChange: (ev) => spv({ ...pv, [k]: ev.target.checked }) }), (0, r.jsx)("span", { className: "consentimento-titulo", children: t })],
                  },
                  k,
                ),
              ),
            ],
          }),
        (0, r.jsx)(zSemRespostaBloco, {}),
        (0, r.jsx)("div", {
          className: "bloco bloco--fim",
          children: (0, r.jsx)(ia, { sec: !0, icone: "sair", onClick: i, children: "Sair do zElo" }),
        }),
        refazer &&
          (0, r.jsx)(zJanela, {
            titulo: "Refazer as perguntas",
            fechar: () => setRefazer(null),
            children: (0, r.jsx)(GS, {
              naJanela: !0,
              papel: t,
              passo,
              setPasso: setPasso,
              diag: refazer,
              setDiag: setRefazer,
              concluir: () => (sd(refazer), setRefazer(null)),
              sair: () => setRefazer(null),
            }),
          }),
      ],
    });
  }
  function zSemRespostaBloco() {
    let [l, setL] = (0, L.useState)(zSemRespostaLer),
      [copiou, setCopiou] = (0, L.useState)(!1),
      fmt = (q) => new Date(q).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }),
      copiar = () => {
        let t = l.map((x) => fmt(x.quando) + "\t" + x.texto + (x.perto ? "\t(mais parecida: " + x.perto + ")" : "")).join("\n");
        (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
          () => setCopiou(!0),
          () => setCopiou(!1),
        );
      };
    return (0, r.jsxs)("div", {
      className: "bloco",
      children: [
        (0, r.jsx)("h2", { children: "Perguntas que a Ana n\xE3o soube responder" }),
        (0, r.jsx)("p", {
          className: "secao-sub",
          children:
            "A equipe usa esta lista para ensinar respostas novas \xE0 Ana. Neste prot\xF3tipo ela fica s\xF3 neste aparelho.",
        }),
        l.length
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("ul", {
                  className: "sem-resposta",
                  children: l.slice(0, 8).map((x, k) =>
                    (0, r.jsxs)("li", { children: [(0, r.jsx)("span", { children: x.texto }), (0, r.jsx)("span", { className: "apoio", children: fmt(x.quando) })] }, k),
                  ),
                }),
                l.length > 8 && (0, r.jsxs)("p", { className: "apoio", children: ["E mais ", l.length - 8, ". O bot\xE3o copia todas."] }),
                (0, r.jsxs)("div", {
                  className: "acoes",
                  children: [
                    (0, r.jsx)(ia, { sec: !0, onClick: copiar, children: "Copiar lista (" + l.length + ")" }),
                    (0, r.jsx)(ia, {
                      sec: !0,
                      onClick: () => {
                        try {
                          localStorage.removeItem(zSemRespostaChave);
                        } catch (x) {}
                        (setL([]), setCopiou(!1));
                      },
                      children: "Apagar lista",
                    }),
                    copiou && (0, r.jsx)("span", { className: "apoio", role: "status", children: "Copiada. Cole numa planilha ou mensagem para a equipe." }),
                  ],
                }),
              ],
            })
          : (0, r.jsx)("p", { className: "apoio", children: "Nenhuma por enquanto. Quando a Ana n\xE3o souber responder, a pergunta aparece aqui." }),
      ],
    });
  }
  var xrPadrao = [
      "Tenho uma d\xFAvida sobre o sono",
      "Tenho uma d\xFAvida sobre a alimenta\xE7\xE3o",
      "Estou sem energia hoje",
      "Quero falar com um profissional",
    ],
    xr = xrPadrao,
    zAtalhoDir = {
      emocional: "Tenho uma d\xFAvida sobre crises e comportamento",
      comunicacao: "Tenho uma d\xFAvida sobre comunica\xE7\xE3o",
      rotina: "Tenho uma d\xFAvida sobre o sono",
      cuidador: "Estou sem energia hoje",
      mobilidade: "Tenho uma d\xFAvida sobre dor e postura",
      terapias: "Tenho uma d\xFAvida sobre terapias",
    };
  function zAtalhos(diag) {
    let d = (diag && diag.direcionamento) || [];
    if (!d.length) return xrPadrao;
    let l = [];
    (d.forEach((k) => {
      let t = zAtalhoDir[k];
      t && !l.includes(t) && l.push(t);
    }),
      d.includes("rotina") && l.push("Tenho uma d\xFAvida sobre a alimenta\xE7\xE3o"));
    return [...l.slice(0, 3), "S\xF3 quero conversar", "Quero falar com um profissional"];
  }
  var O2 = {
      sono: [
        "1. Mantenha hor\xE1rios parecidos para dormir e acordar, inclusive no fim de semana.",
        "2. Diminua luz, telas e barulho uma hora antes de dormir. Repita sempre a mesma sequ\xEAncia.",
        "3. Anote por duas semanas a hora de dormir e os despertares. Se n\xE3o melhorar, leve o registro a um profissional.",
      ],
      alimentacao: [
        "1. Sente a pessoa com as costas retas e os p\xE9s apoiados, em um lugar calmo e sem televis\xE3o.",
        "2. Ofere\xE7a pequenas por\xE7\xF5es, devagar, e espere engolir antes da pr\xF3xima.",
        "3. Se houver tosse ou engasgo repetido nas refei\xE7\xF5es, pe\xE7a avalia\xE7\xE3o de um fonoaudi\xF3logo. Se a pessoa n\xE3o consegue respirar, ligue 192.",
      ],
      crises: [
        "1. Antes: repare no que vem antes da crise. Fome, cansa\xE7o, barulho ou troca de atividade costumam pesar.",
        "2. Durante: fale pouco e devagar, leve a pessoa para um lugar quieto e afaste o que pode machucar.",
        "3. Depois: cuide de voc\xEA tamb\xE9m. Se as crises aumentarem, converse com um psic\xF3logo.",
      ],
      comunicacao: [
        "1. Comece com quatro ou cinco figuras do que a pessoa mais pede: \xE1gua, comida, banheiro, brincar.",
        "2. Aponte a figura enquanto fala a palavra. A pessoa aprende vendo voc\xEA usar.",
        "3. Quando ela apontar, atenda logo. Assim ela entende que funciona. Um fonoaudi\xF3logo pode montar a prancha com voc\xEAs.",
      ],
      dor: [
        "1. Observe o que mudou: choro, recusa de comida, corpo mais r\xEDgido ou outra postura podem indicar dor.",
        "2. Anote quando acontece, o que a pessoa fazia e o que aliviou.",
        "3. Dor nova ou que n\xE3o passa merece avalia\xE7\xE3o. Um fisioterapeuta pode orientar a postura em casa.",
      ],
    },
    zLinkAtend = { rotulo: "Abrir Atendimentos", tela: "atendimentos" },
    zLinkDicas = { rotulo: "Abrir Orienta\xE7\xF5es", tela: "dicas" },
    zLink192 = { rotulo: "Ver telefones de emerg\xEAncia", tela: "ajuda" },
    Ll = (a) =>
      a
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
  // Hor\xE1rio da equipe de acolhimento. Ajuste aqui quando o grupo definir o hor\xE1rio real.
  var zAcolhimento = { abre: 8, fecha: 22, prazoHoras: 1 };
  function zStatusAcolhimento() {
    let h = new Date().getHours(),
      c = zAcolhimento,
      aberto = h >= c.abre && h < c.fecha;
    return {
      aberto,
      curto: aberto
        ? "Atende hoje at\xE9 as " + c.fecha + "h. Responde em at\xE9 " + c.prazoHoras + " hora"
        : "Fora do hor\xE1rio. Responde a partir das " + c.abre + "h",
      longo: aberto
        ? "A equipe atende das " + c.abre + "h \xE0s " + c.fecha + "h e costuma responder em at\xE9 " + c.prazoHoras + " hora."
        : "Agora a equipe est\xE1 fora do hor\xE1rio, que \xE9 das " + c.abre + "h \xE0s " + c.fecha + "h. Seu pedido fica guardado e \xE9 respondido a partir das " + c.abre + "h.",
    };
  }
  function zStatusAcolhimentoTexto() {
    let st = zStatusAcolhimento();
    return (0, r.jsx)("span", { className: st.aberto ? "online-ponto" : "fora-ponto", children: st.curto });
  }
  var zPedidoResposta = {
    get texto() {
      return (
        "Seu pedido foi para a equipe de acolhimento do zElo, que responde aqui no chat. " +
        zStatusAcolhimento().longo +
        " Enquanto isso, me conte em poucas palavras o que est\xE1 acontecendo. Se algu\xE9m corre risco de vida, ligue 192."
      );
    },
    links: [zLink192],
    opcoes: [],
    ctx: { f: "conversa", n: 0 },
  };
  var zRotuloTela = {
    atendimentos: "Abrir Atendimentos",
    forum: "Abrir F\xF3rum",
    dicas: "Abrir Orienta\xE7\xF5es",
    ajuda: "Ver telefones de emerg\xEAncia",
    perfil: "Abrir Perfil",
  };
  function zLinks(l) {
    return (l || []).map((t) => ({ rotulo: zRotuloTela[t], tela: t }));
  }
  function zPrimeira(p) {
    return p.charAt(0).toUpperCase() + p.slice(1) + (/[?]$/.test(p) ? "" : /^(como|qual|quais|o que|onde|quando|quem|posso|tem|ele|a |os |meu|precisa|e |\xE9 )/i.test(p) ? "?" : "");
  }
  var zLigar192 = [{ numero: "192", rotulo: "Ligar 192 \xB7 SAMU", sub: "Atende 24 horas, de gra\xE7a" }],
    zSemRespostaChave = "zelo-ana-sem-resposta";
  function zSemRespostaLer() {
    try {
      return JSON.parse(localStorage.getItem(zSemRespostaChave) || "[]");
    } catch (x) {
      return [];
    }
  }
  // Escolhas da tela de privacidade que mudam o que o app guarda ou mostra
  var zPriv = { cidade: !1, ana: !1 };
  function zSemRespostaGuardar(texto, perto) {
    if (!zPriv.ana) return;
    zBanco.guardarPerguntaAna(texto);
    try {
      let l = zSemRespostaLer();
      l.unshift({ texto: texto.slice(0, 300), quando: new Date().toISOString(), perto: perto || null });
      localStorage.setItem(zSemRespostaChave, JSON.stringify(l.slice(0, 200)));
    } catch (x) {}
  }
  function zRespostaBase(m, ctx) {
    let emerg = m.e.tema === "emergencia";
    return {
      texto: m.e.resposta,
      acoes: emerg && m.e.id !== "violencia" ? zLigar192 : void 0,
      rodape: emerg && m.e.id !== "violencia" ? zSaudeRodape() : void 0,
      links: zLinks(m.e.links),
      opcoes: m.e.sugestoes || [],
      ctx: m.e.id === "so-conversar" ? { f: "conversa", n: 0 } : ctx,
    };
  }
  function YS(a, o) {
    let e = Ll(a),
      conversa = o && o.f === "conversa",
      ctxC = conversa ? { f: "conversa", n: o.n + 1 } : null;
    // 1. Risco emocional grave: sempre antes da busca por semelhan\xE7a
    if (zAnaRisco.padroes.some((re) => re.test(e)))
      return {
        texto: zAnaRisco.texto,
        acoes: zAnaRisco.acoes,
        extra: zAnaRisco.extra,
        links: zLinks(["atendimentos"]),
        opcoes: zAnaRisco.opcoes,
        ctx: { f: "conversa", n: 1 },
      };
    // 2. Emerg\xEAncia m\xE9dica descrita com palavras de urg\xEAncia
    if (
      /nao respira|sem respirar|convulsionando|convulsao agora|desmaiou|desmaiado|sangrando muito|engasgou|engasgad|ficou roxo|nao acorda|bateu a cabeca/.test(
        e,
      )
    ) {
      let mr = zAna.buscar(a).melhor;
      if (mr && mr.e.tema === "emergencia" && mr.pts >= 0.25) return zRespostaBase(mr, { f: "conversa", n: 1 });
      return {
        texto:
          "Isso pode ser uma emerg\xEAncia. Se h\xE1 risco de vida, ligue agora para o SAMU, no 192. Na tela Preciso de ajuda h\xE1 os passos para convuls\xE3o, engasgo, crise e queda.",
        acoes: zLigar192,
        links: [zLink192],
        opcoes: ["Continuar conversando"],
        ctx: { f: "conversa", n: 1 },
      };
    }
    if (/pedir ajuda/.test(e)) return zPedidoResposta;
    if (/continuar conversando/.test(e))
      return {
        texto: "Estou aqui. Pode escrever do seu jeito, sem pressa.",
        opcoes: [],
        ctx: { f: "conversa", n: 0 },
      };
    if (/^(oi+|ola|bom dia|boa tarde|boa noite|e ai|opa|hey)[\s!.]*$/.test(e))
      return {
        texto: "Oi. Pode me perguntar sobre o cuidado do dia a dia ou sobre como usar o zElo. Se preferir, a gente s\xF3 conversa.",
        opcoes: xr,
        ctx: null,
      };
    if (/^(agora nao|entendi|ok|voltar ao inicio|nao quero)$/.test(e))
      return {
        texto: "Tudo bem. Quando quiser, escolha uma op\xE7\xE3o ou escreva do seu jeito.",
        opcoes: xr,
        ctx: null,
      };
    let r = zAna.buscar(a),
      m = r.melhor;
    if (m && m.pts >= (conversa ? 0.5 : 0.4)) return zRespostaBase(m, ctxC);
    if (conversa) {
      let n = o.n + 1,
        oferecer = n >= 2,
        resp =
          /cansad|exaust|sem energia|nao aguento|esgotad/.test(e)
            ? "Cuidar o tempo todo cansa mesmo, e faz sentido voc\xEA estar assim. Teve algum momento hoje s\xF3 para voc\xEA, nem que seja curto?"
            : /trist|chor|deprimid|desanim/.test(e)
              ? "Sinto muito que hoje esteja pesado. Chorar tamb\xE9m \xE9 um jeito de aliviar. O que deixou o dia mais dif\xEDcil?"
              : /medo|preocup|ansios|nervos|insegur/.test(e)
                ? "\xC9 natural sentir medo quando a gente cuida de algu\xE9m que ama. O que mais te preocupa agora?"
                : /sozinh|ninguem|abandon/.test(e)
                  ? "Voc\xEA n\xE3o est\xE1 s\xF3. Aqui no zElo h\xE1 outras fam\xEDlias que passam por coisas parecidas. Quer me contar mais?"
                  : /grit|crise|agressiv|bate|se joga|birra/.test(e)
                    ? "Isso \xE9 dif\xEDcil de viver, e voc\xEA n\xE3o est\xE1 fazendo nada errado por n\xE3o saber. Na hora, ajuda falar pouco e levar a pessoa para um lugar mais quieto. Quer continuar me contando?"
                    : n === 1
                      ? "Obrigada por me contar. Estou ouvindo. Quer falar mais sobre isso?"
                      : "Entendo. Isso \xE9 muita coisa para carregar. Estou aqui com voc\xEA.";
      return {
        texto: resp,
        opcoes: oferecer
          ? ["Continuar conversando", "Quero falar com um profissional", "Ver orienta\xE7\xF5es para quem cuida"]
          : [],
        ctx: { f: "conversa", n },
        extra: oferecer
          ? "Se quiser, posso te mostrar outros caminhos. Ou podemos continuar s\xF3 conversando."
          : null,
      };
    }
    let perto = r.lista.filter((x) => x.pts >= 0.3).slice(0, 4);
    zSemRespostaGuardar(a, perto.length ? perto[0].e.id : null);
    if (perto.length)
      return {
        texto:
          "N\xE3o tenho certeza se entendi. Voc\xEA quis perguntar alguma destas?",
        opcoes: perto.map((x) => zPrimeira(x.e.perguntas[0])),
        ctx: null,
      };
    return {
      texto:
        "Ainda n\xE3o sei responder isso. Sou uma assistente autom\xE1tica, n\xE3o uma pessoa, e s\xF3 sei o que est\xE1 na base do zElo. Guardei sua pergunta para a equipe acrescentar na base. Enquanto isso, voc\xEA pode perguntar no F\xF3rum ou falar com um profissional.",
      links: zLinks(["forum", "atendimentos"]),
      opcoes: xr,
      ctx: null,
    };
  }
  // Mude para !0 quando o app for ao ar: os bot\xF5es passam a abrir a liga\xE7\xE3o de verdade.
  var zLigarDeVerdade = !1;
  function zBotaoLigar({ numero: n, rotulo: t, sub: s, classe: c }) {
    let [av, setAv] = (0, L.useState)(!1),
      corpo = [
        (0, r.jsx)(la, { n: "telefone", size: 24 }, "i"),
        (0, r.jsxs)("span", { className: "ligar-texto", children: [(0, r.jsx)("b", { children: t }), s && (0, r.jsx)("span", { children: s })] }, "t"),
      ];
    return (0, r.jsxs)("div", {
      className: "ligar-grupo",
      children: [
        zLigarDeVerdade
          ? (0, r.jsx)("a", { className: c || "btn-ligar btn-ligar--chat", href: "tel:" + n, children: corpo })
          : (0, r.jsx)("button", { type: "button", className: c || "btn-ligar btn-ligar--chat", onClick: () => setAv(!0), children: corpo }),
        av &&
          (0, r.jsx)("p", {
            className: "ligar-aviso",
            role: "status",
            children: "No celular, este bot\xE3o liga direto para o " + n + ". Neste prot\xF3tipo a liga\xE7\xE3o n\xE3o \xE9 feita.",
          }),
      ],
    });
  }
  function Mm(a) {
    let o = 12 + a;
    return `09:${String(o).padStart(2, "0")}`;
  }
  function QS({ usuario: a, chat: o, setChat: e, irPara: ir }) {
    let [t, n] = (0, L.useState)(""),
      [l, s] = (0, L.useState)(!1),
      i = (0, L.useRef)(null),
      c = (0, L.useRef)(null),
      ops = o.opcoes || xr;
    ((0, L.useEffect)(() => () => clearTimeout(c.current), []),
      (0, L.useEffect)(() => {
        i.current?.scrollIntoView({ block: "end" });
      }, [o.msgs.length, l]));
    let m = (I) => {
      let f = I.trim();
      if (!f || l) return;
      if (/^ver (dicas|orienta\xE7\xF5es) para quem cuida$/i.test(f)) return ir("dicas");
      let u = o.msgs.length,
        g = [...o.msgs, { de: "voce", texto: f, hora: Mm(u * 2) }];
      (e({ ...o, msgs: g, opcoes: [] }), n(""), s(!0));
      let v = YS(f, o.ctx);
      c.current = setTimeout(() => {
        let A = [{ de: "ana", texto: v.texto, hora: Mm(u * 2 + 1), acoes: v.acoes, rodape: v.rodape, links: v.extra ? void 0 : v.links }];
        (v.extra && A.push({ de: "ana", texto: v.extra, hora: Mm(u * 2 + 1), links: v.links }),
          e({ msgs: [...g, ...A], opcoes: v.opcoes, ctx: v.ctx }),
          s(!1));
      }, 900);
    };
    return (0, r.jsxs)("section", {
      className: "entra tela-chat",
      children: [
        (0, r.jsxs)("header", {
          className: "chat-topo",
          children: [
            (0, r.jsx)("span", { className: "avatar avatar--ana", "aria-hidden": "true", children: "A" }),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", { tabIndex: -1, children: "Ana" }),
                (0, r.jsxs)("p", {
                  className: "apoio",
                  children: "Assistente autom\xE1tica, n\xE3o \xE9 uma pessoa. Responde com a base de perguntas revisada pela equipe do zElo."
                }),
              ],
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "chat",
          children: [
            (0, r.jsxs)("p", {
              className: "chat-aviso",
              children: [
                (0, r.jsx)(la, { n: "cadeado", size: 16 }),
                " Conversa privada, n\xE3o aparece no f\xF3rum. Em emerg\xEAncia, ",
                (0, r.jsx)("button", {
                  type: "button",
                  className: "link link--perigo",
                  onClick: () => ir("ajuda"),
                  children: "ligue 192",
                }),
                ".",
              ],
            }),
            (0, r.jsxs)("div", {
              className: "chat-fluxo",
              role: "log",
              "aria-live": "polite",
              "aria-label": "Conversa com a Ana",
              children: [
                o.msgs.map((I, f) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: `msg msg--${I.de}${I.pedido ? " msg--pedido" : ""}`,
                      children: [
                        I.acoes &&
                          (0, r.jsx)("div", {
                            className: "msg-ligar",
                            children: I.acoes.map((k) => (0, r.jsx)(zBotaoLigar, { ...k }, k.numero)),
                          }),
                        (0, r.jsx)("div", { className: "balao", children: I.texto }),
                        I.rodape && (0, r.jsx)("p", { className: "msg-rodape", children: I.rodape }),
                        I.links &&
                          (0, r.jsx)("div", {
                            className: "msg-links",
                            children: I.links.map((k) =>
                              (0, r.jsxs)(
                                "button",
                                {
                                  type: "button",
                                  className: "msg-link",
                                  onClick: () => ir(k.tela),
                                  children: [k.rotulo, (0, r.jsx)(la, { n: "avancar", size: 18 })],
                                },
                                k.rotulo,
                              ),
                            ),
                          }),
                        (0, r.jsxs)("span", {
                          className: "apoio msg-meta",
                          children: [
                            I.de === "ana" ? "Ana" : "Voc\xEA",
                            " \xB7 ",
                            I.hora,
                            I.de === "voce" && o.msgs[f + 1] ? " \xB7 Lida" : "",
                          ],
                        }),
                      ],
                    },
                    f,
                  ),
                ),
                l &&
                  (0, r.jsx)("div", {
                    className: "msg msg--ana",
                    children: (0, r.jsx)("div", {
                      className: "balao balao--digitando",
                      children: "Ana est\xE1 procurando a resposta",
                    }),
                  }),
                (0, r.jsx)("div", { ref: i }),
              ],
            }),
            ops.length > 0 &&
              !l &&
              (0, r.jsx)("div", {
                className: "respostas-rapidas",
                role: "group",
                "aria-label": "Respostas sugeridas",
                children: ops.map((I) =>
                  (0, r.jsx)("button", { type: "button", className: "chip", onClick: () => m(I), children: I }, I),
                ),
              }),
            (0, r.jsx)("form", {
              className: "chat-form",
              onSubmit: (I) => {
                (I.preventDefault(), m(t));
              },
              children: (0, r.jsxs)("div", {
                className: "chat-form-linha",
                children: [
                  (0, r.jsx)("label", { htmlFor: "msg", className: "so-leitor", children: "Escreva sua mensagem" }),
                  (0, r.jsx)("input", {
                    id: "msg",
                    className: "campo-entrada chat-entrada",
                    placeholder: "Escreva do seu jeito...",
                    value: t,
                    onChange: (I) => n(I.target.value),
                    autoComplete: "off",
                  }),
                  (0, r.jsx)("button", {
                    type: "submit",
                    className: "chat-enviar",
                    disabled: !t.trim() || l,
                    "aria-label": "Enviar",
                    children: (0, r.jsx)(la, { n: "enviar", size: 22 }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
  function U2({ t: a }) {
    return (0, r.jsxs)(r.Fragment, {
      children: [
        a.autor,
        a.cidade ? " \xB7 " + a.cidade : "",
        " \xB7 ",
        a.quando,
        " \xB7 ",
        (0, r.jsxs)("span", {
          className: "contagem",
          children: [
            a.respostas.length,
            " ",
            a.respostas.length === 1 ? "resposta" : "respostas",
          ],
        }),
      ],
    });
  }
  function x2({ t: a }) {
    return (0, r.jsx)("span", {
      className: "etiquetas",
      children: a.etiquetas.map((o) =>
        o === "Novo"
          ? (0, r.jsx)(zStatus, { s: "novo" }, o)
          : o === "Resolvido"
            ? (0, r.jsx)(zStatus, { s: "resolvido" }, o)
            : (0, r.jsx)(Bo, { children: o }, o),
      ),
    });
  }
  function KS({ topicos: a, abrir: o, publicar: pb }) {
    let [novo, setNovo] = (0, L.useState)(!1);
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca cabeca-linha",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", { tabIndex: -1, children: "F\xF3rum" }),
                (0, r.jsx)("p", { className: "lead", children: "Conversas entre fam\xEDlias, pessoas com defici\xEAncia e profissionais." }),
              ],
            }),
            (0, r.jsx)(ia, { icone: "adicionar", onClick: () => setNovo(!0), children: "Novo t\xF3pico" }),
          ],
        }),
        (0, r.jsx)("p", { className: "apoio lista-legenda", children: "Mais recentes primeiro." }),
        (0, r.jsx)("ul", {
          className: "lista-linhas",
          "aria-label": "T\xF3picos do f\xF3rum",
          children: a.map((t) =>
            (0, r.jsx)(
              "li",
              {
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: "item-linha item-linha--topico",
                  onClick: () => o(t.id),
                  children: [
                    (0, r.jsxs)("span", {
                      className: "linha-texto",
                      children: [
                        (0, r.jsx)("span", { className: "linha-titulo", children: t.titulo }),
                        (0, r.jsx)("span", { className: "apoio linha-meta", children: (0, r.jsx)(U2, { t }) }),
                        (0, r.jsx)("span", { className: "linha-etiquetas", children: (0, r.jsx)(x2, { t }) }),
                      ],
                    }),
                    (0, r.jsx)(la, { n: "avancar", size: 20 }),
                  ],
                }),
              },
              t.id,
            ),
          ),
        }),
        novo && (0, r.jsx)(WS, { fechar: () => setNovo(!1), publicar: (H) => (setNovo(!1), pb(H)) }),
      ],
    });
  }
  function JS({ t: a, atualizar: e, usuario: t, papel: n }) {
    let [l, s] = (0, L.useState)(""),
      [i, c] = (0, L.useState)(null),
      [m, I] = (0, L.useState)(""),
      [ocupado, agir] = zUseAcao(),
      f = (0, L.useRef)(null),
      u = (y) =>
        e({
          ...a,
          respostas: a.respostas.map((h) =>
            h.id === y
              ? {
                  ...h,
                  meuApoio: !h.meuApoio,
                  apoio: h.apoio + (h.meuApoio ? -1 : 1),
                }
              : h,
          ),
        }),
      g = (y) => {
        let h = y === "apoio" ? "meuApoio" : "meuAjudou";
        e({ ...a, [h]: !a[h], [y]: a[y] + (a[h] ? -1 : 1) });
      },
      v = (y) => {
        if ((y.preventDefault(), !l.trim()))
          return I("Falta escrever a resposta. Conte em poucas frases o que voc\xEA viveu ou sabe.");
        (I(""),
          agir(() => {
            (e({
              ...a,
              respostas: [
                ...a.respostas,
                {
                  id: `r${Date.now()}`,
                  autor: t.nome || "Voc\xEA",
                  cidade: zPriv.cidade ? "Recife" : "",
                  quando: "agora",
                  apoio: 0,
                  texto: l.trim(),
                  em: i,
                  profissional: n === "voluntario",
                },
              ],
            }),
              s(""),
              c(null));
          }));
      },
      A = (y) => {
        (c(y.autor), f.current?.focus());
      },
      // Respostas de profissionais primeiro
      ordem = [...a.respostas.filter((x) => x.profissional), ...a.respostas.filter((x) => !x.profissional)];
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("article", {
          className: "post",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
            (0, r.jsx)("span", { className: "apoio post-meta", children: (0, r.jsx)(U2, { t: a }) }),
            (0, r.jsx)("div", { className: "post-etiquetas", children: (0, r.jsx)(x2, { t: a }) }),
            (0, r.jsx)("p", { className: "post-corpo", children: a.corpo }),
            (0, r.jsxs)("div", {
              className: "reacoes",
              children: [
                (0, r.jsxs)(ia, {
                  sec: !0,
                  peq: !0,
                  icone: "apoio",
                  "aria-pressed": !!a.meuApoio,
                  onClick: () => g("apoio"),
                  children: ["Apoiar (", a.apoio, ")"],
                }),
                (0, r.jsxs)(ia, {
                  sec: !0,
                  peq: !0,
                  icone: "confirmar",
                  "aria-pressed": !!a.meuAjudou,
                  onClick: () => g("ajudou"),
                  children: ["Me ajudou (", a.ajudou, ")"],
                }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("h2", {
          className: "respostas-titulo",
          children: a.respostas.length ? [a.respostas.length, " ", a.respostas.length === 1 ? "resposta" : "respostas"] : "Ainda sem respostas",
        }),
        !a.respostas.length && (0, r.jsx)("p", { className: "apoio", children: "Seja a primeira pessoa a responder. Conte o que voc\xEA viveu ou sabe." }),
        (0, r.jsx)("ul", {
          className: "respostas",
          children: ordem.map((y) =>
            (0, r.jsxs)(
              "li",
              {
                className: "resposta" + (y.profissional ? " resposta--prof" : ""),
                children: [
                  y.profissional && (0, r.jsx)(zSelo, { nome: y.autor }),
                  (0, r.jsxs)("span", {
                    className: "apoio resposta-meta",
                    children: [(0, r.jsx)("b", { children: y.autor }), y.cidade ? " \xB7 " + y.cidade : "", " \xB7 ", y.quando],
                  }),
                  y.em && (0, r.jsxs)("span", { className: "apoio resposta-em", children: ["Em resposta a ", y.em] }),
                  (0, r.jsx)("p", { children: y.texto }),
                  (0, r.jsxs)("div", {
                    className: "acoes-resposta",
                    children: [
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        "aria-pressed": !!y.meuApoio,
                        onClick: () => u(y.id),
                        children: [(0, r.jsx)(la, { n: "apoio", size: 20 }), "Apoiar (", y.apoio, ")"],
                      }),
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        onClick: () => A(y),
                        children: [(0, r.jsx)(la, { n: "conversa", size: 20 }), "Responder"],
                      }),
                    ],
                  }),
                ],
              },
              y.id,
            ),
          ),
        }),
        (0, r.jsxs)("form", {
          className: "composer",
          onSubmit: v,
          noValidate: !0,
          children: [
            (0, r.jsx)("h2", { className: "composer-titulo", children: "Sua resposta" }),
            i &&
              (0, r.jsxs)("div", {
                className: "contexto-resposta",
                children: [
                  (0, r.jsxs)("span", { children: ["Respondendo a ", (0, r.jsx)("b", { children: i })] }),
                  (0, r.jsx)("button", { type: "button", className: "link", onClick: () => c(null), children: "Cancelar" }),
                ],
              }),
            (0, r.jsx)(Za, {
              id: "resp",
              como: "textarea",
              rotulo: "Escreva o que voc\xEA viveu ou sabe",
              ref: f,
              value: l,
              onChange: (y) => (s(y.target.value), m && I("")),
              erro: m,
            }),
            (0, r.jsx)(ia, { type: "submit", icone: "enviar", ocupado, textoOcupado: "Enviando…", children: "Enviar resposta" }),
          ],
        }),
      ],
    });
  }
  // Novo tópico: janela por cima do fórum, com o formulário e a prévia do tópico
  function WS({ fechar: a, publicar: o }) {
    let [e, t] = (0, L.useState)({ titulo: "", dir: "", corpo: "" }),
      [n, l] = (0, L.useState)({}),
      [ocupado, agir] = zUseAcao(),
      enviar = (i) => {
        i.preventDefault();
        let c = {};
        (e.titulo.trim() || (c.titulo = "Falta o t\xEDtulo. Exemplo: O que ajuda a dormir melhor?"),
          e.dir || (c.dir = "Escolha um assunto na lista."),
          e.corpo.trim() || (c.corpo = "Falta contar o que aconteceu. Duas ou tr\xEAs frases bastam."),
          l(c),
          Object.keys(c).length ? Or() : agir(() => o(e)));
      };
    return (0, r.jsx)(zJanela, {
      titulo: "Novo t\xF3pico",
      sub: "N\xE3o publique exames, documentos ou dados que identifiquem a pessoa.",
      fechar: a,
      larga: !0,
      children: (0, r.jsxs)("div", {
        className: "novo-topico",
        children: [
          (0, r.jsxs)("form", {
            onSubmit: enviar,
            noValidate: !0,
            children: [
              (0, r.jsx)(Za, {
                id: "n-titulo",
                rotulo: "T\xEDtulo",
                value: e.titulo,
                onChange: (i) => (t({ ...e, titulo: i.target.value }), n.titulo && l({ ...n, titulo: void 0 })),
                erro: n.titulo,
              }),
              (0, r.jsxs)(Za, {
                id: "n-dir",
                rotulo: "Assunto",
                como: "select",
                value: e.dir,
                onChange: (i) => (t({ ...e, dir: i.target.value }), n.dir && l({ ...n, dir: void 0 })),
                erro: n.dir,
                children: [
                  (0, r.jsx)("option", { value: "", children: "Escolha um assunto" }),
                  El.map((i) => (0, r.jsx)("option", { value: i.id, children: i.rotulo }, i.id)),
                ],
              }),
              (0, r.jsx)(Za, {
                id: "n-corpo",
                como: "textarea",
                rotulo: "O que voc\xEA quer contar ou perguntar",
                value: e.corpo,
                onChange: (i) => (t({ ...e, corpo: i.target.value }), n.corpo && l({ ...n, corpo: void 0 })),
                erro: n.corpo,
              }),
              (0, r.jsxs)("div", {
                className: "acoes",
                children: [
                  (0, r.jsx)(ia, { type: "submit", icone: "enviar", ocupado, textoOcupado: "Publicando…", children: "Publicar t\xF3pico" }),
                  (0, r.jsx)(ia, { sec: !0, onClick: a, children: "Cancelar" }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className: "previa-topico",
            "aria-label": "Pr\xE9via do t\xF3pico",
            role: "group",
            children: [
              (0, r.jsx)("p", { className: "previa-rotulo", children: "Assim o t\xF3pico aparece no f\xF3rum" }),
              (0, r.jsxs)("div", {
                className: "previa-cartao",
                children: [
                  (0, r.jsx)("p", { className: "linha-titulo", children: e.titulo.trim() || "O t\xEDtulo aparece aqui" }),
                  (0, r.jsx)("p", { className: "apoio", children: zPriv.cidade ? "Voc\xEA \xB7 Recife \xB7 agora" : "Voc\xEA \xB7 agora" }),
                  (0, r.jsxs)("span", {
                    className: "etiquetas",
                    children: [(0, r.jsx)(zStatus, { s: "novo" }), e.dir && (0, r.jsx)(Bo, { children: N2[e.dir] })],
                  }),
                  e.corpo.trim() && (0, r.jsx)("p", { className: "previa-corpo", children: e.corpo.trim() }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
  // Filtros em linha: um só estilo de selecionado (fundo claro, borda e check)
  function zFiltros({ itens: it, valor: v, mudar: md, rotulo: rt }) {
    return (0, r.jsx)("div", {
      className: "filtros",
      role: "group",
      "aria-label": rt,
      children: it.map(([k, t]) =>
        (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": v === k, icone: v === k ? "confirmar" : void 0, onClick: () => md(k), children: t }, k),
      ),
    });
  }
  function $S({ abrir: a, irPara: ir }) {
    let [o, e] = (0, L.useState)(""),
      [t, n] = (0, L.useState)("Todas"),
      l = zr.filter(
        (s) =>
          (t === "Todas" || s.area === t) &&
          (!o.trim() ||
            Ll(`${s.titulo} ${s.autor} ${s.area} ${s.secoes.flat().join(" ")}`).includes(Ll(o.trim()))),
      ),
      urg = /convuls|emergen|samu|192|desmai|engasg|nao respira|sangr|queda|caiu/.test(Ll(o));
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Orienta\xE7\xF5es de profissionais" }),
            (0, r.jsx)("p", { className: "lead", children: "Textos curtos, escritos por volunt\xE1rios para quem cuida." }),
          ],
        }),
        (0, r.jsx)("div", {
          className: "busca",
          children: (0, r.jsx)(Za, {
            id: "busca",
            rotulo: "Buscar orienta\xE7\xF5es",
            value: o,
            onChange: (s) => e(s.target.value),
            autoComplete: "off",
            placeholder: "Ex.: sono, fala, crise",
          }),
        }),
        (0, r.jsx)(zFiltros, { itens: [["Todas", "Todas"], ...Rr.map((x) => [x, x])], valor: t, mudar: n, rotulo: "Filtrar por \xE1rea" }),
        urg &&
          (0, r.jsxs)("button", {
            type: "button",
            className: "cartao-urgente",
            onClick: () => ir("ajuda"),
            children: [
              (0, r.jsx)(la, { n: "telefone", size: 24 }),
              (0, r.jsxs)("span", {
                children: [
                  (0, r.jsx)("b", { children: "\xC9 uma emerg\xEAncia?" }),
                  (0, r.jsx)("span", { children: "Veja o que fazer agora e ligue 192." }),
                ],
              }),
              (0, r.jsx)(la, { n: "avancar", size: 20 }),
            ],
          }),
        l.length
          ? (0, r.jsx)("ul", {
              className: "grade-dicas",
              "aria-label": "Orienta\xE7\xF5es",
              children: l.map((s) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "cartao-dica",
                      onClick: () => a(s.id),
                      children: [
                        (0, r.jsx)("span", { className: "cartao-dica-cat", children: s.area }),
                        (0, r.jsx)("span", { className: "cartao-dica-titulo", children: s.titulo }),
                        (0, r.jsxs)("span", { className: "apoio cartao-dica-meta", children: [s.autor, " \xB7 ", s.tempo, " de leitura"] }),
                      ],
                    }),
                  },
                  s.id,
                ),
              ),
            })
          : (0, r.jsxs)("div", {
              className: "vazio",
              children: [
                (0, r.jsx)("h3", { children: "Nenhuma orienta\xE7\xE3o encontrada" }),
                (0, r.jsx)("p", {
                  children: t === "Todas" ? "Tente outra palavra, como sono, fala ou crise." : "Tente outra palavra ou escolha Todas.",
                }),
                t !== "Todas" &&
                  (0, r.jsx)("div", {
                    className: "acoes",
                    children: (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: () => n("Todas"), children: "Mostrar todas as \xE1reas" }),
                  }),
              ],
            }),
      ],
    });
  }
  function a4({ d: a }) {
    return (0, r.jsxs)("section", {
      className: "entra artigo",
      children: [
        (0, r.jsx)("span", { className: "cartao-dica-cat", children: a.area }),
        (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
        (0, r.jsxs)("p", { className: "apoio artigo-meta", children: [a.autor, " \xB7 ", a.tempo, " de leitura"] }),
        (0, r.jsx)("div", {
          className: "leitura",
          children: a.secoes.map(([e, t]) =>
            (0, r.jsxs)(L.default.Fragment, { children: [(0, r.jsx)("h2", { children: e }), (0, r.jsx)("p", { children: t })] }, e),
          ),
        }),
        (0, r.jsx)(Do, { tipo: "aviso", children: "Isto n\xE3o substitui um profissional de sa\xFAde." }),
      ],
    });
  }
  function o4({
    agenda: a,
    todos: td,
    tab: o,
    setTab: e,
    abrirProf: t,
    cancelar: n,
    confirmado: l,
    remarcar: rm,
    sala: sl,
  }) {
    let [s, i] = (0, L.useState)(""),
      [c, m] = (0, L.useState)("Todas"),
      I = At.filter(
        (f) =>
          (c === "Todas" || f.area === c) &&
          (!s.trim() ||
            Ll(`${f.nome} ${f.area} ${f.foco}`).includes(Ll(s.trim()))),
      );
    return (0, r.jsxs)("section", {
      className: "entra entra--larga",
      children: [
        // Duas subpáginas: buscar e meus agendamentos, cada uma com o seu título
        (0, r.jsx)("nav", {
          className: "subnav",
          "aria-label": "Atendimentos",
          children: [
            ["buscar", "Buscar especialistas", "busca", 0],
            ["meus", "Meus agendamentos", "calendario", a.length],
          ].map(([k, txt, ic, q]) =>
            (0, r.jsxs)(
              "button",
              {
                type: "button",
                className: "subnav-item",
                "aria-current": o === k ? "page" : void 0,
                onClick: () => e(k),
                children: [(0, r.jsx)(la, { n: ic, size: 20, cheio: o === k }), (0, r.jsx)("span", { children: txt }), q > 0 && (0, r.jsx)("span", { className: "contador", children: q })],
              },
              k,
            ),
          ),
        }),
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: o === "meus" ? "Meus agendamentos" : "Buscar especialistas" }),
            (0, r.jsx)("p", {
              className: "lead",
              children: o === "meus" ? "Seus atendimentos separados em pr\xF3ximos, realizados e cancelados." : "Consultas sem custo com profissionais volunt\xE1rios verificados.",
            }),
          ],
        }),
        l &&
          (0, r.jsx)("div", {
            className: "alerta-bloco",
            children: (0, r.jsx)(Do, {
              tipo: "ok",
              children: {
                marcado: "Atendimento marcado. O lembrete vai para o seu e-mail.",
                remarcado: "Atendimento remarcado. O profissional recebeu um aviso.",
                cancelado: "Atendimento cancelado. O hor\xE1rio ficou livre.",
              }[l],
            }),
          }),
        (0, r.jsx)("div", {
          children:
            o === "buscar"
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: "busca",
                      children: (0, r.jsx)(Za, {
                        id: "busca-prof",
                        rotulo: "Buscar por nome ou especialidade",
                        value: s,
                        onChange: (f) => i(f.target.value),
                        autoComplete: "off",
                        placeholder: "Ex.: fono, psicologia",
                      }),
                    }),
                    (0, r.jsx)(zFiltros, { itens: [["Todas", "Todas as \xE1reas"], ...Rr.map((x) => [x, x])], valor: c, mudar: m, rotulo: "Filtrar por \xE1rea" }),
                    I.length
                      ? (0, r.jsx)("div", {
                          className: "grade-prof",
                          role: "list",
                          "aria-label": "Profissionais",
                          children: I.map((f) => (0, r.jsx)("div", { role: "listitem", children: (0, r.jsx)(zCartaoProf, { p: f, agenda: a, abrir: t }) }, f.id)),
                        })
                      : (0, r.jsxs)("div", {
                          className: "vazio",
                          children: [
                            (0, r.jsx)("h3", { children: "Nenhum profissional encontrado" }),
                            (0, r.jsx)("p", {
                              children: c === "Todas" ? "Tente outra palavra, como fono, psicologia ou sono." : "Tente outra palavra ou escolha Todas as \xE1reas.",
                            }),
                          ],
                        }),
                  ],
                })
              : (0, r.jsx)(zMeusAgend, { agenda: td || a, cancelar: n, remarcar: rm, sala: sl, buscar: () => e("buscar"), abrirProf: t }),
        }),
      ],
    });
  }
  // Escolha de dia e horário: janela por cima de Atendimentos
  function e4({
    prof: a,
    agenda: o,
    passo: e,
    setPasso: t,
    sel: n,
    setSel: l,
    sair: s,
    confirmar: i,
    ocupados: oc,
    remarcando: rmc,
  }) {
    let m = n.dia ? { id: n.dia, rotulo: zDiaRotulo(n.dia) } : null,
      modos = a.modos || null,
      ja = rmc ? [] : zSort(o.filter((x) => x.profId === a.id)),
      I = e === 1 ? !!(n.dia && n.hora && (!modos || n.modo)) : !0,
      ondeEscolhido = modos ? n.modo : a.onde,
      [ocupado, agir] = zUseAcao(),
      falta = modos && !n.modo ? "Escolha se vai ser presencial ou online e um hor\xE1rio." : "Escolha um hor\xE1rio para continuar.";
    return (0, r.jsx)(zJanela, {
      titulo: rmc ? "Remarcar com " + a.nome : "Agendar com " + a.nome,
      larga: !0,
      sub: "Passo " + e + " de 2: " + (e === 1 ? "escolha o dia e o hor\xE1rio" : "confira e confirme"),
      fechar: s,
      rodape: (0, r.jsxs)("div", {
        className: "acoes",
        children: [
          (0, r.jsx)(ia, {
            disabled: !I,
            "aria-disabled": !I,
            "aria-describedby": I ? void 0 : "hor-falta",
            ocupado,
            textoOcupado: rmc ? "Remarcando…" : "Agendando…",
            fim: e === 1 ? "avancar" : void 0,
            onClick: () =>
              I &&
              (e === 1
                ? t(2)
                : agir(() =>
                    i({
                      profId: a.id,
                      prof: a,
                      diaId: m.id,
                      dia: m.rotulo,
                      hora: n.hora,
                      onde: ondeEscolhido,
                    }),
                  )),
            children: e === 2 ? (rmc ? "Confirmar novo hor\xE1rio" : "Confirmar agendamento") : "Continuar",
          }),
          e === 2 && (0, r.jsx)(ia, { sec: !0, onClick: () => t(1), children: "Voltar" }),
          !I && (0, r.jsx)("span", { id: "hor-falta", className: "aviso", role: "status", children: falta }),
        ],
      }),
      children: [
        (0, r.jsxs)("div", {
          className: "prof-resumo",
          children: [
            (0, r.jsx)(qr, { p: a }),
            (0, r.jsxs)("div", {
              className: "prof-resumo-texto",
              children: [
                (0, r.jsx)("p", { className: "linha-titulo", children: a.nome }),
                (0, r.jsxs)("p", { className: "prof-area", children: [a.area, a.foco && (0, r.jsxs)("span", { className: "apoio", children: [" \xB7 ", a.foco] })] }),
                (0, r.jsxs)("ul", {
                  className: "prof-dados",
                  children: [
                    (0, r.jsxs)("li", { children: [(0, r.jsx)(zSelo, {}), (0, r.jsx)("span", { className: "apoio", children: a.registro })] }),
                    (0, r.jsxs)("li", { children: [(0, r.jsx)(la, { n: a.modos ? "local" : zOnline(a) ? "video" : "local", size: 16 }), (0, r.jsx)("span", { children: a.modos ? a.modos.join(" ou ") : a.onde })] }),
                    a.dias && (0, r.jsxs)("li", { children: [(0, r.jsx)(la, { n: "calendario", size: 16 }), (0, r.jsx)("span", { children: "Atende " + a.dias.map((x) => x.toLowerCase()).join(", ").replace(/, ([^,]+)$/, " e $1") })] }),
                  ],
                }),
                e === 1 && a.bio && (0, r.jsx)("p", { className: "prof-bio", children: a.bio }),
              ],
            }),
          ],
        }, "r"),
        ja.length > 0 &&
          (0, r.jsx)("div", {
            className: "alerta-bloco",
            children: (0, r.jsxs)(Do, {
              tipo: "aviso",
              children: [
                "Voc\xEA j\xE1 tem um atendimento com ",
                a.nome,
                " em ",
                ja[0].dia.toLowerCase(),
                ", \xE0s ",
                ja[0].hora,
                ". Para trocar o hor\xE1rio, use Remarcar em Meus agendamentos. Para uma consulta a mais, pode continuar.",
              ],
            }),
          }, "j"),
        rmc &&
          (0, r.jsx)("div", {
            className: "alerta-bloco",
            children: (0, r.jsxs)(Do, {
              tipo: "info",
              children: ["Hoje est\xE1 marcado para ", rmc.dia.toLowerCase(), ", \xE0s ", rmc.hora, ". Esse hor\xE1rio fica livre quando voc\xEA confirmar o novo."],
            }),
          }, "m"),
        e === 1 &&
          modos &&
          (0, r.jsxs)("div", {
            className: "modo-escolha",
            children: [
              (0, r.jsx)("h3", { className: "h-pequeno", children: "Como vai ser?" }),
              (0, r.jsx)(zSegmento, {
                itens: modos.map((md) => ({ id: md, rotulo: md, ic: /Online/.test(md) ? "video" : "local" })),
                valor: n.modo,
                mudar: (md) => l({ ...n, modo: md }),
                rotulo: "Como vai ser o atendimento",
              }),
            ],
          }, "o"),
        e === 1 && (0, r.jsx)(zEscolherHorario, { prof: a, ocupados: oc || o, sel: n, setSel: l, rotulo: "Datas e hor\xE1rios" }, "h"),
        e === 2 &&
          m &&
          (0, r.jsxs)("dl", {
            className: "resumo",
            children: [
              (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Especialidade" }), (0, r.jsx)("dd", { children: a.area })] }),
              (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Profissional" }), (0, r.jsx)("dd", { children: a.nome })] }),
              (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Quando" }), (0, r.jsxs)("dd", { children: [m.rotulo, ", \xE0s ", n.hora] })] }),
              (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Onde" }), (0, r.jsx)("dd", { children: zOnline({ onde: ondeEscolhido }) ? "Online, na sala de v\xEDdeo do zElo" : ondeEscolhido })] }),
            ],
          }, "s"),
      ],
    });
  }
  var zIconeSituacao = { convulsao: "pulso", engasgo: "refeicao", crise: "crise", queda: "movimento", outra: "escrever" };
  function t4({ irPara: a, pedir: pd }) {
    let [sit, setSit] = (0, L.useState)(null),
      [outra, setOutra] = (0, L.useState)(""),
      atual = zSituacoes.find((x) => x.id === sit),
      [lig, setLig] = (0, L.useState)(null),
      ligar = (num) => setLig(num),
      aviso = (num) =>
        lig === num &&
        (0, r.jsx)("div", {
          className: "ligacao-aviso",
          children: (0, r.jsxs)(Do, {
            tipo: "info",
            palavra: "Ligando para o " + num + ".",
            children: [
              "No celular, este bot\xE3o abre a liga\xE7\xE3o direto. ",
              (0, r.jsx)("b", { children: "Neste prot\xF3tipo a liga\xE7\xE3o n\xE3o \xE9 feita." }),
            ],
          }),
        });
    return (0, r.jsxs)("section", {
      className: "entra tela-ajuda",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Preciso de ajuda" }),
            (0, r.jsx)("p", { className: "lead", children: "Se \xE9 uma emerg\xEAncia, ligue 192. O SAMU atende 24 horas, de gra\xE7a." }),
          ],
        }),
        (0, r.jsxs)("button", {
          type: "button",
          className: "btn-ligar",
          onClick: () => ligar("192"),
          children: [
            (0, r.jsx)(la, { n: "telefone", size: 24 }),
            "Ligar para o SAMU: 192",
          ],
        }),
        aviso("192"),
        (0, r.jsxs)("button", {
          type: "button",
          className: "cartao-acao",
          onClick: pd,
          children: [
            (0, r.jsx)("span", {
              className: "cartao-acao-icone",
              children: (0, r.jsx)(la, { n: "mensagem", size: 24 }),
            }),
            (0, r.jsxs)("span", {
              className: "cartao-acao-texto",
              children: [
                (0, r.jsx)("b", { children: "N\xE3o \xE9 emerg\xEAncia? Pe\xE7a apoio pelo chat" }),
                (0, r.jsxs)("span", {
                  className: "apoio",
                  children: [
                    "A equipe de acolhimento do zElo responde por mensagem. ",
                    (0, r.jsx)(zStatusAcolhimentoTexto, {}),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(la, { n: "avancar", size: 20 }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", { id: "sit-h", children: "O que est\xE1 acontecendo?" }),
            (0, r.jsx)("div", {
              className: "situacoes",
              role: "group",
              "aria-labelledby": "sit-h",
              children: [...zSituacoes, { id: "outra", titulo: "Outra situa\xE7\xE3o" }].map((x) =>
                (0, r.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "situacao" + (x.id === "outra" ? " situacao--outra" : ""),
                    "aria-expanded": sit === x.id,
                    "aria-controls": "sit-passos",
                    onClick: () => setSit(sit === x.id ? null : x.id),
                    children: [
                      (0, r.jsx)("span", { className: "situacao-icone", "aria-hidden": "true", children: (0, r.jsx)(la, { n: zIconeSituacao[x.id] || "ajuda", size: 28 }) }),
                      x.titulo,
                    ],
                  },
                  x.id,
                ),
              ),
            }),
            sit === "outra" &&
              (0, r.jsxs)("div", {
                id: "sit-passos",
                className: "situacao-passos situacao-outra",
                children: [
                  (0, r.jsx)(Za, {
                    id: "sit-outra",
                    como: "textarea",
                    rotulo: "Conte o que est\xE1 acontecendo",
                    ajuda: "Escreva do seu jeito. A equipe de acolhimento responde pelo chat. Se for uma emerg\xEAncia, ligue 192.",
                    value: outra,
                    onChange: (ev) => setOutra(ev.target.value),
                  }),
                  (0, r.jsx)(ia, {
                    sec: !0,
                    icone: "enviar",
                    disabled: !outra.trim(),
                    "aria-disabled": !outra.trim(),
                    title: outra.trim() ? void 0 : "Escreva o que est\xE1 acontecendo para enviar",
                    onClick: () => outra.trim() && pd(outra.trim()),
                    children: "Enviar para o acolhimento",
                  }),
                  !outra.trim() && (0, r.jsx)("p", { className: "aviso", children: "Escreva algumas palavras para poder enviar." }),
                ],
              }),
            atual &&
              (0, r.jsxs)("div", {
                id: "sit-passos",
                className: "situacao-passos",
                children: [
                  (0, r.jsx)("h3", { children: atual.titulo }),
                  (0, r.jsx)("ol", {
                    className: "orientacoes",
                    children: atual.passos.map((t, k) => (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: t }) }, k)),
                  }),
                  (0, r.jsxs)("p", {
                    className: "situacao-ligar",
                    children: [(0, r.jsx)(la, { n: "telefone", size: 20 }), atual.ligar],
                  }),
                ],
              }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", { children: "Outros telefones gratuitos" }),
            (0, r.jsx)("ul", {
              className: "outros-telefones",
              children: H2.map(([t, n, l]) =>
                (0, r.jsxs)(
                  "li",
                  {
                    children: [
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "tel-linha",
                        onClick: () => ligar(t),
                        children: [
                          (0, r.jsx)("span", { className: "num", children: t }),
                          (0, r.jsxs)("span", {
                            className: "tel-texto",
                            children: [
                              (0, r.jsx)("b", { children: n }),
                              (0, r.jsx)("span", { className: "apoio", children: l }),
                            ],
                          }),
                          (0, r.jsxs)("span", {
                            className: "tel-acao",
                            children: [(0, r.jsx)(la, { n: "telefone", size: 20 }), "Ligar"],
                          }),
                        ],
                      }),
                      aviso(t),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio",
          style: { marginTop: 24 },
          children:
            "Tenha \xE0 m\xE3o o nome dos rem\xE9dios, o \xFAltimo relat\xF3rio m\xE9dico e o telefone de um familiar. Isso agiliza o atendimento.",
        }),
        (0, r.jsxs)("footer", {
          className: "rodape-saude",
          children: [
            (0, r.jsx)("p", { children: "Estas orienta\xE7\xF5es n\xE3o substituem o atendimento m\xE9dico. Na d\xFAvida, ligue 192." }),
            (0, r.jsx)("p", { children: zSaudeRodape() }),
          ],
        }),
      ],
    });
  }
  function n4({ tema: a, fim: o }) {
    return (
      (0, L.useEffect)(() => {
        let t = setTimeout(o, 1500),
          n = () => o();
        return (
          window.addEventListener("keydown", n),
          () => {
            (clearTimeout(t), window.removeEventListener("keydown", n));
          }
        );
      }, []),
      (0, r.jsxs)("div", {
        className: "splash",
        "aria-hidden": "true",
        onClick: o,
        children: [
          (0, r.jsx)(zLogo, {}),
        ],
      })
    );
  }
  var R2 = { tipo: [], direcionamento: [], especificidades: [], quem: null, pessoa: "" },
    z2 = {
      msgs: [
        {
          de: "ana",
          texto:
            "Oi, eu sou a Ana, a assistente autom\xE1tica do zElo. N\xE3o sou uma pessoa: respondo com uma base de perguntas revisada pela equipe. Posso ajudar com d\xFAvidas do dia a dia de cuidado e sobre o app. Escreva do seu jeito, mesmo com erro de digita\xE7\xE3o.",
          hora: "09:12",
        },
      ],
      opcoes: null,
      ctx: null,
    };
  // ===================================================================
  // Novidades (sugestões da monitora Millena, novembro de 2026)
  // 1. Atendimentos: a família remarca e cancela, o voluntário tem a
  //    Minha agenda.
  // 2. Sala de vídeo dentro do zElo (no app real: Jitsi Meet).
  // 3. Verificação de voluntários: o sistema confere o registro no
  //    conselho e uma pessoa da equipe aprova. O arquivo é apagado depois.
  // 4. Notificações do fórum, dos atendimentos e do cadastro.
  // ===================================================================

  // Atalho para escrever as telas novas sem repetir (0, r.jsx)(...).
  function zh(t, p, ...c) {
    let q = { ...(p || {}) },
      k = q.key;
    delete q.key;
    if (c.length === 1) q.children = c[0];
    else if (c.length > 1) q.children = c;
    return (c.length > 1 ? r.jsxs : r.jsx)(t, q, k);
  }
  var zOnline = (f) => /Online/.test(f.onde || ""),
    zOndeTexto = (f) => (zOnline(f) ? "Online, na sala de v\xEDdeo do zElo" : f.onde),
    zPara = (papel) => (papel === "voluntario" ? "voluntario" : "familia"),
    zSemana = ["Segunda", "Ter\xE7a", "Quarta", "Quinta", "Sexta", "S\xE1bado"],
    zHorasOp = ["08:00", "09:00", "10:30", "14:00", "15:30", "17:00"],
    zModosOp = ["Online por v\xEDdeo", "Presencial no meu consult\xF3rio"],
    zDispInicial = {
      dias: ["Ter\xE7a", "Quinta", "Segunda"],
      horas: ["09:00", "10:30", "14:00"],
      modos: ["Online por v\xEDdeo"],
    };
  function zNovoAt(o) {
    return {
      status: "confirmado",
      ...o,
      dia: zDiaRotulo(o.diaId),
      prof: o.profId === "pv" ? null : At.find((p) => p.id === o.profId),
    };
  }
  // Agenda de todo mundo. familia "voce" é a pessoa usando o protótipo.
  // profId "pv" é o voluntário usando o protótipo.
  var zAgInicial = [
      zNovoAt({ id: "a1", profId: "p1", diaId: "2026-11-05", hora: "10:30", onde: "Presencial na Boa Vista, Recife", familia: "voce" }),
      zNovoAt({ id: "a6", profId: "p5", diaId: "2026-11-06", hora: "14:00", onde: "Online por v\xEDdeo", familia: "voce" }),
      zNovoAt({ id: "a2", profId: "p2", diaId: "2026-11-04", hora: "10:30", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Joana P." }),
      zNovoAt({ id: "a3", profId: "p3", diaId: "2026-11-03", hora: "14:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Marcos L." }),
      zNovoAt({ id: "a4", profId: "p4", diaId: "2026-11-06", hora: "09:00", onde: "Presencial em Olinda", familia: "Fam\xEDlia de Rita S.", status: "cancelado", motivo: "A pedido da fam\xEDlia" }),
      zNovoAt({ id: "a5", profId: "p8", diaId: "2026-11-05", hora: "15:30", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Paulo M." }),
      zNovoAt({ id: "v1", profId: "pv", diaId: "2026-11-03", hora: "09:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Ana C.", assunto: "Rotina de sono, crian\xE7a de 6 anos com TEA" }),
      zNovoAt({ id: "v2", profId: "pv", diaId: "2026-11-05", hora: "14:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Lu\xEDs F.", assunto: "Crises de choro no fim da tarde" }),
      zNovoAt({ id: "v3", profId: "pv", diaId: "2026-11-09", hora: "10:30", onde: "Online por v\xEDdeo", familia: "L\xFAcia R., pessoa com defici\xEAncia", assunto: "Ansiedade antes de consultas" }),
    ],
    zNotifsIniciais = [
      { id: "n1", para: "familia", tipo: "forum", titulo: "Nova resposta em t\xF3pico que voc\xEA segue", texto: "Dra. Beatriz Nogueira respondeu em “Meu filho dorme pouco: o que funcionou a\xED?”", quando: "h\xE1 20 min", lida: !1, topico: "t1" },
      { id: "n2", para: "familia", tipo: "atend", titulo: "Lembrete de atendimento", texto: "Quinta, 5 de novembro, \xE0s 10:30, com Dra. Helena Cavalcanti.", quando: "hoje, 08:00", lida: !1, tela: "atendimentos-meus" },
      { id: "n3", para: "familia", tipo: "forum", titulo: "T\xF3pico novo sobre o que voc\xEA escolheu", texto: "“Crises de choro no fim da tarde: como voc\xEAs lidam?”", quando: "ontem", lida: !0, topico: "t6" },
      { id: "n4", para: "voluntario", tipo: "cadastro", titulo: "Cadastro aprovado", texto: "Uma pessoa da equipe conferiu o seu registro. O documento que voc\xEA enviou foi apagado.", quando: "hoje, 09:10", lida: !1, tela: "inicio" },
      { id: "n5", para: "voluntario", tipo: "atend", titulo: "Novo atendimento marcado", texto: "Fam\xEDlia de Ana C. marcou ter\xE7a, 3 de novembro, \xE0s 09:00.", quando: "hoje, 09:40", lida: !1, tela: "atendimentos" },
      { id: "n6", para: "voluntario", tipo: "forum", titulo: "Pergunta da sua \xE1rea sem resposta", texto: "“Meu filho dorme pouco: o que funcionou a\xED?” espera a resposta de um profissional.", quando: "ontem", lida: !0, topico: "t1" },
    ],
    // Cadastros de voluntários esperando análise. "checagem" é o resultado
    // automático da consulta ao conselho profissional.
    zPendentes = [
      { id: "c1", nome: "Patr\xEDcia Lemos", area: "Fonoaudiologia", registro: "CRFa 4-12290", cidade: "Recife", enviado: "h\xE1 3 horas", arquivo: "carteira-crfa.pdf", checagem: { ok: !0, texto: "Registro ativo no CRFa 4. O nome confere." }, status: "pendente" },
      { id: "c2", nome: "Marcelo Arruda", area: "Psicologia", registro: "CRP 02/31877", cidade: "Caruaru", enviado: "h\xE1 1 dia", arquivo: "diploma.jpg", checagem: { ok: !1, texto: "Registro encontrado, mas o nome no conselho \xE9 diferente. Confira no documento." }, status: "pendente" },
      { id: "c3", nome: "Vera Souto", area: "Enfermagem", registro: "COREN-PE 7781", cidade: "Olinda", enviado: "h\xE1 2 dias", arquivo: "coren.pdf", checagem: { ok: !1, texto: "N\xE3o achamos este n\xFAmero no COREN-PE. Pode ser erro de digita\xE7\xE3o." }, status: "pendente" },
    ];
  function zChecar(reg) {
    return /\d{4,}/.test(reg || "")
      ? { ok: !0, texto: "Registro ativo no conselho. O nome confere." }
      : { ok: !1, texto: "N\xE3o achamos este n\xFAmero no conselho. Confira no documento." };
  }
  function zAgora() {
    let d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }

  // ---------- Pedaços reaproveitados ----------
  // Calendário do mês com setas para mudar de mês. Os dias com horário livre ficam marcados;
  // ao escolher um dia aparecem os horários dele.
  function zEscolherHorario({ prof: p, ocupados: oc, sel: s, setSel: ss, rotulo: rt }) {
    let primeiro = Ur(p, oc, zHoje, zDiasEntre(zHoje, zFimAgenda) + 1)[0],
      ini = s.dia ? zData(s.dia) : primeiro ? zData(primeiro.id) : zHoje,
      [mes, setMes] = (0, L.useState)(new Date(ini.getFullYear(), ini.getMonth(), 1)),
      minMes = new Date(zHoje.getFullYear(), zHoje.getMonth(), 1),
      maxMes = new Date(zFimAgenda.getFullYear(), zFimAgenda.getMonth(), 1),
      ano = mes.getFullYear(),
      m = mes.getMonth(),
      nDias = new Date(ano, m + 1, 0).getDate(),
      vazios = (new Date(ano, m, 1).getDay() + 6) % 7,
      dias = Array.from({ length: nDias }, (_, k) => {
        let d = new Date(ano, m, k + 1);
        return { d, id: zIso(d), horas: zHorasDoDia(p, d, oc) };
      }),
      livresMes = dias.filter((x) => x.horas.length).length,
      escolhido = s.dia && dias.find((x) => x.id === s.dia),
      mudar = (k) => setMes(new Date(ano, m + k, 1)),
      titulo = zMesNomes[m].charAt(0).toUpperCase() + zMesNomes[m].slice(1) + " de " + ano,
      podeVoltar = mes > minMes,
      podeIr = mes < maxMes;
    return zh(
      "div",
      { className: "agendar-cal", role: "group", "aria-label": rt || "Dia e hor\xE1rio" },
      zh(
        "div",
        { className: "cal" },
        zh(
          "div",
          { className: "cal-topo" },
          zh("button", { type: "button", className: "cal-seta", onClick: () => podeVoltar && mudar(-1), disabled: !podeVoltar, "aria-label": "M\xEAs anterior" }, (0, r.jsx)(la, { n: "voltar", size: 20 })),
          zh("h3", { className: "cal-mes", "aria-live": "polite" }, titulo),
          zh("button", { type: "button", className: "cal-seta", onClick: () => podeIr && mudar(1), disabled: !podeIr, "aria-label": "Pr\xF3ximo m\xEAs" }, (0, r.jsx)(la, { n: "avancar", size: 20 })),
        ),
        zh(
          "div",
          { className: "cal-grade", role: "grid", "aria-label": titulo },
          ["Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b", "Dom"].map((x) => zh("span", { key: x, className: "cal-sem", "aria-hidden": "true" }, x)),
          Array.from({ length: vazios }, (_, k) => zh("span", { key: "v" + k, "aria-hidden": "true" })),
          dias.map((x) => {
            let livre = x.horas.length > 0,
              hoje = zMesmoDia(x.d, zHoje),
              on = s.dia === x.id;
            return zh(
              "button",
              {
                key: x.id,
                type: "button",
                className: "cal-dia" + (livre ? " cal-dia--livre" : "") + (hoje ? " cal-dia--hoje" : ""),
                disabled: !livre,
                "aria-pressed": on,
                "aria-label": zDiaRotulo(x.id) + (livre ? ", " + x.horas.length + (x.horas.length === 1 ? " hor\xE1rio livre" : " hor\xE1rios livres") : ", sem hor\xE1rio livre"),
                onClick: () => ss({ ...s, dia: x.id, hora: null }),
              },
              x.d.getDate(),
            );
          }),
        ),
        zh(
          "p",
          { className: "cal-legenda" },
          zh("span", { className: "cal-legenda-livre", "aria-hidden": "true" }),
          " Dia com hor\xE1rio livre",
          zh("span", { className: "cal-legenda-sep", "aria-hidden": "true" }, "\xB7"),
          livresMes ? livresMes + (livresMes === 1 ? " dia livre neste m\xEAs" : " dias livres neste m\xEAs") : "Nenhum dia livre neste m\xEAs",
        ),
      ),
      zh(
        "div",
        { className: "cal-horas" },
        escolhido
          ? zh(
              r.Fragment,
              null,
              zh("h3", { className: "h-pequeno" }, zDiaRotulo(escolhido.id)),
              zh(
                "div",
                { className: "horarios", role: "group", "aria-label": "Hor\xE1rios de " + zDiaRotulo(escolhido.id) },
                escolhido.horas.map((u) => {
                  let on = s.hora === u;
                  return (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": on, icone: "relogio", onClick: () => ss({ ...s, dia: escolhido.id, hora: u }), children: u }, u);
                }),
              ),
            )
          : zh(
              "p",
              { className: "apoio cal-dica" },
              livresMes ? "Escolha um dia marcado no calend\xE1rio para ver os hor\xE1rios." : podeIr ? "Sem hor\xE1rios livres neste m\xEAs. Veja o pr\xF3ximo m\xEAs." : "Sem hor\xE1rios livres nos meses abertos para agendamento.",
            ),
        zh("p", { className: "apoio cal-nota" }, "Os hor\xE1rios seguem os dias e horas em que ", p.nome || "o profissional", " atende. A agenda fica aberta at\xE9 ", zDiaRotulo(zIso(zFimAgenda)).replace(/^[^,]+, /, ""), "."),
      ),
    );
  }
  function zCancelar({ idp, motivos, aviso, confirmar, voltar, titulo }) {
    let [m, setM] = (0, L.useState)(motivos ? motivos[0] : ""),
      [ocupado, agir] = zUseAcao();
    return (0, r.jsxs)(zJanela, {
      titulo: "Cancelar este atendimento?",
      sub: titulo,
      fechar: voltar,
      rodape: zh(
        "div",
        { className: "acoes" },
        (0, r.jsx)(ia, { className: "btn--perigo", ocupado, textoOcupado: "Cancelando\u2026", onClick: () => agir(() => confirmar(m)), children: "Sim, cancelar" }),
        (0, r.jsx)(ia, { sec: !0, onClick: voltar, children: "N\xE3o, manter" }),
      ),
      children: [
        aviso && zh("p", { className: "apoio", key: "a" }, aviso),
        motivos &&
          (0, r.jsx)(Za, {
            id: "motivo-" + idp,
            como: "select",
            rotulo: "Motivo",
            value: m,
            onChange: (e) => setM(e.target.value),
            children: motivos.map((x) => (0, r.jsx)("option", { value: x, children: x }, x)),
          }, "m"),
      ],
    });
  }
  function zRemarcarBloco({ prof: p, ocupados: oc, confirmar, voltar, aviso, titulo }) {
    let [s, ss] = (0, L.useState)({ dia: null, hora: null }),
      [ocupado, agir] = zUseAcao(),
      pronto = !!(s.dia && s.hora);
    return (0, r.jsxs)(zJanela, {
      titulo: "Escolha o novo dia e hor\xE1rio",
      sub: titulo,
      larga: !0,
      fechar: voltar,
      rodape: zh(
        "div",
        { className: "acoes" },
        (0, r.jsx)(ia, { disabled: !pronto, "aria-disabled": !pronto, ocupado, textoOcupado: "Remarcando\u2026", onClick: () => pronto && agir(() => confirmar(s)), children: "Confirmar novo hor\xE1rio" }),
        (0, r.jsx)(ia, { sec: !0, onClick: voltar, children: "Voltar" }),
        !pronto && zh("span", { className: "aviso", role: "status", key: "f" }, "Escolha um hor\xE1rio para continuar."),
      ),
      children: [
        aviso && zh("p", { className: "apoio", key: "a" }, aviso),
        (0, r.jsx)(zEscolherHorario, { prof: p, ocupados: oc, sel: s, setSel: ss, rotulo: "Novo dia e hor\xE1rio" }, "h"),
      ],
    });
  }
  function zAbas({ abas, atual, setAtual, rotulo, id }) {
    return zh(
      "div",
      { className: "abas", role: "tablist", "aria-label": rotulo },
      abas.map(([k, txt, n]) =>
        zh(
          "button",
          { key: k, type: "button", role: "tab", id: id + "-aba-" + k, "aria-selected": atual === k, "aria-controls": id + "-painel", className: "aba", onClick: () => setAtual(k) },
          txt,
          n > 0 ? zh("span", { className: "contador aba-contador" }, n) : null,
        ),
      ),
    );
  }

  // ---------- 1a. Meus agendamentos (família) ----------
  // Três colunas, como um quadro: próximos, realizados e cancelados.
  // No celular as colunas ficam uma embaixo da outra.
  var zColunasAgenda = [
    { id: "confirmado", titulo: "Pr\xF3ximos", ic: "calendario", vazio: "Nenhum atendimento marcado. Escolha um profissional em Buscar especialistas." },
    { id: "realizado", titulo: "Realizados", ic: "historico", vazio: "Quando voc\xEA terminar um atendimento, ele aparece aqui." },
    { id: "cancelado", titulo: "Cancelados", ic: "cancelado", vazio: "Nenhum atendimento cancelado." },
  ];
  function zMeusAgend({ agenda: a, cancelar, remarcar, sala, buscar, abrirProf }) {
    let [ab, setAb] = (0, L.useState)(null),
      lista = zSort(a),
      ativos = lista.filter((x) => x.status === "confirmado"),
      // Um só botão cheio: "Entrar na sala" do atendimento online mais próximo
      primeiroOnline = (ativos.find(zOnline) || {}).id,
      cancelando = ab && lista.find((x) => x.id === ab),
      cartao = (f) =>
        zh(
          "li",
          { key: f.id, className: "kanban-cartao" },
          zh(
            "div",
            { className: "kanban-cartao-topo" },
            zh(
              "div",
              { className: "agenda-quando" },
              zh("span", { className: "agenda-dia" }, f.dia.replace(/^Hoje, /, "Hoje ").split(",")[0]),
              zh("span", { className: "agenda-hora" }, f.hora),
            ),
            zh(
              "div",
              { className: "linha-texto" },
              zh("p", { className: "linha-titulo" }, f.prof.nome),
              zh("p", { className: "apoio linha-meta" }, f.prof.area),
            ),
          ),
          zh("p", { className: "kanban-info" }, (0, r.jsx)(la, { n: "calendario", size: 16 }), f.dia, ", \xE0s ", f.hora),
          zh("p", { className: "kanban-info" }, (0, r.jsx)(la, { n: zOnline(f) ? "video" : "local", size: 16 }), zOndeTexto(f)),
          zh(
            "p",
            { className: "linha-etiquetas" },
            (0, r.jsx)(zStatus, { s: f.status, extra: f.status === "cancelado" ? (f.motivo || "").toLowerCase() || null : f.remarcado ? "remarcado" : null }),
          ),
          f.status === "confirmado"
            ? zh(
                "div",
                { className: "agenda-acoes" },
                zOnline(f) && (0, r.jsx)(ia, { sec: f.id !== primeiroOnline, peq: !0, icone: "video", onClick: () => sala(f), children: "Entrar na sala" }),
                (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "calendario", onClick: () => remarcar(f), children: "Remarcar" }),
                (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "fechar", className: "btn--sec-perigo", onClick: () => setAb(f.id), children: "Cancelar" }),
              )
            : abrirProf &&
                zh("div", { className: "agenda-acoes" }, (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "adicionar", onClick: () => abrirProf(f.profId), children: "Agendar de novo" })),
        );
    return zh(
      r.Fragment,
      null,
      zh(
        "div",
        { className: "kanban", key: "k" },
        zColunasAgenda.map((col) => {
          let itens = lista.filter((x) => x.status === col.id);
          return zh(
            "section",
            { key: col.id, className: "kanban-col kanban-col--" + col.id, "aria-labelledby": "col-" + col.id },
            zh(
              "header",
              { className: "kanban-topo" },
              zh("span", { className: "kanban-icone", "aria-hidden": "true" }, (0, r.jsx)(la, { n: col.ic, size: 20 })),
              zh("h2", { id: "col-" + col.id }, col.titulo),
              zh("span", { className: "contador", "aria-label": itens.length + (itens.length === 1 ? " atendimento" : " atendimentos") }, itens.length),
            ),
            itens.length
              ? zh("ul", { className: "kanban-lista" }, itens.map(cartao))
              : zh(
                  "div",
                  { className: "kanban-vazio" },
                  zh("p", null, col.vazio),
                  col.id === "confirmado" && (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "busca", onClick: buscar, children: "Buscar especialistas" }),
                ),
          );
        }),
      ),
      cancelando &&
        (0, r.jsx)(zCancelar, {
          key: "c",
          idp: cancelando.id,
          titulo: cancelando.prof.area + " com " + cancelando.prof.nome + ", " + cancelando.dia.toLowerCase() + ", \xE0s " + cancelando.hora + ".",
          aviso: "O profissional recebe um aviso e o hor\xE1rio fica livre para outra fam\xEDlia.",
          confirmar: () => (setAb(null), cancelar(cancelando)),
          voltar: () => setAb(null),
        }),
    );
  }

  // ---------- 1b. Minha agenda (voluntário) ----------
  function zMinhaAgenda({ prof: p, agenda: a, ocupados: oc, disp, setDisp, cancelar, remarcar, sala }) {
    let [aba, setAba] = (0, L.useState)("proximos"),
      [ab, setAb] = (0, L.useState)(null),
      [ok, setOk] = (0, L.useState)(""),
      [rasc, setRasc] = (0, L.useState)(disp),
      [falta, setFalta] = (0, L.useState)(""),
      [ocupado, agir] = zUseAcao(),
      alternar = (campo, v) =>
        setRasc({ ...rasc, [campo]: rasc[campo].includes(v) ? rasc[campo].filter((x) => x !== v) : [...rasc[campo], v] }),
      grupo = (titulo, campo, itens) =>
        zh(
          "div",
          { className: "hor-grupo" },
          zh("h2", { className: "h-pequeno" }, titulo),
          zh(
            "div",
            { className: "horarios", role: "group", "aria-label": titulo },
            itens.map((v) =>
              (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": rasc[campo].includes(v), icone: rasc[campo].includes(v) ? "confirmar" : void 0, onClick: () => alternar(campo, v), children: v }, v),
            ),
          ),
        );
    return zh(
      "section",
      { className: "entra" },
      zh(
        "header",
        { className: "cabeca" },
        zh("h1", { tabIndex: -1 }, "Minha agenda"),
        zh("p", { className: "lead" }, "Seus atendimentos e os hor\xE1rios em que voc\xEA atende."),
      ),
      ok && zh("div", { className: "alerta-bloco" }, (0, r.jsx)(Do, { tipo: "ok", children: ok })),
      (0, r.jsx)(zAbas, {
        id: "agenda",
        rotulo: "Minha agenda",
        atual: aba,
        setAtual: (k) => (setAba(k), setOk("")),
        abas: [["proximos", "Pr\xF3ximos atendimentos", a.length], ["horarios", "Meus hor\xE1rios"]],
      }),
      zh(
        "div",
        { id: "agenda-painel", role: "tabpanel", "aria-labelledby": "agenda-aba-" + aba },
        aba === "proximos"
          ? a.length
            ? zh(
                "ul",
                { className: "lista-linhas" },
                zSort(a).map((f, k0) =>
                  zh(
                    "li",
                    { key: f.id, className: "agenda-item" },
                    zh(
                      "div",
                      { className: "agenda-quando" },
                      zh("span", { className: "agenda-dia" }, f.dia.split(",")[0]),
                      zh("span", { className: "agenda-hora" }, f.hora),
                    ),
                    zh(
                      "div",
                      { className: "linha-texto" },
                        zh("p", { className: "linha-titulo" }, f.familia),
                        zh("p", { className: "apoio linha-meta" }, f.dia, ", \xE0s ", f.hora, " \xB7 ", zOndeTexto(f)),
                        f.assunto && zh("p", { className: "apoio linha-meta" }, "Assunto: ", f.assunto),
                        zh("p", { className: "linha-etiquetas" }, (0, r.jsx)(zStatus, { s: "confirmado", extra: f.remarcado ? "remarcado" : null })),
                        zh(
                                "div",
                                { className: "agenda-acoes" },
                                zOnline(f) && (0, r.jsx)(ia, { sec: f.id !== (zSort(a).find(zOnline) || {}).id, peq: !0, icone: "video", onClick: () => sala(f), children: "Entrar na sala" }),
                                (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "calendario", onClick: () => (setOk(""), setAb({ id: f.id, modo: "remarcar" })), children: "Remarcar" }),
                                (0, r.jsx)(ia, { sec: !0, peq: !0, className: "btn--sec-perigo", onClick: () => (setOk(""), setAb({ id: f.id, modo: "cancelar" })), children: "Cancelar" }),
                              ),
                        ab && ab.id === f.id && ab.modo === "cancelar"
                          ? (0, r.jsx)(zCancelar, {
                              idp: f.id,
                              titulo: f.familia + ", " + f.dia.toLowerCase() + ", \xE0s " + f.hora + ".",
                              motivos: ["Imprevisto pessoal", "Problema de sa\xFAde", "N\xE3o vou conseguir no hor\xE1rio", "Outro motivo"],
                              aviso: "A fam\xEDlia recebe um aviso no app e por e-mail, com o motivo.",
                              confirmar: (m) => (setAb(null), cancelar(f, m), setOk("Atendimento cancelado. A fam\xEDlia foi avisada.")),
                              voltar: () => setAb(null),
                            })
                          : ab && ab.id === f.id && ab.modo === "remarcar"
                            ? (0, r.jsx)(zRemarcarBloco, {
                                prof: p,
                                ocupados: oc,
                                aviso: "Aparecem s\xF3 os seus hor\xE1rios livres. A fam\xEDlia recebe um aviso com o novo hor\xE1rio.",
                                confirmar: (s) => (setAb(null), remarcar(f, s), setOk("Atendimento remarcado. A fam\xEDlia recebe um aviso no app e por e-mail.")),
                                voltar: () => setAb(null),
                              })
                            : null,
                      ),
                    ),
                  ),
              )
            : zh(
                "div",
                { className: "vazio" },
                zh("h3", null, "Nenhum atendimento marcado"),
                zh("p", null, "Quando uma fam\xEDlia marcar um hor\xE1rio com voc\xEA, ele aparece aqui."),
              )
          : zh(
              "div",
              null,
              zh("p", { className: "apoio medida" }, "As fam\xEDlias s\xF3 conseguem marcar nos dias e hor\xE1rios escolhidos aqui. Atendimentos j\xE1 marcados n\xE3o mudam: para trocar um deles, use Remarcar."),
              grupo("Dias em que voc\xEA atende", "dias", zSemana),
              grupo("Hor\xE1rios", "horas", zHorasOp),
              grupo("Como voc\xEA atende", "modos", zModosOp),
              zh(
                "div",
                { className: "acoes", style: { marginTop: 32 } },
                (0, r.jsx)(ia, {
                  ocupado,
                  textoOcupado: "Salvando\u2026",
                  onClick: () => {
                    let f = !rasc.dias.length ? "Escolha pelo menos um dia." : !rasc.horas.length ? "Escolha pelo menos um hor\xE1rio." : !rasc.modos.length ? "Escolha se atende online, presencial ou os dois." : "";
                    setFalta(f);
                    f || agir(() => (setDisp(rasc), setOk("Hor\xE1rios salvos. As fam\xEDlias j\xE1 veem os novos hor\xE1rios.")));
                  },
                  children: "Salvar hor\xE1rios",
                }),
                falta && zh("span", { className: "aviso", role: "status" }, falta),
              ),
            ),
      ),
    );
  }

  // ---------- 2. Sala de vídeo ----------
  // No app real, a sala usa o Jitsi Meet (código aberto, sem conta e sem instalar nada).
  function zSala({ at: f, outro, voltar, encerrar }) {
    let [fase, setFase] = (0, L.useState)("antes"),
      [cam, setCam] = (0, L.useState)(!0),
      [mic, setMic] = (0, L.useState)(!0),
      [leg, setLeg] = (0, L.useState)(!0),
      [sup, setSup] = (0, L.useState)(!1),
      [pediu, setPediu] = (0, L.useState)(!1),
      [teste, setTeste] = (0, L.useState)(""),
      vid = (0, L.useRef)(null),
      fluxo = (0, L.useRef)(null),
      parar = () => {
        fluxo.current && fluxo.current.getTracks().forEach((t) => t.stop());
        fluxo.current = null;
      },
      testar = () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return setTeste("erro");
        setTeste("testando");
        navigator.mediaDevices
          .getUserMedia({ video: !0, audio: !0 })
          .then((s) => {
            fluxo.current = s;
            vid.current && (vid.current.srcObject = s);
            setTeste("ok");
          })
          .catch(() => setTeste("erro"));
      },
      sairDaSala = () => (parar(), setFase("fim"), encerrar && encerrar());
    (0, L.useEffect)(() => parar, []);
    (0, L.useEffect)(() => {
      fluxo.current && (fluxo.current.getVideoTracks().forEach((t) => (t.enabled = cam)), fluxo.current.getAudioTracks().forEach((t) => (t.enabled = mic)));
      vid.current && fluxo.current && vid.current.srcObject !== fluxo.current && (vid.current.srcObject = fluxo.current);
    }, [cam, mic, fase, teste]);
    let euVideo = teste === "ok" && cam,
      minhaImagem = zh("video", { ref: vid, autoPlay: !0, muted: !0, playsInline: !0, "aria-label": "Sua c\xE2mera", hidden: !euVideo }),
      botao = (on, txtOn, txtOff, ic, set) =>
        (0, r.jsx)(ia, { sec: !0, peq: !0, icone: ic, "aria-pressed": on, onClick: () => set(!on), children: on ? txtOn : txtOff }),
      ajuda = sup &&
        zh(
          "div",
          { className: "painel-acao", role: "region", "aria-label": "Ajuda com a chamada" },
          zh("p", { className: "linha-titulo" }, "Ajuda com a chamada"),
          zh(
            "ul",
            { className: "sala-dicas" },
            zh("li", null, zh("b", null, "N\xE3o estou ouvindo: "), "confira o volume e se o fone est\xE1 conectado."),
            zh("li", null, zh("b", null, "N\xE3o me veem: "), "toque em C\xE2mera e confira se o navegador deu permiss\xE3o."),
            zh("li", null, zh("b", null, "A chamada caiu: "), "volte em Atendimentos e toque em Entrar na sala. O profissional espera 10 minutos."),
          ),
          pediu
            ? (0, r.jsx)(Do, { tipo: "ok", children: "Pedido enviado. O suporte do zElo responde no Chat em at\xE9 5 minutos, no hor\xE1rio de atendimento." })
            : (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "conversa", onClick: () => setPediu(!0), children: "Falar com o suporte do zElo" }),
        );
    if (fase === "fim")
      return zh(
        "section",
        { className: "entra" },
        zh("header", { className: "cabeca" }, zh("h1", { tabIndex: -1 }, "Atendimento encerrado"), zh("p", { className: "lead" }, "A chamada n\xE3o foi gravada.")),
        zh("div", { className: "acoes" }, (0, r.jsx)(ia, { fim: "avancar", onClick: voltar, children: "Voltar aos atendimentos" })),
      );
    if (fase === "chamada")
      return zh(
        "section",
        { className: "entra tela-sala" },
        zh("h1", { tabIndex: -1, className: "so-leitor" }, "Chamada com ", outro.nome),
        zh(
          "div",
          { className: "sala-video" },
          zh("span", { className: "sala-avatar", "aria-hidden": "true" }, outro.iniciais),
          zh("span", { className: "sala-nome" }, outro.nome),
          zh("div", { className: "sala-eu" }, minhaImagem, !euVideo && zh("span", null, cam ? "Voc\xEA" : "C\xE2mera desligada")),
        ),
        leg && zh("p", { className: "sala-legenda", "aria-live": "polite" }, zh("b", null, outro.nome.split(" ").slice(0, 2).join(" "), ": "), "Oi, tudo bem? Est\xE1 me ouvindo direitinho?"),
        zh(
          "div",
          { className: "sala-controles", role: "toolbar", "aria-label": "Controles da chamada" },
          botao(mic, "Microfone ligado", "Microfone desligado", "microfone", setMic),
          botao(cam, "C\xE2mera ligada", "C\xE2mera desligada", "video", setCam),
          botao(leg, "Legendas ligadas", "Legendas desligadas", "legenda", setLeg),
          (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "informacao", "aria-pressed": sup, onClick: () => setSup(!sup), children: "Ajuda" }),
          (0, r.jsx)(ia, { peq: !0, className: "btn--perigo", icone: "fechar", onClick: sairDaSala, children: "Sair da chamada" }),
        ),
        ajuda,
      );
    return zh(
      "section",
      { className: "entra" },
      zh(
        "header",
        { className: "cabeca" },
        zh("h1", { tabIndex: -1 }, "Sala de v\xEDdeo"),
        zh("p", { className: "lead" }, "Com ", outro.nome.replace(/\.$/, ""), ". ", f.dia, ", \xE0s ", f.hora, "."),
      ),
      (0, r.jsx)(Do, { tipo: "info", children: "A chamada acontece aqui, sem instalar nada. N\xE3o \xE9 gravada, e s\xF3 voc\xEAs dois entram." }),
      zh(
        "div",
        { className: "sala-video sala-previa" },
        minhaImagem,
        !euVideo && zh("span", { className: "sala-previa-texto" }, cam ? "Sua c\xE2mera aparece aqui depois do teste" : "C\xE2mera desligada"),
      ),
      zh(
        "div",
        { className: "sala-controles" },
        (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "video", onClick: testar, disabled: teste === "testando", children: teste === "ok" ? "Testar de novo" : "Testar c\xE2mera e microfone" }),
      ),
      teste === "ok" && zh("p", { className: "apoio", role: "status" }, "C\xE2mera e microfone funcionando."),
      teste === "erro" &&
        zh("div", { className: "alerta-bloco", role: "status" }, (0, r.jsx)(Do, { tipo: "aviso", children: "N\xE3o conseguimos usar a c\xE2mera. Confira a permiss\xE3o do navegador. D\xE1 para entrar s\xF3 com o \xE1udio." })),
      zh("h2", { className: "h-pequeno secao-titulo-peq" }, "Como voc\xEA quer entrar"),
      zh(
        "div",
        { className: "sala-controles" },
        botao(cam, "C\xE2mera ligada", "C\xE2mera desligada", "video", setCam),
        botao(mic, "Microfone ligado", "Microfone desligado", "microfone", setMic),
        botao(leg, "Legendas ligadas", "Legendas desligadas", "legenda", setLeg),
      ),
      zh("p", { className: "apoio medida" }, "As legendas escrevem na tela o que o profissional fala."),
      zh(
        "div",
        { className: "acoes" },
        (0, r.jsx)(ia, { icone: "video", onClick: () => setFase("chamada"), children: "Entrar na sala" }),
        zh("button", { type: "button", className: "link", "aria-expanded": sup, onClick: () => setSup(!sup) }, "Ajuda com a chamada"),
      ),
      ajuda,
    );
  }

  // ---------- 4. Notificações ----------
  // Agrupadas por quando chegaram. As novas levam o status "Novo"; o resto fica neutro.
  function zGrupoQuando(q) {
    let t = Ll(q || "");
    return /^(agora|hoje|ha \d+ (min|minutos?|horas?))/.test(t) ? "Hoje" : /^ontem/.test(t) ? "Ontem" : "Antes";
  }
  function zNotificacoes({ lista, papel, abrir, marcarTodas }) {
    let [f, setF] = (0, L.useState)("todas"),
      tipos = [["todas", "Todas"], ["forum", "F\xF3rum"], ["atend", "Atendimentos"], ...(papel === "voluntario" ? [["cadastro", "Cadastro"]] : [])],
      ic = { forum: "forum", atend: "calendario", cadastro: "verificado" },
      itens = lista.filter((n) => f === "todas" || n.tipo === f),
      novas = lista.filter((n) => !n.lida).length,
      grupos = ["Hoje", "Ontem", "Antes"].map((g) => [g, itens.filter((n) => zGrupoQuando(n.quando) === g)]).filter(([, l]) => l.length);
    return zh(
      "section",
      { className: "entra" },
      zh(
        "header",
        { className: "cabeca" },
        zh("h1", { tabIndex: -1 }, "Notifica\xE7\xF5es"),
        zh(
          "p",
          { className: "lead" },
          papel === "voluntario" ? "Respostas do f\xF3rum e avisos da agenda e do cadastro." : "Respostas do f\xF3rum e avisos dos seus atendimentos.",
          " Os avisos de atendimento tamb\xE9m chegam por e-mail.",
        ),
      ),
      zh(
        "div",
        { className: "secao-topo" },
        (0, r.jsx)(zFiltros, { rotulo: "Mostrar", valor: f, mudar: setF, itens: tipos }),
        novas > 0
          ? (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "confirmar", onClick: marcarTodas, children: "Marcar todas como lidas" })
          : (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "confirmar", disabled: !0, "aria-disabled": !0, title: "Nenhuma notifica\xE7\xE3o nova", children: "Tudo lido" }),
      ),
      grupos.length
        ? grupos.map(([g, l]) =>
            zh(
              "div",
              { key: g, className: "bloco-lista" },
              zh("h2", { className: "lista-legenda" }, g),
              zh(
                "ul",
                { className: "lista-linhas" },
                l.map((n) =>
                  zh(
                    "li",
                    { key: n.id },
                    zh(
                      "button",
                      { type: "button", className: "item-linha notif" + (n.lida ? "" : " notif--nova"), onClick: () => abrir(n) },
                      zh("span", { className: "item-icone", "aria-hidden": "true" }, (0, r.jsx)(la, { n: ic[n.tipo], size: 20 })),
                      zh(
                        "span",
                        { className: "linha-texto" },
                        zh("span", { className: "linha-titulo" }, n.titulo),
                        zh("span", { className: "linha-meta" }, n.texto),
                        zh("span", { className: "apoio linha-meta" }, n.quando),
                      ),
                      !n.lida && (0, r.jsx)(zStatus, { s: "novo" }),
                    ),
                  ),
                ),
              ),
            ),
          )
        : zh(
            "div",
            { className: "vazio" },
            zh("h3", null, f === "todas" ? "Nenhuma notifica\xE7\xE3o" : "Nenhuma notifica\xE7\xE3o deste tipo"),
            zh("p", null, f === "todas" ? "Quando algu\xE9m responder no f\xF3rum ou um atendimento mudar, o aviso aparece aqui." : "Escolha Todas para ver as outras."),
          ),
    );
  }
  // Formato do esqueleto mostrado ao abrir cada tela
  var zTipoEsqueleto = {
    inicio: "inicio",
    atendimentos: "grade",
    dicas: "grade",
    forum: "lista",
    notificacoes: "lista",
    "forum-topico": "texto",
    dica: "texto",
    perfil: "texto",
    chat: "lista",
  };
  function Dm() {
    let [a, o] = (0, L.useState)("objetivo"),
      [e, t] = (0, L.useState)(
        () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
      [n, l] = (0, L.useState)(null),
      [s, i] = (0, L.useState)({ nome: "", email: "" }),
      [c, m] = (0, L.useState)(R2),
      [I, f] = (0, L.useState)(1),
      [u, g] = (0, L.useState)("inicio"),
      [v, A] = (0, L.useState)(zTemaInicial),
      [y, h] = (0, L.useState)(Nm),
      [p, d] = (0, L.useState)(null),
      [S, b] = (0, L.useState)(null),
      [O, T] = (0, L.useState)(z2),
      [ag, setAg] = (0, L.useState)(zAgInicial),
      E = ag.filter((x) => x.familia === "voce" && x.status === "confirmado"),
      famTodos = ag.filter((x) => x.familia === "voce"),
      [rem, setRem] = (0, L.useState)(null),
      [sala, setSala] = (0, L.useState)(null),
      [salaVolta, setSalaVolta] = (0, L.useState)("atendimentos"),
      [nt, setNt] = (0, L.useState)(zNotifsIniciais),
      [pend, setPend] = (0, L.useState)(zPendentes),
      [lg, setLg] = (0, L.useState)([]),
      [disp, setDisp] = (0, L.useState)(zDispInicial),
      [z, ja] = (0, L.useState)(0),
      [Fr, wl] = (0, L.useState)("buscar"),
      [k2, _2] = (0, L.useState)(null),
      [G2, Bm] = (0, L.useState)({ dia: null, hora: null }),
      [V2, Nl] = (0, L.useState)(!1),
      [cv, setCv] = (0, L.useState)(0),
      [letra, setLetra] = (0, L.useState)(zLetraInicial),
      [origem, setOrigem] = (0, L.useState)("inicio"),
      [esq, setEsq] = (0, L.useState)(!1),
      [priv, setPriv] = (0, L.useState)(null),
      [privProx, setPrivProx] = (0, L.useState)("diagnostico"),
      telaAntes = (0, L.useRef)(a),
      Hm = (0, L.useRef)(!1),
      // Banco: só grava depois de carregar o que a pessoa já tinha, para não apagar nada
      carregadoB = (0, L.useRef)(!1),
      diagFeitoB = (0, L.useRef)(!1);
    xr = zAtalhos(c);
    Object.assign(zPriv, { cidade: !!(priv && priv.cidade), ana: !!(priv && priv.ana) });
    let irPriv = (prox) => (priv ? o(prox) : (setPrivProx(prox), o("privacidade")));
    // Novidades: agenda de todos, notificações, registro da equipe
    let para = zPara(n),
      ativos = ag.filter((x) => x.status !== "cancelado"),
      volProf = {
        id: "pv",
        nome: s.nome || "L\xEDvia Prado",
        iniciais: zIniciais(s.nome) || "EU",
        area: s.area || "Psicologia",
        registro: s.registro || "",
        onde: disp.modos.join(" ou "),
        modos: disp.modos.length > 1 ? disp.modos : null,
        dias: disp.dias,
        horas: disp.horas,
        agora: !1,
      },
      profDe = (f) => (f.profId === "pv" ? volProf : f.prof),
      avisar = (pp, tipo, titulo, texto, extra) =>
        setNt((l0) => [{ id: "n" + Date.now() + Math.random(), para: pp, tipo, titulo, texto, quando: "agora, " + zAgora(), lida: !1, ...extra }, ...l0]),
      registrar = (texto) => setLg((l0) => [{ hora: zAgora(), texto }, ...l0]),
      mudarAt = (f, mud) => setAg((l0) => l0.map((x) => (x.id === f.id ? { ...x, ...mud } : x))),
      novoHorario = (s0) => ({ diaId: s0.dia, dia: zDiaRotulo(s0.dia), hora: s0.hora, remarcado: !0 }),
      abrirSala = (f, volta) => (setSala(f), setSalaVolta(volta || "atendimentos"), o("sala"));
    (0, L.useEffect)(() => {
      a === "chat" && cv !== O.msgs.length && setCv(O.msgs.length);
    }, [a, O.msgs.length]);
    (0, L.useEffect)(() => {
      if (!zBanco.uid || !carregadoB.current) return;
      if (!xS.includes(a) && a !== "diagnostico") diagFeitoB.current = !0;
      let t0 = setTimeout(() => zBanco.salvarPerfil(s.nome, n, { diag: c, priv, disp, area: s.area || null, registro: s.registro || null, diagFeito: diagFeitoB.current }), 800);
      return () => clearTimeout(t0);
    }, [c, priv, disp, s.nome, n, a]);
    (0, L.useEffect)(() => {
      carregadoB.current && zBanco.salvarAgenda(ag.filter((x) => x.familia === "voce"));
    }, [ag]);
    ((0, L.useEffect)(() => {
      document.documentElement.dataset.theme = v;
      try {
        localStorage.setItem("zelo-tema", v);
      } catch (x) {}
    }, [v]),
      (0, L.useEffect)(() => {
        document.documentElement.dataset.letra = letra;
        try {
          localStorage.setItem("zelo-letra", letra);
        } catch (x) {}
      }, [letra]),
      // Guarda de onde a pessoa veio, para o "‹ Tela de origem" das telas fora do menu.
      // Na troca de tela mostra um esqueleto no formato do conteúdo por um instante.
      (0, L.useEffect)(() => {
        let antes = telaAntes.current;
        telaAntes.current = a;
        if (antes === a) return;
        zForaDoMenu.includes(a) && !zForaDoMenu.includes(antes) && setOrigem(antes);
        if (!zTipoEsqueleto[a] || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        setEsq(!0);
        let tm = setTimeout(() => setEsq(!1), 350);
        return () => clearTimeout(tm);
      }, [a]),
      (0, L.useEffect)(() => {
        if (!Hm.current) {
          Hm.current = !0;
          return;
        }
        (window.scrollTo(0, 0),
          requestAnimationFrame(() =>
            document.querySelector("main h1")?.focus({ preventScroll: !0 }),
          ));
      }, [a, I, z, p, S, esq, Fr]));
    let P2 =
        a !== "objetivo" &&
        a !== "login" &&
        a !== "cadastro" &&
        a !== "privacidade" &&
        a !== "status-voluntario" &&
        !(a === "diagnostico" && u === "inicio"),
      bt = (H) => {
        if (H === "atendimentos-meus")
          return (wl("meus"), ja(0), Nl(!1), o("atendimentos"));
        if (H === "atendimentos-buscar")
          return (wl("buscar"), ja(0), Nl(!1), o("atendimentos"));
        (H === "atendimentos" && (ja(0), Nl(!1)),
          H === "forum" && d(null),
          H === "dicas" && b(null),
          o(H));
      },
      Om = (H) => {
        (_2(H),
          setRem(null),
          Bm({ dia: null, hora: null }),
          ja(1),
          Nl(!1),
          o("atendimentos"));
      },
      Z2 = () => o(P2 ? "inicio" : "objetivo"),
      j2 = (H) => {
        let ae = H.split("@")[0].split(/[._-]/)[0] || "voc\xEA";
        return ae.charAt(0).toUpperCase() + ae.slice(1);
      },
      kr = (H) => {
        (h((lista) =>
          lista.map((tp) =>
            tp.id === H && tp.etiquetas.includes("Novo") && tp.autor !== s.nome
              ? { ...tp, etiquetas: tp.etiquetas.filter((x) => x !== "Novo") }
              : tp,
          ),
        ),
          d(H),
          o("forum-topico"));
      },
      pedir = (txt) => {
        let u = O.msgs.length;
        (T({
          msgs: [
            ...O.msgs,
            {
              de: "voce",
              texto: typeof txt === "string" ? "Pedido de ajuda: " + txt : "Pedido de ajuda enviado pela tela Preciso de ajuda.",
              hora: Mm(u * 2),
              pedido: !0,
            },
            {
              de: "ana",
              texto: zPedidoResposta.texto,
              hora: Mm(u * 2 + 1),
              links: zPedidoResposta.links,
            },
          ],
          opcoes: [],
          ctx: zPedidoResposta.ctx,
        }),
          o("chat"));
      },
      Rm = (H) => {
        (b(H), o("dica"));
      },
      X2 = (H) => {
        let antes = y.find((ae) => ae.id === H.id);
        antes && H.respostas.filter((x) => !antes.respostas.some((q) => q.id === x.id)).forEach((x) => zBanco.novaResposta(H.id, x));
        h(y.map((ae) => (ae.id === H.id ? H : ae)));
      },
      // Junta o que veio do banco com os dados de exemplo do protótipo
      aplicarBanco = (d, email, nm) => {
        let pf = d.perfil,
          dd = (pf && pf.dados) || {};
        (i({ nome: (pf && pf.nome) || nm || j2(email), email, area: dd.area || void 0, registro: dd.registro || void 0 }),
          pf && pf.papel && l(pf.papel),
          dd.diag && m(dd.diag),
          dd.disp && setDisp(dd.disp),
          dd.priv && setPriv(dd.priv),
          (diagFeitoB.current = !!dd.diagFeito),
          setAg([...zAgInicial.filter((x) => x.familia !== "voce"), ...d.agenda.map((x) => zNovoAt(x))]));
        let novos = d.topicos.map((x) => ({ apoio: 0, ajudou: 0, ...x, respostas: [] })),
          todos = [...novos, ...Nm].map((tp) => ({ ...tp, respostas: [...tp.respostas, ...d.respostas.filter((x) => x.topicoId === tp.id)] }));
        (h(todos), (carregadoB.current = !0));
        return !!(pf && dd.diagFeito && dd.priv);
      },
      Y2 = () => {
        (zBanco.sair(),
          (carregadoB.current = !1),
          (diagFeitoB.current = !1),
          h(Nm),
          l(null),
          i({ nome: "", email: "" }),
          m(R2),
          T(z2),
          setAg(zAgInicial),
          setNt(zNotifsIniciais),
          setDisp(zDispInicial),
          setRem(null),
          setPriv(null),
          setCv(0),
          wl("buscar"),
          ja(0),
          A("claro"),
          o("objetivo"));
      },
      Q2 = {
        forum: y.filter((tp) => tp.etiquetas.includes("Novo") && tp.autor !== s.nome).length,
        chat:
          a === "chat"
            ? 0
            : O.msgs.slice(cv).filter((mm) => mm.de === "ana").length,
        notif: nt.filter((x) => x.para === para && !x.lida).length,
        atend: n === "voluntario" ? ativos.filter((x) => x.profId === "pv").length : E.length,
        dicas: zr.filter((d) => c.direcionamento.includes(d.dir)).length,
      },
      numeros =
        n === "voluntario"
          ? [
              { ic: "calendario", rotulo: "Atendimentos marcados", n: ativos.filter((x) => x.profId === "pv").length, ir: () => bt("atendimentos") },
              { ic: "forum", rotulo: "Perguntas sem resposta no f\xF3rum", n: y.filter((tp) => !tp.respostas.some((x) => x.profissional)).length, ir: () => bt("forum") },
              { ic: "sino", rotulo: "Notifica\xE7\xF5es novas", n: nt.filter((x) => x.para === para && !x.lida).length, ir: () => bt("notificacoes") },
            ]
          : [
              { ic: "calendario", rotulo: "Atendimentos marcados", n: E.length, ir: () => bt("atendimentos-meus") },
              { ic: "forum", rotulo: "T\xF3picos novos no f\xF3rum", n: y.filter((tp) => tp.etiquetas.includes("Novo") && tp.autor !== s.nome).length, ir: () => bt("forum") },
              { ic: "chat", rotulo: "Mensagens da Ana", n: a === "chat" ? 0 : O.msgs.slice(cv).filter((mm) => mm.de === "ana").length, ir: () => bt("chat") },
            ],
      K2 = a === "ajuda" ? "ajuda" : US[a],
      J2 = y.find((H) => H.id === p),
      W2 = zr.find((H) => H.id === S),
      $2 = !xS.includes(a) && !(a === "diagnostico" && u === "inicio"),
      xa = null;
    switch (a) {
      case "objetivo":
        xa = (0, r.jsx)(FS, {
          tema: v,
          setTema: A,
          escolher: (H) => {
            (l(H),
              H === "voluntario" ? irPriv("cadastro") : o("login"));
          },
        });
        break;
      case "login":
        xa = (0, r.jsx)(kS, {
          papel: n,
          voltar: () => o(n === "voluntario" ? "cadastro" : "objetivo"),
          criarVoluntario: () => o("cadastro"),
          entrar: (H, nm) => {
            let seguir = () =>
              n === "voluntario"
                ? irPriv("inicio")
                : (f(1), g("inicio"), irPriv("diagnostico"));
            if (!zBanco.ativo) return (i({ nome: nm || j2(H), email: H }), seguir());
            zBanco.carregar().then(
              (d) => (d && aplicarBanco(d, H, nm) ? o("inicio") : seguir()),
              () => (i({ nome: nm || j2(H), email: H }), seguir()),
            );
          },
        });
        break;
      case "diagnostico":
        xa = (0, r.jsx)(GS, {
          passo: I,
          setPasso: f,
          diag: c,
          setDiag: m,
          papel: n,
          concluir: () => o(u === "perfil" ? "perfil" : "inicio"),
          sair: () => o(u === "perfil" ? "perfil" : "login"),
        });
        break;
      case "privacidade":
        xa = (0, r.jsx)(zPrivacidade, {
          papel: n,
          priv,
          setPriv,
          continuar: () => o(privProx),
          voltar: () => o(privProx === "cadastro" ? "objetivo" : "login"),
        });
        break;
      case "cadastro":
        xa = (0, r.jsx)(VS, {
          voltar: () => o("objetivo"),
          entrar: () => o("login"),
          enviar: (H) => {
            // Com banco: cria a conta do voluntário. A conferência do registro continua simulada.
            zBanco.ativo &&
              zBanco.criarConta(H.email.trim(), H.senha, H.nome.trim()).then(
                () => (carregadoB.current = !0),
                (x) => console.warn("zElo banco:", x.message),
              );
            (i({ nome: H.nome.trim(), email: H.email, area: H.area, registro: H.registro.trim() }),
              setPend((l0) => [
                {
                  id: "eu",
                  nome: H.nome.trim(),
                  area: H.area,
                  registro: H.registro.trim(),
                  cidade: H.cidade.trim(),
                  enviado: "agora",
                  arquivo: "documento enviado no cadastro",
                  checagem: zChecar(H.registro),
                  status: "pendente",
                },
                ...l0.filter((x) => x.id !== "eu"),
              ]),
              o("status-voluntario"));
          },
        });
        break;
      case "status-voluntario":
        xa = (0, r.jsx)(PS, {
          nome: s.nome,
          aprovar: () => {
            (setPend((l0) => l0.map((x) => (x.id === "eu" ? { ...x, status: "aprovado", apagadoEm: zAgora() } : x))),
              setNt((l0) => l0.filter((x) => x.id !== "n4")),
              avisar("voluntario", "cadastro", "Cadastro aprovado", "Uma pessoa da equipe conferiu o seu registro. O documento que voc\xEA enviou foi apagado.", { tela: "inicio" }),
              o("inicio"));
          },
          voltar: () => o("objetivo"),
        });
        break;
      case "inicio":
        xa = (0, r.jsx)(ZS, {
          usuario: s,
          papel: n,
          diag: c,
          agenda: E,
          irPara: bt,
          abrirTopico: kr,
          abrirDica: Rm,
          abrirProf: Om,
          numeros,
        });
        break;
      case "perfil":
        xa = (0, r.jsx)(XS, {
          usuario: s,
          setUsuario: i,
          diag: c,
          setDiag: m,
          papel: n,
          tema: v,
          setTema: A,
          letra,
          setLetra,
          priv,
          setPriv,
          sair: Y2,
        });
        break;
      case "chat":
        xa = (0, r.jsx)(QS, { usuario: s, chat: O, setChat: T, irPara: bt });
        break;
      case "forum":
        xa = (0, r.jsx)(KS, {
          topicos: y,
          abrir: kr,
          publicar: (H) => {
            let ae = `t${Date.now()}`,
              novoTp = {
                id: ae,
                titulo: H.titulo.trim(),
                autor: s.nome,
                cidade: zPriv.cidade ? "Recife" : "",
                quando: "agora",
                etiquetas: ["Novo", N2[H.dir]],
                dir: H.dir,
                apoio: 0,
                ajudou: 0,
                corpo: H.corpo.trim(),
                respostas: [],
              };
            (zBanco.novoTopico(novoTp), h([novoTp, ...y]), kr(ae));
          },
        });
        break;
      case "forum-topico":
        xa = (0, r.jsx)(JS, {
          t: J2,
          atualizar: X2,
          usuario: s,
          papel: n,
        });
        break;
      case "dicas":
        xa = (0, r.jsx)($S, { abrir: Rm, irPara: bt });
        break;
      case "dica":
        xa = (0, r.jsx)(a4, { d: W2 });
        break;
      case "atendimentos":
        xa =
          z === 0 && n === "voluntario"
            ? (0, r.jsx)(zMinhaAgenda, {
                prof: volProf,
                agenda: ativos.filter((x) => x.profId === "pv" && x.status === "confirmado"),
                ocupados: ativos,
                disp,
                setDisp,
                sala: (f) => abrirSala(f),
                cancelar: (f, m) => mudarAt(f, { status: "cancelado", motivo: "A pedido do profissional (" + m.toLowerCase() + ")" }),
                remarcar: (f, s0) => mudarAt(f, novoHorario(s0)),
              })
            : n === "voluntario"
            ? null
            : (0, r.jsx)(o4, {
                agenda: E,
                todos: famTodos,
                tab: Fr,
                setTab: wl,
                abrirProf: Om,
                confirmado: V2,
                sala: (f) => abrirSala(f),
                remarcar: (f) => (Om(f.profId), setRem(f)),
                cancelar: (H) => {
                  (mudarAt(H, { status: "cancelado", motivo: "A pedido da fam\xEDlia" }),
                    Nl("cancelado"),
                    avisar("familia", "atend", "Atendimento cancelado", "Voc\xEA cancelou " + H.dia.toLowerCase() + ", \xE0s " + H.hora + ", com " + H.prof.nome + ". O hor\xE1rio ficou livre.", { tela: "atendimentos-meus", lida: !0 }));
                },
              });
        z > 0 &&
          (xa = (0, r.jsxs)(r.Fragment, {
            children: [
              xa,
              (0, r.jsx)(e4, {
                prof: At.find((H) => H.id === k2),
                agenda: E,
                passo: z,
                setPasso: ja,
                sel: G2,
                setSel: Bm,
                ocupados: ativos,
                remarcando: rem,
                sair: () => (ja(0), setRem(null)),
                confirmar: (H) => {
                  (rem
                    ? (mudarAt(rem, { ...H, remarcado: !0 }),
                      Nl("remarcado"),
                      avisar("familia", "atend", "Atendimento remarcado", "Agora \xE9 " + H.dia.toLowerCase() + ", \xE0s " + H.hora + ", com " + H.prof.nome + ".", { tela: "atendimentos-meus", lida: !0 }))
                    : (setAg([...ag, { ...H, id: "a" + Date.now(), familia: "voce", status: "confirmado" }]),
                      Nl("marcado"),
                      avisar("familia", "atend", "Atendimento marcado", H.dia + ", \xE0s " + H.hora + ", com " + H.prof.nome + ". Voc\xEA recebe um lembrete um dia antes.", { tela: "atendimentos-meus", lida: !0 })),
                    setRem(null),
                    wl("meus"),
                    ja(0));
                },
              }, "agendar"),
            ],
          }));
        break;
      case "ajuda":
        xa = (0, r.jsx)(t4, { irPara: bt, pedir });
        break;
      case "sala": {
        let outroLado =
          sala && sala.profId === "pv"
            ? { nome: sala.familia, iniciais: zIniciais(sala.familia.replace(/^Fam\xEDlia de /, "")) }
            : sala && sala.prof;
        xa = sala
          ? (0, r.jsx)(zSala, { at: sala, outro: outroLado, encerrar: () => mudarAt(sala, { status: "realizado" }), voltar: () => bt(salaVolta === "atendimentos" && n !== "voluntario" ? "atendimentos-meus" : salaVolta) }, sala.id)
          : null;
        break;
      }
      case "notificacoes":
        xa = (0, r.jsx)(zNotificacoes, {
          lista: nt.filter((x) => x.para === para),
          papel: n,
          marcarTodas: () => setNt((l0) => l0.map((x) => (x.para === para ? { ...x, lida: !0 } : x))),
          abrir: (x) => {
            (setNt((l0) => l0.map((y) => (y.id === x.id ? { ...y, lida: !0 } : y))),
              x.topico ? kr(x.topico) : bt(x.tela || "inicio"));
          },
        });
        break;
      default:
        xa = null;
    }
    // Etapas da entrada no topo das telas de entrada
    let etapa =
      n === "voluntario"
        ? { privacidade: "Privacidade", cadastro: "Cadastro", "status-voluntario": "Verifica\xE7\xE3o" }[a]
        : n === "responsavel" || n === "pcd"
          ? { login: "Conta", privacidade: "Privacidade", diagnostico: u === "inicio" ? "Perguntas" : null }[a]
          : null;
    etapa && xa && (xa = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(zEtapasEntrada, { papel: n, atual: etapa }, "et"), (0, r.jsx)(L.default.Fragment, { children: xa }, "xa")] }));
    return (0, r.jsxs)(r.Fragment, {
      children: [
        e && (0, r.jsx)(n4, { tema: v, fim: () => t(!1) }),
        (0, r.jsx)(qS, {
          tema: v,
          atual: K2,
          comMenu: $2,
          irInicio: Z2,
          irPara: bt,
          contadores: Q2,
          usuario: s,
          setTema: A,
          sair: Y2,
          titulo: a === "atendimentos" && n !== "voluntario" ? (Fr === "meus" ? "Meus agendamentos" : "Buscar especialistas") : zNomeTela[a] || "",
          voltar: zForaDoMenu.includes(a) ? { rotulo: zNomeTela[origem] || "In\xEDcio", ir: () => bt(origem) } : null,
          children: esq ? (0, r.jsx)(zEsqueleto, { tipo: zTipoEsqueleto[a] }) : xa,
        }),
      ],
    });
  }
  var F2 = N(yt());
  (0, q2.createRoot)(document.getElementById("raiz")).render(
    (0, F2.jsx)(Dm, {}),
  );
})();
