import { connect, disconnect } from '@uxuyalpha/core'
import { abi, bytecode, config, transactionHashRegex } from '@uxuyalpha/test'
import { renderHook, waitFor } from '@uxuyalpha/test/react'
import { expect, test } from 'vitest'

import { useDeployContract } from './useDeployContract.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })
  const { result } = renderHook(() => useDeployContract())

  result.current.deployContract({
    abi: abi.bayc,
    bytecode: bytecode.bayc,
    args: ['Bored Ape Wagmi Club', 'BAYC', 69420n, 0n],
  })
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

  expect(result.current.data).toMatch(transactionHashRegex)

  await disconnect(config, { connector })
})
