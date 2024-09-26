<script setup>
const packageName = '@uxuyalpha/core'
const actionName = 'getBlockNumber'
const typeName = 'GetBlockNumber'
</script>

# getBlockNumber

Action for fetching the number of the most recent block seen.

## Import

```ts
import { getBlockNumber } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getBlockNumber } from '@uxuyalpha/core'
import { config } from './config'

const blockNumber = await getBlockNumber(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetBlockNumberParameters } from '@uxuyalpha/core'
```

### cacheTime

`number | undefined`

Time in milliseconds that cached block number will remain in memory.

::: code-group
```ts [index.ts]
import { getBlockNumber } from '@uxuyalpha/core'
import { config } from './config'

const blockNumber = await getBlockNumber(config, {
  cacheTime: 4_000, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getBlockNumber } from '@uxuyalpha/core'
import { mainnet } from '@uxuyalpha/core/chains'
import { config } from './config'

const blockNumber = await getBlockNumber(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetBlockNumberReturnType } from '@uxuyalpha/core'
```

`bigint`

Most recent block number seen.

## Error

```ts
import { type GetBlockNumberErrorType } from '@uxuyalpha/core'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getBlockNumber`](https://viem.sh/docs/actions/public/getBlockNumber.html)
- [`watchBlockNumber`](https://viem.sh/docs/actions/public/watchBlockNumber.html)
