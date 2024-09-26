import { abi, config } from '@uxuyalpha/test'
import { expectTypeOf, test } from 'vitest'

import { readContractQueryOptions } from './readContract.js'

test('default', async () => {
  const options = readContractQueryOptions(config, {
    address: '0x',
    abi: abi.erc20,
    functionName: 'balanceOf',
    args: ['0x'],
  })
  const result = await options.queryFn({} as any)
  expectTypeOf(result).toEqualTypeOf<bigint>()
})
