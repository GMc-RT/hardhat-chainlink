const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GetterSetter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const GetterSetter = await ethers.getContractFactory("GetterSetter");
    const getterSetter = await GetterSetter.deploy("Hello, world!");
    await getterSetter.deployed();

    expect(await getterSetter.greet()).to.equal("Hello, world!");

    const setGetterSetterTx = await getterSetter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGetterSetterTx.wait();

    expect(await getterSetter.greet()).to.equal("Hola, mundo!");
  });
});
