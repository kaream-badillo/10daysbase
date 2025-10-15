// SPDX-License-Identifier: MIT
require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
  console.log("🔍 Verificando configuración...");
  
  // Verificar variables de entorno
  const rpcUrl = process.env.BASE_SEPOLIA_RPC_URL;
  const privateKey = process.env.PRIVATE_KEY;
  
  console.log("RPC URL:", rpcUrl ? "✅ Configurado" : "❌ No configurado");
  console.log("Private Key:", privateKey ? "✅ Configurado" : "❌ No configurado");
  
  if (!rpcUrl || !privateKey) {
    console.log("\n❌ Error: Variables de entorno faltantes");
    console.log("Crea un archivo .env con:");
    console.log("BASE_SEPOLIA_RPC_URL=https://sepolia.base.org");
    console.log("PRIVATE_KEY=tu_clave_privada");
    console.log("BASESCAN_API_KEY=tu_api_key");
    return;
  }
  
  // Verificar conexión a la red
  try {
    const [deployer] = await ethers.getSigners();
    const balance = await deployer.provider.getBalance(deployer.address);
    
    console.log("📍 Deployer address:", deployer.address);
    console.log("💰 Balance:", ethers.formatEther(balance), "ETH");
    
    if (balance === 0n) {
      console.log("⚠️  Advertencia: El balance es 0, necesitas ETH de testnet");
      console.log("🚰 Consigue ETH gratis en: https://docs.base.org/tools/network-faucets");
    }
  } catch (error) {
    console.log("❌ Error conectando a la red:", error.message);
    return;
  }

  // Argumentos del constructor
  const greeting = "Hello Base Builders";
  
  console.log("\n🚀 Desplegando contrato Greeter...");
  console.log("Constructor arg:", greeting);
  
  try {
    // Obtener el contrato factory
    const Greeter = await ethers.getContractFactory("Greeter");
    
    // Desplegar el contrato con los argumentos del constructor
    console.log("📦 Desplegando...");
    const greeter = await Greeter.deploy(greeting);
    
    // Esperar a que se confirme el deploy
    console.log("⏳ Esperando confirmación...");
    await greeter.waitForDeployment();
    
    const contractAddress = await greeter.getAddress();
    
    console.log("\n✅ Contrato Greeter desplegado exitosamente!");
    console.log("📍 Dirección del contrato:", contractAddress);
    console.log("🌐 Network:", hre.network.name);
    
    // Verificar que funciona llamando al getter
    const currentGreeting = await greeter.greeting();
    console.log("📝 Greeting actual:", currentGreeting);
    
    // Obtener info de la transacción
    const deployTx = greeter.deploymentTransaction();
    console.log("🔗 Transaction hash:", deployTx.hash);
    
    console.log("\n🔍 Para verificar el contrato ejecuta:");
    console.log(`npx hardhat verify --network baseSepolia ${contractAddress} "${greeting}"`);
    
    return {
      address: contractAddress,
      contract: greeter,
      txHash: deployTx.hash
    };
    
  } catch (error) {
    console.log("❌ Error durante deploy:", error.message);
    
    if (error.message.includes("insufficient funds")) {
      console.log("💡 Solución: Necesitas ETH de testnet en tu wallet");
      console.log("🚰 Faucet: https://docs.base.org/tools/network-faucets");
    }
    
    if (error.message.includes("nonce too high")) {
      console.log("💡 Solución: Resetea la cuenta en MetaMask (Settings > Advanced > Reset Account)");
    }
    
    throw error;
  }
}

// Ejecutar el deploy
main()
  .then((result) => {
    if (result) {
      console.log("\n🎉 Deploy completado exitosamente!");
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Deploy falló:", error.message);
    process.exit(1);
  });
