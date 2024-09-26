import { http, createConfig } from '@uxuyalpha/core'
import { mainnet, sepolia } from '@uxuyalpha/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
