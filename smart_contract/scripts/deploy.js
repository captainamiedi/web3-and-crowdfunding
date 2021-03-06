const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const CrowdFunding = await hre.ethers.getContractFactory('CrowdFunding');
  const transactions = await Transactions.deploy();
  const crowdFunding = await CrowdFunding.deploy();

  await transactions.deployed();
  await crowdFunding.deployed();

  console.log("Transaction deployed to:", transactions.address);
  console.log("crowdfunding deployed to:", crowdFunding.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();