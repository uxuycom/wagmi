import { config } from '@tg-wagmi/test'
import { expect, test } from 'vitest'

import { getConnectors } from './getConnectors.js'

test('default', () => {
  expect(getConnectors(config)).toEqual(config.connectors)
})
