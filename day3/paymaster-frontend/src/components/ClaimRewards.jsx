import { useEffect, useState } from "react";
import {
  createClient,
  sendTransaction,
  waitForBatchConfirmation,
} from "../utils/paymentService";
import {
  connectWallet,
  disconnectWallet,
  switchToBaseSepolia,
} from "../utils/walletService";
import { checkPaymasterService } from "../utils/walletProvider";

const ClaimReward = () => {
  const [provider, setProvider] = useState(null);
  const [sdk, setSdk] = useState(null);
  const [status, setStatus] = useState("idle");

  const contractAddress = import.meta.env.VITE_REWARDS_CONTRACT_ADDRESS;
  const paymasterUrl = import.meta.env.VITE_PAYMASTER_SERVICE_URL;

  useEffect(() => {
    // Aquí podrías hacer una verificación inicial del Paymaster
    const verifyPaymaster = async () => {
      const isSupported = await checkPaymasterService(paymasterUrl, provider);
      console.log("Paymaster compatible:", isSupported);
    };

    if (provider) verifyPaymaster();
  }, [provider, paymasterUrl]);

  return (
    <div>
      <h1>Hello World</h1>
      <p>Status: {status}</p>
    </div>
  );
};

export default ClaimReward;
