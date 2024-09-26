import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { estimateFeesPerGas } from './estimateFeesPerGas.js'

test('default', async () => {
  const result = await estimateFeesPerGas(config)
  expect(Object.keys(result)).toMatchInlineSnapshot(`
    [
      "formatted",
      "gasPrice",
      "maxFeePerGas",
      "maxPriorityFeePerGas",
    ]
  `)
})
