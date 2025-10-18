import {createBaseAccountSDK, base} from "@base-org/account";
import {baseSepolia} from "viem/chains";

let sdkInstance = null

export const getBaseAccountSDK = () => {
    if(!sdkInstance){
        try{
            sdkInstance = creatBaseAccountSDK(){
                appName: "paymaster-frontend",
                appLogoUrl: "https://raw.githubusercontent.com/base/brand-kit/refs/heads/main/logo/Logotype/Digital/Base_lockup_2color.png",
                baseChainIds: [base.constants.CHAIN_IDS.baseSepolia],
            }
        }catch(error){
            console.error("Error setting up Base Account SDK:, ${error}")           
        }
    }
    return sdkInstance;
}

export const isWalletAvailable = () => {
    try{
        return getBaseAccountSDK() !== null;
    }catch(error){
        console.error("Error checking wallet availability:, ${error}")
    }
}

export const connectWallet = async () => {
    const sdk = getBaseAccountSDK();
    const provider = sdk.getProvider();

    if(!provider){
        throw new error ("No Provider available from Base Account SDK")
    }

    const account = await provider.request({method: "eth_requestAccounts"});
    if(!account || account.length === 0){
        throw new error ("No wallet accounts returned")
    }

    return{
        address: account[0],
        provider,
        sdk
    }
}

export const switchNetwork = async (provider) => {
    try{
        if(!provider){
            throw new error ("No provider available");
        }
        const chainId = await provider.request({method: "eth_chainId"});
        const currentChainId = parseInt(chainId, 16);
        const targetChainId = baseSepolia.id;

        if(currentChainId === targetChainId){
            return true;
        }

        await provider.request({
            method: "wallet_switchEthereumChain", 
            params: [{chainId: "0x${targetChainId.toString(16)}"}]
        })
        return true;     
    }catch(error){
        if{error.code === 4902}{
            try{
                const rpcUrl = import.meta.env.VITTE_RPC_URL;
            }
        }
    }
}

// Función para desconectar la wallet
const disconnectWallet = async (sdk) => {
    try {
      if (sdk && typeof sdk.disconnect === 'function') {
        await sdk.disconnect();
      }
      return true;
    } catch (error) {
      console.log(`Error disconnecting wallet: ${error}`);
      return false;
    }
  };
  
  // Función para cambiar a la red Base Sepolia
  export const switchToBaseSepolia = async (provider) => {
    try {
      // Aquí iría la lógica para cambiar de red, si aplica
      return true;
    } catch (error) {
      console.log(`Error switching chains: ${error}`);
      return false;
    }
  };
  