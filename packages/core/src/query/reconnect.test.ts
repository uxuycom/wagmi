import { config } from '@uxuyalpha/test'
import { expect, test } from 'vitest'

import { reconnectMutationOptions } from './reconnect.js'

test('default', () => {
  expect(reconnectMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "reconnect",
      ],
    }
  `)
})
