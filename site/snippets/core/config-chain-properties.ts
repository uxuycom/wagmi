import { http, createConfig } from '@tg-wagmi/core'
import { base, celo, mainnet } from '@tg-wagmi/core/chains'

export const config = createConfig({
  chains: [base, celo, mainnet],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
    [mainnet.id]: http(),
  },
})
