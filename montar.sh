#!/bin/sh
# Junta o código do app (Ana + telas) com o React e gera prototipo/app.js.
# Por padrão o arquivo sai minificado (menor, carrega mais rápido no 4G).
# Use ./montar.sh --legivel para gerar sem minificar, útil para procurar erros.
set -e
cd "$(dirname "$0")"
cat codigo/react-inicio.js codigo/ana-motor.js codigo/ana-base.js codigo/app-fonte.js codigo/react-fim.js > prototipo/app.js
node --check prototipo/app.js
if [ "$1" != "--legivel" ]; then
  if npx --yes esbuild@0.24.0 prototipo/app.js --minify --target=es2019 --legal-comments=eof \
       --allow-overwrite --outfile=prototipo/app.js --log-level=warning; then
    echo "prototipo/app.js gerado e minificado"
  else
    echo "Não deu para minificar (sem internet?). prototipo/app.js ficou sem minificar."
  fi
else
  echo "prototipo/app.js gerado sem minificar"
fi
