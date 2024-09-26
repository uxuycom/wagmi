import { mock } from '@uxuyalpha/connectors'
import { accounts, config } from '@uxuyalpha/test'
import { renderComposable } from '@uxuyalpha/test/vue'
import { expect, test } from 'vitest'

import { useConnectors } from './useConnectors.js'

test('default', async () => {
  const [connectors] = renderComposable(() => useConnectors())

  const count = config.connectors.length
  expect(connectors.value.length).toBe(count)
  expect(connectors.value).toEqual(config.connectors)

  config._internal.connectors.setState(() => [
    ...config.connectors,
    config._internal.connectors.setup(mock({ accounts })),
  ])

  expect(connectors.value.length).toBe(count + 1)
})
