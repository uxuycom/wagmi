import { http, createConfig } from '@tg-wagmi/vue'
import { base, celo, mainnet } from '@tg-wagmi/vue/chains'

export const config = createConfig({
  chains: [base, celo, mainnet],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
    [mainnet.id]: http(),
  },
})

declare module '@tg-wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
