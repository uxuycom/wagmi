<script setup>
const packageName = '@tg-wagmi/core'
const actionName = 'getGasPrice'
const typeName = 'GetGasPrice'
</script>

# getGasPrice

Action for fetching the current price of gas (in wei).

## Import

```ts
import { getGasPrice } from '@tg-wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getGasPrice } from '@tg-wagmi/core'
import { config } from './config'

const gasPrice = await getGasPrice(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetGasPriceParameters } from '@tg-wagmi/core'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getGasPrice } from '@tg-wagmi/core'
import { mainnet } from '@tg-wagmi/core/chains'
import { config } from './config'

const gasPrice = await getGasPrice(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetGasPriceReturnType } from '@tg-wagmi/core'
```

`bigint`

Current price of gas (in wei).

## Error

```ts
import { type GetGasPriceErrorType } from '@tg-wagmi/core'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getGasPrice`](https://viem.sh/docs/actions/public/getGasPrice.html)
