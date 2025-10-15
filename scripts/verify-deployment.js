// Script para verificar el contrato recién desplegado
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8";
  
  console.log("🔍 Verificando contrato desplegado en Base Sepolia...");
  console.log("📍 Dirección:", contractAddress);
  
  try {
    // Conectar al contrato desplegado
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(contractAddress);
    
    console.log("📡 Conectando al contrato en Base Sepolia...");
    
    // Verificar que existe código en esa dirección
    const provider = greeter.runner.provider;
    const code = await provider.getCode(contractAddress);
    
    if (code === "0x") {
      console.log("❌ No hay contrato en esta dirección");
      return;
    }
    
    console.log("✅ Contrato encontrado en Base Sepolia");
    console.log("📦 Bytecode length:", code.length, "characters");
    
    // Intentar leer el greeting
    try {
      const greeting = await greeter.greeting();
      console.log("📝 Greeting actual:", greeting);
      console.log("✅ El contrato funciona perfectamente en Base Sepolia!");
    } catch (error) {
      console.log("⚠️  Error leyendo greeting:", error.message);
    }
    
    console.log("\n🌐 Ver en Basescan:");
    console.log(`https://sepolia.basescan.org/address/${contractAddress}`);
    
    return true;
    
  } catch (error) {
    console.log("❌ Error verificando contrato:", error.message);
    return false;
  }
}

main()
  .then((success) => {
    if (success) {
      console.log("\n🎉 ¡Contrato desplegado exitosamente en Base Sepolia!");
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
