require("@nomicfoundation/hardhat-toolbox");
//require .env
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.7",
    defaultNetwork: "mantle-testnet",
    networks: {
      "mantle-testnet": {
        url: "https://rpc.testnet.mantle.xyz/",
        accounts: [process.env.PRIV_KEY]
      },
      hyperspace: {
          chainId: 3141,
          url: "https://api.hyperspace.node.glif.io/rpc/v1",
          accounts: [process.env.PRIV_KEY]
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
