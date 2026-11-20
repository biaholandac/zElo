  var P = N(yt()),
    OS = {
      conversa: Qu,
      forum: Ju,
      ajuda: ym,
      perfil: gm,
      busca: rm,
      enviar: mm,
      voltar: Zu,
      avancar: Xu,
      fechar: bm,
      confirmar: $u,
      atencao: Cm,
      informacao: tm,
      adicionar: Im,
      apoio: om,
      telefone: pm,
      local: cm,
      elo: lm,
    };
  function zIc(paths) {
    return function ({ size: s = 24, className: c }) {
      return (0, P.jsx)("svg", {
        className: c,
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.9,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        dangerouslySetInnerHTML: { __html: paths },
      });
    };
  }
  Object.assign(OS, {
    casa: zIc('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>'),
    calendario: zIc('<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>'),
    dica: zIc('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>'),
    cadeado: zIc('<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
    video: zIc('<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 10.5 6-3.5v10l-6-3.5"/>'),
    mensagem: zIc('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z"/>'),
  });
  function la({ n: a, size: o = 24 }) {
    let e = OS[a];
    return (0, P.jsx)(e, {
      className: "ic",
      size: o,
      weight: "regular",
      "aria-hidden": "true",
      focusable: "false",
    });
  }
  function ia({
    children: a,
    sec: o,
    peq: e,
    icone: t,
    fim: n,
    className: l = "",
    ...s
  }) {
    let i = ["btn", o ? "btn--sec" : "", e ? "btn--peq" : "", l]
      .filter(Boolean)
      .join(" ");
    return (0, P.jsxs)("button", {
      type: "button",
      className: i,
      ...s,
      children: [
        t && (0, P.jsx)(la, { n: t, size: e ? 20 : 24 }),
        a,
        n && (0, P.jsx)(la, { n, size: e ? 20 : 24 }),
      ],
    });
  }
  function Ye({ onClick: a, children: o = "Voltar" }) {
    return (0, P.jsxs)("button", {
      type: "button",
      className: "link-voltar",
      onClick: a,
      children: [(0, P.jsx)(la, { n: "voltar", size: 22 }), o],
    });
  }
  function Do({ tipo: a = "info", palavra: o, children: e, ...t }) {
    let n = {
        info: ["informacao", "Informa\xE7\xE3o:"],
        ok: ["confirmar", "Confirmado:"],
        aviso: ["atencao", "Aten\xE7\xE3o:"],
        erro: ["fechar", "Erro:"],
      },
      [l, s] = n[a];
    return (0, P.jsxs)("div", {
      className: `alerta alerta--${a}`,
      role: a === "erro" ? "alert" : "status",
      ...t,
      children: [
        (0, P.jsx)(la, { n: l, size: 24 }),
        (0, P.jsxs)("p", {
          children: [(0, P.jsx)("b", { children: o || s }), " ", e],
        }),
      ],
    });
  }
  function Bo({ children: a, forte: o, icone: e }) {
    return (0, P.jsxs)("span", {
      className: `etiqueta${o ? " etiqueta--forte" : ""}`,
      children: [e && (0, P.jsx)(la, { n: e, size: 16 }), a],
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
  function Tm({ itens: a, valor: o, onChange: e, multi: t, rotulo: n }) {
    let l = (s) => (t ? o.includes(s) : o === s);
    return (0, P.jsx)("div", {
      className: "opcoes",
      role: t ? "group" : "radiogroup",
      "aria-label": n,
      children: a.map((s) => {
        let i = l(s.id);
        return (0, P.jsxs)(
          "button",
          {
            type: "button",
            className: "opcao",
            onClick: () => e(s.id),
            ...(t
              ? { "aria-pressed": i }
              : { role: "radio", "aria-checked": i }),
            children: [
              (0, P.jsxs)("span", {
                children: [
                  s.rotulo,
                  s.sub &&
                    (0, P.jsx)("span", {
                      className: "opcao-sub",
                      children: s.sub,
                    }),
                ],
              }),
              i
                ? (0, P.jsxs)("span", {
                    className: "opcao-estado",
                    children: [
                      (0, P.jsx)(la, { n: "confirmar", size: 22 }),
                      "Escolhido",
                    ],
                  })
                : (0, P.jsx)("span", {
                    className: `opcao-vazio${t ? " opcao-vazio--q" : ""}`,
                    "aria-hidden": "true",
                  }),
            ],
          },
          s.id,
        );
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
        rotulo: "Terapias e reabilita\xE7\xE3o",
        sub: "Terapia ocupacional, fisioterapia, fonoaudiologia",
      },
      {
        id: "emocional",
        rotulo: "Sa\xFAde emocional",
        sub: "Ansiedade, crises e mudan\xE7as de comportamento",
      },
      {
        id: "rotina",
        rotulo: "Sono, alimenta\xE7\xE3o e rotina",
        sub: "Noites, refei\xE7\xF5es e manh\xE3s",
      },
      {
        id: "comunicacao",
        rotulo: "Comunica\xE7\xE3o e fala",
        sub: "Entender e ser entendido",
      },
      {
        id: "mobilidade",
        rotulo: "Movimento e dor",
        sub: "Postura, mobilidade e desconforto",
      },
      {
        id: "cuidador",
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
    RS = [
      { id: "d2", rotulo: "Hoje, segunda, 2 de novembro", sem: "Hoje" },
      { id: "d3", rotulo: "Ter\xE7a, 3 de novembro", sem: "Ter\xE7a" },
      { id: "d4", rotulo: "Quarta, 4 de novembro", sem: "Quarta" },
      { id: "d5", rotulo: "Quinta, 5 de novembro", sem: "Quinta" },
      { id: "d6", rotulo: "Sexta, 6 de novembro", sem: "Sexta" },
      { id: "d7", rotulo: "S\xE1bado, 7 de novembro", sem: "S\xE1bado" },
      { id: "d9", rotulo: "Segunda, 9 de novembro", sem: "Segunda" },
      { id: "d10", rotulo: "Ter\xE7a, 10 de novembro", sem: "Ter\xE7a" },
    ];
  function Ur(a, o = []) {
    let e = At.findIndex((n) => n.id === a.id),
      t = [];
    return (
      RS.forEach((n, l) => {
        if (n.sem === "Hoje" ? !a.agora : !a.dias.includes(n.sem)) return;
        let s = (n.sem === "Hoje" ? ["16:00", "16:30"] : a.horas)
          .filter((i, c) => n.sem === "Hoje" || (e + l + c) % 4 !== 0)
          .filter(
            (i) =>
              !o.some(
                (c) =>
                  c.diaId === n.id &&
                  c.hora === i &&
                  (!c.profId || c.profId === a.id) &&
                  c.status !== "cancelado",
              ),
          );
        s.length && t.push({ ...n, horas: s });
      }),
      t
    );
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
      (x, y) =>
        RS.findIndex((d) => d.id === x.diaId) -
          RS.findIndex((d) => d.id === y.diaId) || x.hora.localeCompare(y.hora),
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
    zS = [
      { id: "inicio", rotulo: "In\xEDcio", ic: "casa", tela: "inicio" },
      { id: "forum", rotulo: "F\xF3rum", ic: "forum", tela: "forum" },
      { id: "chat", rotulo: "Chat", ic: "mensagem", tela: "chat" },
      { id: "dicas", rotulo: "Dicas", ic: "dica", tela: "dicas" },
      {
        id: "atend",
        rotulo: "Atendimentos",
        ic: "calendario",
        tela: "atendimentos",
      },
      { id: "notif", rotulo: "Notifica\xE7\xF5es", ic: "sino", tela: "notificacoes" },
      { id: "perfil", rotulo: "Perfil", ic: "perfil", tela: "perfil" },
    ],
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
    xS = [
      "objetivo",
      "login",
      "diagnostico-entrada",
      "cadastro",
      "status-voluntario",
      "painel",
    ];
  function zIniciais(nome) {
    let p = (nome || "").trim().split(/\s+/).filter(Boolean);
    if (!p.length) return "";
    return ((p[0][0] || "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  function qS({
    tema: a,
    atual: o,
    comMenu: e,
    irInicio: t,
    irPara: n,
    contadores: l,
    usuario: u,
    frase: fr,
    children: s,
  }) {
    let ini = zIniciais(u && u.nome),
      itemMenu = (c, baixo) =>
        (0, r.jsx)(
          "li",
          {
            children: (0, r.jsxs)("button", {
              type: "button",
              className: baixo ? "aba-baixo" : "menu-item",
              onClick: () => n(c.tela),
              "aria-current": o === c.id ? "page" : void 0,
              "aria-label": l[c.id] > 0 ? c.rotulo + ", " + zNovos(c.id, l[c.id]) : void 0,
              children: [
                (0, r.jsxs)("span", {
                  className: "menu-icone",
                  children: [
                    (0, r.jsx)(la, { n: c.ic, size: baixo ? 24 : 22 }),
                    l[c.id] > 0 &&
                      (0, r.jsxs)("span", {
                        className: "contador",
                        children: [
                          (0, r.jsx)("span", {
                            "aria-hidden": "true",
                            children: l[c.id],
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsx)("span", { className: "menu-rotulo", children: c.rotulo }),
              ],
            }),
          },
          c.id,
        );
    return (0, r.jsxs)("div", {
      className: "app" + (e ? " app--menu" : " app--entrada"),
      children: [
        // An\xFAncio para leitores de tela quando chega mensagem nova no Chat fora da tela do Chat
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
              children: (0, r.jsx)("img", {
                src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
                alt: "zElo",
                width: "1132",
                height: "665",
              }),
            }),
            e
              ? (0, r.jsx)("nav", {
                  "aria-label": "Menu principal",
                  children: (0, r.jsx)("ul", {
                    className: "menu",
                    children: zS.map((c) => itemMenu(c, !1)),
                  }),
                })
              : fr &&
                (0, r.jsx)("p", { className: "coluna-fim", children: fr }),
            e &&
              (0, r.jsx)("div", {
                className: "coluna-ajuda",
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: "btn-emergencia",
                  onClick: () => n("ajuda"),
                  "aria-current": o === "ajuda" ? "page" : void 0,
                  children: [
                    (0, r.jsx)(la, { n: "ajuda", size: 22 }),
                    "Preciso de ajuda",
                  ],
                }),
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
                  children: (0, r.jsx)("img", {
                    src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
                    alt: "zElo",
                    width: "1132",
                    height: "665",
                  }),
                }),
                e &&
                  (0, r.jsxs)("button", {
                    type: "button",
                    className: "topo-sino",
                    onClick: () => n("notificacoes"),
                    "aria-current": o === "notif" ? "page" : void 0,
                    "aria-label": l.notif > 0 ? "Notifica\xE7\xF5es, " + l.notif + (l.notif === 1 ? " nova" : " novas") : "Notifica\xE7\xF5es",
                    children: [
                      (0, r.jsx)(la, { n: "sino", size: 22 }),
                      l.notif > 0 && (0, r.jsx)("span", { className: "contador", "aria-hidden": "true", children: l.notif }),
                    ],
                  }),
                e &&
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "topo-avatar",
                    onClick: () => n("perfil"),
                    "aria-current": o === "perfil" ? "page" : void 0,
                    "aria-label": "Perfil",
                    children: ini || (0, r.jsx)(la, { n: "perfil", size: 22 }),
                  }),
              ],
            }),
            (0, r.jsx)("main", { id: "principal", tabIndex: -1, children: s }),
            (0, r.jsxs)("footer", {
              className: "rodape",
              children: [
                (0, r.jsx)("span", {
                  children:
                    "zElo. Dire\xE7\xE3o, ajuda e apoio para quem cuida de pessoas com defici\xEAncia (PcD).",
                }),
                (0, r.jsx)("span", {
                  children: "Prot\xF3tipo com dados fict\xEDcios.",
                }),
              ],
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
        e &&
          (0, r.jsx)("nav", {
            className: "barra-baixo",
            "aria-label": "Menu principal (celular)",
            children: (0, r.jsx)("ul", {
              children: zS
                .filter((c) => c.id !== "perfil" && c.id !== "notif")
                .map((c) => itemMenu(c, !0)),
            }),
          }),
      ],
    });
  }
  // Tema: o que a pessoa escolheu antes; sen\xE3o, o que o celular pede (alto contraste ou modo escuro)
  function zTemaInicial() {
    try {
      let t = localStorage.getItem("zelo-tema");
      if (t && jS.some((x) => x.id === t)) return t;
    } catch (x) {}
    let mq = (q) => window.matchMedia && window.matchMedia(q).matches;
    return mq("(prefers-contrast: more)") || mq("(forced-colors: active)")
      ? "alto-contraste"
      : mq("(prefers-color-scheme: dark)")
        ? "escuro"
        : "claro";
  }
  function zTemaRapido({ tema: v, setTema: A }) {
    return (0, r.jsxs)("div", {
      className: "tema-rapido",
      role: "radiogroup",
      "aria-labelledby": "tema-rapido-h",
      children: [
        (0, r.jsx)("span", { id: "tema-rapido-h", children: "Tela" }),
        jS.map((x) =>
          (0, r.jsx)(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": v === x.id,
              className: "tema-rapido-op",
              onClick: () => A(x.id),
              children: x.rotulo,
            },
            x.id,
          ),
        ),
      ],
    });
  }
  function FS({ escolher: a, tema: tm, setTema: st }) {
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("div", {
          className: "hero-mobile",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("img", { src: "logo-claro.png", alt: "", width: "1132", height: "665" }),
            (0, r.jsx)("p", { children: "Voc\xEA n\xE3o est\xE1 s\xF3" }),
          ],
        }),
        (0, r.jsx)("h1", {
          className: "display",
          tabIndex: -1,
          children: "Como voc\xEA quer usar o zElo?",
        }),
        (0, r.jsxs)("div", {
          className: "objetivo-opcoes opcoes",
          children: [
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("responsavel"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou respons\xE1vel",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Cuido de uma pessoa com defici\xEAncia e quero dire\xE7\xE3o e apoio.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("pcd"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou a pessoa com defici\xEAncia",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Uso o zElo por conta pr\xF3pria para cuidar da minha sa\xFAde.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("voluntario"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou volunt\xE1rio",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Sou profissional de sa\xFAde ou educa\xE7\xE3o e quero ajudar.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("div", {
          style: { marginTop: 32 },
          children: (0, r.jsx)(Do, {
            tipo: "info",
            children:
              "O zElo orienta quest\xF5es de sa\xFAde. Para benef\xEDcios, documentos e escola, procure o CRAS ou a pr\xF3pria escola.",
          }),
        }),
        st && (0, r.jsx)(zTemaRapido, { tema: tm, setTema: st }),
        (0, r.jsxs)("p", {
          className: "apoio equipe-link",
          children: [
            "Faz parte da equipe zElo? ",
            (0, r.jsx)("button", {
              type: "button",
              className: "link",
              onClick: () => a("equipe"),
              children: "Entrar no painel da equipe",
            }),
          ],
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
          : "Entre para ver seus atendimentos, conversas e dicas.",
        criar: "Depois, tr\xEAs perguntas r\xE1pidas para organizar o que mostramos primeiro.",
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
              if (modo === "esqueci") return setEnviado(e.trim());
              o(e.trim(), modo === "criar" ? nome.trim() : "");
            },
            noValidate: !0,
            children: [
              enviado &&
                (0, r.jsx)("div", {
                  className: "alerta-bloco",
                  children: (0, r.jsxs)(Do, {
                    tipo: "ok",
                    children: [
                      "Enviamos o link para ",
                      enviado,
                      ". Neste prot\xF3tipo nenhum e-mail \xE9 enviado.",
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
                  fim: "avancar",
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
      titulo: "Qual \xE9 o tipo de defici\xEAncia?",
      ajuda:
        "Pode escolher mais de uma. Se ainda n\xE3o h\xE1 diagn\xF3stico, escolha Ainda n\xE3o sei.",
      itens: Em,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar. Se escolheu Outra, escreva qual \xE9.",
    },
    {
      campo: "direcionamento",
      titulo: "Com que parte da sa\xFAde voc\xEA quer ajuda primeiro?",
      ajuda:
        "Escolha uma ou mais op\xE7\xF5es. Isso define o que aparece primeiro para voc\xEA.",
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
  function GS({
    passo: a,
    setPasso: o,
    diag: e,
    setDiag: t,
    concluir: n,
    sair: l,
  }) {
    let s = _S[a - 1],
      i = e[s.campo],
      c = (s.multi ? i.length > 0 : !!i) && !(s.campo === "tipo" && i.includes("outra") && !(e.tipoOutra || "").trim()),
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
      };
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, { onClick: () => (a === 1 ? l() : o(a - 1)) }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            style: { marginBottom: 32 },
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
                children: ["Passo ", a, " de ", _S.length],
              }),
              a === 1 &&
                (0, r.jsxs)("span", {
                  className: "selo-tempo",
                  children: [(0, r.jsx)(la, { n: "apoio", size: 16 }), "Leva menos de 2 minutos"],
                }),
              (0, r.jsx)("h1", { tabIndex: -1, children: s.titulo }),
              s.ajuda &&
                (0, r.jsx)("p", {
                  className: "lead",
                  style: { fontSize: 18 },
                  children: s.ajuda,
                }),
            ],
          }),
          (0, r.jsx)(Tm, {
            itens: s.itens,
            valor: i,
            onChange: m,
            multi: s.multi,
            rotulo: s.titulo,
          }),
          s.campo === "tipo" &&
            i.includes("outra") &&
            (0, r.jsxs)("div", {
              className: "campo outra-campo",
              children: [
                (0, r.jsx)("label", { htmlFor: "tipo-outra", children: "Qual defici\xEAncia?" }),
                (0, r.jsx)("input", {
                  id: "tipo-outra",
                  className: "campo-entrada",
                  value: e.tipoOutra || "",
                  maxLength: 80,
                  autoComplete: "off",
                  onChange: (I) => t({ ...e, tipoOutra: I.target.value }),
                }),
                (0, r.jsx)("span", { className: "apoio", children: "Se n\xE3o souber o nome, descreva do seu jeito." }),
              ],
            }),
          (0, r.jsxs)("div", {
            className: "acoes",
            style: { marginTop: 40 },
            children: [
              (0, r.jsx)(ia, {
                disabled: !c,
                "aria-disabled": !c,
                onClick: () => c && (a === _S.length ? n() : o(a + 1)),
                fim: "avancar",
                children: a === _S.length ? "Concluir" : "Continuar",
              }),
              !c &&
                (0, r.jsx)("span", {
                  className: "aviso",
                  role: "status",
                  children: s.aviso,
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
                "Pedimos seus dados b\xE1sicos e a comprova\xE7\xE3o do t\xEDtulo profissional.",
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
              Object.keys(u).length ? Or() : o(e));
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
                fim: "avancar",
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
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)("header", {
          className: "cabeca",
          style: { marginBottom: 32 },
          children: (0, r.jsxs)("h1", {
            tabIndex: -1,
            children: ["Recebemos seu cadastro, ", (a || "").split(" ")[0]],
          }),
        }),
        (0, r.jsx)(Do, {
          tipo: "info",
          children:
            "Uma pessoa da equipe zElo confere o seu documento em at\xE9 24 horas.",
        }),
        (0, r.jsxs)("ul", {
          className: "etapas",
          children: [
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", { children: "Cadastro enviado" }),
                (0, r.jsx)(Bo, { icone: "confirmar", children: "Feito" }),
              ],
            }),
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", {
                  children: "Consulta do registro no conselho profissional",
                }),
                (0, r.jsx)(Bo, { icone: "confirmar", children: "Feito" }),
              ],
            }),
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", {
                  children: "An\xE1lise do documento por uma pessoa da equipe",
                }),
                (0, r.jsx)(Bo, { forte: !0, children: "Em andamento" }),
              ],
            }),
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", { children: "Acesso liberado" }),
                (0, r.jsx)(Bo, { children: "Aguardando" }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio medida",
          style: { marginTop: 24 },
          children:
            "Enviaremos o resultado para o seu e-mail. Depois da an\xE1lise, o documento \xE9 apagado. Guardamos s\xF3 o seu nome, o n\xFAmero do registro e a data da verifica\xE7\xE3o.",
        }),
        (0, r.jsxs)("div", {
          className: "acoes",
          children: [
            (0, r.jsx)(ia, {
              onClick: o,
              fim: "avancar",
              children: "Simular aprova\xE7\xE3o",
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: "link",
              onClick: e,
              children: "Voltar ao in\xEDcio",
            }),
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
  function ZS({
    usuario: a,
    papel: o,
    diag: e,
    agenda: t,
    irPara: n,
    abrirTopico: l,
    abrirDica: s,
    abrirProf: i,
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
      online = At.filter((f) => f.agora),
      c = [...At]
        .map((f, k) => ({ f, k, rel: zRel(f) }))
        .filter((x) => x.rel > 0 || x.f.agora)
        .sort((x, y) => y.rel - x.rel || y.f.agora - x.f.agora || x.k - y.k)
        .map((x) => x.f),
      m = zSort(t)[0],
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
            meta: `${u[d].autor}, ${u[d].cidade} \xB7 ${v(u[d])}`,
            dir: u[d].dir,
            go: () => l(d),
          }),
          y = (d) => ({
            k: d,
            tipo: "Dica",
            titulo: g[d].titulo,
            meta: `${g[d].autor}, ${g[d].area.toLowerCase()} \xB7 ${g[d].tempo}`,
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
              motivo: "Pergunta aberta que espera uma resposta de profissional",
            })),
            { ...A("t5"), motivo: "Conversa de quem cuida" },
            { ...y("d1"), motivo: "Dica recente da sua \xE1rea" },
          ].slice(0, 5);
        let p = (d) => (f.includes(d.dir) ? 0 : 1);
        return h
          .map((d, S) => ({ ...d, i: S }))
          .sort((d, S) => p(d) - p(S) || d.i - S.i)
          .slice(0, 5)
          .map((d) => ({
            ...d,
            motivo: f.includes(d.dir)
              ? `Porque voc\xEA escolheu: ${w2[d.dir]}`
              : "Sugest\xE3o para come\xE7ar",
          }));
      }, [e.direcionamento, o]);
    return (0, r.jsxs)("section", {
      className: "entra inicio",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 40 },
          children: [
            (0, r.jsx)("h1", {
              className: "display",
              tabIndex: -1,
              children: a.nome ? `Ol\xE1, ${a.nome.split(" ")[0]}` : "Ol\xE1",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                o === "voluntario"
                  ? "Veja onde a sua resposta pode ajudar hoje."
                  : o === "pcd"
                    ? "Como est\xE1 a sua sa\xFAde hoje? Comece por um destes caminhos."
                    : "Como a sa\xFAde de voc\xEAs est\xE1 hoje? Comece por um destes caminhos.",
            }),
            !a.nome &&
              (0, r.jsxs)("p", {
                className: "apoio",
                style: { marginTop: 8 },
                children: [
                  "Ainda n\xE3o sabemos o seu nome. ",
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => n("perfil"),
                    children: "Diga como podemos te chamar",
                  }),
                ],
              }),
          ],
        }),
        o !== "voluntario" &&
          m &&
          (0, r.jsxs)("div", {
            className: "proximo",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("h2", {
                    className: "proximo-titulo",
                    children: "Seu pr\xF3ximo atendimento",
                  }),
                  (0, r.jsxs)("p", {
                    className: "proximo-quando",
                    children: [m.dia, ", \xE0s ", m.hora],
                  }),
                  (0, r.jsxs)("p", {
                    className: "proximo-quem",
                    children: [
                      m.prof.area,
                      " com ",
                      m.prof.nome,
                      ". ",
                      m.onde || m.prof.onde,
                      ".",
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(ia, {
                sec: !0,
                peq: !0,
                fim: "avancar",
                onClick: () => n("atendimentos-meus"),
                children: "Ver agendamento",
              }),
            ],
          }),
        o !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "secao disponiveis",
            style: { marginTop: m ? 64 : 0 },
            children: [
              (0, r.jsxs)("div", {
                className: "disp-topo",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        id: "disp-h",
                        children: "Profissionais para voc\xEA",
                      }),
                      (0, r.jsxs)("p", {
                        className: "apoio disp-sub",
                        children: [
                          "Escolhidos pelas suas respostas. ",
                          (0, r.jsxs)("span", {
                            className: "online-ponto",
                            children: [online.length, " volunt\xE1rios atendem hoje"],
                          }),
                          ", com hor\xE1rios ainda hoje.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("ul", {
                className: "lista",
                "aria-labelledby": "disp-h",
                children: c
                  .slice(0, 4)
                  .map((f) =>
                    (0, r.jsx)(
                      "li",
                      {
                        children: (0, r.jsxs)("button", {
                          type: "button",
                          className: "linha linha-prof",
                          onClick: () => i(f.id),
                          children: [
                            (0, r.jsx)(qr, { p: f }),
                            (0, r.jsxs)("span", {
                              className: "linha-texto",
                              children: [
                                (0, r.jsxs)("span", {
                                  className: "linha-titulo",
                                  children: [
                                    f.nome,
                                    f.agora &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [" ", (0, r.jsx)(Bo, { forte: !0, children: "Atende hoje" })],
                                      }),
                                  ],
                                }),
                                (0, r.jsxs)("span", {
                                  className: "apoio linha-meta",
                                  children: [f.area, " \xB7 ", f.foco],
                                }),
                                (0, r.jsxs)("span", {
                                  className: "apoio linha-meta",
                                  style: {
                                    color: "var(--texto)",
                                    fontWeight: 600,
                                  },
                                  children: [
                                    "Pr\xF3ximo hor\xE1rio: ",
                                    D2(f, t),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("span", {
                              className: "linha-fim",
                              children: [
                                (0, r.jsx)(la, { n: "avancar", size: 24 }),
                              ],
                            }),
                          ],
                        }),
                      },
                      f.id,
                    ),
                  ),
              }),
              (0, r.jsx)("p", {
                style: { marginTop: 16 },
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: () => n("atendimentos"),
                  children: "Ver todos os profissionais",
                }),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", {
              id: "feed-h",
              children:
                o === "voluntario" ? "Para voc\xEA responder" : "Para voc\xEA",
            }),
            (0, r.jsx)("p", {
              className: "secao-sub",
              children:
                o === "voluntario"
                  ? "Os temas em que a sua \xE1rea mais ajuda."
                  : "Os conte\xFAdos mais \xFAteis, de acordo com as suas respostas.",
            }),
            (0, r.jsx)("ul", {
              className: "lista feed",
              "aria-labelledby": "feed-h",
              children: I.map((f, u) =>
                (0, r.jsx)(
                  "li",
                  {
                    style: { "--i": u },
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "linha",
                      onClick: f.go,
                      children: [
                        (0, r.jsxs)("span", {
                          className: "linha-texto",
                          children: [
                            (0, r.jsx)("span", {
                              className: "linha-titulo",
                              children: f.titulo,
                            }),
                            (0, r.jsxs)("span", {
                              className: "apoio linha-meta",
                              children: [f.tipo, ". ", f.meta],
                            }),
                            (0, r.jsx)("span", {
                              className: "apoio linha-meta",
                              style: { color: "var(--texto)", fontWeight: 600 },
                              children: f.motivo,
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-fim",
                          children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                        }),
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
          className: "apoio medida",
          style: { marginTop: 56, fontSize: 18, color: "var(--texto)" },
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
    });
  }
  var jS = [
    {
      id: "claro",
      rotulo: "Claro",
      sub: "Fundo claro. \xC9 o tema padr\xE3o.",
    },
    {
      id: "escuro",
      rotulo: "Escuro",
      sub: "Fundo escuro, que cansa menos a vista \xE0 noite ou com pouca luz.",
    },
    {
      id: "alto-contraste",
      rotulo: "Alto contraste",
      sub: "Preto no branco, com bordas grossas. Para quem enxerga pouco.",
    },
  ];
  function XS({
    usuario: a,
    setUsuario: o,
    diag: e,
    papel: t,
    tema: n,
    setTema: l,
    refazer: s,
    sair: i,
  }) {
    let [c, m] = (0, L.useState)(a.nome),
      [I, f] = (0, L.useState)(!1),
      [u, g] = (0, L.useState)(""),
      v = (y) => {
        if ((y.preventDefault(), !c.trim()))
          return g("Falta o nome. Exemplo: Marina");
        (g(""), o({ ...a, nome: c.trim() }), f(!0));
      },
      A = (y, h) =>
        h
          .map((p) => y.find((d) => d.id === p)?.rotulo)
          .filter(Boolean)
          .join(", ") || "N\xE3o informado";
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 40 },
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Perfil" }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Ajuste o seu nome, o que o zElo mostra primeiro e o tema de cor.",
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "perfil-bloco",
          children: [
            (0, r.jsx)("h2", { children: "Seus dados" }),
            (0, r.jsxs)("form", {
              onSubmit: v,
              noValidate: !0,
              children: [
                (0, r.jsx)(Za, {
                  id: "p-nome",
                  rotulo: "Nome",
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
                    children: [(0, r.jsx)(la, { n: "cadeado", size: 18 }), "E-mail (n\xE3o pode ser editado aqui)"],
                  }),
                  value: a.email,
                  readOnly: !0,
                  "aria-readonly": "true",
                  ajuda:
                    "Para trocar o e-mail, pe\xE7a pelo chat. A equipe confere e faz a troca.",
                }),
                I &&
                  (0, r.jsx)("div", {
                    className: "alerta-bloco",
                    children: (0, r.jsx)(Do, {
                      tipo: "ok",
                      children: "Altera\xE7\xF5es salvas.",
                    }),
                  }),
                (0, r.jsx)(ia, {
                  type: "submit",
                  children: "Salvar altera\xE7\xF5es",
                }),
              ],
            }),
          ],
        }),
        t !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "perfil-bloco",
            children: [
              (0, r.jsx)("h2", {
                children: "Prefer\xEAncias do diagn\xF3stico",
              }),
              (0, r.jsxs)("dl", {
                children: [
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "Tipo de defici\xEAncia" }),
                      (0, r.jsx)("dd", {
                        children:
                          A(Em, e.tipo || []).replace("Outra", e.tipoOutra ? "Outra: " + e.tipoOutra : "Outra"),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "\xC1reas de sa\xFAde" }),
                      (0, r.jsx)("dd", { children: A(El, e.direcionamento) }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "Especificidades" }),
                      (0, r.jsx)("dd", { children: A(Lm, e.especificidades) }),
                    ],
                  }),

                ],
              }),
              (0, r.jsx)("p", {
                style: { marginTop: 16 },
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: s,
                  children: "Refazer as perguntas",
                }),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "perfil-bloco",
          children: [
            (0, r.jsx)("h2", { id: "tema-h", children: "Customiza\xE7\xE3o" }),
            (0, r.jsx)("p", {
              className: "secao-sub",
              style: { marginBottom: 16 },
              children:
                "Escolha um tema. A mudan\xE7a aparece na hora, em toda a tela.",
            }),
            (0, r.jsx)(Tm, {
              itens: jS,
              valor: n,
              onChange: l,
              rotulo: "Tema de cor",
            }),
            (0, r.jsxs)("div", {
              className: "previa",
              "aria-label": "Pr\xE9via do tema escolhido",
              role: "group",
              children: [
                (0, r.jsx)("p", { className: "previa-rotulo", children: "Pr\xE9via do tema" }),
                (0, r.jsx)("p", { children: "Assim ficam os textos, as etiquetas e os bot\xF5es." }),
                (0, r.jsxs)("div", {
                  className: "previa-linha",
                  children: [
                    (0, r.jsx)(Bo, { forte: !0, children: "Verificado" }),
                    (0, r.jsx)(Bo, { children: "Rotina" }),
                    (0, r.jsx)("span", { className: "btn btn--peq", "aria-hidden": "true", children: "Bot\xE3o" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, r.jsx)(zSemRespostaBloco, {}),
        (0, r.jsx)("div", {
          className: "perfil-bloco",
          children: (0, r.jsx)(ia, {
            sec: !0,
            onClick: i,
            children: "Sair do zElo",
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
      className: "perfil-bloco",
      children: [
        (0, r.jsx)("h2", { children: "Perguntas que a Ana n\xE3o soube responder" }),
        (0, r.jsx)("p", {
          className: "secao-sub",
          children:
            "A equipe usa esta lista para acrescentar respostas na base. Neste prot\xF3tipo ela fica s\xF3 neste aparelho.",
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
          : (0, r.jsx)("p", { className: "apoio", children: "Nenhuma por enquanto." }),
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
    zLinkDicas = { rotulo: "Abrir Dicas", tela: "dicas" },
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
    dicas: "Abrir Dicas",
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
  function zSemRespostaGuardar(texto, perto) {
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
          ? ["Continuar conversando", "Quero falar com um profissional", "Ver dicas para quem cuida"]
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
      if (/^ver dicas para quem cuida$/i.test(f)) return ir("dicas");
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
        " \xB7 ",
        a.cidade,
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
        (0, r.jsx)(
          Bo,
          {
            forte: o === "Novo",
            icone: o === "Resolvido" ? "confirmar" : void 0,
            children: o,
          },
          o,
        ),
      ),
    });
  }
  function KS({ topicos: a, abrir: o, novo: e }) {
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca cabeca-linha",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", {
                  tabIndex: -1,
                  children: "F\xF3rum",
                }),
                (0, r.jsx)("p", {
                  className: "lead",
                  style: { fontSize: 18 },
                  children:
                    "Conversas entre fam\xEDlias, pessoas com defici\xEAncia e profissionais, das mais recentes para as mais antigas.",
                }),
              ],
            }),
            (0, r.jsx)(ia, {
              icone: "adicionar",
              onClick: e,
              children: "Novo t\xF3pico",
            }),
          ],
        }),
        (0, r.jsx)("ul", {
          className: "lista",
          children: a.map((t) =>
            (0, r.jsx)(
              "li",
              {
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: "linha",
                  onClick: () => o(t.id),
                  children: [
                    (0, r.jsxs)("span", {
                      className: "linha-texto",
                      children: [
                        (0, r.jsx)("span", {
                          className: "linha-titulo",
                          children: t.titulo,
                        }),
                        (0, r.jsx)("span", {
                          className: "apoio topico-meta",
                          children: (0, r.jsx)(U2, { t }),
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-etiquetas",
                          children: (0, r.jsx)(x2, { t }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("span", {
                      className: "linha-fim",
                      children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                    }),
                  ],
                }),
              },
              t.id,
            ),
          ),
        }),
      ],
    });
  }
  function JS({ t: a, voltar: o, atualizar: e, usuario: t, papel: n }) {
    let [l, s] = (0, L.useState)(""),
      [i, c] = (0, L.useState)(null),
      [m, I] = (0, L.useState)(""),
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
          return I(
            "Falta escrever a resposta. Conte em poucas frases o que voc\xEA viveu ou sabe sobre o assunto.",
          );
        (I(""),
          e({
            ...a,
            respostas: [
              ...a.respostas,
              {
                id: `r${Date.now()}`,
                autor: t.nome,
                cidade: "Recife",
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
      },
      A = (y) => {
        (c(y.autor), f.current?.focus());
      };
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: o, children: "Voltar ao f\xF3rum" }),
        (0, r.jsxs)("article", {
          className: "post",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
            (0, r.jsx)("span", {
              className: "apoio post-meta",
              children: (0, r.jsx)(U2, { t: a }),
            }),
            (0, r.jsx)("div", {
              style: { marginTop: 12 },
              children: (0, r.jsx)(x2, { t: a }),
            }),
            (0, r.jsx)("div", {
              className: "leitura",
              style: { marginTop: 24 },
              children: (0, r.jsx)("p", { children: a.corpo }),
            }),
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
        (0, r.jsxs)("h2", {
          style: { marginTop: 48 },
          children: [
            a.respostas.length,
            " ",
            a.respostas.length === 1 ? "resposta" : "respostas",
          ],
        }),
        (0, r.jsx)("ul", {
          children: a.respostas.map((y) =>
            (0, r.jsxs)(
              "li",
              {
                className: "resposta",
                children: [
                  (0, r.jsxs)("span", {
                    className: "apoio",
                    children: [
                      (0, r.jsx)("b", {
                        style: { color: "var(--texto)" },
                        children: y.autor,
                      }),
                      " \xB7 ",
                      y.cidade,
                      " \xB7 ",
                      y.quando,
                      y.profissional &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            " ",
                            (0, r.jsx)(Bo, {
                              forte: !0,
                              icone: "elo",
                              children: "Verificado",
                            }),
                          ],
                        }),
                    ],
                  }),
                  y.em &&
                    (0, r.jsxs)("span", {
                      className: "apoio resposta-em",
                      children: ["Em resposta a ", y.em],
                    }),
                  (0, r.jsx)("p", { children: y.texto }),
                  (0, r.jsxs)("div", {
                    className: "acoes-resposta",
                    children: [
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        "aria-pressed": !!y.meuApoio,
                        onClick: () => u(y.id),
                        children: [
                          (0, r.jsx)(la, { n: "apoio", size: 20 }),
                          "Apoiar (",
                          y.apoio,
                          ")",
                        ],
                      }),
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        onClick: () => A(y),
                        children: [
                          (0, r.jsx)(la, { n: "conversa", size: 20 }),
                          "Responder",
                        ],
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
            (0, r.jsx)("h2", {
              className: "composer-titulo",
              children: "Sua resposta",
            }),
            i &&
              (0, r.jsxs)("div", {
                className: "contexto-resposta",
                children: [
                  (0, r.jsxs)("span", {
                    children: [
                      "Respondendo a ",
                      (0, r.jsx)("b", { children: i }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => c(null),
                    children: "Cancelar",
                  }),
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
            (0, r.jsx)(ia, {
              type: "submit",
              icone: "enviar",
              children: "Enviar resposta",
            }),
          ],
        }),
      ],
    });
  }
  function WS({ voltar: a, publicar: o }) {
    let [e, t] = (0, L.useState)({ titulo: "", dir: "", corpo: "" }),
      [n, l] = (0, L.useState)({});
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: a, children: "Voltar ao f\xF3rum" }),
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 32 },
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Novo t\xF3pico" }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children:
                "Pergunte ou conte uma experi\xEAncia. N\xE3o publique exames, documentos ou dados que identifiquem a pessoa.",
            }),
          ],
        }),
        (0, r.jsxs)("form", {
          onSubmit: (i) => {
            i.preventDefault();
            let c = {};
            (e.titulo.trim() ||
              (c.titulo =
                "Falta o t\xEDtulo. Exemplo: O que ajuda a dormir melhor?"),
              e.dir || (c.dir = "Escolha um assunto na lista."),
              e.corpo.trim() ||
                (c.corpo =
                  "Falta contar o que aconteceu. Duas ou tr\xEAs frases bastam."),
              l(c),
              Object.keys(c).length ? Or() : o(e));
          },
          noValidate: !0,
          style: { maxWidth: 760 },
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
                (0, r.jsx)("option", {
                  value: "",
                  children: "Escolha um assunto",
                }),
                El.map((i) =>
                  (0, r.jsx)(
                    "option",
                    { value: i.id, children: i.rotulo },
                    i.id,
                  ),
                ),
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
            (0, r.jsx)(ia, {
              type: "submit",
              icone: "enviar",
              children: "Publicar t\xF3pico",
            }),
          ],
        }),
      ],
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
          style: { marginBottom: 32 },
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Dicas de profissionais",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children: "Materiais prontos, escritos para quem cuida.",
            }),
          ],
        }),
        (0, r.jsx)("div", {
          className: "busca",
          children: (0, r.jsx)(Za, {
            id: "busca",
            rotulo: "Buscar dicas",
            value: o,
            onChange: (s) => e(s.target.value),
            autoComplete: "off",
          }),
        }),
        (0, r.jsx)("div", {
          className: "filtros",
          role: "group",
          "aria-label": "Filtrar por \xE1rea",
          children: ["Todas", ...Rr].map((s) =>
            (0, r.jsx)(
              ia,
              {
                sec: !0,
                peq: !0,
                "aria-pressed": t === s,
                onClick: () => n(s),
                icone: t === s ? "confirmar" : void 0,
                children: s,
              },
              s,
            ),
          ),
        }),
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
                  (0, r.jsx)("span", { children: "Veja o que fazer agora e ligue 192 (SAMU)." }),
                ],
              }),
              (0, r.jsx)(la, { n: "avancar", size: 22 }),
            ],
          }),
        l.length
          ? (0, r.jsx)("ul", {
              className: "lista",
              children: l.map((s) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "linha",
                      onClick: () => a(s.id),
                      children: [
                        (0, r.jsxs)("span", {
                          className: "linha-texto",
                          children: [
                            (0, r.jsx)("span", {
                              className: "linha-titulo",
                              children: s.titulo,
                            }),
                            (0, r.jsxs)("span", {
                              className: "apoio linha-meta",
                              children: [s.autor, " \xB7 leitura de ", s.tempo],
                            }),
                            (0, r.jsx)("span", {
                              className: "linha-etiquetas",
                              children: (0, r.jsx)(Bo, { children: s.area }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-fim",
                          children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                        }),
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
                (0, r.jsx)("h3", { children: "Nenhuma dica encontrada" }),
                (0, r.jsx)("p", {
                  children:
                    t === "Todas"
                      ? "Tente outra palavra, como sono, fala ou crise."
                      : "Tente outra palavra ou escolha Todas as \xE1reas.",
                }),
                t !== "Todas" &&
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => n("Todas"),
                      children: "Mostrar todas as \xE1reas",
                    }),
                  }),
              ],
            }),
      ],
    });
  }
  function a4({ d: a, voltar: o }) {
    return (0, r.jsxs)("section", {
      className: "entra artigo",
      children: [
        (0, r.jsx)(Ye, { onClick: o, children: "Voltar \xE0s dicas" }),
        (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
        (0, r.jsxs)("p", {
          className: "apoio",
          style: { marginBottom: 12 },
          children: [a.autor, " \xB7 ", a.area, " \xB7 leitura de ", a.tempo],
        }),
        (0, r.jsx)("div", {
          style: { marginBottom: 24 },
          children: (0, r.jsx)(Bo, { children: a.area }),
        }),
        (0, r.jsx)("div", {
          className: "leitura",
          children: a.secoes.map(([e, t]) =>
            (0, r.jsxs)(
              L.default.Fragment,
              {
                children: [
                  (0, r.jsx)("h2", { children: e }),
                  (0, r.jsx)("p", { children: t }),
                ],
              },
              e,
            ),
          ),
        }),
        (0, r.jsx)("div", {
          style: { marginTop: 24 },
          children: (0, r.jsx)(Do, {
            tipo: "aviso",
            children: "Isto n\xE3o substitui um profissional de sa\xFAde.",
          }),
        }),
      ],
    });
  }
  function o4({
    agenda: a,
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
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 24 },
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Atendimentos e consultas",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children:
                "Fale, sem custo, com profissionais volunt\xE1rios verificados da sa\xFAde.",
            }),
          ],
        }),
        l &&
          (0, r.jsx)("div", {
            className: "alerta-bloco",
            children: (0, r.jsx)(Do, {
              tipo: "ok",
              children: {
                marcado: "Atendimento marcado. Enviamos um lembrete para o seu e-mail.",
                remarcado: "Atendimento remarcado. O profissional recebeu um aviso.",
                cancelado: "Atendimento cancelado. O profissional recebeu um aviso e o hor\xE1rio ficou livre.",
              }[l],
            }),
          }),
        (0, r.jsxs)("div", {
          className: "abas",
          role: "tablist",
          "aria-label": "Atendimentos",
          children: [
            (0, r.jsx)("button", {
              type: "button",
              role: "tab",
              id: "aba-buscar",
              "aria-selected": o === "buscar",
              "aria-controls": "painel-atend",
              className: "aba",
              onClick: () => e("buscar"),
              children: "Buscar especialistas",
            }),
            (0, r.jsxs)("button", {
              type: "button",
              role: "tab",
              id: "aba-meus",
              "aria-selected": o === "meus",
              "aria-controls": "painel-atend",
              className: "aba",
              onClick: () => e("meus"),
              children: [
                "Meus agendamentos ",
                a.length > 0 &&
                  (0, r.jsxs)("span", {
                    className: "contador aba-contador",
                    children: [
                      (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: a.length,
                      }),
                      (0, r.jsxs)("span", {
                        className: "so-leitor",
                        children: [a.length, " marcados"],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("div", {
          id: "painel-atend",
          role: "tabpanel",
          "aria-labelledby": o === "buscar" ? "aba-buscar" : "aba-meus",
          children:
            o === "buscar"
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: "busca",
                      style: { marginTop: 32 },
                      children: (0, r.jsx)(Za, {
                        id: "busca-prof",
                        rotulo: "Buscar por nome ou especialidade",
                        value: s,
                        onChange: (f) => i(f.target.value),
                        autoComplete: "off",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "filtros",
                      role: "group",
                      "aria-label": "Filtrar por \xE1rea",
                      children: ["Todas", ...Rr].map((f) =>
                        (0, r.jsx)(
                          ia,
                          {
                            sec: !0,
                            peq: !0,
                            "aria-pressed": c === f,
                            onClick: () => m(f),
                            icone: c === f ? "confirmar" : void 0,
                            children: f === "Todas" ? "Todas as \xE1reas" : f,
                          },
                          f,
                        ),
                      ),
                    }),
                    I.length
                      ? (0, r.jsx)("ul", {
                          className: "lista profs",
                          children: I.map((f) => {
                            let u = M2(f, a);
                            return (0, r.jsxs)(
                              "li",
                              {
                                className: "prof",
                                children: [
                                  (0, r.jsx)(qr, { p: f }),
                                  (0, r.jsxs)("div", {
                                    className: "prof-corpo",
                                    children: [
                                      (0, r.jsxs)("h3", {
                                        className: "prof-nome",
                                        children: [
                                          f.nome,
                                          (0, r.jsxs)("span", {
                                            className: "etiquetas",
                                            children: [
                                              (0, r.jsx)(Bo, {
                                                icone: "elo",
                                                children: "Verificado",
                                              }),
                                              f.agora &&
                                                (0, r.jsx)(Bo, {
                                                  forte: !0,
                                                  children: "Atende hoje",
                                                }),
                                              a.some((x) => x.profId === f.id) &&
                                                (0, r.jsx)(Bo, {
                                                  icone: "calendario",
                                                  children: "J\xE1 agendado",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "prof-foco",
                                        children: [f.area, ": ", f.foco],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "apoio prof-meta",
                                        children: [
                                          f.registro,
                                          " \xB7 ",
                                          f.onde,
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className: "prof-bio",
                                        children: f.bio,
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "prof-dias",
                                        children: [
                                          (0, r.jsx)("b", {
                                            children: "Dias de atendimento:",
                                          }),
                                          " ",
                                          f.dias.join(", "),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "prof-acao",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className: "prof-abertos",
                                        children: [
                                          "Hor\xE1rios abertos",
                                          (0, r.jsx)("br", {}),
                                          (0, r.jsxs)("b", {
                                            children: [
                                              u,
                                              " ",
                                              u === 1
                                                ? "op\xE7\xE3o"
                                                : "op\xE7\xF5es",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(ia, {
                                        sec: !0,
                                        peq: !0,
                                        icone: "calendario",
                                        disabled: u === 0,
                                        "aria-disabled": u === 0,
                                        onClick: () => u > 0 && t(f.id),
                                        children: "Agendar consulta",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              f.id,
                            );
                          }),
                        })
                      : (0, r.jsxs)("div", {
                          className: "vazio",
                          children: [
                            (0, r.jsx)("h3", {
                              children: "Nenhum profissional encontrado",
                            }),
                            (0, r.jsx)("p", {
                              children:
                                c === "Todas"
                                  ? "Tente outra palavra, como fono, psicologia ou sono."
                                  : "Tente outra palavra ou escolha Todas as \xE1reas.",
                            }),
                          ],
                        }),
                  ],
                })
              : (0, r.jsx)(zMeusAgend, { agenda: a, cancelar: n, remarcar: rm, sala: sl }),
        }),
      ],
    });
  }
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
    let c = Ur(a, oc || o),
      m = c.find((f) => f.id === n.dia),
      modos = a.modos || null,
      ja = rmc ? [] : zSort(o.filter((x) => x.profId === a.id)),
      I = e === 1 ? !!(n.dia && n.hora && (!modos || n.modo)) : !0,
      ondeEscolhido = modos ? n.modo : a.onde;
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, { onClick: () => (e === 1 ? s() : t(1)) }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            style: { marginBottom: 24 },
            children: [
              (0, r.jsxs)("p", {
                className: "passo",
                children: ["Passo ", e, " de 2"],
              }),
              (0, r.jsx)("h1", {
                tabIndex: -1,
                children:
                  e === 1
                    ? rmc
                      ? "Escolha o novo dia e hor\xE1rio"
                      : "Escolha o dia e o hor\xE1rio"
                    : "Confira e confirme",
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className: "prof-resumo",
            children: [
              (0, r.jsx)(qr, { p: a }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className: "linha-titulo",
                    children: a.nome,
                  }),
                  (0, r.jsxs)("p", {
                    className: "apoio",
                    children: [a.area, " \xB7 ", a.registro],
                  }),
                  (0, r.jsx)("p", { className: "apoio", children: a.onde }),
                ],
              }),
            ],
          }),
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
                  ". Se quiser trocar o hor\xE1rio, use Remarcar em Meus agendamentos. Se precisa de mais uma consulta, pode continuar.",
                ],
              }),
            }),
          rmc &&
            (0, r.jsx)("div", {
              className: "alerta-bloco",
              children: (0, r.jsxs)(Do, {
                tipo: "info",
                children: [
                  "Voc\xEA est\xE1 remarcando o atendimento de ",
                  rmc.dia.toLowerCase(),
                  ", \xE0s ",
                  rmc.hora,
                  ". O hor\xE1rio antigo fica livre quando voc\xEA confirmar o novo.",
                ],
              }),
            }),
          e === 1 &&
            modos &&
            (0, r.jsxs)("div", {
              className: "modo-escolha",
              children: [
                (0, r.jsx)("h2", { className: "h-pequeno", children: "Como vai ser?" }),
                (0, r.jsx)("div", {
                  className: "segmentado",
                  role: "radiogroup",
                  "aria-label": "Como vai ser o atendimento",
                  children: modos.map((md) =>
                    (0, r.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "radio",
                        "aria-checked": n.modo === md,
                        onClick: () => l({ ...n, modo: md }),
                        children: [
                          (0, r.jsx)(la, { n: /Online/.test(md) ? "video" : "local", size: 20 }),
                          md,
                        ],
                      },
                      md,
                    ),
                  ),
                }),
              ],
            }),
          e === 1 &&
            (0, r.jsx)("div", {
              role: "group",
              "aria-label": "Datas e hor\xE1rios",
              children: c.map((f) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: "dia",
                    children: [
                      (0, r.jsx)("h3", { children: f.rotulo }),
                      (0, r.jsx)("div", {
                        className: "horarios",
                        children: f.horas.map((u) =>
                          (0, r.jsx)(
                            ia,
                            {
                              sec: !0,
                              peq: !0,
                              "aria-pressed": n.dia === f.id && n.hora === u,
                              icone:
                                n.dia === f.id && n.hora === u
                                  ? "confirmar"
                                  : void 0,
                              onClick: () => l({ ...n, dia: f.id, hora: u }),
                              children: u,
                            },
                            u,
                          ),
                        ),
                      }),
                    ],
                  },
                  f.id,
                ),
              ),
            }),
          e === 2 &&
            m &&
            (0, r.jsxs)("dl", {
              className: "resumo",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Especialidade" }),
                    (0, r.jsx)("dd", { children: a.area }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Profissional" }),
                    (0, r.jsx)("dd", { children: a.nome }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Quando" }),
                    (0, r.jsxs)("dd", {
                      children: [m.rotulo, ", \xE0s ", n.hora],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Onde" }),
                    (0, r.jsx)("dd", { children: ondeEscolhido }),
                  ],
                }),
              ],
            }),
          (0, r.jsxs)("div", {
            className: "acoes",
            style: { marginTop: 40 },
            children: [
              (0, r.jsx)(ia, {
                disabled: !I,
                "aria-disabled": !I,
                fim: e === 2 ? "confirmar" : "avancar",
                onClick: () =>
                  I &&
                  (e === 1
                    ? t(2)
                    : i({
                        profId: a.id,
                        prof: a,
                        diaId: m.id,
                        dia: m.rotulo,
                        hora: n.hora,
                        onde: ondeEscolhido,
                      })),
                children:
                  e === 2
                    ? rmc
                      ? "Confirmar novo hor\xE1rio"
                      : "Confirmar agendamento"
                    : "Continuar",
              }),
              !I &&
                (0, r.jsx)("span", {
                  className: "aviso",
                  role: "status",
                  children:
                    modos && !n.modo
                      ? "Escolha se vai ser presencial ou online e um hor\xE1rio."
                      : "Escolha um hor\xE1rio para continuar.",
                }),
            ],
          }),
        ],
      },
      e,
    );
  }
  function t4({ irPara: a, pedir: pd }) {
    let [sit, setSit] = (0, L.useState)(null),
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
          style: { marginBottom: 24 },
          children: [
            (0, r.jsx)("p", { className: "sobretitulo sobretitulo--perigo", children: "Preciso de ajuda" }),
            (0, r.jsx)("h1", {
              className: "display",
              tabIndex: -1,
              children: "Respire. Estamos com voc\xEA.",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Se \xE9 uma emerg\xEAncia, ligue agora. O SAMU atende 24 horas, de gra\xE7a.",
            }),
          ],
        }),
        (0, r.jsxs)("button", {
          type: "button",
          className: "btn-ligar",
          onClick: () => ligar("192"),
          children: [
            (0, r.jsx)(la, { n: "telefone", size: 28 }),
            "Ligar para o SAMU \xB7 192",
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
                (0, r.jsx)("b", { children: "N\xE3o \xE9 emerg\xEAncia m\xE9dica? Pe\xE7a apoio pelo chat" }),
                (0, r.jsxs)("span", {
                  className: "apoio",
                  children: [
                    "A equipe de acolhimento do zElo responde por mensagem. ",
                    (0, r.jsx)(zStatusAcolhimentoTexto, {}),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(la, { n: "avancar", size: 22 }),
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
              children: zSituacoes.map((x) =>
                (0, r.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "situacao",
                    "aria-expanded": sit === x.id,
                    "aria-controls": "sit-passos",
                    onClick: () => setSit(sit === x.id ? null : x.id),
                    children: x.titulo,
                  },
                  x.id,
                ),
              ),
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
        let t = setTimeout(o, 2700),
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
          (0, r.jsx)("img", {
            src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
            alt: "",
            width: "1132",
            height: "665",
          }),
          (0, r.jsx)("p", {
            className: "splash-frase",
            children: "Dire\xE7\xE3o, ajuda e apoio para quem cuida",
          }),
        ],
      })
    );
  }
  var R2 = { tipo: [], direcionamento: [], especificidades: [], quem: null },
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
    },
    zFrases = {
      objetivo: "Voc\xEA n\xE3o est\xE1 s\xF3",
      login: "Que bom ter voc\xEA aqui",
      cadastro: "Obrigado por querer ajudar",
      "status-voluntario": "Falta pouco para voc\xEA come\xE7ar",
      painel: "Painel da equipe",
      diagnostico: "Leva menos de 2 minutos",
    };
  // ===================================================================
  // Novidades (sugestões da monitora Millena, novembro de 2026)
  // 1. Atendimentos: a família remarca e cancela, o voluntário tem a
  //    Minha agenda e a equipe do zElo tem um painel.
  // 2. Sala de vídeo dentro do zElo (no app real: Jitsi Meet).
  // 3. Verificação de voluntários: o sistema confere o registro no
  //    conselho e uma pessoa da equipe aprova. O arquivo é apagado depois.
  // 4. Notificações do fórum, dos atendimentos e do cadastro.
  // ===================================================================
  Object.assign(OS, {
    sino: zIc('<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2.5h-15z"/><path d="M10 21h4"/>'),
    microfone: zIc('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>'),
    legenda: zIc('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M7 12h4M13 12h4M7 15.5h7"/>'),
    documento: zIc('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
    sair: zIc('<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8l-4 4 4 4M6 12h10"/>'),
  });

  // Atalho para escrever as telas novas sem repetir (0, r.jsx)(...).
  function zh(t, p, ...c) {
    let q = { ...(p || {}) },
      k = q.key;
    delete q.key;
    if (c.length === 1) q.children = c[0];
    else if (c.length > 1) q.children = c;
    return (c.length > 1 ? r.jsxs : r.jsx)(t, q, k);
  }
  var zDiaRotulo = (id) => (RS.find((d) => d.id === id) || {}).rotulo || "",
    zOnline = (f) => /Online/.test(f.onde || ""),
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
      zNovoAt({ id: "a1", profId: "p1", diaId: "d5", hora: "10:30", onde: "Presencial na Boa Vista, Recife", familia: "voce" }),
      zNovoAt({ id: "a6", profId: "p5", diaId: "d6", hora: "14:00", onde: "Online por v\xEDdeo", familia: "voce" }),
      zNovoAt({ id: "a2", profId: "p2", diaId: "d4", hora: "10:30", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Joana P." }),
      zNovoAt({ id: "a3", profId: "p3", diaId: "d3", hora: "14:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Marcos L." }),
      zNovoAt({ id: "a4", profId: "p4", diaId: "d6", hora: "09:00", onde: "Presencial em Olinda", familia: "Fam\xEDlia de Rita S.", status: "cancelado", motivo: "A pedido da fam\xEDlia" }),
      zNovoAt({ id: "a5", profId: "p8", diaId: "d5", hora: "15:30", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Paulo M." }),
      zNovoAt({ id: "v1", profId: "pv", diaId: "d3", hora: "09:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Ana C.", assunto: "Rotina de sono, crian\xE7a de 6 anos com TEA" }),
      zNovoAt({ id: "v2", profId: "pv", diaId: "d5", hora: "14:00", onde: "Online por v\xEDdeo", familia: "Fam\xEDlia de Lu\xEDs F.", assunto: "Crises de choro no fim da tarde" }),
      zNovoAt({ id: "v3", profId: "pv", diaId: "d9", hora: "10:30", onde: "Online por v\xEDdeo", familia: "L\xFAcia R., pessoa com defici\xEAncia", assunto: "Ansiedade antes de consultas" }),
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
  function zEscolherHorario({ prof: p, ocupados: oc, sel: s, setSel: ss, rotulo: rt }) {
    let dias = Ur(p, oc);
    if (!dias.length)
      return zh("p", { className: "apoio" }, "Sem hor\xE1rios livres nesta semana.");
    return zh(
      "div",
      { role: "group", "aria-label": rt || "Dia e hor\xE1rio" },
      dias.map((f) =>
        zh(
          "div",
          { className: "dia", key: f.id },
          zh("h3", null, f.rotulo),
          zh(
            "div",
            { className: "horarios" },
            f.horas.map((u) => {
              let on = s.dia === f.id && s.hora === u;
              return (0, r.jsx)(
                ia,
                { sec: !0, peq: !0, "aria-pressed": on, icone: on ? "confirmar" : void 0, onClick: () => ss({ ...s, dia: f.id, hora: u }), children: u },
                u,
              );
            }),
          ),
        ),
      ),
    );
  }
  function zCancelar({ idp, motivos, aviso, confirmar, voltar }) {
    let [m, setM] = (0, L.useState)(motivos ? motivos[0] : "");
    return zh(
      "div",
      { className: "painel-acao", role: "group", "aria-label": "Cancelar atendimento" },
      zh("p", { className: "linha-titulo" }, "Cancelar este atendimento?"),
      aviso && zh("p", { className: "apoio" }, aviso),
      motivos &&
        (0, r.jsx)(Za, {
          id: "motivo-" + idp,
          como: "select",
          rotulo: "Motivo",
          value: m,
          onChange: (e) => setM(e.target.value),
          children: motivos.map((x) => (0, r.jsx)("option", { value: x, children: x }, x)),
        }),
      zh(
        "div",
        { className: "acoes--linha" },
        (0, r.jsx)(ia, { peq: !0, className: "btn--perigo", onClick: () => confirmar(m), children: "Sim, cancelar" }),
        (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: voltar, children: "N\xE3o, manter" }),
      ),
    );
  }
  function zRemarcarBloco({ prof: p, ocupados: oc, confirmar, voltar, aviso }) {
    let [s, ss] = (0, L.useState)({ dia: null, hora: null }),
      pronto = !!(s.dia && s.hora);
    return zh(
      "div",
      { className: "painel-acao", role: "group", "aria-label": "Remarcar atendimento" },
      zh("p", { className: "linha-titulo" }, "Escolha o novo dia e hor\xE1rio"),
      aviso && zh("p", { className: "apoio" }, aviso),
      (0, r.jsx)(zEscolherHorario, { prof: p, ocupados: oc, sel: s, setSel: ss, rotulo: "Novo dia e hor\xE1rio" }),
      zh(
        "div",
        { className: "acoes--linha" },
        (0, r.jsx)(ia, { peq: !0, disabled: !pronto, "aria-disabled": !pronto, icone: "confirmar", onClick: () => pronto && confirmar(s), children: "Confirmar novo hor\xE1rio" }),
        (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: voltar, children: "Voltar" }),
      ),
    );
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
  function zMeusAgend({ agenda: a, cancelar, remarcar, sala }) {
    let [ab, setAb] = (0, L.useState)(null);
    if (!a.length)
      return zh(
        "div",
        { className: "vazio", style: { marginTop: 32 } },
        zh("h3", null, "Voc\xEA ainda n\xE3o tem atendimentos marcados"),
        zh("p", null, "Use Buscar especialistas para escolher um profissional e um hor\xE1rio."),
      );
    return zh(
      "ul",
      { className: "lista", style: { marginTop: 32 } },
      zSort(a).map((f) =>
        zh(
          "li",
          { key: f.id },
          zh(
            "div",
            { className: "linha linha--agenda" },
            (0, r.jsx)(qr, { p: f.prof }),
            zh(
              "span",
              { className: "linha-texto" },
              zh("span", { className: "linha-titulo" }, f.prof.area, " com ", f.prof.nome),
              zh("span", { className: "linha-meta linha-quando" }, f.dia, ", \xE0s ", f.hora),
              zh("span", { className: "apoio linha-meta" }, zOndeTexto(f)),
              zh(
                "span",
                { className: "linha-etiquetas" },
                (0, r.jsx)(Bo, { forte: !0, icone: "confirmar", children: f.remarcado ? "Remarcado" : "Confirmado" }),
              ),
              ab === f.id
                ? (0, r.jsx)(zCancelar, {
                    idp: f.id,
                    aviso: "O profissional recebe um aviso e o hor\xE1rio fica livre para outra fam\xEDlia.",
                    confirmar: () => (setAb(null), cancelar(f)),
                    voltar: () => setAb(null),
                  })
                : zh(
                    "span",
                    { className: "agenda-acoes" },
                    zOnline(f) && (0, r.jsx)(ia, { peq: !0, icone: "video", onClick: () => sala(f), children: "Entrar na sala" }),
                    (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "calendario", onClick: () => remarcar(f), children: "Remarcar" }),
                    zh("button", { type: "button", className: "link link--perigo", onClick: () => setAb(f.id) }, "Cancelar"),
                  ),
            ),
          ),
        ),
      ),
    );
  }

  // ---------- 1b. Minha agenda (voluntário) ----------
  function zMinhaAgenda({ prof: p, agenda: a, ocupados: oc, disp, setDisp, cancelar, remarcar, sala }) {
    let [aba, setAba] = (0, L.useState)("proximos"),
      [ab, setAb] = (0, L.useState)(null),
      [ok, setOk] = (0, L.useState)(""),
      [rasc, setRasc] = (0, L.useState)(disp),
      [falta, setFalta] = (0, L.useState)(""),
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
        { className: "cabeca", style: { marginBottom: 24 } },
        zh("h1", { tabIndex: -1 }, "Minha agenda"),
        zh("p", { className: "lead", style: { fontSize: 18 } }, "Seus atendimentos com as fam\xEDlias e os hor\xE1rios em que voc\xEA atende."),
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
                { className: "lista", style: { marginTop: 32 } },
                zSort(a).map((f) =>
                  zh(
                    "li",
                    { key: f.id },
                    zh(
                      "div",
                      { className: "linha linha--agenda" },
                      (0, r.jsx)(qr, { p: { iniciais: zIniciais(f.familia.replace(/^Fam\xEDlia de /, "")) } }),
                      zh(
                        "span",
                        { className: "linha-texto" },
                        zh("span", { className: "linha-titulo" }, f.familia),
                        zh("span", { className: "linha-meta linha-quando" }, f.dia, ", \xE0s ", f.hora),
                        zh("span", { className: "apoio linha-meta" }, zOndeTexto(f)),
                        f.assunto && zh("span", { className: "apoio linha-meta" }, "Assunto: ", f.assunto),
                        f.remarcado && zh("span", { className: "linha-etiquetas" }, (0, r.jsx)(Bo, { children: "Remarcado" })),
                        ab && ab.id === f.id && ab.modo === "cancelar"
                          ? (0, r.jsx)(zCancelar, {
                              idp: f.id,
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
                            : zh(
                                "span",
                                { className: "agenda-acoes" },
                                zOnline(f) && (0, r.jsx)(ia, { peq: !0, icone: "video", onClick: () => sala(f), children: "Entrar na sala" }),
                                (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "calendario", onClick: () => (setOk(""), setAb({ id: f.id, modo: "remarcar" })), children: "Remarcar" }),
                                zh("button", { type: "button", className: "link link--perigo", onClick: () => (setOk(""), setAb({ id: f.id, modo: "cancelar" })) }, "Cancelar"),
                              ),
                      ),
                    ),
                  ),
                ),
              )
            : zh(
                "div",
                { className: "vazio", style: { marginTop: 32 } },
                zh("h3", null, "Nenhum atendimento marcado"),
                zh("p", null, "Quando uma fam\xEDlia marcar um hor\xE1rio com voc\xEA, ele aparece aqui."),
              )
          : zh(
              "div",
              { style: { marginTop: 24 } },
              zh("p", { className: "apoio medida" }, "As fam\xEDlias s\xF3 conseguem marcar nos dias e hor\xE1rios escolhidos aqui. Atendimentos j\xE1 marcados n\xE3o mudam: para trocar um deles, use Remarcar."),
              grupo("Dias em que voc\xEA atende", "dias", zSemana),
              grupo("Hor\xE1rios", "horas", zHorasOp),
              grupo("Como voc\xEA atende", "modos", zModosOp),
              zh(
                "div",
                { className: "acoes", style: { marginTop: 32 } },
                (0, r.jsx)(ia, {
                  icone: "confirmar",
                  onClick: () => {
                    let f = !rasc.dias.length ? "Escolha pelo menos um dia." : !rasc.horas.length ? "Escolha pelo menos um hor\xE1rio." : !rasc.modos.length ? "Escolha se atende online, presencial ou os dois." : "";
                    setFalta(f);
                    f || (setDisp(rasc), setOk("Hor\xE1rios salvos. As fam\xEDlias j\xE1 veem os novos hor\xE1rios."));
                  },
                  children: "Salvar hor\xE1rios",
                }),
                falta && zh("span", { className: "aviso", role: "status" }, falta),
              ),
            ),
      ),
    );
  }

  // ---------- 1c + 3. Painel da equipe zElo ----------
  function zPainel({ ag, profDe, ocupados: oc, cancelar, remarcar, agendar, pend, decidir, verDoc, log, sair }) {
    let [aba, setAba] = (0, L.useState)("atend"),
      [filtro, setFiltro] = (0, L.useState)("ativos"),
      [busca, setBusca] = (0, L.useState)(""),
      [ab, setAb] = (0, L.useState)(null),
      [ok, setOk] = (0, L.useState)(""),
      [novo, setNovo] = (0, L.useState)(null),
      [doc, setDoc] = (0, L.useState)(null),
      [recusa, setRecusa] = (0, L.useState)(null),
      [vistos, setVistos] = (0, L.useState)([]),
      ativos = ag.filter((x) => x.status !== "cancelado"),
      pendentes = pend.filter((x) => x.status === "pendente"),
      feitos = pend.filter((x) => x.status !== "pendente"),
      nomeFam = (f) => (f.familia === "voce" ? "Fam\xEDlia da conta de teste" : f.familia),
      lista = zSort(
        ag.filter(
          (f) =>
            (filtro === "todos" || (filtro === "ativos" ? f.status !== "cancelado" : f.status === "cancelado")) &&
            (!busca.trim() || Ll(nomeFam(f) + " " + profDe(f).nome + " " + profDe(f).area).includes(Ll(busca.trim()))),
        ),
      ),
      novoProf = novo && novo.profId ? At.find((p) => p.id === novo.profId) : null,
      novoPronto = novo && novo.familia.trim() && novoProf && novo.dia && novo.hora && (!novoProf.modos || novo.modo);
    return zh(
      "section",
      { className: "entra" },
      zh(
        "header",
        { className: "cabeca", style: { marginBottom: 24 } },
        zh("p", { className: "sobretitulo" }, "S\xF3 para a equipe zElo"),
        zh("h1", { tabIndex: -1 }, "Painel da equipe"),
        zh("p", { className: "lead", style: { fontSize: 18 } }, "Atendimentos de todas as fam\xEDlias e a verifica\xE7\xE3o dos volunt\xE1rios. Cada a\xE7\xE3o fica registrada."),
      ),
      ok && zh("div", { className: "alerta-bloco" }, (0, r.jsx)(Do, { tipo: "ok", children: ok })),
      (0, r.jsx)(zAbas, {
        id: "painel",
        rotulo: "Painel da equipe",
        atual: aba,
        setAtual: (k) => (setAba(k), setOk(""), setAb(null)),
        abas: [["atend", "Atendimentos"], ["verif", "Verifica\xE7\xE3o", pendentes.length], ["log", "Registro"]],
      }),
      zh(
        "div",
        { id: "painel-painel", role: "tabpanel", "aria-labelledby": "painel-aba-" + aba },
        aba === "atend" &&
          zh(
            r.Fragment,
            null,
            zh(
              "dl",
              { className: "painel-numeros" },
              zh("div", null, zh("dt", null, "Marcados"), zh("dd", null, ativos.length)),
              zh("div", null, zh("dt", null, "Online"), zh("dd", null, ativos.filter(zOnline).length)),
              zh("div", null, zh("dt", null, "Cancelados"), zh("dd", null, ag.length - ativos.length)),
            ),
            novo
              ? zh(
                  "div",
                  { className: "painel-acao", role: "group", "aria-label": "Agendar para uma fam\xEDlia" },
                  zh("h2", { className: "h-pequeno" }, "Agendar para uma fam\xEDlia"),
                  zh("p", { className: "apoio" }, "Use quando a fam\xEDlia pedir ajuda para marcar, por exemplo pelo telefone. Pe\xE7a s\xF3 o nome."),
                  (0, r.jsx)(Za, { id: "novo-fam", rotulo: "Nome da fam\xEDlia ou da pessoa", value: novo.familia, onChange: (e) => setNovo({ ...novo, familia: e.target.value }), autoComplete: "off" }),
                  (0, r.jsx)(Za, {
                    id: "novo-prof",
                    como: "select",
                    rotulo: "Profissional",
                    value: novo.profId,
                    onChange: (e) => setNovo({ ...novo, profId: e.target.value, dia: null, hora: null, modo: null }),
                    children: [(0, r.jsx)("option", { value: "", children: "Escolha um profissional" }, ""), ...At.map((p) => (0, r.jsx)("option", { value: p.id, children: p.nome + " \xB7 " + p.area }, p.id))],
                  }),
                  novoProf &&
                    novoProf.modos &&
                    zh(
                      "div",
                      { className: "horarios", role: "group", "aria-label": "Como vai ser" },
                      novoProf.modos.map((md) => (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": novo.modo === md, icone: novo.modo === md ? "confirmar" : void 0, onClick: () => setNovo({ ...novo, modo: md }), children: md }, md)),
                    ),
                  novoProf && (0, r.jsx)(zEscolherHorario, { prof: novoProf, ocupados: oc, sel: novo, setSel: setNovo }),
                  zh(
                    "div",
                    { className: "acoes--linha" },
                    (0, r.jsx)(ia, {
                      peq: !0,
                      icone: "confirmar",
                      disabled: !novoPronto,
                      "aria-disabled": !novoPronto,
                      onClick: () => novoPronto && (agendar({ profId: novoProf.id, diaId: novo.dia, hora: novo.hora, onde: novoProf.modos ? novo.modo : novoProf.onde, familia: novo.familia.trim() }), setNovo(null), setOk("Atendimento marcado. A fam\xEDlia e o profissional recebem um aviso.")),
                      children: "Confirmar agendamento",
                    }),
                    (0, r.jsx)(ia, { sec: !0, peq: !0, onClick: () => setNovo(null), children: "Voltar" }),
                  ),
                )
              : zh("div", { className: "acoes", style: { marginTop: 0 } }, (0, r.jsx)(ia, { sec: !0, icone: "adicionar", onClick: () => (setOk(""), setNovo({ familia: "", profId: "", dia: null, hora: null, modo: null })), children: "Agendar para uma fam\xEDlia" })),
            zh(
              "div",
              { className: "busca", style: { marginTop: 24 } },
              (0, r.jsx)(Za, { id: "busca-painel", rotulo: "Buscar por fam\xEDlia ou profissional", value: busca, onChange: (e) => setBusca(e.target.value), autoComplete: "off" }),
            ),
            zh(
              "div",
              { className: "filtros", role: "group", "aria-label": "Mostrar" },
              [["ativos", "Marcados"], ["cancelados", "Cancelados"], ["todos", "Todos"]].map(([k, t]) => (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": filtro === k, icone: filtro === k ? "confirmar" : void 0, onClick: () => setFiltro(k), children: t }, k)),
            ),
            lista.length
              ? zh(
                  "ul",
                  { className: "lista", style: { marginTop: 16 } },
                  lista.map((f) => {
                    let p = profDe(f),
                      cancelado = f.status === "cancelado";
                    return zh(
                      "li",
                      { key: f.id },
                      zh(
                        "div",
                        { className: "linha linha--agenda" + (cancelado ? " linha--apagada" : "") },
                        zh(
                          "span",
                          { className: "linha-texto" },
                          zh("span", { className: "linha-titulo" }, f.dia, ", \xE0s ", f.hora),
                          zh("span", { className: "linha-meta" }, p.nome, " \xB7 ", p.area),
                          zh("span", { className: "apoio linha-meta" }, nomeFam(f), " \xB7 ", zOnline(f) ? "Online" : f.onde),
                          zh(
                            "span",
                            { className: "linha-etiquetas" },
                            cancelado
                              ? (0, r.jsx)(Bo, { children: "Cancelado" + (f.motivo ? ": " + f.motivo.toLowerCase() : "") })
                              : (0, r.jsx)(Bo, { forte: !0, icone: "confirmar", children: f.remarcado ? "Remarcado" : "Marcado" }),
                          ),
                          !cancelado &&
                            (ab && ab.id === f.id && ab.modo === "cancelar"
                              ? (0, r.jsx)(zCancelar, {
                                  idp: f.id,
                                  motivos: ["A pedido da fam\xEDlia", "A pedido do profissional", "Problema na plataforma", "Outro motivo"],
                                  aviso: "A fam\xEDlia e o profissional recebem um aviso no app e por e-mail.",
                                  confirmar: (m) => (setAb(null), cancelar(f, m), setOk("Atendimento cancelado. Os dois lados foram avisados.")),
                                  voltar: () => setAb(null),
                                })
                              : ab && ab.id === f.id && ab.modo === "remarcar"
                                ? (0, r.jsx)(zRemarcarBloco, {
                                    prof: p,
                                    ocupados: oc,
                                    aviso: "A fam\xEDlia e o profissional recebem um aviso com o novo hor\xE1rio.",
                                    confirmar: (s) => (setAb(null), remarcar(f, s), setOk("Atendimento remarcado. Os dois lados foram avisados.")),
                                    voltar: () => setAb(null),
                                  })
                                : zh(
                                    "span",
                                    { className: "agenda-acoes" },
                                    (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "calendario", onClick: () => (setOk(""), setAb({ id: f.id, modo: "remarcar" })), children: "Remarcar" }),
                                    zh("button", { type: "button", className: "link link--perigo", onClick: () => (setOk(""), setAb({ id: f.id, modo: "cancelar" })) }, "Cancelar"),
                                  )),
                        ),
                      ),
                    );
                  }),
                )
              : zh("div", { className: "vazio", style: { marginTop: 16 } }, zh("h3", null, "Nenhum atendimento encontrado"), zh("p", null, "Tente outro nome ou mude o filtro.")),
          ),
        aba === "verif" &&
          zh(
            r.Fragment,
            null,
            zh(
              "div",
              { style: { marginTop: 24 } },
              (0, r.jsx)(Do, {
                tipo: "info",
                children: "O sistema j\xE1 consultou o n\xFAmero no conselho profissional. Voc\xEA confere o documento e decide. Depois da decis\xE3o, o arquivo \xE9 apagado, como pede a LGPD. Guardamos s\xF3 o nome, o n\xFAmero do registro e a data.",
              }),
            ),
            pendentes.length
              ? zh(
                  "ul",
                  { className: "lista", style: { marginTop: 24 } },
                  pendentes.map((v) =>
                    zh(
                      "li",
                      { key: v.id, className: "cartao-vol" },
                      zh(
                        "div",
                        null,
                        zh("h3", { className: "linha-titulo" }, v.nome),
                        zh("p", { className: "apoio" }, v.area, " \xB7 ", v.registro, " \xB7 ", v.cidade),
                        zh("p", { className: "apoio" }, "Enviado ", v.enviado),
                      ),
                      zh(
                        "p",
                        { className: "checagem " + (v.checagem.ok ? "checagem--ok" : "checagem--aviso") },
                        (0, r.jsx)(la, { n: v.checagem.ok ? "confirmar" : "atencao", size: 22 }),
                        zh("span", null, zh("b", null, "Confer\xEAncia autom\xE1tica: "), v.checagem.texto),
                      ),
                      doc === v.id
                        ? zh(
                            "div",
                            { className: "doc-previa" },
                            zh("p", { className: "linha-titulo" }, (0, r.jsx)(la, { n: "documento", size: 22 }), " ", v.arquivo || "documento"),
                            zh("p", { className: "apoio" }, "Pr\xE9via fict\xEDcia. No app real o arquivo abre aqui, sem download, e s\xF3 para quem faz a verifica\xE7\xE3o."),
                            zh("p", { className: "apoio" }, "Este acesso ficou registrado."),
                            zh("button", { type: "button", className: "link", onClick: () => setDoc(null) }, "Fechar documento"),
                          )
                        : zh(
                            "div",
                            null,
                            (0, r.jsx)(ia, { sec: !0, peq: !0, icone: "documento", onClick: () => (setDoc(v.id), setVistos((l0) => [...l0, v.id]), verDoc(v)), children: "Ver documento" }),
                          ),
                      recusa && recusa.id === v.id
                        ? zh(
                            "div",
                            { className: "painel-acao" },
                            (0, r.jsx)(Za, {
                              id: "recusa-" + v.id,
                              como: "select",
                              rotulo: "Por que n\xE3o aprovar?",
                              value: recusa.motivo,
                              onChange: (e) => setRecusa({ ...recusa, motivo: e.target.value }),
                              children: ["O documento n\xE3o d\xE1 para ler", "O nome n\xE3o confere com o registro", "O registro n\xE3o est\xE1 ativo", "A \xE1rea n\xE3o \xE9 atendida pelo zElo"].map((x) => (0, r.jsx)("option", { value: x, children: x }, x)),
                            }),
                            zh(
                              "div",
                              { className: "acoes--linha" },
                              (0, r.jsx)(ia, { peq: !0, sec: !0, onClick: () => (decidir(v, "novo-doc", recusa.motivo), setRecusa(null), setOk("Pedimos outro documento a " + v.nome.split(" ")[0] + ". O arquivo antigo foi apagado.")), children: "Pedir outro documento" }),
                              (0, r.jsx)(ia, { peq: !0, className: "btn--perigo", onClick: () => (decidir(v, "recusado", recusa.motivo), setRecusa(null), setOk("Cadastro recusado. A pessoa recebe o motivo por e-mail e o arquivo foi apagado.")), children: "Recusar cadastro" }),
                              (0, r.jsx)(ia, { peq: !0, sec: !0, onClick: () => setRecusa(null), children: "Voltar" }),
                            ),
                          )
                        : zh(
                            "div",
                            { className: "acoes--linha" },
                            !vistos.includes(v.id) && zh("p", { className: "apoio", style: { flexBasis: "100%" } }, "Abra o documento antes de aprovar."),
                            (0, r.jsx)(ia, { peq: !0, icone: "confirmar", disabled: !vistos.includes(v.id), "aria-disabled": !vistos.includes(v.id), onClick: () => vistos.includes(v.id) && (decidir(v, "aprovado"), setDoc(null), setOk("Cadastro de " + v.nome.split(" ")[0] + " aprovado. O arquivo foi apagado.")), children: "Aprovar" }),
                            (0, r.jsx)(ia, { peq: !0, sec: !0, onClick: () => setRecusa({ id: v.id, motivo: "O documento n\xE3o d\xE1 para ler" }), children: "N\xE3o aprovar" }),
                          ),
                    ),
                  ),
                )
              : zh("div", { className: "vazio", style: { marginTop: 24 } }, zh("h3", null, "Nenhum cadastro esperando"), zh("p", null, "Quando um volunt\xE1rio enviar o cadastro, ele aparece aqui.")),
            feitos.length > 0 &&
              zh(
                r.Fragment,
                null,
                zh("h2", { className: "h-pequeno secao-titulo-peq" }, "J\xE1 analisados"),
                zh(
                  "ul",
                  { className: "lista", style: { marginTop: 12 } },
                  feitos.map((v) =>
                    zh(
                      "li",
                      { key: v.id },
                      zh(
                        "div",
                        { className: "linha" },
                        zh(
                          "span",
                          { className: "linha-texto" },
                          zh("span", { className: "linha-titulo" }, v.nome),
                          zh("span", { className: "apoio linha-meta" }, v.registro, " \xB7 ", { aprovado: "Aprovado", recusado: "Recusado", "novo-doc": "Pediu outro documento" }[v.status], v.motivo ? ": " + v.motivo.toLowerCase() : ""),
                          zh("span", { className: "apoio linha-meta" }, "Documento apagado \xE0s ", v.apagadoEm, "."),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
          ),
        aba === "log" &&
          zh(
            "div",
            { style: { marginTop: 24 } },
            zh("p", { className: "apoio medida" }, "Tudo o que a equipe faz aqui fica guardado: o que foi feito e quando. Isso protege as fam\xEDlias e os volunt\xE1rios."),
            log.length
              ? zh("ul", { className: "lista registro", style: { marginTop: 16 } }, log.map((x, i) => zh("li", { key: i, className: "registro-item" }, zh("b", null, x.hora), " ", x.texto)))
              : zh("div", { className: "vazio", style: { marginTop: 16 } }, zh("h3", null, "Nenhuma a\xE7\xE3o ainda"), zh("p", null, "Agendar, remarcar, cancelar, abrir um documento e aprovar aparecem aqui.")),
          ),
      ),
      zh(
        "div",
        { className: "acoes", style: { marginTop: 48 } },
        (0, r.jsx)(ia, { sec: !0, icone: "sair", onClick: sair, children: "Sair do painel" }),
      ),
    );
  }

  // ---------- 2. Sala de vídeo ----------
  // No app real, a sala usa o Jitsi Meet (código aberto, sem conta e sem instalar nada).
  function zSala({ at: f, outro, voltar }) {
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
      sairDaSala = () => (parar(), setFase("fim"));
    (0, L.useEffect)(() => parar, []);
    (0, L.useEffect)(() => {
      fluxo.current && (fluxo.current.getVideoTracks().forEach((t) => (t.enabled = cam)), fluxo.current.getAudioTracks().forEach((t) => (t.enabled = mic)));
      vid.current && fluxo.current && vid.current.srcObject !== fluxo.current && (vid.current.srcObject = fluxo.current);
    }, [cam, mic, fase, teste]);
    let euVideo = teste === "ok" && cam,
      minhaImagem = zh("video", { ref: vid, autoPlay: !0, muted: !0, playsInline: !0, "aria-label": "Sua c\xE2mera", hidden: !euVideo }),
      botao = (on, txtOn, txtOff, ic, set) =>
        (0, r.jsx)(ia, { sec: !on, peq: !0, icone: ic, "aria-pressed": on, onClick: () => set(!on), children: on ? txtOn : txtOff }),
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
        zh("header", { className: "cabeca", style: { marginBottom: 24 } }, zh("h1", { tabIndex: -1 }, "Atendimento encerrado")),
        zh("p", { className: "lead medida" }, "Obrigado por usar o zElo. A chamada n\xE3o foi gravada."),
        zh("div", { className: "acoes", style: { marginTop: 32 } }, (0, r.jsx)(ia, { fim: "avancar", onClick: voltar, children: "Voltar aos atendimentos" })),
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
          (0, r.jsx)(ia, { sec: !sup, peq: !0, icone: "ajuda", "aria-expanded": sup, onClick: () => setSup(!sup), children: "Ajuda" }),
          (0, r.jsx)(ia, { peq: !0, className: "btn--perigo", icone: "fechar", onClick: sairDaSala, children: "Sair da chamada" }),
        ),
        ajuda,
      );
    return zh(
      "section",
      { className: "entra" },
      (0, r.jsx)(Ye, { onClick: () => (parar(), voltar()) }),
      zh(
        "header",
        { className: "cabeca", style: { marginBottom: 24 } },
        zh("h1", { tabIndex: -1 }, "Sala de v\xEDdeo"),
        zh("p", { className: "lead", style: { fontSize: 18 } }, "Com ", outro.nome, ". ", f.dia, ", \xE0s ", f.hora, "."),
      ),
      (0, r.jsx)(Do, { tipo: "info", children: "A chamada acontece aqui no zElo, sem instalar nada. Ela n\xE3o \xE9 gravada, e s\xF3 voc\xEAs dois entram na sala." }),
      zh(
        "div",
        { className: "sala-video sala-previa", style: { marginTop: 24 } },
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
        zh("div", { style: { marginTop: 12 }, role: "status" }, (0, r.jsx)(Do, { tipo: "aviso", children: "N\xE3o conseguimos usar a c\xE2mera. Confira se o navegador tem permiss\xE3o. Voc\xEA ainda pode entrar s\xF3 com o \xE1udio." })),
      zh("h2", { className: "h-pequeno", style: { marginTop: 32 } }, "Como voc\xEA quer entrar"),
      zh(
        "div",
        { className: "sala-controles" },
        botao(cam, "C\xE2mera ligada", "C\xE2mera desligada", "video", setCam),
        botao(mic, "Microfone ligado", "Microfone desligado", "microfone", setMic),
        botao(leg, "Legendas ligadas", "Legendas desligadas", "legenda", setLeg),
      ),
      zh("p", { className: "apoio medida", style: { marginTop: 8 } }, "As legendas escrevem na tela o que o profissional fala."),
      zh(
        "div",
        { className: "acoes", style: { marginTop: 32 } },
        (0, r.jsx)(ia, { icone: "video", onClick: () => setFase("chamada"), children: "Entrar na sala" }),
        zh("button", { type: "button", className: "link", "aria-expanded": sup, onClick: () => setSup(!sup) }, "Preciso de ajuda com a chamada"),
      ),
      ajuda,
    );
  }

  // ---------- 4. Notificações ----------
  function zNotificacoes({ lista, papel, abrir, marcarTodas }) {
    let [f, setF] = (0, L.useState)("todas"),
      tipos = [["todas", "Todas"], ["forum", "F\xF3rum"], ["atend", "Atendimentos"], ...(papel === "voluntario" ? [["cadastro", "Cadastro"]] : [])],
      ic = { forum: "forum", atend: "calendario", cadastro: "elo" },
      itens = lista.filter((n) => f === "todas" || n.tipo === f),
      novas = lista.filter((n) => !n.lida).length;
    return zh(
      "section",
      { className: "entra" },
      zh(
        "header",
        { className: "cabeca cabeca-linha", style: { marginBottom: 24 } },
        zh(
          "div",
          null,
          zh("h1", { tabIndex: -1 }, "Notifica\xE7\xF5es"),
          zh(
            "p",
            { className: "lead", style: { fontSize: 18 } },
            papel === "voluntario"
              ? "Respostas do f\xF3rum, avisos da sua agenda e do seu cadastro ficam guardados aqui."
              : "Respostas do f\xF3rum e avisos dos seus atendimentos ficam guardados aqui.",
          ),
        ),
      ),
      zh(
        "div",
        { className: "filtros", role: "group", "aria-label": "Mostrar" },
        tipos.map(([k, t]) => (0, r.jsx)(ia, { sec: !0, peq: !0, "aria-pressed": f === k, icone: f === k ? "confirmar" : void 0, onClick: () => setF(k), children: t }, k)),
      ),
      novas > 0 && zh("p", { style: { marginTop: 16 } }, zh("button", { type: "button", className: "link", onClick: marcarTodas }, "Marcar todas como lidas")),
      itens.length
        ? zh(
            "ul",
            { className: "lista", style: { marginTop: 16 } },
            itens.map((n) =>
              zh(
                "li",
                { key: n.id },
                zh(
                  "button",
                  { type: "button", className: "linha notif" + (n.lida ? "" : " notif--nova"), onClick: () => abrir(n) },
                  zh("span", { className: "notif-icone", "aria-hidden": "true" }, (0, r.jsx)(la, { n: ic[n.tipo], size: 22 })),
                  zh(
                    "span",
                    { className: "linha-texto" },
                    zh("span", { className: "linha-titulo" }, n.titulo, !n.lida && zh("span", { className: "so-leitor" }, ", nova")),
                    zh("span", { className: "linha-meta" }, n.texto),
                    zh("span", { className: "apoio linha-meta" }, n.quando),
                  ),
                  !n.lida && zh("span", { className: "etiquetas" }, (0, r.jsx)(Bo, { forte: !0, children: "Nova" })),
                ),
              ),
            ),
          )
        : zh("div", { className: "vazio", style: { marginTop: 24 } }, zh("h3", null, "Nada por aqui"), zh("p", null, "Quando algu\xE9m responder no f\xF3rum ou um atendimento mudar, voc\xEA v\xEA aqui.")),
      zh("p", { className: "apoio medida", style: { marginTop: 24 } }, "Os avisos de atendimento tamb\xE9m chegam no seu e-mail."),
    );
  }
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
      E = ag.filter((x) => x.familia === "voce" && x.status !== "cancelado"),
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
      Hm = (0, L.useRef)(!1);
    xr = zAtalhos(c);
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
    ((0, L.useEffect)(() => {
      document.documentElement.dataset.theme = v;
      try {
        localStorage.setItem("zelo-tema", v);
      } catch (x) {}
    }, [v]),
      (0, L.useEffect)(() => {
        if (!Hm.current) {
          Hm.current = !0;
          return;
        }
        (window.scrollTo(0, 0),
          requestAnimationFrame(() =>
            document.querySelector("main h1")?.focus({ preventScroll: !0 }),
          ));
      }, [a, I, z, p, S]));
    let P2 =
        a !== "objetivo" &&
        a !== "login" &&
        a !== "cadastro" &&
        a !== "status-voluntario" &&
        a !== "painel" &&
        !(a === "diagnostico" && u === "inicio"),
      bt = (H) => {
        if (H === "atendimentos-meus")
          return (wl("meus"), ja(0), Nl(!1), o("atendimentos"));
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
      Z2 = () => o(n === "equipe" && a === "painel" ? "painel" : P2 ? "inicio" : "objetivo"),
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
      pedir = () => {
        let u = O.msgs.length;
        (T({
          msgs: [
            ...O.msgs,
            {
              de: "voce",
              texto: "Pedido de ajuda enviado pela tela Preciso de ajuda.",
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
      X2 = (H) => h(y.map((ae) => (ae.id === H.id ? H : ae))),
      Y2 = () => {
        (l(null),
          i({ nome: "", email: "" }),
          m(R2),
          T(z2),
          setAg(zAgInicial),
          setNt(zNotifsIniciais),
          setDisp(zDispInicial),
          setRem(null),
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
      },
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
              o(H === "voluntario" ? "cadastro" : H === "equipe" ? "painel" : "login"));
          },
        });
        break;
      case "login":
        xa = (0, r.jsx)(kS, {
          papel: n,
          voltar: () => o(n === "voluntario" ? "cadastro" : "objetivo"),
          criarVoluntario: () => o("cadastro"),
          entrar: (H, nm) => {
            (i({ nome: nm, email: H }),
              n === "voluntario"
                ? o("inicio")
                : (f(1), g("inicio"), o("diagnostico")));
          },
        });
        break;
      case "diagnostico":
        xa = (0, r.jsx)(GS, {
          passo: I,
          setPasso: f,
          diag: c,
          setDiag: m,
          concluir: () => o(u === "perfil" ? "perfil" : "inicio"),
          sair: () => o(u === "perfil" ? "perfil" : "login"),
        });
        break;
      case "cadastro":
        xa = (0, r.jsx)(VS, {
          voltar: () => o("objetivo"),
          entrar: () => o("login"),
          enviar: (H) => {
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
        });
        break;
      case "perfil":
        xa = (0, r.jsx)(XS, {
          usuario: s,
          setUsuario: i,
          diag: c,
          papel: n,
          tema: v,
          setTema: A,
          refazer: () => {
            (f(1), g("perfil"), o("diagnostico"));
          },
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
          novo: () => o("forum-novo"),
        });
        break;
      case "forum-topico":
        xa = (0, r.jsx)(JS, {
          t: J2,
          voltar: () => bt("forum"),
          atualizar: X2,
          usuario: s,
          papel: n,
        });
        break;
      case "forum-novo":
        xa = (0, r.jsx)(WS, {
          voltar: () => bt("forum"),
          publicar: (H) => {
            let ae = `t${Date.now()}`;
            (h([
              {
                id: ae,
                titulo: H.titulo.trim(),
                autor: s.nome,
                cidade: "Recife",
                quando: "agora",
                etiquetas: ["Novo", N2[H.dir]],
                dir: H.dir,
                apoio: 0,
                ajudou: 0,
                corpo: H.corpo.trim(),
                respostas: [],
              },
              ...y,
            ]),
              kr(ae));
          },
        });
        break;
      case "dicas":
        xa = (0, r.jsx)($S, { abrir: Rm, irPara: bt });
        break;
      case "dica":
        xa = (0, r.jsx)(a4, { d: W2, voltar: () => bt("dicas") });
        break;
      case "atendimentos":
        xa =
          z === 0 && n === "voluntario"
            ? (0, r.jsx)(zMinhaAgenda, {
                prof: volProf,
                agenda: ativos.filter((x) => x.profId === "pv"),
                ocupados: ativos,
                disp,
                setDisp,
                sala: (f) => abrirSala(f),
                cancelar: (f, m) => mudarAt(f, { status: "cancelado", motivo: "A pedido do profissional (" + m.toLowerCase() + ")" }),
                remarcar: (f, s0) => mudarAt(f, novoHorario(s0)),
              })
            : z === 0
            ? (0, r.jsx)(o4, {
                agenda: E,
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
              })
            : (0, r.jsx)(e4, {
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
              });
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
          ? (0, r.jsx)(zSala, { at: sala, outro: outroLado, voltar: () => bt(salaVolta === "atendimentos" && n !== "voluntario" ? "atendimentos-meus" : salaVolta) }, sala.id)
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
      case "painel":
        xa = (0, r.jsx)(zPainel, {
          ag,
          profDe,
          ocupados: ativos,
          pend,
          log: lg,
          sair: Y2,
          cancelar: (f, m) => {
            (mudarAt(f, { status: "cancelado", motivo: m }),
              registrar("Cancelou o atendimento de " + (f.familia === "voce" ? "Fam\xEDlia da conta de teste" : f.familia) + " com " + profDe(f).nome + " (" + f.dia.toLowerCase() + ", " + f.hora + "). Motivo: " + m.toLowerCase() + "."),
              f.familia === "voce" &&
                avisar("familia", "atend", "A equipe zElo cancelou um atendimento", "O de " + f.dia.toLowerCase() + ", \xE0s " + f.hora + ", com " + profDe(f).nome + ". Motivo: " + m.toLowerCase() + ".", { tela: "atendimentos-meus" }));
          },
          remarcar: (f, s0) => {
            let nh = novoHorario(s0);
            (mudarAt(f, nh),
              registrar("Remarcou o atendimento de " + (f.familia === "voce" ? "Fam\xEDlia da conta de teste" : f.familia) + " com " + profDe(f).nome + " para " + nh.dia.toLowerCase() + ", " + nh.hora + "."),
              f.familia === "voce" &&
                avisar("familia", "atend", "A equipe zElo remarcou seu atendimento", "Agora \xE9 " + nh.dia.toLowerCase() + ", \xE0s " + nh.hora + ", com " + profDe(f).nome + ".", { tela: "atendimentos-meus" }));
          },
          agendar: (d) => {
            let novo = zNovoAt({ ...d, id: "a" + Date.now() });
            (setAg((l0) => [...l0, novo]),
              registrar("Agendou para " + d.familia + " com " + novo.prof.nome + " (" + novo.dia.toLowerCase() + ", " + d.hora + ")."));
          },
          verDoc: (v) => registrar("Abriu o documento de " + v.nome + "."),
          decidir: (v, dec, m) => {
            (setPend((l0) => l0.map((x) => (x.id === v.id ? { ...x, status: dec, motivo: m, apagadoEm: zAgora() } : x))),
              registrar(
                { aprovado: "Aprovou o cadastro de ", recusado: "Recusou o cadastro de ", "novo-doc": "Pediu outro documento a " }[dec] + v.nome + (m ? ". Motivo: " + m.toLowerCase() : "") + ". Documento apagado.",
              ),
              v.id === "eu" &&
                dec === "aprovado" &&
                avisar("voluntario", "cadastro", "Cadastro aprovado", "Uma pessoa da equipe conferiu o seu registro. O documento que voc\xEA enviou foi apagado.", { tela: "inicio" }));
          },
        });
        break;
      default:
        xa = null;
    }
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
          frase: zFrases[a],
          children: xa,
        }),
      ],
    });
  }
  var F2 = N(yt());
  (0, q2.createRoot)(document.getElementById("raiz")).render(
    (0, F2.jsx)(Dm, {}),
  );
})();
