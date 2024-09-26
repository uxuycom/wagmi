# watchPublicClient

Subscribe to Public Client changes.

## Import

```ts
import { watchPublicClient } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { watchPublicClient } from '@uxuyalpha/core'
import { config } from './config'

const unwatch = watchPublicClient(config, {
  onChange(client) {
    console.log('Public Client changed!', client)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchPublicClientParameters } from '@uxuyalpha/core'
```

### onChange

`onChange(client: GetPublicClientReturnType, prevClient: GetPublicClientReturnType): void`

Callback function called when Public Client changes.

::: code-group
```ts [index.ts]
import { watchPublicClient } from '@uxuyalpha/core'
import { config } from './config'

const unwatch = watchPublicClient(config, {
  onChange(client) { // [!code focus:3]
    console.log('Public Client changed!', client)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchPublicClientReturnType } from '@uxuyalpha/core'
```

Function for cleaning up watcher.