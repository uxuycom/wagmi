# createConnector

Creates new [`CreateConnectorFn`](#parameters).

## Import

```ts
import { createConnector } from '@tg-wagmi/core'
```

## Usage

```ts
import { createConnector } from '@tg-wagmi/core'

export type InjectedParameters = {}

export function injected(parameters: InjectedParameters = {}) {
  return createConnector((config) => ({
    // ...
  }))
}
```

## Parameters

```ts
import { type CreateConnectorFn } from '@tg-wagmi/core'
```

Read [Creating Connectors](/dev/creating-connectors) for more info on the `CreateConnectorFn` type.