# getChains

Action for getting configured chains.

## Import

```ts
import { getChains } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getChains } from '@uxuyalpha/core'
import { config } from './config'

const chains = getChains(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetChainsReturnType } from '@uxuyalpha/core'
```

`readonly [Chain, ...Chain[]]`

Chains from [`config.chains`](/core/api/createConfig#chains).
