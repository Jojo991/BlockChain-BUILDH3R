async function main() {
    const provider = await hre.zksync.getProvider("testnet");
    const signer = await hre.zksync.Wallet.fromEthSigner(
      new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    );
  
    const factory = await hre.zksyncDeploy.deploy(
      "./contracts/MyContract.sol",
      [100], // Constructor arguments
      signer
    );
  
    console.log(`${factory.address} has been deployed to the ZKSync Testnet!`);
    process.env.CONTRACT_ADDRESS = factory.address;
  }
  
  main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
    });