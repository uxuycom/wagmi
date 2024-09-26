import { config } from '@uxuyalpha/test'
import { renderComposable } from '@uxuyalpha/test/vue'
import { expect, test } from 'vitest'

import { useChainId } from './useChainId.js'

test('default', () => {
  const [chainId] = renderComposable(() => useChainId())

  expect(chainId.value).toMatchInlineSnapshot('1')

  config.setState((x) => ({ ...x, chainId: 456 }))

  expect(chainId.value).toMatchInlineSnapshot('456')
})

test('parameters: config', () => {
  const [chainId] = renderComposable(() => useChainId({ config }), {
    attach() {},
  })
  expect(chainId.value).toBeDefined()
})
