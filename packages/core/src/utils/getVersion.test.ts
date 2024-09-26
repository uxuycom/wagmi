import { expect, test } from 'vitest'

import { getVersion } from './getVersion.js'

test('default', () => {
  expect(getVersion()).toMatchInlineSnapshot(`"@tg-wagmi/core@x.y.z"`)
})
