// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function main() {
  // Argumentos del constructor equivalentes a "Hello Base Builders"
  const greeting = "Hello Base Builders";
  
  console.log("🚀 Desplegando contrato Greeter...");
  console.log("Constructor arg:", greeting);
  
  // Obtener el contrato factory
  const Greeter = await ethers.getContractFactory("Greeter");
  
  // Desplegar el contrato con los argumentos del constructor
  const greeter = await Greeter.deploy(greeting);
  
  // Esperar a que se confirme el deploy
  await greeter.waitForDeployment();
  
  const contractAddress = await greeter.getAddress();
  
  console.log("✅ Contrato Greeter desplegado!");
  console.log("📍 Dirección del contrato:", contractAddress);
  console.log("🌐 Network:", hre.network.name);
  
  // Verificar que funciona llamando al getter
  const currentGreeting = await greeter.greeting();
  console.log("📝 Greeting actual:", currentGreeting);
  
  // Obtener info de la transacción
  const deployTx = greeter.deploymentTransaction();
  console.log("🔗 Transaction hash:", deployTx.hash);
  
  return {
    address: contractAddress,
    contract: greeter,
    txHash: deployTx.hash
  };
}

// Ejecutar el deploy
main()
  .then((result) => {
    console.log("\n🎉 Deploy completado exitosamente!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error en deploy:", error);
    process.exit(1);
  });
