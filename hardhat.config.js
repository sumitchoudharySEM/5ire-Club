require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.7",
    defaultNetwork: "hyperspace",
    networks: {
      "mantle-testnet": {
        url: "https://rpc.testnet.mantle.xyz/",
        accounts: ["00d143cc2bdaac3d846e38f4d38cf8f7c93a39ca6c4ef97a135e3cb6249bb587"] // Uses the private key from the .env file
      },
      hyperspace: {
          chainId: 3141,
          url: "https://api.hyperspace.node.glif.io/rpc/v1",
          accounts: ["00d143cc2bdaac3d846e38f4d38cf8f7c93a39ca6c4ef97a135e3cb6249bb587"],
      },
      
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
