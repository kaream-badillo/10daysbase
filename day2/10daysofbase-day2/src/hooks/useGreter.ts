import React, { useState } from 'react';
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GREETER_CONTRACT_ADDRESS, GREETER_ABI } from '../contracts/Greeter';

export function useGreeter() {
  const [newGreeting, setNewGreeting] = useState('');
  const [transactionHistory, setTransactionHistory] = useState<Array<{
    message: string;
    hash: string;
    timestamp: Date;
  }>>([]);

  // Read greeting
  const { data: greeting, refetch: refetchGreeting, error: readError } = useReadContract({
    address: GREETER_CONTRACT_ADDRESS,
    abi: GREETER_ABI,
    functionName: 'greeting',
  });

  // Write contract
  const { writeContract, error: writeError, data: hash, isPending: isWritePending } = useWriteContract();

  // Wait for transaction
  const { isLoading: isConfirming, isSuccess: isConfirmed, error: confirmError } = useWaitForTransactionReceipt({
    hash,
  });

  // Add to history when transaction is confirmed
  const [pendingMessage, setPendingMessage] = useState<string>('');

  const setGreeting = (message: string) => {
    if (message.trim()) {
      setPendingMessage(message);
      writeContract({
        address: GREETER_CONTRACT_ADDRESS,
        abi: GREETER_ABI,
        functionName: 'setGreeting',
        args: [message],
      });
    }
  };

  // Add transaction to history when confirmed
  React.useEffect(() => {
    if (isConfirmed && hash && pendingMessage) {
      setTransactionHistory(prev => [{
        message: pendingMessage,
        hash,
        timestamp: new Date()
      }, ...prev]);
      setPendingMessage('');
    }
  }, [isConfirmed, hash, pendingMessage]);

  return {
    greeting,
    newGreeting,
    setNewGreeting,
    setGreeting,
    refetchGreeting,
    isWritePending,
    isConfirming,
    isConfirmed,
    transactionHash: hash,
    transactionHistory,
    readError,
    writeError,
    confirmError,
  };
}