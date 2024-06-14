Smart Account Contract Project
This project is a decentralized application (DApp) built using Hardhat and ZKSync. The purpose of this project is to build a simple project to display "Hello World" and modify the signature of a Smart Account Contract.

Getting Started
To get started with this project, follow these steps:

Install Node.js and npm.
Clone this repository.
Install the dependencies using npm install.
Create a .env file and add your private key and contract address.
Compile the contract using npx hardhat compile.
Deploy the contract using npx hardhat deploy.
Interact with the contract using npx hardhat run scripts/interact.js --network zkSyncTestnet.
Environment Variables- contains sensitity information, not included 
Create a .env file and add the following variables:

PRIVATE_KEY: Your Metamask private key.
CONTRACT_ADDRESS: The address of your deployed contract.
Note: Make sure to add the .env file to your .gitignore file to prevent it from being committed to version control.

Project Overview
This project consists of a simple contract that displays "Hello World" and an advanced contract that modifies the signature of a Smart Account Contract to set the first byte to 0 or 1.

Deployment
To deploy the contract, use the deploy.js file.

Usage
To interact with the contract, use the interact.js file.

Technical Overview
This project uses Hardhat and ZKSync to build and deploy a decentralized application. The contract is written in Solidity and compiled using the hardhat compile command. The contract is then deployed to the ZKSync testnet using the hardhat deploy command.