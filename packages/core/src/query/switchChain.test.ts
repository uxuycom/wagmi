import { config } from '@uxuyalpha/test'
import { expect, test } from 'vitest'

import { switchChainMutationOptions } from './switchChain.js'

test('default', () => {
  expect(switchChainMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "switchChain",
      ],
    }
  `)
})
