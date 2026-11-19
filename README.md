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
| Telas, textos, dados e respostas do chat | `codigo/app-fonte.js` |

Depois de mudar `codigo/app-fonte.js`, rode `./montar.sh` para gerar `prototipo/app.js` de novo. Os arquivos `codigo/react-inicio.js` e `codigo/react-fim.js` são a biblioteca React e não precisam ser editados.

## Como voltar a uma versão anterior

Cada mudança entra por um pull request, então a versão anterior sempre fica guardada.

- **Desfazer uma mudança que já entrou:** abra o pull request já mesclado no GitHub e clique em **Revert**. O GitHub cria outro pull request que desfaz a mudança. Mescle esse e pronto.
- **Ver como estava antes:** na aba **Commits**, clique em **Browse files** na versão que você quer ver.
- **Testar sem arriscar:** enquanto o pull request não for mesclado, nada muda na versão principal (`main`).
