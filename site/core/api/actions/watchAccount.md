# watchAccount

Subscribe to account changes.

## Import

```ts
import { watchAccount } from '@tg-wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { watchAccount } from '@tg-wagmi/core'
import { config } from './config'

const unwatch = watchAccount(config, {
  onChange(data) {
    console.log('Account changed!', data)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchAccountParameters } from '@tg-wagmi/core'
```

### onChange

`onChange(account: GetAccountReturnType, prevAccount: GetAccountReturnType): void`

Callback function called when account changes.

::: code-group
```ts [index.ts]
import { watchAccount } from '@tg-wagmi/core'
import { config } from './config'

const unwatch = watchAccount(config, {
  onChange(account) { // [!code focus:3]
    console.log('Account changed!', account)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchAccountReturnType } from '@tg-wagmi/core'
```

Function for cleaning up watcher.