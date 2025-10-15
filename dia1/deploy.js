import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying Greeter contract...");
  
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello Base Builders");

  await greeter.waitForDeployment();
  
  const address = await greeter.getAddress();
  console.log(`✅ Greeter deployed to: ${address}`);
  console.log(`🔍 Verify on explorer: https://sepolia.basescan.org/address/${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deploy failed:", error);
    process.exit(1);
  });
