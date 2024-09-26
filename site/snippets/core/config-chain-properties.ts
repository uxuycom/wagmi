import { http, createConfig } from '@uxuyalpha/core'
import { base, celo, mainnet } from '@uxuyalpha/core/chains'

export const config = createConfig({
  chains: [base, celo, mainnet],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
    [mainnet.id]: http(),
  },
})
