#!/bin/sh
# Junta o código do app (Ana + telas) com o React e gera prototipo/app.js.
set -e
cd "$(dirname "$0")"
cat codigo/react-inicio.js codigo/ana-motor.js codigo/ana-base.js codigo/app-fonte.js codigo/react-fim.js > prototipo/app.js
node --check prototipo/app.js && echo "prototipo/app.js gerado"
