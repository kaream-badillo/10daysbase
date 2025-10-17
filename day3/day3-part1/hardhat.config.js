require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env.local" });

// Debug: Check if environment variables are loaded
console.log("🔍 Environment check:");
console.log("PRIVATE_KEY:", process.env.PRIVATE_KEY ? "SET" : "NOT SET");
console.log("BASE_SEPOLIA_RPC_URL:", process.env.BASE_SEPOLIA_RPC_URL ? "SET" : "NOT SET");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 84532
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  etherscan: {
    apiKey: process.env.BASESCAN_API_KEY || process.env.ETHERSCAN_API_KEY || ""
  },
  sourcify: {
    enabled: false
  }
};
