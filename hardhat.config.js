module.exports = {
  solidity: "0.8.0",
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: "matterlabs/zksolc",
      },
    },
  },
  zkSyncDeploy: {
    zkSyncNetwork: "https://testnet.zksync.io",
  },
  networks: {
    "zkSyncTestnet": {
      url: "https://testnet.zksync.io",
      ethNetwork: "http://localhost:8545", // Can also be the url to the Ethereum node
      zksync: true,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}