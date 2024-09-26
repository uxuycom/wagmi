<script setup>
const packageName = '@tg-wagmi/core'
const actionName = 'getBytecode'
const typeName = 'getBytecode'
</script>

# getBytecode

Action for retrieving the bytecode at an address.

## Import

```ts
import { getBytecode } from '@tg-wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getBytecode } from '@tg-wagmi/core'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetBytecodeParameters } from '@tg-wagmi/core'
```

### address

`Address`

The contract address.

::: code-group
```ts [index.ts]
import { getBytecode } from '@tg-wagmi/core'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockNumber

`bigint | undefined`

The block number to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from '@tg-wagmi/core'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  blockNumber: 16280770n, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

The block tag to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from '@tg-wagmi/core'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  blockTag: 'safe', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

The chain ID to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from '@tg-wagmi/core'
import { mainnet } from '@tg-wagmi/core/chains'
import { config } from './config'

await getBytecode(config, {
  chainId: mainnet.id, // [!code focus]
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetBytecodeReturnType } from '@tg-wagmi/core'
```

`Hex`

The contract's bytecode.

## Error

```ts
import { type GetBytecodeErrorType } from '@tg-wagmi/core'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getBytecode`](https://viem.sh/docs/contract/getBytecode)
