<script setup>
const packageName = '@uxuyalpha/core'
const actionName = 'disconnect'
const typeName = 'Disconnect'
</script>

# disconnect

Action for disconnecting connections.

## Import

```ts
import { disconnect } from '@uxuyalpha/core'
```

## Usage

::: code-group
```ts [index.ts]
import { disconnect } from '@uxuyalpha/core'
import { config } from './config'

await disconnect(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type DisconnectParameters } from '@uxuyalpha/core'
```

### connector

`Connector | undefined`

[Connector](/core/api/connectors) to disconnect with.

::: code-group
```ts [index.ts]
import { disconnect, getAccount } from '@uxuyalpha/core'
import { config } from './config'

const { connector } = getAccount(config)
const result = await disconnect(config, {
  connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Error

```ts
import { type DisconnectErrorType } from '@uxuyalpha/core'
```

<!--@include: @shared/mutation-imports.md-->
