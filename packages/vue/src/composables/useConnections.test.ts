import { connect } from '@uxuyalpha/core'
import { config } from '@uxuyalpha/test'
import { renderComposable } from '@uxuyalpha/test/vue'
import { expect, test } from 'vitest'

import { useConnections } from './useConnections.js'

test('default', async () => {
  const [connections] = renderComposable(() => useConnections())

  expect(connections.value).toEqual([])

  await connect(config, { connector: config.connectors[0]! })

  expect(connections.value.length).toBe(1)
})
