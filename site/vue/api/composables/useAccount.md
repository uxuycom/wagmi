---
title: useAccount
description: Composable for getting current account.
---

# useAccount

Composable for getting current account.

## Import

```ts
import { useAccount } from '@tg-wagmi/vue'
```

## Usage

::: code-group
```vue twoslash [index.vue]
<script setup lang="ts">
// ---cut-start---
// @errors: 2322
import { type Config } from '@tg-wagmi/vue'
import { mainnet, sepolia } from '@tg-wagmi/vue/chains'

declare module '@tg-wagmi/vue' {
  interface Register {
    config: Config<readonly [typeof mainnet, typeof sepolia]>
  }
}
// ---cut-end---
import { useAccount } from '@tg-wagmi/vue'

const account = useAccount()
</script>

<template>
  Address: {{ account.address }}
</template>
```
<<< @/snippets/vue/config.ts[config.ts]
:::

## Parameters

```ts twoslash
import { type UseAccountParameters } from '@tg-wagmi/vue'
```

### config

`Config | undefined`

[`Config`](/vue/api/createConfig#config) to use instead of retrieving from the from nearest [`WagmiPlugin`](/vue/api/WagmiPlugin).

::: code-group
```vue [index.vue]
<script setup lang="ts">
import { useAccount } from '@tg-wagmi/vue'
import { config } from './config' // [!code focus]

const account = useAccount({
  config, // [!code focus]
})
</script>
```
<<< @/snippets/vue/config.ts[config.ts]
:::

## Return Type

```ts twoslash
import { type UseAccountReturnType } from '@tg-wagmi/vue'
```

<!--@include: @shared/getAccount-return-type.md-->

## Action

- [`getAccount`](/core/api/actions/getAccount)
