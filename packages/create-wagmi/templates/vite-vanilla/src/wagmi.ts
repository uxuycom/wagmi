import { coinbaseWallet, injected, walletConnect } from '@uxuyalpha/connectors'
import { http, createConfig } from '@uxuyalpha/core'
import { mainnet, sepolia } from '@uxuyalpha/core/chains'

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
