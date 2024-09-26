import { mock } from '@tg-wagmi/connectors'
import { accounts, config } from '@tg-wagmi/test'
import { renderComposable } from '@tg-wagmi/test/vue'
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
