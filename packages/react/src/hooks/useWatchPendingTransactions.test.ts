import { connect, disconnect, sendTransaction } from '@tg-wagmi/core'
import {
  accounts,
  config,
  testClient,
  transactionHashRegex,
  wait,
} from '@tg-wagmi/test'
import { renderHook } from '@tg-wagmi/test/react'
import { parseEther } from 'viem'
import type { OnTransactionsParameter } from 'viem/actions'
import { expect, test } from 'vitest'

import { useWatchPendingTransactions } from './useWatchPendingTransactions.js'

const connector = config.connectors[0]!

test('default', async () => {
  await connect(config, { connector })

  let transactions: OnTransactionsParameter = []
  renderHook(() =>
    useWatchPendingTransactions({
      onTransactions(next) {
        transactions = [...transactions, ...next]
      },
    }),
  )
  await wait(1000)

  await sendTransaction(config, {
    to: accounts[1],
    value: parseEther('1'),
  })
  await wait(200)

  await sendTransaction(config, {
    to: accounts[3],
    value: parseEther('1'),
  })
  await wait(200)

  await testClient.mainnet.mine({ blocks: 1 })

  expect(transactions.length).toBe(2)
  expect(transactions[0]).toMatch(transactionHashRegex)

  await disconnect(config, { connector })
})
