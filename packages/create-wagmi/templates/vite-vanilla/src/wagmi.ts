import { coinbaseWallet, injected, walletConnect } from '@tg-wagmi/connectors'
import { http, createConfig } from '@tg-wagmi/core'
import { mainnet, sepolia } from '@tg-wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
