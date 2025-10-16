"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Wallet } from "@coinbase/onchainkit/wallet";
import {useAccount, useBalance, useSignMessage} from "wagmi";


export default function Home() {
  const {address, isConnected, chain} = useAccount();
  const {data: balance} = useBalance({address});
  const {signMessage, data: signature, isPending: isSignPending} = useSignMessage();
   
  const isCorrectNetwork = chain?.id === 84532;
  
  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>10daysbase-day2-onchainkit-frontend</h1>
        {isConnected && address && (
          <div className={styles.section}>
            {!isCorrectNetwork && (
              <div className={styles.errorMessage}>
                <p>Wrong Network! Please switch to Base Sepolia Wallet.</p> 
                <p className={styles.networkInfo}>Current: {chain?.name || "Unknown"} Required: Base Sepolia (84532)</p>
              </div>
            )}
            
            {isCorrectNetwork && (
              <div className={styles.walletInfo}>
                <h2>Wallet Information</h2>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Balance:</strong> {balance ? `${balance.formatted} ${balance.symbol}` : 'Loading...'}</p>
                <p><strong>Network:</strong> {chain?.name}</p>
                
                <div className={styles.messageSection}>
                  <p><strong>Message to sign:</strong> "Hello from 10 Days of Base!"</p>
                  <button 
                    onClick={() => signMessage({message: 'Hello from 10 Days of Base!'})}
                    disabled={isSignPending}
                    className={styles.signButton}
                  >
                    {isSignPending ? 'Signing...' : 'Sign Message'}
                  </button>
                </div>

                {signature && (
                  <div className={styles.signatureSection}>
                    <p className={styles.label}>Signature:</p>
                    <p className={styles.signature}>{signature}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
