# 🚀 Base Greeter Smart Contract

A simple Greeter smart contract deployed on Base Sepolia testnet, built with Hardhat as part of the "10 Days of Base" learning journey.

## 🏗️ Project Overview

This project demonstrates the complete workflow of smart contract development on Base blockchain, from setup to deployment and frontend integration.

### 🎯 What's Included

- ✅ **Smart Contract**: Simple Greeter contract with customizable messages
- ✅ **Deployment Scripts**: Automated deployment with configuration validation  
- ✅ **Frontend DApp**: Web interface to interact with the deployed contract
- ✅ **Base Sepolia Integration**: Live deployment on Base testnet
- ✅ **Comprehensive Documentation**: Step-by-step guides and examples

## 📍 Live Deployment

- **Contract Address**: `0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8`
- **Network**: Base Sepolia (Chain ID: 84532)
- **Explorer**: [View on BaseScan](https://sepolia.basescan.org/address/0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8)

## 🛠️ Technology Stack

- **Blockchain**: Base (OP Stack)
- **Smart Contracts**: Solidity 0.8.0
- **Development Framework**: Hardhat
- **Frontend**: HTML/JavaScript with Ethers.js
- **Testing Network**: Base Sepolia

## 📁 Project Structure

```
10DaysofBase/
├── contracts/          # Smart contracts
│   └── Greeting.sol    # Main Greeter contract
├── scripts/           # Deployment & interaction scripts
│   ├── deploy-with-checks.js
│   ├── verify-deployment.js
│   └── check-contract.js
├── frontend/          # Web DApp interface
│   └── index.html     # Frontend application
├── hardhat.config.js  # Hardhat configuration
├── package.json       # Node.js dependencies
├── .env.example       # Environment variables template
└── DEPLOY_INSTRUCTIONS.md # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or later)
- MetaMask wallet
- Base Sepolia ETH ([Get from faucet](https://docs.base.org/tools/network-faucets))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaream-badillo/10daysbase.git
   cd 10daysbase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Compile contracts**
   ```bash
   npx hardhat compile
   ```

## 🔧 Environment Setup

Create a `.env` file with the following variables:

```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key_without_0x
ETHERSCAN_API_KEY=your_basescan_api_key
```

### Getting Required Keys

- **Private Key**: Export from MetaMask (Settings > Security & Privacy)
- **BaseScan API Key**: Create account at [BaseScan](https://basescan.org/apis)
- **Base Sepolia ETH**: Use [Base faucets](https://docs.base.org/tools/network-faucets)

## 🚀 Deployment

### Deploy to Base Sepolia

```bash
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia
```

### Verify Contract (Optional)

```bash
npx hardhat verify --network baseSepolia [CONTRACT_ADDRESS] "Hello Base Builders"
```

## 🌐 Frontend Usage

1. **Open the DApp**
   ```bash
   # Open frontend/index.html in your browser
   ```

2. **Connect MetaMask**
   - The app will automatically configure Base Sepolia network
   - Ensure you have test ETH in your wallet

3. **Interact with Contract**
   - Read current greeting message
   - Set new greeting messages
   - View transactions on BaseScan

## 📖 Contract Interface

### Functions

- `greeting()`: Returns the current greeting message (view function)
- `setGreeting(string memory _newGreeting)`: Updates the greeting message

### Events

The contract emits standard transaction events that can be monitored on BaseScan.

## 🧪 Testing & Interaction

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
await greeter.setGreeting("Hello from Hardhat!");
```

## 📚 Learning Resources

This project is part of the **"10 Days of Base"** learning curriculum:

- ✅ **Module 1**: Welcome to Base + First Smart Contract
- 🔄 **Next**: More advanced Base development topics

### Key Concepts Covered

- Base blockchain fundamentals (OP Stack)
- Hardhat development environment
- Smart contract deployment on testnet
- Frontend integration with MetaMask
- BaseScan explorer usage
- Environment configuration & security

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, fork the repository, and create pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [Base Documentation](https://docs.base.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Base Sepolia Faucets](https://docs.base.org/tools/network-faucets)
- [BaseScan Explorer](https://sepolia.basescan.org/)
- [Base Discord Community](https://discord.gg/buildonbase)

## 👨‍💻 Author

**Kaream Badillo** - [kaream.badillo@usach.cl](mailto:kaream.badillo@usach.cl)

---

*Built with ❤️ on Base blockchain*