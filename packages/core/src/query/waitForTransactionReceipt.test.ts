import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { waitForTransactionReceiptQueryOptions } from './waitForTransactionReceipt.js'

test('default', () => {
  expect(
    waitForTransactionReceiptQueryOptions(config, {}),
  ).toMatchInlineSnapshot(`
    {
      "queryFn": [Function],
      "queryKey": [
        "waitForTransactionReceipt",
        {},
      ],
    }
  `)
})
