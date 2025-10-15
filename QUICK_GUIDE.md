# 📖 Quick Guide - 10 Days of Base

## 🗂️ Project Structure

```
10DaysofBase/
├── day1/              # ✅ Day 1: First Smart Contract + Hardhat
├── day2/              # 🔄 Day 2: Frontend with OnchainKit
├── day3-10/           # ⏳ Upcoming modules
├── package.json       # Shared dependencies
├── .env               # Environment variables (create from .env.example)
└── README.md          # Main index
```

---

## ⚡ Basic Commands

### Day 1 (Hardhat + Smart Contracts)
```bash
# Navigate to day 1
cd day1

# Compile contracts
npx hardhat compile

# Deploy to Base Sepolia
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia

# Interact via Hardhat console
npx hardhat console --network baseSepolia

# Or verify and interact via BaseScan
# Visit: https://sepolia.basescan.org/address/YOUR_CONTRACT_ADDRESS
```

### Day 2 (Frontend OnchainKit)
```bash
# Navigate to day 2
cd day2

# TODO: Day 2 specific commands
```

---

## 🔧 Initial Configuration (One-time setup)

### 1. Install dependencies
```bash
# From project root
npm install
```

### 2. Configure environment variables
```bash
# Create .env file in the root
cp .env.example .env
```

Edit `.env` with your credentials:
```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key_without_0x
ETHERSCAN_API_KEY=your_basescan_api_key
```

### 3. Get resources
- **Base Sepolia ETH**: [Official faucets](https://docs.base.org/tools/network-faucets)
- **BaseScan API Key**: [Create account](https://basescan.org/apis)

---

## 📍 `.env` File Location

**IMPORTANT**: The `.env` file goes in the **project root** (`10DaysofBase/.env`), NOT inside each day folder.

```
10DaysofBase/
├── .env           ← Shared variables HERE
├── day1/
├── day2/
│   └── .env.local ← Day-specific variables (optional)
└── ...
```

Each `hardhat.config.js` is configured to read variables from `../.env`.

📖 **See [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md) for detailed environment variables setup**

---

## 🚀 Typical Workflow

1. **Navigate to the corresponding day**: `cd day1` or `cd day2`
2. **Read the day's README**: `cat README.md`
3. **Follow the module-specific instructions**
4. **Run commands from within the day's folder**

---

## ✅ Checklist by Day

### Day 1
- [x] Understand what is Base (OP Stack)
- [x] Set up Hardhat environment
- [x] Compile Greeter contract
- [x] Deploy to Base Sepolia
- [x] Explore and verify on BaseScan
- [x] Interact via Hardhat console or BaseScan

### Day 2
- [ ] Scaffold with create-onchain
- [ ] Connect wallet
- [ ] Display ETH balance
- [ ] Deploy to Base

---

## 🆘 Common Issues

### Error: "Cannot find module 'dotenv'"
```bash
# Install from root
npm install
```

### Error: "Invalid private key"
- Verify that your `PRIVATE_KEY` in `.env` does NOT have the `0x` prefix
- Verify that the `.env` file is in the project root

### Error: "Insufficient funds"
- Get Base Sepolia ETH from the [faucets](https://docs.base.org/tools/network-faucets)

---

## 🔗 Quick Links

- [Base Docs](https://docs.base.org/)
- [BaseScan Sepolia](https://sepolia.basescan.org/)
- [OnchainKit](https://onchainkit.xyz/)
- [Base Discord](https://discord.gg/buildonbase)

---

**📅 Last updated**: Day 1 completed | Day 2 in progress

