# 🚀 10 Days of Base - Learning Journey

Repository for the **"10 Days of Base"** challenge - learning to build on Base blockchain through daily practical projects.

---

## 📅 Challenge Progress

| Day | Module | Status | Link |
|-----|--------|--------|------|
| **1** | Welcome to Base + First Smart Contract | ✅ Completed | [View Day 1](./day1/) |
| **2** | Frontend with OnchainKit | 🔄 In Progress | [View Day 2](./day2/) |
| 3 | TBD | ⏳ Pending | - |
| 4 | TBD | ⏳ Pending | - |
| 5 | TBD | ⏳ Pending | - |
| 6 | TBD | ⏳ Pending | - |
| 7 | TBD | ⏳ Pending | - |
| 8 | TBD | ⏳ Pending | - |
| 9 | TBD | ⏳ Pending | - |
| 10 | TBD | ⏳ Pending | - |

---

## 🎯 General Objectives

- Master Base blockchain development
- Deploy and verify smart contracts on testnet/mainnet
- Build frontends with OnchainKit and Base tools
- Integrate wallets, onchain identity, and transactions
- Apply Web3 development best practices

---

## 🛠️ Tech Stack

- **Blockchain**: Base (OP Stack)
- **Smart Contracts**: Solidity
- **Frameworks**: Hardhat, OnchainKit
- **Frontend**: React, Next.js, HTML/JS
- **Libraries**: Ethers.js, Wagmi, Viem
- **Tools**: MetaMask, BaseScan

---

## 🚀 Initial Setup

### 1. Clone the repository
```bash
git clone https://github.com/kaream-badillo/10daysbase.git
cd 10daysbase
```

### 2. Install global dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
# Create .env file in the root
cp .env.example .env
```

Add your credentials:
```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key_without_0x

# You can use both variable names (same value)
ETHERSCAN_API_KEY=your_basescan_api_key
BASESCAN_API_KEY=your_basescan_api_key
```

📖 **For day-specific variables, see [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md)**

### 4. Navigate to specific day
```bash
cd day1  # or day2, day3, etc.
```

---

## 📁 Project Structure

```
10daysbase/
├── day1/              # Day 1: First Smart Contract
├── day2/              # Day 2: Frontend with OnchainKit
├── day3/              # Day 3: TBD
├── ...
├── package.json       # Shared dependencies
├── .env               # Environment variables (do not commit)
└── README.md          # This file
```

Each `dayX/` folder contains its own README with module-specific instructions.

---

## 🌐 Base Resources

- **Official Documentation**: [docs.base.org](https://docs.base.org/)
- **Faucets (testnet ETH)**: [Base Faucets](https://docs.base.org/tools/network-faucets)
- **BaseScan Explorer**: [sepolia.basescan.org](https://sepolia.basescan.org/)
- **Discord Community**: [discord.gg/buildonbase](https://discord.gg/buildonbase)
- **OnchainKit**: [onchainkit.xyz](https://onchainkit.xyz/)

---

## 📊 Base Networks

### Base Sepolia (Testnet)
- **Chain ID**: 84532
- **RPC URL**: `https://sepolia.base.org`
- **Explorer**: https://sepolia.basescan.org/
- **Faucet**: Use official Base faucets

### Base Mainnet
- **Chain ID**: 8453
- **RPC URL**: `https://mainnet.base.org`
- **Explorer**: https://basescan.org/

---

## 👨‍💻 Author

**Kaream Badillo** - [kaream.badillo@usach.cl](mailto:kaream.badillo@usach.cl)

---

## 📄 License

MIT License - see LICENSE file for details.

---

*Building on Base, one day at a time* 🔵⛓️
