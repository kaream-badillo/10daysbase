import { baseSepolia } from 'viem/chains';
import { createPublicClient, http, numberToHex, encodeFunctionData } from 'viem';

// 🔹 ABI del contrato (Claim Reward)
const REWARDS_ABI = [
  {
    inputs: [],
    name: 'claimReward',
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// 🔹 Crear cliente público
export const createClient = (rpcUrl) => {
  return createPublicClient({
    chain: baseSepolia,
    transport: http(rpcUrl),
  });
};

// 🔹 Enviar transacción con Paymaster
export const sendTransaction = async (
  provider,
  fromAddress,
  contractAddress,
  paymasterUrl
) => {
  try {
    if (!provider || !provider.request) {
      throw new Error('No provider available. Please connect to a Base account.');
    }

    if (!paymasterUrl) {
      throw new Error('Paymaster URL is required!');
    }

    // Codificar función a ejecutar
    const data = encodeFunctionData({
      abi: REWARDS_ABI,
      functionName: 'claimReward',
    });

    const calls = [
      {
        to: contractAddress,
        value: '0x0',
        data: data,
      },
    ];

    // 🔹 Enviar transacción vía Paymaster
    const result = await provider.request({
      method: 'wallet_sendCalls',
      params: {
        version: '1.0',
        chainId: numberToHex(baseSepolia.id),
        from: fromAddress,
        calls: calls,
        capabilities: {
          paymasterService: {
            url: paymasterUrl,
          },
        },
      },
    });

    return result;
  } catch (error) {
    console.log(`Error sending transaction: ${error}`);
    throw error;
  }
};

// 🔹 Obtiene el estado actual del batch de transacciones
export const getCallsStatus = async (provider, batchId) => {
    const status = await provider.request({
      method: 'wallet_getCallsStatus',
      params: [batchId],
    });
  
    return status;
  };
  
  // 🔹 Espera hasta que el batch se confirme o falle
  export const waitForBatchConfirmation = async (
    provider,
    batchId,
    maxAttempts = 60,   // número máximo de intentos
    intervalMs = 2000   // intervalo entre chequeos (2 segundos)
  ) => {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const status = await getCallsStatus(provider, batchId);
  
      if (status.status === 'CONFIRMED') {
        return status; // batch confirmado exitosamente
      }
  
      if (status.status === 'FAILED') {
        throw new Error(`Batch failed: ${status.error}`);
      }
  
      // Espera antes del siguiente intento
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  
    // Si llega aquí, se acabaron los intentos sin confirmación
    throw new Error('Batch confirmation timeout');
  };
  