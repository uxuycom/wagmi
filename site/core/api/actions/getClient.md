# getClient

Action for getting Viem [`Client`](https://viem.sh/docs/clients/custom.html) instance.

## Import

```ts
import { getClient } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getClient } from '@uxuyalpha/core'
import { config } from './config'

const client = getClient(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetClientParameters } from '@uxuyalpha/core'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when getting Viem Client.

::: code-group
```ts [index.ts]
import { getClient } from '@uxuyalpha/core'
import { mainnet } from '@uxuyalpha/core/chains'
import { config } from './config'

const client = await getClient(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetClientReturnType } from '@uxuyalpha/core'
```

`Client`

Viem [`Client`](https://viem.sh/docs/clients/custom.html) instance.
