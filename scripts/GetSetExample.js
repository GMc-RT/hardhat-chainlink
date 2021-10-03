const hre = require("hardhat");


async function main() {

  const delay = ms => new Promise(res => setTimeout(res, ms));

    const deploymentData = require('../deploymentData.json');
    console.log("The contract address is: ", deploymentData.contract_address);

    const GetterSetter = await hre.ethers.getContractFactory("GetterSetter");
    const getterSetter =  GetterSetter.attach(deploymentData.contract_address);

    await getterSetter.setGreeting("A new Greeting!");
    //await getterSetter.wait();
    await delay(40000);
    const newGreeting = await getterSetter.greet();  
    console.log("Greeting is now:", newGreeting);

    // await getterSetter.setGreeting(deploymentData.value_set);
    // await getterSetter.wait();
    // console.log("Greeting has been reset for easier testing of the same contract to: ", deploymentData.value_set);
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });