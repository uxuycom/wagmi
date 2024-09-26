import { http, createConfig } from '@uxuyalpha/vue'
import { mainnet, sepolia } from '@uxuyalpha/vue/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
