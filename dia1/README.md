# 📅 Día 1: Welcome to Base + First Smart Contract

**Módulo**: Fundamentos de Base + Deploy de primer contrato
**Temas cubiertos**: Configuración de Hardhat, Smart Contracts en Base, Deploy en testnet

---

## 🎯 Objetivos del Día 1

- ✅ Configurar entorno de desarrollo con Hardhat
- ✅ Crear y compilar un contrato Greeter simple
- ✅ Desplegar en Base Sepolia testnet
- ✅ Interactuar con el contrato via frontend
- ✅ Verificar en BaseScan

---

## 📍 Contrato Desplegado

- **Dirección**: `0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8`
- **Network**: Base Sepolia (Chain ID: 84532)
- **Explorer**: [Ver en BaseScan](https://sepolia.basescan.org/address/0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8)

---

## 📁 Estructura del Proyecto

```
dia1/
├── contracts/
│   └── Greeting.sol         # Contrato Greeter
├── scripts/
│   ├── deploy-with-checks.js
│   ├── verify-deployment.js
│   └── check-contract.js
├── frontend/
│   └── index.html           # DApp interface
├── artifacts/               # Compilados de Hardhat
├── cache/                   # Cache de Hardhat
├── hardhat.config.js        # Config de Hardhat
├── deploy.js                # Script de deploy simple
└── DEPLOY_INSTRUCTIONS*.md  # Guías de despliegue
```

---

## 🚀 Quick Start

### 1. Instalar dependencias (desde la raíz del proyecto)
```bash
# Desde 10DaysofBase/
npm install
```

### 2. Compilar el contrato
```bash
# Navegar a dia1
cd dia1

# Compilar
npx hardhat compile
```

### 3. Deploy en Base Sepolia
```bash
# Desde dia1/
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia
```

### 4. Abrir el frontend
```bash
# Abrir frontend/index.html en tu navegador
```

---

## 🔧 Configuración Requerida

Crear archivo `.env` en la **raíz del proyecto** con:

```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=tu_private_key_sin_0x
ETHERSCAN_API_KEY=tu_basescan_api_key
```

### Obtener recursos:
- **Base Sepolia ETH**: [Faucets](https://docs.base.org/tools/network-faucets)
- **BaseScan API Key**: [BaseScan APIs](https://basescan.org/apis)

---

## 📖 Funciones del Contrato

### `greeting()` → view
Retorna el mensaje actual del contrato.

### `setGreeting(string _newGreeting)` → transaction
Actualiza el mensaje del contrato.

---

## 🧪 Interactuar con el Contrato

### Opción A: Hardhat Console
```bash
npx hardhat console --network baseSepolia
```
```javascript
const Greeter = await ethers.getContractFactory("Greeter");
const greeter = Greeter.attach("0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8");

await greeter.greeting();
await greeter.setGreeting("Hello from Day 1!");
```

### Opción B: Frontend DApp
1. Abrir `frontend/index.html`
2. Conectar MetaMask a Base Sepolia
3. Interactuar con los botones

---

## 📚 Conceptos Aprendidos

- **Base blockchain**: OP Stack, compatibilidad con Ethereum
- **Hardhat**: Compilación, deploy, testing
- **Smart Contracts**: Solidity 0.8.0, funciones view vs transactions
- **Frontend Web3**: Ethers.js, conexión con MetaMask
- **Testnet**: Uso de faucets, exploradores, verificación

---

## 🔗 Enlaces Útiles

- [Base Documentation](https://docs.base.org/)
- [Hardhat Docs](https://hardhat.org/docs)
- [BaseScan Sepolia](https://sepolia.basescan.org/)

---

**✅ Día 1 Completado** | Próximo: Día 2 - Frontend with OnchainKit

