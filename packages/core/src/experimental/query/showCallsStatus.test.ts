import { config } from '@uxuyalpha/test'
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
