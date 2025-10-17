const hre = require("hardhat");

async function main() {
  // Replace with your deployed contract address
  const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
  
  console.log("🧪 Testing Rewards Contract...");
  
  // Get the contract instance
  const RewardContract = await hre.ethers.getContractFactory("RewardContract");
  const rewardContract = RewardContract.attach(CONTRACT_ADDRESS);
  
  // Get contract info
  const balance = await hre.ethers.provider.getBalance(CONTRACT_ADDRESS);
  const rewardClaimed = await rewardContract.rewardClaimed();
  
  console.log("📊 Contract Status:");
  console.log(`💰 Balance: ${hre.ethers.formatEther(balance)} ETH`);
  console.log(`🎯 Reward Claimed: ${rewardClaimed}`);
  
  if (!rewardClaimed) {
    console.log("\n🎁 Reward is available to claim!");
    console.log(`💡 To claim: call claimReward() function`);
  } else {
    console.log("\n✅ Reward has been claimed!");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Test failed:", error);
    process.exit(1);
  });
