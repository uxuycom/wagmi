import { chain, config } from '@uxuyalpha/test'
import { expect, test } from 'vitest'

import { estimateMaxPriorityFeePerGas } from './estimateMaxPriorityFeePerGas.js'

test('default', async () => {
  await expect(estimateMaxPriorityFeePerGas(config)).resolves.toBeDefined()
})

test('parameters: chainId', async () => {
  await expect(
    estimateMaxPriorityFeePerGas(config, {
      chainId: chain.mainnet2.id,
    }),
  ).resolves.toBeDefined()
})
