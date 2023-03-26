require("@nomicfoundation/hardhat-toolbox");
//require .env
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "scrollTestnet",
    networks: {
      scrollTestnet: {
        url: "https://alpha-rpc.scroll.io/l2" || "",
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
