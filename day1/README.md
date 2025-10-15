# 📅 Day 1: Welcome to Base + First Smart Contract

**Module**: Base Fundamentals + First Contract Deploy
**Topics Covered**: What is Base (OP Stack), Hardhat setup, Smart Contracts, Deploy, BaseScan

---

## 🎯 Day 1 Objectives

- ✅ Understand what Base is (OP Stack, Coinbase, testnets, RPCs)
- ✅ Set up development environment with Hardhat
- ✅ Create and compile a simple Greeter contract
- ✅ Deploy to Base Sepolia testnet
- ✅ Explore and verify on BaseScan
- ✅ Connect wallet (MetaMask) for testnet interaction

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

### 4. Verify on BaseScan
After deployment, visit your contract on BaseScan:
```
https://sepolia.basescan.org/address/YOUR_CONTRACT_ADDRESS
```

---

## 🔧 Required Configuration

### 1. Install MetaMask
Install MetaMask browser extension to interact with Base testnet:
- [MetaMask Chrome Extension](https://metamask.io/)
- Add Base Sepolia network to MetaMask

### 2. Create `.env` file
Create `.env` file in the **project root** with:

```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key_without_0x

# You can use both (same value)
ETHERSCAN_API_KEY=your_basescan_api_key
BASESCAN_API_KEY=your_basescan_api_key
```

### 3. Get resources:
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

### Using Hardhat Console
```bash
npx hardhat console --network baseSepolia
```
```javascript
const Greeter = await ethers.getContractFactory("Greeter");
const greeter = Greeter.attach("0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8");

// Read current greeting
await greeter.greeting();

// Set new greeting
await greeter.setGreeting("Hello from Day 1!");
```

### Using BaseScan
1. Go to your contract on BaseScan
2. Navigate to "Read Contract" tab to view `greeting()`
3. Navigate to "Write Contract" tab to call `setGreeting()`
4. Connect your MetaMask wallet to interact

---

## 📚 Concepts Learned

- **What is Base**: OP Stack, Coinbase L2, Ethereum compatibility
- **Base Networks**: Testnet (Sepolia) and Mainnet configurations
- **Hardhat**: Compilation, deployment, console interaction
- **Smart Contracts**: Solidity 0.8.0, view vs transaction functions
- **BaseScan**: Block explorer, contract verification, interaction
- **MetaMask**: Wallet setup, network configuration, testnet faucets
- **RPC Endpoints**: Connecting to Base Sepolia

---

## 🔗 Useful Links

- [Base Documentation](https://docs.base.org/)
- [Hardhat Docs](https://hardhat.org/docs)
- [BaseScan Sepolia](https://sepolia.basescan.org/)

---

**✅ Day 1 Completed** | Next: Day 2 - Frontend with OnchainKit
