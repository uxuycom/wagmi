import { connect, disconnect } from '@uxuyalpha/core'
import { abi, address, config } from '@uxuyalpha/test'
import { renderHook, waitFor } from '@uxuyalpha/test/react'
import { expect, test } from 'vitest'

import { useWriteContracts } from './useWriteContracts.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })

  const { result } = renderHook(() => useWriteContracts())

  result.current.writeContracts({
    contracts: [
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
      {
        abi: abi.wagmiMintExample,
        address: address.wagmiMintExample,
        functionName: 'mint',
      },
    ],
  })
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

  expect(result.current.data).toMatchInlineSnapshot(
    '"0x8913636bd97cf4bcc0a6343c730905a27ead0f7480ff82190072e916439eb212"',
  )

  await disconnect(config, { connector })
})
