import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>🧠 Day 3 - Smart Wallets & Paymasters</h1>
        <h2>Gasless Transaction Demo</h2>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Test Counter: {count}
        </button>
        <p>
          🎯 <strong>Paymaster Frontend</strong> - Ready for gasless transactions
        </p>
      </div>
      
      <div className="info">
        <h3>🚀 Features:</h3>
        <ul>
          <li>✅ Smart Wallet Integration</li>
          <li>✅ Paymaster Transaction Sponsorship</li>
          <li>✅ Gasless Claim Rewards</li>
          <li>✅ Base Sepolia Network</li>
        </ul>
      </div>
      
      <p className="read-the-docs">
        🔗 <strong>Contract:</strong> 0x2E8BcF5e5f9e2B882CC64241e3549878c1977FCd
        <br />
        🌐 <strong>Network:</strong> Base Sepolia
      </p>
    </>
  )
}

export default App
