# zElo · protótipo navegável

zElo dá direção, ajuda e apoio para quem cuida de pessoas com deficiência e para quem quer ajudar.

Este repositório guarda o protótipo navegável que funciona no celular e no notebook. Ele já inclui as correções da avaliação de usabilidade e o refinamento da interface de novembro de 2026.

Protótipo publicado: https://claude.ai/artifact/6KU82zZ85Ty2uJRB3C8QWu

## Como abrir

Abra `prototipo/index.html` no navegador. Também dá para publicar a pasta `prototipo/` no GitHub Pages.

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

Depois de mudar qualquer arquivo em `codigo/`, rode `./montar.sh` para gerar `prototipo/app.js` de novo. Os arquivos `codigo/react-inicio.js` e `codigo/react-fim.js` são a biblioteca React e não precisam ser editados.

## Regras da interface

O refinamento de novembro de 2026 seguiu estas regras. Vale manter nas telas novas.

- **Uma coluna central.** O conteúdo fica numa coluna com largura máxima (`--miolo`, 760px; telas com grade usam `--miolo-largo`, 960px). Menu fixo à esquerda no notebook, barra embaixo no celular e barra do topo nos dois.
- **Um botão cheio por tela.** É a ação principal. Os outros botões são de contorno (`sec` no componente `ia`).
- **Ações rápidas em janela.** Novo tópico, escolha de horário, remarcar, cancelar e refazer as perguntas abrem em janela por cima da tela (`zJanela`). Esc ou o X fecham, e o foco fica dentro dela.
- **O componente certo para cada informação.** Profissionais em grade de cartões, a semana numa faixa de dias, o fórum como lista, as orientações como cartões com a área e os números numa faixa com número grande.
- **Cor com parcimônia.** Fundos neutros. O amarelo da marca aparece só no próximo atendimento e nas respostas de profissionais no fórum. O vermelho é só para emergência.
- **Status iguais em todo o app.** Etiqueta neutra com ponto colorido, ícone e a mesma palavra (`zStatus`): Confirmado, Aguardando, Cancelado, Novo, Atende hoje, Resolvido, Encerrado. Tudo que está selecionado usa um estilo só.
- **Sem enfeite.** Sem faixas decorativas, frases motivacionais, emoji ou degradê.
- **Menu.** Início, Chat, Atendimentos, Fórum e Orientações, cada um com contador. O topo mostra o nome da tela, o atalho de tema, o sino com contador e o Perfil. Telas fora do menu mostram "‹ Tela de origem" no topo.
- **Quem cuida e quem é cuidado.** O responsável informa o nome da pessoa que cuida, e os textos usam esse nome.
- **Fórum.** Respostas de profissionais vêm primeiro, em destaque, com "Verificado por [nome]".
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

Sugestões da monitora Millena (novembro de 2026), com as escolhas do grupo:

- **Atendimentos.** A família remarca e cancela em Meus agendamentos. O voluntário tem a Minha agenda, com os próximos atendimentos (entrar na sala, remarcar, cancelar com motivo) e os dias e horários em que atende. A equipe do zElo entra pelo link "Entrar no painel da equipe", na primeira tela, e vê todos os atendimentos: agenda para uma família, remarca e cancela.
- **Chamada online.** Acontece numa sala de vídeo dentro do zElo, sem instalar nada: teste de câmera e microfone, legendas, ajuda durante a chamada e nada é gravado. No app real, a ideia é usar o Jitsi Meet (código aberto e gratuito). Neste protótipo a chamada é simulada.
- **Verificação dos voluntários.** O sistema consulta o número no conselho profissional e uma pessoa da equipe confere o documento no painel antes de aprovar. Depois da decisão, o arquivo é apagado (LGPD). Guardamos só nome, número do registro e data. Abrir um documento e cada decisão ficam no Registro de ações.
- **Notificações.** Sino no topo, com contador. Mostra respostas do fórum, lembretes e mudanças de atendimento, agrupados em Hoje, Ontem e Antes. Para o voluntário, mostra também o status do cadastro.

O código dessas telas fica em `codigo/app-fonte.js` (`zMeusAgend`, `zMinhaAgenda`, `zPainel`, `zSala`, `zNotificacoes`).

## Como voltar a uma versão anterior

Cada mudança fica guardada no histórico do GitHub.

- **Desfazer uma mudança que já entrou:** se ela veio por pull request, abra o pull request no GitHub e clique em **Revert**. Se entrou direto na `main`, peça para reverter o commit.
- **Ver como estava antes:** na aba **Commits**, clique em **Browse files** na versão que você quer ver.
- **Testar sem arriscar:** enquanto um pull request não for mesclado, nada muda na versão principal (`main`).
