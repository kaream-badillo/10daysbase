// 🔹 Verifica si la wallet soporta llamadas "wallet_sendCalls"
export const isWalletSendCallsSupported = async (provider) => {
    if (!provider || typeof provider.request !== 'function') return false;
  
    try {
      const capabilities = await provider.request({
        method: 'wallet_getCapabilities',
      });
  
      if (capabilities) {
        for (const chainId in capabilities) {
          if (capabilities[chainId]?.paymasterService?.supported) {
            return true;
          }
        }
      }
  
      return false;
    } catch (error) {
      console.log(`Error checking wallet capabilities: ${error}`);
      return false;
    }
  };
  
  // 🔹 Verifica si el Paymaster URL es válido y compatible con la wallet
  export const checkPaymasterService = async (paymasterUrl, provider) => {
    if (!paymasterUrl) return false;
  
    try {
      // Verifica que el URL sea válido
      new URL(paymasterUrl);
  
      if (provider) {
        return await isWalletSendCallsSupported(provider);
      }
  
      return true;
    } catch (error) {
      console.log(`Error checking paymaster service: ${error}`);
      return false;
    }
  };
  