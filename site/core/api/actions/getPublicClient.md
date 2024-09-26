# getPublicClient

Action for getting Viem [`PublicClient`](https://viem.sh/docs/clients/public.html) instance.

## Import

```ts
import { getPublicClient } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getPublicClient } from '@uxuyalpha/core'
import { config } from './config'

const client = getPublicClient(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

::: warning
If you want to optimize bundle size, you should use [`getClient`](/core/api/actions/getClient) along with Viem's [tree-shakable actions](https://viem.sh/docs/clients/custom.html#tree-shaking) instead. Since Public Client has all public actions attached directly to it.
:::

## Parameters

```ts
import { type GetClientParameters } from '@uxuyalpha/core'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when getting Viem Public Client.

::: code-group
```ts [index.ts]
import { getPublicClient } from '@uxuyalpha/core'
import { mainnet } from '@uxuyalpha/core/chains'
import { config } from './config'

const client = getPublicClient(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetPublicClientReturnType } from '@uxuyalpha/core'
```

`PublicClient | undefined`

Viem [`PublicClient`](https://viem.sh/docs/clients/public.html) instance.
