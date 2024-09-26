import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { sendTransactionMutationOptions } from './sendTransaction.js'

test('default', () => {
  expect(sendTransactionMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "sendTransaction",
      ],
    }
  `)
})
