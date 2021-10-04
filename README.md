# Hardhat Chainlink Project 

The project contains a deploy script which outputs its result to a json file, and a second script which uses the json file, and updates a value.

You can run it using the windows batch file: winRunner.bat, or the linux version batchRunner.sh

Or the deployment scripts can be run manually:

```shell
npx hardhat run --network ropsten scripts/deploy.js   
```

Then, you can update the message that was set at deployment with this command:

```shell
npx hardhat run --network ropsten scripts/GetSetExample.js   
```
