async function main() {
    const provider = await hre.zksync.getProvider("testnet");
    const signer = await hre.zksync.Wallet.fromEthSigner(
      new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    );
  
    const contract = new hre.ethers.Contract(
      process.env.CONTRACT_ADDRESS,
      ["function modifySignature(bytes memory signature) public pure returns (bytes memory)"],
      signer
    );
  
    const signature = "0x1234567890abcdef";
    const newSignature = await contract.modifySignature(signature);
    console.log(`Modified signature: ${newSignature}`);
  }
  
  main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
    });