// Script para verificar que el contrato desplegado funciona
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x283185fb4F619841461BD8B8F1E716532a6aa221";
  
  console.log("🔍 Verificando contrato desplegado...");
  console.log("📍 Dirección:", contractAddress);
  
  try {
    // Conectar al contrato desplegado
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(contractAddress);
    
    console.log("📡 Conectando al contrato...");
    
    // Verificar que existe código en esa dirección
    const provider = greeter.runner.provider;
    const code = await provider.getCode(contractAddress);
    
    if (code === "0x") {
      console.log("❌ No hay contrato en esta dirección");
      return;
    }
    
    console.log("✅ Contrato encontrado en la blockchain");
    console.log("📦 Bytecode length:", code.length, "characters");
    
    // Intentar leer el greeting
    try {
      const greeting = await greeter.greeting();
      console.log("📝 Greeting actual:", greeting);
      console.log("✅ El contrato funciona perfectamente!");
    } catch (error) {
      console.log("⚠️  Error leyendo greeting:", error.message);
    }
    
    // Obtener información adicional del contrato
    const balance = await provider.getBalance(contractAddress);
    console.log("💰 Balance del contrato:", ethers.formatEther(balance), "ETH");
    
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
      console.log("\n🎉 ¡Tu contrato está desplegado y funcionando!");
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
