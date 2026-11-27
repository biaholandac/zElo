# zElo · protótipo navegável

zElo dá direção, ajuda e apoio para quem cuida de pessoas com deficiência e para quem quer ajudar.

Este repositório guarda o protótipo navegável que funciona no celular e no notebook. Ele já inclui as correções da avaliação de usabilidade, o refinamento da interface de novembro de 2026 a segunda rodada de sugestões da monitora Milena e a rodada final de revisão.

Links (atualizados em 27/11/2026, com a rodada final de revisão):

- **Site com banco de dados (GitHub Pages):** https://biaholandac.github.io/zElo/ (contas, atendimentos e fórum ficam salvos no Supabase). Ele se atualiza sozinho quando uma mudança entra na `main`.
- **Protótipo para apresentar, sem banco:** https://claude.ai/artifact/6KU82zZ85Ty2uJRB3C8QWu (o QR code em `apresentacao/` abre este link)
- **Código e histórico de versões:** https://github.com/biaholandac/zElo

## Como abrir

Abra `prototipo/index.html` no navegador.

Para apresentar, use o QR code em `apresentacao/qr-prototipo.png` (ou `.svg`, para imprimir grande). Ele abre o protótipo publicado.

### Publicar no GitHub Pages

O arquivo `.github/workflows/publicar.yml` publica a pasta `prototipo/` sempre que algo entra na `main`. Na primeira vez, alguém com acesso de dono precisa ir em **Settings > Pages** e escolher **Source: GitHub Actions**. O endereço é https://biaholandac.github.io/zElo/.

## Onde mexer

| O que mudar | Arquivo |
| --- | --- |
| Cores por papel, fontes, espaços e os três temas | `prototipo/tokens.css` |
| Layout e aparência dos componentes | `prototipo/app.css` |
| Telas, textos e dados | `codigo/app-fonte.js` |
| Perguntas e respostas da Ana, e sinônimos | `codigo/ana-base.js` |
| Como a Ana compara as perguntas (sinônimos, erros de digitação) | `codigo/ana-motor.js` |
| Quais ícones o app usa | `codigo/icones-solar-nomes.txt` (depois rode `node codigo/gerar-icones.js`) |
| Forma da logo | `prototipo/logo-mascara.png` (a cópia usada fica embutida em `app.css`, na classe `.logo`) |

Para a Ana aprender uma resposta nova, acrescente um item em `zAnaBase` com várias formas de perguntar a mesma coisa. Palavras com o mesmo sentido entram em `zAnaSinonimos`.

Antes de o app ir ao ar:

- Um profissional de saúde precisa revisar os passos de primeiros socorros (`zSituacoes` e as respostas de emergência em `codigo/ana-base.js`). Depois, preencha `revisadoPor` e `data` em `zSaudeRevisao`. Enquanto estiverem vazios, o app mostra "Aguardando revisão de profissional de saúde".
- Defina o horário real da equipe de acolhimento em `zAcolhimento`, em `codigo/app-fonte.js`.
- Troque `zLigarDeVerdade` para `!0` em `codigo/app-fonte.js`, para os botões de ligar abrirem a ligação.
- Escreva a política de privacidade e os termos de uso. A tela "Seus dados no zElo" (`zPrivacidade`) explica os aceites em linguagem simples, mas ainda não tem o texto legal completo.
- Decida até quando a agenda fica aberta para marcar (`zMesesAbertos`, hoje 3 meses).

Depois de mudar qualquer arquivo em `codigo/`, rode `./montar.sh` para gerar `prototipo/app.js` de novo. Os arquivos `codigo/react-inicio.js` e `codigo/react-fim.js` são a biblioteca React e não precisam ser editados.

## Regras da interface

O refinamento de novembro de 2026 seguiu estas regras. Vale manter nas telas novas.

