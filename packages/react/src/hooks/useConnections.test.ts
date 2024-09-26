import { connect } from '@uxuyalpha/core'
import { config } from '@uxuyalpha/test'
import { renderHook } from '@uxuyalpha/test/react'
import { Fragment, createElement } from 'react'
import { expect, test } from 'vitest'

import { useConnections } from './useConnections.js'

test('default', async () => {
  const { result, rerender } = renderHook(() => useConnections())

  expect(result.current).toEqual([])

  await connect(config, { connector: config.connectors[0]! })
  rerender()

  expect(result.current.length).toBe(1)
})

test('parameters: config', () => {
  const { result } = renderHook(() => useConnections({ config }), {
    wrapper: ({ children }) => createElement(Fragment, { children }),
  })
  expect(result.current).toBeDefined()
})
