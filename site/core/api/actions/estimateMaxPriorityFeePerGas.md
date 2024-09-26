<script setup>
const packageName = '@uxuyalpha/core'
const actionName = 'estimateMaxPriorityFeePerGas'
const typeName = 'EstimateFeesPerGas'
</script>

# estimateMaxPriorityFeePerGas

Returns an estimate for the max priority fee per gas (in wei) for a transaction to be likely included in the next block.

## Import

```ts
import { estimateMaxPriorityFeePerGas } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { estimateMaxPriorityFeePerGas } from '@uxuyalpha/core'
import { config } from './config'

const result = await estimateMaxPriorityFeePerGas(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type EstimateFeesPerGasParameters } from '@uxuyalpha/core'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { estimateMaxPriorityFeePerGas } from '@uxuyalpha/core'
import { mainnet } from '@uxuyalpha/core/chains'
import { config } from './config'

const result = await estimateMaxPriorityFeePerGas(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type EstimateFeesPerGasReturnType } from '@uxuyalpha/core'
```

`bigint`

An estimate (in wei) for the max priority fee per gas.

## Error

```ts
import { type EstimateFeesPerGasErrorType } from '@uxuyalpha/core'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`estimateMaxPriorityFeePerGas`](https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas.html)
