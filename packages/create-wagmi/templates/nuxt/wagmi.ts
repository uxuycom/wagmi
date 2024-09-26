import {
  http,
  cookieStorage,
  createConfig,
  createStorage,
} from '@tg-wagmi/vue'
import { mainnet, optimism, sepolia } from '@tg-wagmi/vue/chains'
import { injected, metaMask, walletConnect } from '@tg-wagmi/vue/connectors'

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

declare module '@tg-wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
