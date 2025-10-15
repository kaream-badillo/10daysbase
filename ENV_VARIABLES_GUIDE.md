# 🔐 Environment Variables Guide - 10 Days of Base

## 📋 Professional Strategy for Environment Variables

This guide explains the **professional approach** to managing environment variables across multiple days/modules.

---

## 🎯 Recommended Approach

### **Option 1: Single `.env` in Root (Simplest)**
✅ Best for: Small projects, few variables, shared configurations

```
10DaysofBase/
├── .env          # All variables here
├── day1/
├── day2/
└── ...
```

**Pros**: Simple, centralized
**Cons**: Can get messy with many day-specific variables

---

### **Option 2: Root `.env` + Day-Specific `.env.local` (Recommended)**
✅ Best for: Medium projects, some day-specific variables

```
10DaysofBase/
├── .env              # Shared variables
├── day1/
│   └── .env.local    # Day 1 specific (optional)
├── day2/
│   └── .env.local    # Day 2 specific (OnchainKit keys)
└── ...
```

**Pros**: Clean separation, no duplication
**Cons**: Need to configure loaders properly

---

### **Option 3: Multiple Named `.env` Files (Advanced)**
✅ Best for: Large projects, many environments

```
10DaysofBase/
├── .env.shared
├── .env.day1
├── .env.day2
└── ...
```

**Pros**: Maximum flexibility
**Cons**: More complex configuration

---

## 🛠️ Implementation for This Project

### Root `.env` - Shared Variables

Create **`.env`** in the **project root**:

```bash
# ====================================
# SHARED VARIABLES - All Days
# ====================================

# Base Sepolia Testnet
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Your wallet private key (NO 0x prefix)
PRIVATE_KEY=your_private_key_without_0x

# BaseScan/Etherscan API Key
# NOTE: You can use BOTH variable names with the same value
ETHERSCAN_API_KEY=your_api_key_here
BASESCAN_API_KEY=your_api_key_here

# The config files check both, so either works!
```

---

### Day 1 Variables

Day 1 **only needs shared variables** from root `.env`:
- ✅ `BASE_SEPOLIA_RPC_URL`
- ✅ `PRIVATE_KEY`
- ✅ `BASESCAN_API_KEY` or `ETHERSCAN_API_KEY`

**No need for day1/.env.local** ✅

---

### Day 2 Variables (OnchainKit)

Create **`day2/.env.local`** for OnchainKit-specific variables:

```bash
# ====================================
# DAY 2 SPECIFIC - OnchainKit
# ====================================

# Coinbase Developer Platform API Key
# Get from: https://portal.cdp.coinbase.com/
NEXT_PUBLIC_CDP_API_KEY=your_cdp_key

# OnchainKit API Key (optional)
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_key

# WalletConnect Project ID
# Get from: https://cloud.walletconnect.com/
NEXT_PUBLIC_WC_PROJECT_ID=your_walletconnect_id

# Chain ID
NEXT_PUBLIC_CHAIN_ID=84532
```

Then configure **`day2/next.config.js`** or similar to load:
1. First: `../.env` (shared)
2. Then: `./.env.local` (day-specific, overwrites if conflicts)

---

## 🔄 How Hardhat Config Already Handles This

Your `day1/hardhat.config.js` already does this correctly:

```javascript
require("dotenv").config({ path: "../.env" }); // Loads root .env

// Then checks multiple variable names:
etherscan: {
  apiKey: process.env.BASESCAN_API_KEY || process.env.ETHERSCAN_API_KEY || ""
}
```

This means:
- ✅ Tries `BASESCAN_API_KEY` first
- ✅ Falls back to `ETHERSCAN_API_KEY`
- ✅ Uses empty string if neither exists

**You can have BOTH variables in .env with the same value!**

---

## 🎯 For Day 2 (OnchainKit with Next.js)

When you create the Day 2 Next.js app, you have 2 options:

### **Option A: All in Root .env (Simpler)**

Add Day 2 variables to root `.env`:

```bash
# In root .env
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_key
BASESCAN_API_KEY=your_key

# Day 2 specific
NEXT_PUBLIC_CDP_API_KEY=your_cdp_key
NEXT_PUBLIC_WC_PROJECT_ID=your_wc_id
```

Then in `day2/`, configure dotenv:

```javascript
// day2/next.config.js or similar
require('dotenv').config({ path: '../.env' });
```

### **Option B: Separate Files (Cleaner)**

Keep root `.env` for shared, create `day2/.env.local` for day-specific.

Configure multiple file loading:

```javascript
// day2/config or initialization file
require('dotenv').config({ path: '../.env' });        // Shared first
require('dotenv').config({ path: './.env.local' });  // Local second (overwrites)
```

---

## 📊 Comparison Table

| Approach | Shared Vars | Day-Specific | Complexity | Best For |
|----------|-------------|--------------|------------|----------|
| **Single root .env** | ✅ Root | ✅ Root | ⭐ Easy | Small projects |
| **Root + .env.local** | ✅ Root | ✅ Per day | ⭐⭐ Medium | **Recommended** |
| **Multiple named** | ✅ Named | ✅ Named | ⭐⭐⭐ Complex | Large projects |

---

## ✅ Recommended for Your Project

### Current Setup (Day 1):
```bash
# Root .env (ALREADY WORKS)
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_key_without_0x
BASESCAN_API_KEY=your_api_key
ETHERSCAN_API_KEY=your_api_key  # Same value, both work!
```

### For Day 2 (When you start):

**Choose ONE approach:**

1. **Simple**: Add all Day 2 vars to root `.env`
2. **Clean**: Create `day2/.env.local` for Day 2 specific vars

I recommend **Option 2** (Root + Local) for professional separation.

---

## 🔒 Security Reminder

- ✅ `.env` files are in `.gitignore`
- ✅ `.env.local` files are in `.gitignore`
- ✅ Never commit real API keys
- ✅ Create `.env.example` as template (no real values)

---

## 🚀 Quick Answer to Your Questions

**Q1: Can I have both BASESCAN_API_KEY and ETHERSCAN_API_KEY?**
✅ **YES!** Put both in `.env` with the same value:
```bash
ETHERSCAN_API_KEY=ABC123
BASESCAN_API_KEY=ABC123
```

**Q2: Should each day have its own .env?**
✅ **Best practice**: 
- Shared variables → Root `.env`
- Day-specific → `dayX/.env.local` (optional)

**Q3: What's most professional?**
✅ **Root `.env` + Day `.env.local`** - Clean separation, no duplication

---

**Your current setup is already good!** Just add both API key variables to avoid manual changes. 🎯

