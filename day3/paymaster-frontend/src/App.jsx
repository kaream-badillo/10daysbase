import { useState } from 'react'
import './App.css'
import { ethers } from 'ethers'

// ABI del contrato RewardContract
const REWARD_CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "claimReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardClaimed",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
  }
]

function App() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [claiming, setClaiming] = useState(false)
  const [claimSuccess, setClaimSuccess] = useState(false)
  const [transactionHash, setTransactionHash] = useState('')
  const [rewardClaimed, setRewardClaimed] = useState(false)
  const [contractBalance, setContractBalance] = useState('0')
  const [lastClaimHash, setLastClaimHash] = useState('')
  const [depositAmount, setDepositAmount] = useState('')
  const [depositing, setDepositing] = useState(false)

  // Contract address del Day 3
  const contractAddress = '0x2E8BcF5e5f9e2B882CC64241e3549878c1977FCd'

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setWalletAddress(accounts[0])
        setWalletConnected(true)
        console.log('Wallet connected:', accounts[0])
        
        // Verificar estado del contrato
        await checkContractStatus()
      } else {
        alert('Please install MetaMask or Coinbase Wallet!')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
      alert('Error connecting wallet')
    }
  }

  const checkContractStatus = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const contract = new ethers.Contract(contractAddress, REWARD_CONTRACT_ABI, provider)
      
      // Verificar si ya se reclamó
      const claimed = await contract.rewardClaimed()
      setRewardClaimed(claimed)
      
      // Obtener balance del contrato
      const balance = await provider.getBalance(contractAddress)
      setContractBalance(ethers.formatEther(balance))
      
      // Recuperar hash guardado
      const savedHash = localStorage.getItem('lastClaimHash')
      if (savedHash) {
        setLastClaimHash(savedHash)
      }
      
      if (claimed) {
        setClaimSuccess(true)
      }
    } catch (error) {
      console.error('Error checking contract status:', error)
    }
  }

  const claimReward = async () => {
    if (!walletConnected) {
      alert('Please connect your wallet first!')
      return
    }

    setClaiming(true)
    try {
      // Conectar a Base Sepolia
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      
      // Crear instancia del contrato
      const contract = new ethers.Contract(contractAddress, REWARD_CONTRACT_ABI, signer)
      
      // Verificar si ya se reclamó la recompensa
      const alreadyClaimed = await contract.rewardClaimed()
      if (alreadyClaimed) {
        alert('Reward already claimed!')
        setClaiming(false)
        return
      }
      
      // Ejecutar claimReward()
      const tx = await contract.claimReward()
      setTransactionHash(tx.hash)
      
      // Guardar hash en localStorage
      localStorage.setItem('lastClaimHash', tx.hash)
      setLastClaimHash(tx.hash)
      
      // Esperar confirmación
      const receipt = await tx.wait()
      console.log('Transaction confirmed:', receipt)
      
      setClaimSuccess(true)
      setRewardClaimed(true)
      console.log('Reward claimed successfully!')
    } catch (error) {
      console.error('Error claiming reward:', error)
      alert(`Error claiming reward: ${error.message}`)
    } finally {
      setClaiming(false)
    }
  }

  const depositToContract = async () => {
    if (!walletConnected || !depositAmount) {
      alert('Please connect wallet and enter amount!')
      return
    }

    setDepositing(true)
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      
      // Convertir ETH a wei
      const amountWei = ethers.parseEther(depositAmount)
      
      // Enviar ETH al contrato
      const tx = await signer.sendTransaction({
        to: contractAddress,
        value: amountWei
      })
      
      console.log('Deposit transaction:', tx.hash)
      
      // Esperar confirmación
      await tx.wait()
      
      // Actualizar balance del contrato
      await checkContractStatus()
      
      // Limpiar input
      setDepositAmount('')
      
      alert(`✅ Deposited ${depositAmount} ETH to contract!\nTx Hash: ${tx.hash}`)
    } catch (error) {
      console.error('Error depositing:', error)
      alert(`Error depositing: ${error.message}`)
    } finally {
      setDepositing(false)
    }
  }

  return (
    <>
      <div>
        <h1>🧠 Day 3 - Smart Wallets & Paymasters</h1>
        <h2>Gasless Transaction Demo</h2>
      </div>
      
      <div className="card">
        {!walletConnected ? (
          <div>
            <button onClick={connectWallet} className="connect-btn">
              🔗 Connect Wallet
            </button>
            <p>Connect your wallet to start claiming rewards gasless!</p>
          </div>
        ) : (
          <div>
            <div className="wallet-info">
              <p>✅ <strong>Connected to Base Account:</strong></p>
              <p className="address">{walletAddress}</p>
              <p><strong>Contract Balance:</strong> {contractBalance} ETH</p>
              <p><strong>Reward Status:</strong> {rewardClaimed ? '❌ Already Claimed' : '✅ Available'}</p>
              {lastClaimHash && (
                <div className="previous-claim">
                  <p><strong>Last Claim Transaction:</strong></p>
                  <a 
                    href={`https://sepolia.basescan.org/tx/${lastClaimHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tx-link"
                  >
                    {lastClaimHash}
                  </a>
                </div>
              )}
            </div>
            
            {/* Sección para depositar ETH al contrato */}
            <div className="deposit-section">
              <h3>💰 Fund the Reward Pool</h3>
              <p>Add ETH to the contract so others can claim rewards!</p>
              <div className="deposit-input">
                <input
                  type="number"
                  step="0.001"
                  placeholder="0.01"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="amount-input"
                />
                <span className="eth-label">ETH</span>
                <button 
                  onClick={depositToContract}
                  disabled={depositing || !depositAmount}
                  className="deposit-btn"
                >
                  {depositing ? '⏳ Depositing...' : '💸 Deposit ETH'}
                </button>
              </div>
            </div>

            {/* Sección para reclamar recompensa */}
            <div className="claim-section">
              <h3>⚡ Claim Reward</h3>
              {!claimSuccess ? (
                <button 
                  onClick={claimReward} 
                  disabled={claiming || rewardClaimed}
                  className="claim-btn"
                >
                  {claiming ? '⏳ Claiming...' : rewardClaimed ? '✅ Already Claimed' : '⚡ Claim Reward (Gasless)'}
                </button>
              ) : (
                <div className="success">
                  <p>🎉 <strong>Reward Claimed Successfully!</strong></p>
                  <p>No gas fees paid thanks to Paymaster!</p>
                  {transactionHash && (
                    <div className="transaction-info">
                      <p><strong>Transaction Hash:</strong></p>
                      <a 
                        href={`https://sepolia.basescan.org/tx/${transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tx-link"
                      >
                        {transactionHash}
                      </a>
                      <p>🔗 Click to view on BaseScan</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="info">
        <h3>🚀 How it works:</h3>
        <ol>
          <li><strong>Connect wallet</strong> - MetaMask/Coinbase Wallet</li>
          <li><strong>Fund the pool</strong> - Deposit ETH to increase rewards</li>
          <li><strong>Claim reward</strong> - Get the entire contract balance</li>
          <li><strong>Gasless</strong> - Paymaster sponsors the transaction</li>
          <li><strong>One-time claim</strong> - Only the first person can claim</li>
        </ol>
        <p><strong>Note:</strong> This is a demo contract - only ONE person can claim the entire balance!</p>
      </div>
      
      <p className="read-the-docs">
        🔗 <strong>Contract:</strong> {contractAddress}
        <br />
        🌐 <strong>Network:</strong> Base Sepolia
        <br />
        💨 <strong>Paymaster:</strong> Coinbase Paymaster (Gas Sponsored)
      </p>
    </>
  )
}

export default App
