import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { showCallsStatusMutationOptions } from './showCallsStatus.js'

test('default', () => {
  expect(showCallsStatusMutationOptions(config)).toMatchInlineSnapshot(`
    {
      "mutationFn": [Function],
      "mutationKey": [
        "showCallsStatus",
      ],
    }
  `)
})
