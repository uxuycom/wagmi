import path from 'node:path'
import { defineWorkspace } from 'vitest/config'

const alias = {
  '@uxuyalpha/connectors': path.resolve(
    __dirname,
    './packages/connectors/src/exports',
  ),
  '@uxuyalpha/core': path.resolve(__dirname, './packages/core/src/exports'),
  '@uxuyalpha/test': path.resolve(__dirname, './packages/test/src/exports'),
  '@uxuyalpha/vue': path.resolve(__dirname, './packages/vue/src/exports'),
  wagmi: path.resolve(__dirname, './packages/react/src/exports'),
}

export default defineWorkspace([
  {
    test: {
      name: '@uxuyalpha/cli',
      environment: 'node',
      include: ['./packages/cli/src/**/*.test.ts'],
      testTimeout: 10_000,
      setupFiles: ['./packages/cli/test/setup.ts'],
    },
  },
  {
    test: {
      name: '@uxuyalpha/connectors',
      include: ['./packages/connectors/src/**/*.test.ts'],
      environment: 'happy-dom',
    },
    resolve: { alias },
  },
  {
    test: {
      name: '@uxuyalpha/core',
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
      name: '@uxuyalpha/vue',
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
      name: '@uxuyalpha/test',
      include: ['./packages/test/src/**/*.test.ts'],
    },
    resolve: { alias },
  },
])
