const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying Rewards Contract to Base Sepolia...");
  
  // Get the contract factory
  const RewardContract = await hre.ethers.getContractFactory("RewardContract");
  
  // Deploy with 0.01 ETH as initial reward
  const initialReward = hre.ethers.parseEther("0.01"); // 0.01 ETH
  console.log(`💰 Deploying with initial reward: ${hre.ethers.formatEther(initialReward)} ETH`);
  
  const rewardContract = await RewardContract.deploy({
    value: initialReward
  });
  
  await rewardContract.waitForDeployment();
  
  const contractAddress = await rewardContract.getAddress();
  
  console.log("✅ Rewards Contract deployed successfully!");
  console.log(`📍 Contract Address: ${contractAddress}`);
  console.log(`🔗 BaseScan: https://sepolia.basescan.org/address/${contractAddress}`);
  
  // Verify contract on BaseScan
  console.log("\n🔍 Verifying contract on BaseScan...");
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: []
    });
    console.log("✅ Contract verified on BaseScan!");
  } catch (error) {
    console.log("⚠️  Verification failed (might already be verified):", error.message);
  }
  
  // Display contract info
  console.log("\n📊 Contract Information:");
  console.log(`💰 Initial Balance: ${hre.ethers.formatEther(await hre.ethers.provider.getBalance(contractAddress))} ETH`);
  console.log(`🎯 Reward Claimed: ${await rewardContract.rewardClaimed()}`);
  
  // Save deployment info
  const deploymentInfo = {
    contractAddress: contractAddress,
    network: "baseSepolia",
    chainId: 84532,
    deployedAt: new Date().toISOString(),
    initialReward: hre.ethers.formatEther(initialReward),
    basescanUrl: `https://sepolia.basescan.org/address/${contractAddress}`
  };
  
  console.log("\n💾 Deployment Info:");
  console.log(JSON.stringify(deploymentInfo, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
