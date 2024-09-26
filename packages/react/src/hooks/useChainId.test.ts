import { config } from '@uxuyalpha/test'
import { renderHook } from '@uxuyalpha/test/react'
import { Fragment, createElement } from 'react'
import { expect, test } from 'vitest'

import { useChainId } from './useChainId.js'

test('default', async () => {
  const { result, rerender } = renderHook(() => useChainId())

  expect(result.current).toMatchInlineSnapshot('1')

  config.setState((x) => ({ ...x, chainId: 456 }))
  rerender()

  expect(result.current).toMatchInlineSnapshot('456')
})

test('parameters: config', () => {
  const { result } = renderHook(() => useChainId({ config }), {
    wrapper: ({ children }) => createElement(Fragment, { children }),
  })
  expect(result.current).toBeDefined()
})
