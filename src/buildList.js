const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const blast_sepolia = require("./tokens/blast-sepolia.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  const l1List = {
    name: "BitConnect Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["bitconnect", "default"],
    tokens: [...mainnet, ...blast_sepolia]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return l1List;
};
