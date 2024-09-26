import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { connectMutationOptions } from './connect.js'

test('default', () => {
  expect(connectMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "connect",
      ],
    }
  `)
})
