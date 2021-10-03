#!/bin/sh
echo "Starting deployment of SmartContract to Ropsten Network"
npx hardhat run --network ropsten scripts/deploy.js | npx hardhat run --network ropsten scripts/GetSetExample.js
echo "Script complete, all done!"