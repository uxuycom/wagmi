# getChains

Action for getting configured chains.

## Import

```ts
import { getChains } from '@tg-wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getChains } from '@tg-wagmi/core'
import { config } from './config'

const chains = getChains(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetChainsReturnType } from '@tg-wagmi/core'
```

`readonly [Chain, ...Chain[]]`

Chains from [`config.chains`](/core/api/createConfig#chains).
