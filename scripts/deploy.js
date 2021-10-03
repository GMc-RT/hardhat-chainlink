// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');
const logFile = "deploymentData.json";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  
  const GetterSetter = await hre.ethers.getContractFactory("GetterSetter");
  const getterSetter = await GetterSetter.deploy("Hello, Hardhat!");
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:",deployer.address);
  await getterSetter.deployed();

  console.log("GetterSetter deployed to:", getterSetter.address);

  const jsonLog = {
		"contract_address": getterSetter.address
		,"deployer_address": deployer.address
		,"value_set": "Hello, Hardhat!"
	}
	const data = JSON.stringify(jsonLog);

	console.log("write JSON string to a file");
	console.log(data);	
	fs.writeFileSync(logFile, data, function(err){
		if (err) {
			console.log("error:" + err);
			throw err;
    	}
    else{
    		console.log("JSON data is saved.");
      }
		}
	);

  console.log("Process Competed");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