- **Uma coluna central.** O conteúdo fica numa coluna com largura máxima (`--miolo`, 760px; telas com grade usam `--miolo-largo`, 960px). Menu fixo à esquerda no notebook, barra embaixo no celular e barra do topo nos dois.
- **Um botão cheio por tela.** É a ação principal. Os outros botões são de contorno (`sec` no componente `ia`).
- **Ações rápidas em janela.** Novo tópico, escolha de horário, remarcar, cancelar e refazer as perguntas abrem em janela por cima da tela (`zJanela`). Esc ou o X fecham, e o foco fica dentro dela.
- **O componente certo para cada informação.** Profissionais em grade de cartões, a semana numa faixa de dias, o fórum como lista, as orientações como cartões com a área e os números numa faixa com número grande.
- **Cor com equilíbrio.** Fundos neutros. O amarelo da marca aparece na abertura, na coluna da entrada, no menu (fundo claro e item atual), na saudação do Início, no próximo atendimento e nas respostas de profissionais no fórum. Ícones ficam em círculos de cor suave. O vermelho é só para emergência.
- **Status iguais em todo o app.** Etiqueta neutra com ponto colorido, ícone e a mesma palavra (`zStatus`): Confirmado, Aguardando, Cancelado, Novo, Atende hoje, Resolvido, Encerrado. Tudo que está selecionado usa um estilo só.
- **Sem enfeite.** Sem faixas decorativas, frases motivacionais, emoji ou degradê.
- **Menu.** Início, Chat, Atendimentos, Fórum e Orientações, cada um com contador. Embaixo ficam "Sair do zElo" (pede confirmação) e "Preciso de ajuda". O topo mostra o nome da tela, o atalho de tema, o sino com contador e o Perfil. Telas fora do menu mostram "‹ Tela de origem" no topo.
- **Quem cuida e quem é cuidado.** O responsável informa o nome da pessoa que cuida, e os textos usam esse nome.
- **Fórum.** Respostas de profissionais vêm primeiro, em destaque, com a etiqueta "Profissional verificado".
- **Texto.** Curto e em português do Brasil. Lista vazia diz o que fazer. Botão travado diz por quê.
- **Retorno.** Botões mostram "Salvando…", "Enviando…" e outros enquanto trabalham, e a troca de tela mostra um esqueleto no formato do conteúdo.
- **Mantidos:** o botão "Preciso de ajuda", o aviso do 192 e o alto contraste.

### Cores por papel

Os componentes nunca usam uma cor direta. Usam papéis (fundo, superfície, texto, ação, selecionado, destaque, alerta e status), e cada tema dá um valor para cada papel em `prototipo/tokens.css`.

| Papel | Claro | Escuro | Alto contraste |
| --- | --- | --- | --- |
| Fundo (`--bg`) | #F6F7F6 | #111618 | #FFFFFF |
| Superfície (`--superficie`) | #FFFFFF | #191F22 | #FFFFFF |
| Texto (`--texto`) | #17262A | #ECEFEE | #000000 |
| Ação (`--acao-bg`) | #0F5F70 | #7CC4D2 | #000000 |
| Selecionado (`--sel-bg`) | #E3EFF1 | #17343B | #FFF3B0 |
| Destaque da marca (`--destaque-bg`) | #FBF3D6 | #2B2818 | #FFF3B0 |
| Menu atual e abertura (`--nav-ativo-bg`, `--splash-bg`) | #F5E1A0 | #F5E1A0 | #FFF3B0 |
| Emergência (`--emergencia`) | #B3261E | #FF8A7D | #A30000 |

### Acessibilidade

O tema claro é o padrão. Quem pede alto contraste no aparelho já começa nele. Tema (claro, escuro, alto contraste) e tamanho da letra (padrão, grande, maior) ficam em Perfil > Acessibilidade, e o tema também tem atalho no topo. As duas escolhas ficam guardadas no aparelho.

### Ícones

