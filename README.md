# zElo · protótipo navegável

zElo dá direção, ajuda e apoio para quem cuida de pessoas com deficiência e para quem quer ajudar.

Este repositório guarda o protótipo navegável que funciona no celular e no notebook, com o visual da versão mobile. Ele já inclui as correções da avaliação de usabilidade.

Protótipo publicado: https://claude.ai/artifact/6KU82zZ85Ty2uJRB3C8QWu

## Como abrir

Abra `prototipo/index.html` no navegador. Também dá para publicar a pasta `prototipo/` no GitHub Pages.

## Onde mexer

| O que mudar | Arquivo |
| --- | --- |
| Cores, fontes e temas (claro, escuro, alto contraste) | `prototipo/tokens.css` |
| Layout e aparência dos componentes | `prototipo/app.css` |
| Telas, textos e dados | `codigo/app-fonte.js` |
| Perguntas e respostas da Ana, e sinônimos | `codigo/ana-base.js` |
| Como a Ana compara as perguntas (sinônimos, erros de digitação) | `codigo/ana-motor.js` |

Para a Ana aprender uma resposta nova, acrescente um item em `zAnaBase` com várias formas de perguntar a mesma coisa. Palavras com o mesmo sentido entram em `zAnaSinonimos`.

Antes de o app ir ao ar:

- Um profissional de saúde precisa revisar os passos de primeiros socorros (`zSituacoes` e as respostas de emergência em `codigo/ana-base.js`). Depois, preencha `revisadoPor` e `data` em `zSaudeRevisao`. Enquanto estiverem vazios, o app mostra "Aguardando revisão de profissional de saúde".
- Defina o horário real da equipe de acolhimento em `zAcolhimento`, em `codigo/app-fonte.js`.
- Troque `zLigarDeVerdade` para `!0` em `codigo/app-fonte.js`, para os botões de ligar abrirem a ligação.

Depois de mudar qualquer arquivo em `codigo/`, rode `./montar.sh` para gerar `prototipo/app.js` de novo. Os arquivos `codigo/react-inicio.js` e `codigo/react-fim.js` são a biblioteca React e não precisam ser editados.

## Atendimentos, sala de vídeo, verificação e notificações

Sugestões da monitora Millena (novembro de 2026), com as escolhas do grupo:

- **Atendimentos.** A família remarca e cancela em Meus agendamentos. O voluntário tem a Minha agenda, com os próximos atendimentos (entrar na sala, remarcar, cancelar com motivo) e os dias e horários em que atende. A equipe do zElo entra pelo link "Entrar no painel da equipe", na primeira tela, e vê todos os atendimentos: agenda para uma família, remarca e cancela.
- **Chamada online.** Acontece numa sala de vídeo dentro do zElo, sem instalar nada: teste de câmera e microfone, legendas, ajuda durante a chamada e nada é gravado. No app real, a ideia é usar o Jitsi Meet (código aberto e gratuito). Neste protótipo a chamada é simulada.
- **Verificação dos voluntários.** O sistema consulta o número no conselho profissional e uma pessoa da equipe confere o documento no painel antes de aprovar. Depois da decisão, o arquivo é apagado (LGPD). Guardamos só nome, número do registro e data. Abrir um documento e cada decisão ficam no Registro de ações.
- **Notificações.** Sino no topo (celular) e item no menu (notebook), com contador. Mostra respostas do fórum, lembretes e mudanças de atendimento e, para o voluntário, o status do cadastro.

O código dessas telas fica em `codigo/app-fonte.js`, no bloco "Novidades" (`zMeusAgend`, `zMinhaAgenda`, `zPainel`, `zSala`, `zNotificacoes`).

## Como voltar a uma versão anterior

Cada mudança entra por um pull request, então a versão anterior sempre fica guardada.

- **Desfazer uma mudança que já entrou:** abra o pull request já mesclado no GitHub e clique em **Revert**. O GitHub cria outro pull request que desfaz a mudança. Mescle esse e pronto.
- **Ver como estava antes:** na aba **Commits**, clique em **Browse files** na versão que você quer ver.
- **Testar sem arriscar:** enquanto o pull request não for mesclado, nada muda na versão principal (`main`).
