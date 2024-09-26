import path from 'node:path'
import { defineWorkspace } from 'vitest/config'

const alias = {
  '@tg-wagmi/connectors': path.resolve(
    __dirname,
    './packages/connectors/src/exports',
  ),
  '@tg-wagmi/core': path.resolve(__dirname, './packages/core/src/exports'),
  '@tg-wagmi/test': path.resolve(__dirname, './packages/test/src/exports'),
  '@tg-wagmi/vue': path.resolve(__dirname, './packages/vue/src/exports'),
  wagmi: path.resolve(__dirname, './packages/react/src/exports'),
}

export default defineWorkspace([
  {
    test: {
      name: '@tg-wagmi/cli',
      environment: 'node',
      include: ['./packages/cli/src/**/*.test.ts'],
      testTimeout: 10_000,
      setupFiles: ['./packages/cli/test/setup.ts'],
    },
  },
  {
    test: {
      name: '@tg-wagmi/connectors',
      include: ['./packages/connectors/src/**/*.test.ts'],
      environment: 'happy-dom',
    },
    resolve: { alias },
  },
  {
    test: {
      name: '@tg-wagmi/core',
      include: ['./packages/core/src/**/*.test.ts'],
      environment: 'happy-dom',
      testTimeout: 10_000,
      setupFiles: ['./packages/core/test/setup.ts'],
    },
    resolve: { alias },
  },
  {
    test: {
      name: 'create-wagmi',
      include: ['./packages/create-wagmi/src/**/*.test.ts'],
      environment: 'node',
      testTimeout: 10_000,
    },
  },
  {
    test: {
      name: 'wagmi',
      include: ['./packages/react/src/**/*.test.ts?(x)'],
      environment: 'happy-dom',
      testTimeout: 10_000,
      setupFiles: ['./packages/react/test/setup.ts'],
    },
    resolve: { alias },
  },
  {
    test: {
      name: '@tg-wagmi/vue',
      include: ['./packages/vue/src/**/*.test.ts?(x)'],
      environment: 'happy-dom',
      testTimeout: 10_000,
      setupFiles: ['./packages/vue/test/setup.ts'],
    },
    resolve: { alias },
  },
  {
    test: {
      name: 'react-register',
      include: ['./packages/register-tests/react/src/**/*.test.ts'],
    },
    resolve: { alias },
  },
  {
    test: {
      name: '@tg-wagmi/test',
      include: ['./packages/test/src/**/*.test.ts'],
    },
    resolve: { alias },
  },
])
