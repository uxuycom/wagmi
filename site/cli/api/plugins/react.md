# react

Plugin for generating type-safe [Wagmi Hooks](/react/api/hooks).

## Import

```ts
import { react } from '@tg-wagmi/cli/plugins'
```

## Usage

```ts{2,6}
import { defineConfig } from '@tg-wagmi/cli'
import { react } from '@tg-wagmi/cli/plugins'

export default defineConfig({
  plugins: [
    react(),
  ],
})
```

## Configuration

```ts
import { type ReactConfig } from '@tg-wagmi/cli/plugins'
```

### getHookName

`` 'legacy' | ((options: { contractName: string; type: 'read' | 'simulate' | 'watch' | 'write' }) => `use${string}`) ``

- Function for setting custom hook names.
- Defaults to `` `use${type}${contractName}` ``. For example, `useReadErc20`, `useSimulateErc20`, `useWatchErc20Event`, `useWriteErc20`.
- When `'legacy'` (deprecated), hook names are set to `@tg-wagmi/cli@1` format.

```ts
import { defineConfig } from '@tg-wagmi/cli'
import { react } from '@tg-wagmi/cli/plugins'

export default defineConfig({
  plugins: [
    react({
      getHookName({ contractName, type }) { // [!code focus]
        return `use${contractName}__${type}` // [!code focus]
      }, // [!code focus]
    }),
  ],
})
```

