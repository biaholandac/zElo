// Gera codigo/icones-solar.js a partir de codigo/icones-solar-nomes.txt.
// Cada linha do arquivo de nomes é "nome-no-app = nome-na-solar". Cada ícone sai em duas versões:
// traço (Linear) e cheio (Bold).
// Uso (precisa de internet só na primeira vez):
//   npm install --no-save @iconify-json/solar@1.2.4
//   node codigo/gerar-icones.js
// Depois rode ./montar.sh.
const fs = require("fs");
const path = require("path");
const { icons } = require("@iconify-json/solar/icons.json");

const nomes = fs
  .readFileSync(path.join(__dirname, "icones-solar-nomes.txt"), "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"))
  .map((l) => l.split("=").map((x) => x.trim()));

const corpo = (n) => {
  const i = icons[n];
  if (!i) throw new Error("Ícone não existe na Solar: " + n);
  return i.body;
};

const linhas = nomes.map(
  ([app, solar]) => "    " + JSON.stringify(app) + ":" + JSON.stringify([corpo(solar + "-linear"), corpo(solar + "-bold")]),
);

const saida =
  "  // Ícones da biblioteca Solar (480 Design), licença CC BY 4.0: https://github.com/480-Design/Solar-Icon-Set\n" +
  "  // Cada ícone tem duas versões: [0] traço (Linear), para o uso normal, e [1] cheio (Bold), para o item atual do menu.\n" +
  "  // Gerado a partir do pacote @iconify-json/solar. Para trocar um ícone, troque o nome em icones-solar-nomes.txt e gere de novo.\n" +
  "  var zSolar = {" +
  linhas.join(",\n").trimStart() +
  "};\n";

fs.writeFileSync(path.join(__dirname, "icones-solar.js"), saida);
console.log("codigo/icones-solar.js gerado com " + nomes.length + " ícones");
