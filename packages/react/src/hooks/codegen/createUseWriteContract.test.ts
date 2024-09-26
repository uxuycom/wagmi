import { abi } from '@uxuyalpha/test'
import { renderHook } from '@uxuyalpha/test/react'
import { test } from 'vitest'

import { createUseWriteContract } from './createUseWriteContract.js'

test('default', () => {
  const useWriteErc20 = createUseWriteContract({
    abi: abi.erc20,
  })

  renderHook(() => useWriteErc20())
})
