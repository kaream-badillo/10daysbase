# 🚀 10 Days of Base - Learning Journey

**Organized by**: [Web3Compass](https://web3compass.com/)  
**Duration**: October 14-23, 2025  
**Repository**: https://github.com/kaream-badillo/10daysbase  
**Developer**: Kaream Badillo

Master the key tools and practices to build complete dApps on **Base blockchain** — from smart contracts to social mini-apps and intelligent agents.

---

## 📅 Program Overview

The 10 Days of Base program is organized into **4 major blocks**:

1. **Foundations of Building on Base** (Days 1-2)
2. **Advanced Wallet UX + Fullstack Apps** (Days 3-5)
3. **Build Social & Viral Mini-Apps** (Days 6-7)
4. **Automate, Communicate, and Scale** (Days 8-10)

---

## 📊 Progress Tracker

| Day | Block | Topic | Status |
|-----|-------|-------|--------|
| **1** | 🧱 Foundations | Welcome to Base + First Smart Contract | ✅ **Completed** |
| **2** | 🧱 Foundations | Frontend with OnchainKit | 🔄 **In Progress** |
| **3** | ⚙️ Advanced UX | Smart Wallets & Gasless UX (Paymasters) | ⏳ Pending |
| **4** | ⚙️ Advanced UX | Sessions, Sub-Accounts & Spend Permissions | ⏳ Pending |
| **5** | ⚙️ Advanced UX | Connect Contracts to Frontend | ⏳ Pending |
| **6** | 🌐 Social Apps | MiniKit & Base App Frames | ⏳ Pending |
| **7** | 🌐 Social Apps | Add Social Virality | ⏳ Pending |
| **8** | 🤖 Automation | Messaging & Agents (XMTP + AgentKit) | ⏳ Pending |
| **9** | 🤖 Automation | Crosschain + Smart Contract Patterns | ⏳ Pending |
| **10** | 🤖 Automation | Final Project – Build & Ship Your Base App | ⏳ Pending |

**Overall Progress**: 10% (1/10 days completed)

---

## 🗓️ Daily Breakdown

### 🧱 BLOCK 1: Foundations of Building on Base

#### Day 1: Welcome to Base + First Smart Contract ✅
**Topics**: What is Base (OP Stack), Hardhat setup, Deploy Greeter, BaseScan

**What You'll Build**: Your first smart contract on Base and explore ecosystem tools.

**Key Learnings**:
- ✅ Understanding Base blockchain (OP Stack, Coinbase L2)
- ✅ Hardhat development environment
- ✅ Smart contract deployment on Base Sepolia
- ✅ BaseScan exploration and verification

📁 **[View Day 1 →](./day1/)**  
🔗 **Deployed Contract**: [`0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8`](https://sepolia.basescan.org/address/0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8)

---

#### Day 2: Frontend with OnchainKit 🔄
**Topics**: `create-onchain` scaffold, Wallet connection, ETH balance, Deploy on Base

**What You'll Build**: A responsive frontend that connects to Base blockchain.

**Objectives**:
- Scaffold frontend with OnchainKit
- Connect wallet (MetaMask/WalletConnect)
- Display ETH balance
- Deploy and test on Base

📁 **[View Day 2 →](./day2/)**

---

### ⚙️ BLOCK 2: Advanced Wallet UX + Fullstack Apps

#### Day 3: Smart Wallets & Gasless UX (Paymasters) ⏳
**What You'll Build**: A gasless experience that sponsors user transactions.

---

#### Day 4: Sessions, Sub-Accounts & Spend Permissions ⏳
**What You'll Build**: Advanced wallet features with sessions and permissions.

---

#### Day 5: Connect Contracts to Frontend ⏳
**What You'll Build**: A complete frontend application that interacts with your contracts.

---

### 🌐 BLOCK 3: Build Social & Viral Mini-Apps

#### Day 6: MiniKit & Base App Frames ⏳
**What You'll Build**: Your first Base mini-app with interactive frames.

---

#### Day 7: Add Social Virality ⏳
**What You'll Build**: Social features that help your app spread in the ecosystem.

---

### 🤖 BLOCK 4: Automate, Communicate, and Scale

#### Day 8: Messaging & Agents (XMTP + AgentKit) ⏳
**What You'll Build**: Messaging integration and automated agents in your app.

---

#### Day 9: Crosschain + Smart Contract Patterns ⏳
**What You'll Build**: Cross-chain functionality and optimized contracts.

---

#### Day 10: Final Project – Build & Ship Your Base App ⏳
**What You'll Build**: Final project integrating all learned skills - your complete Base dApp!

---

## 🛠️ Tech Stack

### Blockchain & Networks
- **Base Sepolia Testnet**: Chain ID 84532
- **Base Mainnet**: Chain ID 8453
- **RPC**: https://sepolia.base.org (testnet)

### Development Tools
- **Smart Contracts**: Solidity 0.8.0
- **Development Framework**: Hardhat
- **Frontend**: Next.js, React, OnchainKit
- **Web3 Libraries**: Ethers.js, Wagmi, Viem
- **Wallet**: MetaMask, WalletConnect
- **Explorer**: BaseScan

### Advanced Features (Days 3-10)
- **Smart Wallets**: ERC-4337, Account Abstraction
- **Paymasters**: Gasless transactions
- **MiniKit**: Base App Frames
- **XMTP**: Decentralized messaging
- **AgentKit**: Intelligent agents
- **Cross-chain**: Chainlink CCIP, LayerZero

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/kaream-badillo/10daysbase.git
cd 10daysbase
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create `.env` file in the project root:

```bash
# Base Sepolia Testnet
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Your wallet private key (NO 0x prefix)
PRIVATE_KEY=your_private_key_without_0x

# API Keys (you can use both with same value)
ETHERSCAN_API_KEY=your_basescan_api_key
BASESCAN_API_KEY=your_basescan_api_key
```

📖 **For detailed environment setup, see [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md)** (Not in git)

### 4. Get Resources
- **Base Sepolia ETH**: [Official Faucets](https://docs.base.org/tools/network-faucets)
- **BaseScan API Key**: [Get API Key](https://basescan.org/apis)
- **MetaMask**: [Install Extension](https://metamask.io/)

### 5. Navigate to Specific Day
```bash
cd day1  # or day2, day3, etc.
```

Each day folder contains its own README with specific instructions.

---

## 📁 Project Structure

```
10daysbase/
├── .cursor/                   # Cursor AI configuration
│   ├── project-context.md     # Complete program context
│   ├── user-rules.md          # Development guidelines
│   ├── commands.md            # Quick command reference
│   └── resources.md           # Curated resources & links
│
├── day1/                      # ✅ Day 1: First Smart Contract
│   ├── contracts/             # Solidity contracts
│   ├── scripts/               # Deploy & verification scripts
│   ├── hardhat.config.js      # Hardhat configuration
│   └── README.md              # Day 1 documentation
│
├── day2/                      # 🔄 Day 2: Frontend OnchainKit
│   └── README.md              # Day 2 documentation
│
├── day3-10/                   # ⏳ Future days (TBD)
│
├── .env                       # Environment variables (NOT in git)
├── .gitignore                 # Git ignore rules
├── package.json               # Shared dependencies
├── README.md                  # This file
└── ENV_VARIABLES_GUIDE.md     # Env setup guide (NOT in git)
```

---

## 🎯 Learning Philosophy

### Progressive Complexity
- **Days 1-2**: Learn basics (smart contracts + frontend)
- **Days 3-5**: Advanced patterns (wallets, UX, integration)
- **Days 6-7**: Social layer (virality, engagement)
- **Days 8-10**: Automation + final integration

### Hands-On Approach
- Each day = working code
- Build incrementally
- Ship real deployments on Base
- Portfolio-ready projects

### By Day 10, You'll Have:
- ✅ Multiple deployed smart contracts on Base
- ✅ Full-stack dApp with advanced UX
- ✅ Gasless transaction experience (Paymasters)
- ✅ Social mini-app with frames
- ✅ Intelligent agent integration
- ✅ Cross-chain functionality
- ✅ Complete Base application portfolio

---

## 📚 Key Resources

### Official Base
- 📖 **Documentation**: https://docs.base.org/
- 🔍 **BaseScan Sepolia**: https://sepolia.basescan.org/
- 💰 **Faucets**: https://docs.base.org/tools/network-faucets
- 💬 **Discord**: https://discord.gg/buildonbase

### Development Tools
- 🌐 **OnchainKit**: https://onchainkit.xyz/
- ⚒️ **Hardhat**: https://hardhat.org/
- 🦊 **MetaMask**: https://metamask.io/
- 🔗 **WalletConnect**: https://walletconnect.com/

### Web3Compass Program
- 🐦 **Twitter**: https://x.com/the_web3compass
- 💬 **Telegram**: https://t.me/+Bmec234RB3M3YTll
- 💼 **LinkedIn**: https://linkedin.com/company/the-web3compass

📖 **[Complete Resources List →](./.cursor/resources.md)**

---

## 💻 Development Commands

### Common Commands
```bash
# Navigate to specific day
cd dayX

# Compile contracts (Day 1)
npx hardhat compile

# Deploy to Base Sepolia
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia

# Run development server (Day 2+)
npm run dev

# Git workflow
git add -A
git commit -m "feat: descriptive message"
git push origin master
```

📖 **[Complete Commands Reference →](./.cursor/commands.md)**

---

## 🔐 Security Best Practices

### Critical - NEVER
- ❌ Hardcode private keys in code
- ❌ Commit `.env` files
- ❌ Expose API keys in frontend code
- ❌ Skip input validation

### Always
- ✅ Use environment variables for secrets
- ✅ Test on testnet before mainnet
- ✅ Verify contracts on BaseScan
- ✅ Follow Solidity security best practices
- ✅ Use OpenZeppelin contracts when possible

---

## 🆘 Common Issues & Solutions

### "Cannot find module 'dotenv'"
```bash
npm install  # From project root
```

### "Invalid private key"
- Ensure `.env` is in project root
- Verify `PRIVATE_KEY` has NO `0x` prefix

### "Insufficient funds"
- Get Base Sepolia ETH from [faucets](https://docs.base.org/tools/network-faucets)

### Contract deployment fails
- Check `.env` configuration
- Verify sufficient testnet ETH
- Ensure correct network in Hardhat config

---

## 🤝 Contributing

This is a learning project, but contributions and suggestions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 👨‍💻 Developer

**Kaream Badillo**  
📧 Email: kaream.badillo@usach.cl  
💻 GitHub: [@kaream-badillo](https://github.com/kaream-badillo)

---

## 📄 License

MIT License - see the LICENSE file for details.

---

## 🎓 Program Information

**Organized by**: Web3Compass  
**Duration**: October 14-23, 2025  
**Format**: 10-day intensive learning program  
**Focus**: Building production-ready dApps on Base blockchain

---

## 🌟 Acknowledgments

- **Coinbase & Base Team** for the amazing L2 platform
- **Web3Compass** for organizing this learning program
- **Base Community** for the support and resources

---

*Building on Base, one day at a time* 🔵⛓️

**Last Updated**: Day 1 completed, Day 2 in progress
