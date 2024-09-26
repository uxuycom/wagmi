import type { Config } from '@tg-wagmi/core'
import { config } from '@tg-wagmi/test'
import { expectTypeOf, test } from 'vitest'

import { useConfig } from './useConfig.js'

test('default', async () => {
  const result = useConfig()
  expectTypeOf(result).toEqualTypeOf<Config>()
})

test('parameters: config', async () => {
  const result = useConfig({ config })
  expectTypeOf(result).not.toEqualTypeOf<Config>()
  expectTypeOf(result).toEqualTypeOf<typeof config>()
})
