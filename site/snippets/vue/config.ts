import { http, createConfig } from '@tg-wagmi/vue'
import { mainnet, sepolia } from '@tg-wagmi/vue/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
