// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async() => {
  const nftContractFactory = await ethers.getContractFactory('Subscribe')
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()

  console.log("Contract deployed to: ", nftContract.address)
}

const runMain = async() => {
  try {
    await main()
    process.exit(0)
  } catch(error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()