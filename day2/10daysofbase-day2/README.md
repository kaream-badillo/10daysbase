# 🚀 Day 2 - Frontend with OnchainKit

**10 Days of Base** - Building a responsive frontend that connects to the Base blockchain using OnchainKit and integrates with the Greeter contract from Day 1.

## 📋 What You'll Build

- ✅ **Wallet Connection**: Connect wallet and display ETH balance
- ✅ **Message Signing**: Sign messages with your wallet
- ✅ **Smart Contract Integration**: Interact with the Greeter contract from Day 1
- ✅ **Transaction History**: Track all your contract interactions
- ✅ **BaseScan Integration**: Direct links to view transactions on BaseScan

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React
- **Web3**: OnchainKit + Wagmi + Viem
- **Blockchain**: Base Sepolia Testnet
- **Styling**: CSS Modules

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MetaMask or Coinbase Wallet
- Base Sepolia ETH (get from [Base faucet](https://bridge.base.org/deposit))

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create `.env.local` file:
```bash
NEXT_PUBLIC_GREETER_CONTRACT_ADDRESS=0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Features

### 🔗 Wallet Connection
- Connect MetaMask or Coinbase Wallet
- Display wallet address, balance, and network
- Network validation (Base Sepolia required)

### ✍️ Message Signing
- Sign "Hello from 10 Days of Base!" message
- View signature in the interface

### 📝 Greeter Contract Integration
- Read current greeting from Day 1 contract
- Update greeting with new messages
- Real-time transaction tracking
- Transaction history with timestamps

### 🔍 BaseScan Integration
- Direct links to contract on BaseScan
- Transaction hash links for each interaction
- Full transaction history tracking

## 📁 Project Structure

```
day2/10daysofbase-day2/
├── app/
│   ├── page.tsx              # Main application component
│   ├── page.module.css       # Component styles
│   ├── layout.tsx            # App layout
│   └── rootProvider.tsx      # OnchainKit + Wagmi providers
├── src/
│   ├── contracts/
│   │   └── Greeter.ts        # Contract ABI and address
│   └── hooks/
│       └── useGreter.ts      # Custom hook for contract interaction
└── .env.local                # Environment variables
```

## 🎨 Usage

1. **Connect Wallet**: Click the wallet button to connect
2. **Sign Message**: Use the "Sign Message" button to sign a message
3. **Update Greeting**: 
   - Enter a new greeting message
   - Click "Update Greeting" 
   - Confirm transaction in wallet
   - View transaction on BaseScan
4. **View History**: See all your previous transactions with timestamps

## 🔗 Links

- **Contract on BaseScan**: [View Greeter Contract](https://sepolia.basescan.org/address/0x4BAaE27A22562F3568d1edEf4eb0f3dA02f679b8)
- **OnchainKit Documentation**: [docs.base.org/onchainkit](https://docs.base.org/onchainkit)
- **Base Documentation**: [docs.base.org](https://docs.base.org)

## 🎓 Learning Objectives

- ✅ Scaffold frontend with create-onchain
- ✅ Connect wallet and show ETH balance  
- ✅ Deploy and test on Base
- ✅ Integrate with existing smart contracts
- ✅ Build transaction tracking and history
- ✅ Create responsive Web3 UI

---

**Part of the 10 Days of Base program** 🚀
