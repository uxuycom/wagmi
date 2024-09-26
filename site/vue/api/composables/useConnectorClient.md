---
title: useConnectorClient
description: Composable for getting a Viem `Client` object for the current or provided connector.
---

<script setup>
const packageName = '@uxuyalpha/vue'
const actionName = 'getConnectorClient'
const typeName = 'GetConnectorClient'
const TData = 'Client'
const TError = 'GetConnectorClientErrorType'
const hideQueryOptions = ['gcTime', 'staleTime']
</script>

# useConnectorClient

Composable for getting a Viem [`Client`](https://viem.sh/docs/clients/custom.html) object for the current or provided connector.

## Import

```ts
import { useConnectorClient } from '@uxuyalpha/vue'
```

## Usage

::: code-group
```vue [index.vue]
<script setup lang="ts">
import { useConnectorClient } from '@uxuyalpha/vue'

const result = useConnectorClient()
</script>
```
<<< @/snippets/vue/config.ts[config.ts]
:::

## Parameters

```ts
import { type UseConnectorClientParameters } from '@uxuyalpha/vue'
```

### account

`Address | Account | undefined`

Account to use with client. Throws if account is not found on [`connector`](#connector).

```vue
<script setup lang="ts">
import { useConnectorClient } from '@uxuyalpha/vue'

const result = useConnectorClient({
  account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', // [!code focus]
})
</script>
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use with client.

```vue
<script setup lang="ts">
import { useConnectorClient } from '@uxuyalpha/vue'

const result = useConnectorClient({
  chainId: mainnet.id, // [!code focus]
})
</script>
```

### config

`Config | undefined`

[`Config`](/react/api/createConfig#config) to use instead of retrieving from the from nearest [`WagmiProvider`](/react/api/WagmiProvider).

::: code-group
```vue [index.vue]
<script setup lang="ts">
import { useConnectorClient } from '@uxuyalpha/vue'
import { config } from './config' // [!code focus]

const result = useConnectorClient({
  config, // [!code focus]
})
</script>
```
<<< @/snippets/vue/config.ts[config.ts]
:::

### connector

`Connector | undefined`

- Connector to get client for.
- Defaults to current connector.

```vue
<script setup lang="ts">
import { useConnections, useConnectorClient } from '@uxuyalpha/vue'

const connections = useConnections(config)
const result = useConnectorClient({
  connector: connections[0]?.connector, // [!code focus]
})
</script>
```

<!--@include: @shared/query-options.md-->

## Return Type

```ts
import { type UseConnectorClientReturnType } from '@uxuyalpha/vue'
```

<!--@include: @shared/query-result.md-->

<!--@include: @shared/query-imports.md-->

## Action

- [`getConnectorClient`](/core/api/actions/getConnectorClient)
