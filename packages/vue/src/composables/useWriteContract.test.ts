import { connect, disconnect } from '@uxuyalpha/core'
import { abi, address, config } from '@uxuyalpha/test'
import { renderComposable, waitFor } from '@uxuyalpha/test/vue'
import { expect, test } from 'vitest'

import { useWriteContract } from './useWriteContract.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })

  const [result] = renderComposable(() => useWriteContract())

  result.writeContract({
    abi: abi.wagmiMintExample,
    address: address.wagmiMintExample,
    functionName: 'mint',
  })
  await waitFor(result.isSuccess)

  expect(result.data.value).toBeDefined()

  await disconnect(config, { connector })
})
