import { http, createConfig } from '@uxuyalpha/vue'
import { base, celo, mainnet } from '@uxuyalpha/vue/chains'

export const config = createConfig({
  chains: [base, celo, mainnet],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
    [mainnet.id]: http(),
  },
})

declare module '@uxuyalpha/vue' {
  interface Register {
    config: typeof config
  }
}
