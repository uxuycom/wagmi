import { useChains } from '@uxuyalpha/vue'
import type { Chain, celo, optimism } from '@uxuyalpha/vue/chains'
import { expectTypeOf, test } from 'vitest'

test('default', () => {
  const chains = useChains()

  expectTypeOf(chains.value[0]).toEqualTypeOf<typeof celo>()
  expectTypeOf(chains.value[2]).toEqualTypeOf<typeof optimism>()
  expectTypeOf(chains.value[5]).toEqualTypeOf<Chain | undefined>()
})
