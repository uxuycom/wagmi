import { config } from '@uxuyalpha/test'
import { expect, test } from 'vitest'

import { signMessageMutationOptions } from './signMessage.js'

test('default', () => {
  expect(signMessageMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "signMessage",
      ],
    }
  `)
})
