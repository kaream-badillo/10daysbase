# 📅 Day 1: Welcome to Base + First Smart Contract

**Module**: Base Fundamentals + First Contract Deploy
**Topics Covered**: Hardhat setup, Smart Contracts on Base, Testnet deployment

---

## 🎯 Day 1 Objectives

- ✅ Set up development environment with Hardhat
- ✅ Create and compile a simple Greeter contract
- ✅ Deploy to Base Sepolia testnet
- ✅ Interact with the contract via frontend
- ✅ Verify on BaseScan

---

## 📍 Deployed Contract

- **Address**: `0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8`
- **Network**: Base Sepolia (Chain ID: 84532)
- **Explorer**: [View on BaseScan](https://sepolia.basescan.org/address/0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8)

---

## 📁 Project Structure

```
day1/
├── contracts/
│   └── Greeting.sol         # Greeter contract
├── scripts/
│   ├── deploy-with-checks.js
│   ├── verify-deployment.js
│   └── check-contract.js
├── frontend/
│   └── index.html           # DApp interface
├── artifacts/               # Hardhat compiled files
├── cache/                   # Hardhat cache
├── hardhat.config.js        # Hardhat config
├── deploy.js                # Simple deploy script
└── DEPLOY_INSTRUCTIONS*.md  # Deployment guides
```

---

## 🚀 Quick Start

### 1. Install dependencies (from root)
```bash
npm install
```

### 2. Compile the contract
```bash
# Navigate to day1
cd day1

# Compile
npx hardhat compile
```

### 3. Deploy to Base Sepolia
```bash
# From day1/
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia
```

### 4. Open the frontend
```bash
# Open frontend/index.html in your browser
```

---

## 🔧 Required Configuration

Create `.env` file in the **project root** with:

```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key_without_0x
ETHERSCAN_API_KEY=your_basescan_api_key
```

### Get resources:
- **Base Sepolia ETH**: [Faucets](https://docs.base.org/tools/network-faucets)
- **BaseScan API Key**: [BaseScan APIs](https://basescan.org/apis)

---

## 📖 Contract Functions

### `greeting()` → view
Returns the current contract message.

### `setGreeting(string _newGreeting)` → transaction
Updates the contract message.

---

## 🧪 Interact with the Contract

### Option A: Hardhat Console
```bash
npx hardhat console --network baseSepolia
```
```javascript
const Greeter = await ethers.getContractFactory("Greeter");
const greeter = Greeter.attach("0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8");

await greeter.greeting();
await greeter.setGreeting("Hello from Day 1!");
```

### Option B: Frontend DApp
1. Open `frontend/index.html`
2. Connect MetaMask to Base Sepolia
3. Interact using the buttons

---

## 📚 Concepts Learned

- **Base blockchain**: OP Stack, Ethereum compatibility
- **Hardhat**: Compilation, deployment, testing
- **Smart Contracts**: Solidity 0.8.0, view vs transaction functions
- **Frontend Web3**: Ethers.js, MetaMask connection
- **Testnet**: Using faucets, explorers, verification

---

## 🔗 Useful Links

- [Base Documentation](https://docs.base.org/)
- [Hardhat Docs](https://hardhat.org/docs)
- [BaseScan Sepolia](https://sepolia.basescan.org/)

---

**✅ Day 1 Completed** | Next: Day 2 - Frontend with OnchainKit
