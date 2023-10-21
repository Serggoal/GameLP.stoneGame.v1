const { ethers } = require("hardhat");
//const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the address: ", deployer.address);

  //console.log("Account balance:", (await deployer.getBalance()).toString());

  // const stopSupply1 = '2000';
  // const stopSupply = ethers.utils.parseEther(stopSupply1);

  const MainLP = await ethers.getContractFactory("MainLP");
  const mainLP = await MainLP.deploy();

  console.log("MainLP deployed to:", mainLP.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});