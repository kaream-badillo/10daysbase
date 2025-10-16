"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { useAccount, useBalance, useSignMessage } from "wagmi";
import { useGreeter } from "../src/hooks/useGreter";

export default function Home() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const { signMessage, data: signature, isPending: isSignPending } = useSignMessage();
  
  const {
    greeting,
    newGreeting,
    setNewGreeting,
    setGreeting,
    refetchGreeting,
    isWritePending,
    isConfirmed,
    transactionHash,
    transactionHistory,
    readError,
    writeError,
    confirmError,
  } = useGreeter();

  const isCorrectNetwork = chain?.id === 84532;

  // Refetch greeting when transaction is confirmed
  useEffect(() => {
    if (isConfirmed) {
      refetchGreeting();
      setNewGreeting("");
    }
  }, [isConfirmed, refetchGreeting, setNewGreeting]);

  const handleSetGreeting = () => {
    if (newGreeting.trim()) {
      setGreeting(newGreeting);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>10 Days of Base - Day 2</h1>
        
        {isConnected && address && (
          <div className={styles.section}>
            {!isCorrectNetwork && (
              <div className={styles.errorMessage}>
                <p>❌ Wrong Network! Please switch to Base Sepolia.</p> 
                <p>Current: {chain?.name || "Unknown"} | Required: Base Sepolia (84532)</p>
              </div>
            )}
            
            {isCorrectNetwork && (
              <>
                {/* Wallet Info */}
                <div className={styles.walletInfo}>
                  <h2>Wallet Information</h2>
                  <p><strong>Address:</strong> {address}</p>
                  <p><strong>Balance:</strong> {balance ? `${balance.formatted} ${balance.symbol}` : 'Loading...'}</p>
                  <p><strong>Network:</strong> {chain?.name}</p>
                </div>

                {/* Message Signing */}
                <div className={styles.messageSection}>
                  <h3>Sign Message</h3>
                  <p><strong>Message:</strong> "Hello from 10 Days of Base!"</p>
                  <button 
                    onClick={() => signMessage({ message: 'Hello from 10 Days of Base!' })}
                    disabled={isSignPending}
                    className={styles.signButton}
                  >
                    {isSignPending ? 'Signing...' : 'Sign Message'}
                  </button>
                  
                  {signature && (
                    <div className={styles.signatureSection}>
                      <p><strong>Signature:</strong> {signature}</p>
                    </div>
                  )}
                </div>

                {/* Greeter Contract */}
                <div className={styles.greeterSection}>
                  <h3>📝 Greeter Contract (Day 1)</h3>
                  <p><strong>Contract Address:</strong> 
                    <a
                      href={`https://sepolia.basescan.org/address/${process.env.NEXT_PUBLIC_GREETER_CONTRACT_ADDRESS}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.txLink}
                    >
                      {process.env.NEXT_PUBLIC_GREETER_CONTRACT_ADDRESS}
                    </a>
                  </p>
                  <p><strong>Network:</strong> Base Sepolia (84532)</p>
                  
                  <div className={styles.greetingDisplay}>
                    <p><strong>Current Greeting:</strong></p>
                    <p className={styles.currentGreeting}>{greeting || "Loading..."}</p>
                  </div>

                  <div className={styles.greetingInput}>
                    <input
                      type="text"
                      value={newGreeting}
                      onChange={(e) => setNewGreeting(e.target.value)}
                      placeholder="Enter new greeting..."
                      className={styles.input}
                    />
                    <button 
                      onClick={handleSetGreeting}
                      disabled={!newGreeting.trim() || isWritePending}
                      className={styles.updateButton}
                    >
                      {isWritePending ? 'Updating...' : 'Update Greeting'}
                    </button>
                  </div>

                  {/* Current Transaction Status */}
                  {transactionHash && (
                    <div className={styles.transactionSection}>
                      <p><strong>🔄 Current Transaction:</strong></p>
                      <p><strong>Message:</strong> "{newGreeting}"</p>
                      <p><strong>Hash:</strong></p>
                      <a
                        href={`https://sepolia.basescan.org/tx/${transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.txLink}
                      >
                        {transactionHash}
                      </a>
                    </div>
                  )}

                  {/* Transaction History */}
                  {transactionHistory.length > 0 && (
                    <div className={styles.historySection}>
                      <h4>📜 Transaction History</h4>
                      <div className={styles.historyList}>
                        {transactionHistory.map((tx, index) => (
                          <div key={index} className={styles.historyItem}>
                            <div className={styles.historyHeader}>
                              <span className={styles.historyMessage}>"{tx.message}"</span>
                              <span className={styles.historyTime}>
                                {tx.timestamp.toLocaleTimeString()}
                              </span>
                            </div>
                            <a
                              href={`https://sepolia.basescan.org/tx/${tx.hash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.txLink}
                            >
                              {tx.hash}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Errors */}
                  {(writeError || confirmError) && (
                    <div className={styles.errorMessage}>
                      <p>❌ Error: {writeError?.message || confirmError?.message}</p>
                    </div>
                  )}

                  {readError && (
                    <div className={styles.errorMessage}>
                      <p>❌ Failed to read contract. Check contract address and network.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}