Todos os ícones são da biblioteca [Solar](https://github.com/480-Design/Solar-Icon-Set), da 480 Design, com licença CC BY 4.0. Cada ícone tem a versão de traço (uso normal) e a cheia (item atual do menu). Os ícones que acompanham texto ficam escondidos do leitor de tela, e os botões só com ícone têm um rótulo.

Para trocar ou acrescentar um ícone, edite `codigo/icones-solar-nomes.txt` (cada linha é `nome-no-app = nome-na-solar`) e rode:

```
npm install --no-save @iconify-json/solar@1.2.4
node codigo/gerar-icones.js
./montar.sh
```

## Atendimentos, sala de vídeo, verificação e notificações

Sugestões da monitora Milena (novembro de 2026), com as escolhas do grupo:

- **Atendimentos.** A família remarca e cancela em Meus atendimentos. O voluntário tem a Minha agenda, com os próximos atendimentos (entrar na sala, remarcar, cancelar com motivo) e os dias e horários em que atende. O painel da equipe saiu do protótipo em novembro de 2026, a pedido do professor.
- **Chamada online.** Acontece numa sala de vídeo dentro do zElo, sem instalar nada: teste de câmera e microfone, legendas, ajuda durante a chamada e nada é gravado. No app real, a ideia é usar o Jitsi Meet (código aberto e gratuito). Neste protótipo a chamada é simulada.
- **Verificação dos voluntários.** O sistema consulta o número no conselho profissional e uma pessoa da equipe confere o documento antes de aprovar. Depois da decisão, o arquivo é apagado (LGPD). Guardamos só nome, número do registro e data. (Essa conferência acontece fora do app e não aparece no protótipo.)
- **Notificações.** Sino no topo, com contador. Mostra respostas do fórum, lembretes e mudanças de atendimento, agrupados em Hoje, Ontem e Antes. Para o voluntário, mostra também o status do cadastro.

O código dessas telas fica em `codigo/app-fonte.js` (`zMeusAgend`, `zMinhaAgenda`, `zSala`, `zNotificacoes`).

## Segunda rodada da Milena (novembro de 2026)

O que mudou e o que foi adaptado:

- **Amarelo de volta, com equilíbrio.** Abertura amarela com a logo, coluna amarela na entrada, menu com fundo creme e item atual amarelo. O texto sobre o amarelo é escuro, para manter o contraste. No alto contraste o amarelo vira #FFF3B0 com texto preto.
- **Margens.** A coluna central passou de 760px para 880px (telas com grade, de 960px para 1120px), e as margens laterais ficaram menores.
- **Entrada.** Primeiro a pessoa escolhe o perfil, depois entra na conta e passa pela tela "Seus dados no zElo". Uma faixa de etapas mostra onde ela está. Na tela de privacidade, o aceite necessário fica separado dos opcionais, nada vem marcado e os opcionais não travam nada. Os opcionais mudam o app de verdade (cidade no fórum, guardar perguntas da Ana) e podem ser trocados em Perfil > Privacidade.
- **Atendimentos.** "Buscar especialistas" e "Meus agendamentos" viraram subpáginas com navegação no topo (na rodada final passaram a se chamar "Buscar profissionais" e "Meus atendimentos"). Meus atendimentos mostra três colunas: Próximos, Realizados e Cancelados. Um atendimento vai para Realizados quando a chamada termina na sala de vídeo.
- **Agendar.** A janela mostra os dados do profissional (área, registro, onde atende, dias de atendimento) e um calendário do mês com setas para os outros meses. Os dias livres vêm só dos dias e horas que o profissional informou. Não há horário inventado.
- **Preciso de ajuda.** "O que está acontecendo?" virou cartões com ícone, com a opção "Outra situação", que abre um campo para escrever e enviar ao acolhimento. As perguntas iniciais usam a mesma ideia de cartões com ícone.
- **Não aplicado:** nada foi copiado do Flo. Usamos só a ideia de ter mais cor e ícones, com as cores e a logo do zElo.

## Banco de dados (Supabase)

Sem configuração, o protótipo funciona como sempre, com tudo na memória da página. Com o Supabase ligado, ele guarda de verdade:

- **Contas:** criar conta, entrar e "esqueci minha senha", com e-mail e senha.
- **Perfil:** nome, papel, respostas das perguntas iniciais, escolhas de privacidade e horários do voluntário. Quem já respondeu entra direto no Início.
- **Atendimentos:** os que a família marca, remarca ou cancela.
- **Fórum:** tópicos e respostas novas. Qualquer pessoa com conta pode ler.
- **Perguntas da Ana:** só se a pessoa marcar o opcional na tela de privacidade.

Os profissionais, as orientações e os tópicos de exemplo continuam sendo dados fictícios do protótipo. A conferência do registro do voluntário continua simulada.

Como ligar:

1. Crie um projeto em supabase.com.
2. Em **SQL Editor**, cole `banco/esquema.sql` e clique em **Run**. Isso cria as tabelas e as regras de acesso.
3. Em **Project Settings > API**, copie a **Project URL** e a chave **publishable** (nos projetos antigos, **anon public**) para `prototipo/config.js`. Nunca use a chave secreta (`secret` ou `service_role`).
4. Para a apresentação, dá para desligar a confirmação por e-mail em **Authentication > Sign In / Providers > Email > Confirm email**. Assim a conta funciona na hora, sem esperar o e-mail.

`prototipo/supabase.js` é a biblioteca do Supabase (`@supabase/supabase-js` 2.119.0) já empacotada e não precisa ser editada. O código que conversa com o banco fica em `codigo/banco.js`.

## Ajustes do professor Gusto (novembro de 2026)

- A primeira tela explica o que é o zElo antes da escolha de perfil (desde 27/11/2026 isso fica no painel amarelo, veja "Tela de abertura").
- O painel da equipe saiu.
- No cadastro do responsável, a pergunta da deficiência vem logo abaixo do nome da pessoa cuidada.
- No Início, "Ver todas as orientações" fica ao lado de "Para você", e "Ver todos" dos profissionais abre direto Buscar profissionais.
- QR code para a apresentação em `apresentacao/`.
- Publicação automática no GitHub Pages (veja "Publicar no GitHub Pages").
- Banco de dados com Supabase (veja "Banco de dados").

## Tela de abertura (novembro de 2026)

A primeira tela tem duas partes:

- **Painel amarelo (esquerda no notebook, cartão no topo no celular).** Logo, o título "Cuidar fica mais leve quando ninguém cuida sozinho.", o resumo do zElo, três benefícios com ícone de check e a assinatura "Zelo é cuidado. Elo é conexão.". No notebook ele fica fixo, com 500px de largura e a altura da tela. Os dois círculos de fundo são só enfeite e ficam escondidos do leitor de tela. O título do painel é o único `h1` da página.
- **Coluna da direita.** Começa direto em "Como você quer usar o zElo?" (agora `h2`, com o mesmo visual), centralizada na altura da tela no notebook.

Saíram da primeira tela: "Boas-vindas ao zElo", o texto de descrição, "Quem somos" e "Por que usar o zElo" com os quatro cartões. As cores do painel ficam em `prototipo/tokens.css` (`--hero-*`), o layout em `prototipo/app.css` (classes `.hero`) e os textos em `FS`, em `codigo/app-fonte.js`.

## Rodada final de revisão (novembro de 2026)

Revisão de todas as telas, nos dois perfis, em celular, tablet e notebook, nos três temas. A identidade visual não mudou e nenhuma função nova entrou.

- **Espaçamento.** Uma escala só, dos tokens `--space-1` a `--space-8` (4, 8, 12, 16, 20, 32, 40 e 64px). Avisos depois de um cartão ficam a 16px dele e com a mesma largura. Era o caso do aviso "Isto não substitui um profissional de saúde" nas orientações.
- **Janela de agendar e remarcar.** O calendário e o painel cinza de horários têm a mesma altura, sem sobra. O painel mostra o dia escolhido e os horários livres, ou uma dica quando nenhum dia foi escolhido. O rodapé com "Continuar" fica sempre visível, e a janela cabe em telas baixas de notebook.
- **Fluxo de agendamento.** O subtítulo diz "Passo 1 de 2" ou "Passo 2 de 2" e o que fazer. Botão travado mostra o motivo logo acima ("Escolha presencial ou online.", "Escolha um dia no calendário.", "Escolha um horário."). "Voltar" fica ao lado do botão principal. Presencial e online têm etiquetas de cores diferentes em todas as telas (`zModoEtiqueta`). Para online, a confirmação explica como entrar: no dia, abrir Meus atendimentos e tocar em "Entrar na sala". Ao remarcar, o modo atual já vem escolhido.
- **Mesmo nome para a mesma coisa.** "Buscar profissionais", "Meus atendimentos", "Agendar atendimento" e "Entrar na chamada" (dentro da sala) em todo o app e nas respostas da Ana.
- **Textos.** Saíram o aviso amarelo de texto provisório da privacidade, frases sobre o protótipo e avisos repetidos. Ficaram os avisos que protegem a pessoa, como "não substitui um profissional de saúde", o botão "Preciso de ajuda" e o rodapé "Protótipo com dados fictícios".
- **Teclado.** Ao abrir uma janela, o foco vai para o título dela. Tab fica dentro da janela, e Esc devolve o foco ao botão que a abriu.
- **Celular.** A navegação de Atendimentos não corta mais os nomes, e o rodapé não fica mais escondido atrás do botão "Preciso de ajuda".
- **Sair do zElo** pede confirmação também no Perfil.

## Como voltar a uma versão anterior

Cada mudança fica guardada no histórico do GitHub.

- **Desfazer uma mudança que já entrou:** se ela veio por pull request, abra o pull request no GitHub e clique em **Revert**. Se entrou direto na `main`, peça para reverter o commit.
- **Ver como estava antes:** na aba **Commits**, clique em **Browse files** na versão que você quer ver.
- **Testar sem arriscar:** enquanto um pull request não for mesclado, nada muda na versão principal (`main`).
