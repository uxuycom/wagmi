import { connect, disconnect } from '@uxuyalpha/core'
import { abi, address, config } from '@uxuyalpha/test'
import { renderHook, waitFor } from '@uxuyalpha/test/react'
import { expect, test } from 'vitest'

import { useWriteContract } from './useWriteContract.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })

  const { result } = renderHook(() => useWriteContract())

  result.current.writeContract({
    abi: abi.wagmiMintExample,
    address: address.wagmiMintExample,
    functionName: 'mint',
  })
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

  expect(result.current.data).toBeDefined()

  await disconnect(config, { connector })
})
