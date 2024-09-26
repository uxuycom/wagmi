import { connect, disconnect } from '@tg-wagmi/core'
import { abi, address, config } from '@tg-wagmi/test'
import { renderHook, waitFor } from '@tg-wagmi/test/react'
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
