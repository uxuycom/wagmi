<script setup>
const packageName = '@uxuyalpha/core'
const actionName = 'getGasPrice'
const typeName = 'GetGasPrice'
</script>

# getGasPrice

Action for fetching the current price of gas (in wei).

## Import

```ts
import { getGasPrice } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getGasPrice } from '@uxuyalpha/core'
import { config } from './config'

const gasPrice = await getGasPrice(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetGasPriceParameters } from '@uxuyalpha/core'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getGasPrice } from '@uxuyalpha/core'
import { mainnet } from '@uxuyalpha/core/chains'
import { config } from './config'

const gasPrice = await getGasPrice(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetGasPriceReturnType } from '@uxuyalpha/core'
```

`bigint`

Current price of gas (in wei).

## Error

```ts
import { type GetGasPriceErrorType } from '@uxuyalpha/core'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getGasPrice`](https://viem.sh/docs/actions/public/getGasPrice.html)
