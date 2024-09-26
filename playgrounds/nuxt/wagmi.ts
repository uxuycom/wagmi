import {
  http,
  cookieStorage,
  createConfig,
  createStorage,
} from '@uxuyalpha/vue'
import { mainnet, optimism, sepolia } from '@uxuyalpha/vue/chains'
import { injected, metaMask, walletConnect } from '@uxuyalpha/vue/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, optimism],
  connectors: [
    injected(),
    walletConnect({
      projectId: process.env.NUXT_PUBLIC_WC_PROJECT_ID!,
    }),
    metaMask(),
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [optimism.id]: http(),
  },
})

declare module '@uxuyalpha/vue' {
  interface Register {
    config: typeof config
  }
}
