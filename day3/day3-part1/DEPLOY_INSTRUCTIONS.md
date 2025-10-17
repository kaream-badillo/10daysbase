# 🚀 Rewards Contract Deployment Guide

## 📋 Prerequisites

1. **Environment Variables**: Ensure your `.env` file in the root directory contains:
   ```bash
   BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
   PRIVATE_KEY=your_private_key_here
   BASESCAN_API_KEY=your_basescan_api_key
   ```

2. **Base Sepolia ETH**: Get testnet ETH from [Base faucet](https://bridge.base.org/deposit)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Compile contracts
npm run compile
```

## 🚀 Deployment Commands

### Deploy to Base Sepolia
```bash
npm run deploy
```

### Deploy to Local Network
```bash
npm run deploy-local
```

## 📊 Contract Details

### 🎯 Contract Features
- **Initial Reward**: 0.01 ETH deployed with contract
- **One-time Claim**: Each contract can only be claimed once
- **Gasless Ready**: Designed for Paymaster integration
- **Simple Logic**: Easy to understand and test

### ✅ **DEPLOYMENT SUCCESSFUL!**

**Contract Address**: `0x2E8BcF5e5f9e2B882CC64241e3549878c1977FCd`
**Network**: Base Sepolia (Chain ID: 84532)
**BaseScan**: https://sepolia.basescan.org/address/0x2E8BcF5e5f9e2B882CC64241e3549878c1977FCd
**Deployed At**: 2025-10-17T11:23:00.631Z
**Initial Reward**: 0.01 ETH
**Status**: Ready for gasless transactions

### 🔍 Contract Status
- ✅ **Deployed**: Successfully on Base Sepolia
- ✅ **Funded**: 0.01 ETH initial reward
- ✅ **Available**: Reward can be claimed
- ✅ **Gasless Ready**: Prepared for Paymaster integration

## 🧪 Testing

### Test Contract Status
```bash
# Update CONTRACT_ADDRESS in test-contract.js first
node scripts/test-contract.js
```

### Manual Testing on BaseScan
1. Go to the contract address on BaseScan
2. Check the `rewardClaimed` function (should return `false`)
3. Call `claimReward()` function
4. Verify balance transfer and `rewardClaimed` becomes `true`

## 🔗 Integration with Paymasters

This contract is designed to work with Paymasters for gasless transactions:

1. **User calls** `claimReward()` without gas
2. **Paymaster sponsors** the transaction
3. **Contract executes** and transfers reward
4. **User receives** reward without paying gas

## 📝 Next Steps

After deployment:
1. **Copy contract address** for Part II
2. **Fund with more ETH** if needed
3. **Integrate with Paymaster** in Part II
4. **Test gasless flow** with Smart Wallets

## ⚠️ Important Notes

- **Testnet Only**: This is for Base Sepolia testnet
- **One Claim**: Each deployment can only be claimed once
- **Fund Management**: Ensure sufficient balance for rewards
- **Security**: Never use mainnet private keys

---

**Ready for Paymaster integration in Part II!** 🎯
