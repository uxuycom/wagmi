import { connect, disconnect } from '@tg-wagmi/core'
import { abi, address, config } from '@tg-wagmi/test'
import { renderComposable, waitFor } from '@tg-wagmi/test/vue'
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
