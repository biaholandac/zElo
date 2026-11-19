#!/bin/sh
# Junta o código do app (codigo/app-fonte.js) com o React e gera prototipo/app.js.
set -e
cd "$(dirname "$0")"
cat codigo/react-inicio.js codigo/app-fonte.js codigo/react-fim.js > prototipo/app.js
node --check prototipo/app.js && echo "prototipo/app.js gerado"
