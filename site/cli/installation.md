# Installation

Install Wagmi CLI via your package manager.

## Package Manager

Install the required package.

::: code-group
```bash [pnpm]
pnpm add @uxuyalpha/cli
```

```bash [npm]
npm install @uxuyalpha/cli
```

```bash [yarn]
yarn add @uxuyalpha/cli
```

```bash [bun]
bun add @uxuyalpha/cli
```
:::

## Using Unreleased Commits

If you can't wait for a new release to test the latest features, you can either install from the `canary` tag (tracks the [`main`](https://github.com/wevm/wagmi/tree/main) branch).

::: code-group
```bash [pnpm]
pnpm add @uxuyalpha/cli@canary
```

```bash [npm]
npm install @uxuyalpha/cli@canary
```

```bash [yarn]
yarn add @uxuyalpha/cli@canary
```

```bash [bun]
bun add @uxuyalpha/cli@canary
```
:::

Or clone the [Wagmi repo](https://github.com/wevm/wagmi) to your local machine, build, and link it yourself.

```bash
git clone https://github.com/wevm/wagmi.git
cd wagmi
pnpm install
pnpm build
cd packages/cli
pnpm link --global
```

Then go to the project where you are using the Wagmi CLI and run `pnpm link --global @uxuyalpha/cli` (or the package manager that you used to link Wagmi CLI globally).