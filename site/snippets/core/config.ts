import { http, createConfig } from '@tg-wagmi/core'
import { mainnet, sepolia } from '@tg-wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
