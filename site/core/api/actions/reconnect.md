<script setup>
const packageName = '@tg-wagmi/core'
const actionName = 'reconnect'
const typeName = 'Reconnect'
</script>

# reconnect

Action for reconnecting [connectors](/core/api/connectors).

## Import

```ts
import { reconnect } from '@tg-wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { reconnect } from '@tg-wagmi/core'
import { injected } from '@tg-wagmi/connectors'
import { config } from './config'

const result = await reconnect(config, { connectors: [injected()] })
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type ReconnectParameters } from '@tg-wagmi/core'
```

### connectors

`(CreateConnectorFn | Connector)[] | undefined`

- [Connectors](/core/api/connectors) to reconnect to.
- Defaults to [`Config['connectors']`](/core/api/createConfig#connectors).

::: code-group
```ts [index.ts]
import { reconnect } from '@tg-wagmi/core'
import { injected } from '@tg-wagmi/connectors'
import { config } from './config'

const result = await reconnect(config, {
    connectors: [injected()], // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type ReconnectReturnType } from '@tg-wagmi/core'
```

`Connection[]`

[Connections](/core/api/createConfig#connection) that were successfully reconnected.

## Error

```ts
import { type ReconnectErrorType } from '@tg-wagmi/core'
```

<!--@include: @shared/mutation-imports.md-->
