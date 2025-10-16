import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const rpcUrl = process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL;

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    
    metaMask({
        dappMetadata: {
            name: "10daysbase-day2-onchainkit-frontend",
        },
    }),
    
    coinbaseWallet({
      appName: 'onchainkit',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi"{
    interface Register{
        config: typeof wagmiConfig;
    }
}