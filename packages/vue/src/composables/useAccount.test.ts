import { connect, disconnect } from '@tg-wagmi/core'
import { config } from '@tg-wagmi/test'
import { renderComposable } from '@tg-wagmi/test/vue'
import { expect, test } from 'vitest'

import { useAccount } from './useAccount.js'

test('default', async () => {
  const [account] = renderComposable(() => useAccount())

  expect(account.address.value).not.toBeDefined()
  expect(account.status.value).toEqual('disconnected')

  await connect(config, { connector: config.connectors[0]! })

  expect(account.address.value).toBeDefined()
  expect(account.status.value).toEqual('connected')

  await disconnect(config)
})
