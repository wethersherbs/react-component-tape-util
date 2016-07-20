# React Component Tape Util

Tape wrapper for testing React components without the boilerplate

### Example
```js
import React from 'react'
import { test, renderJsx } from 'react-component-tape-util'

import HelloWorld from './HelloWorld' // () => <h1>Hello, world!</h1>

test('component.HelloWorld', assert => {
  const expected = <h1>Hello, world!</h1>
  const actual = renderJsx(<HelloWorld />)

  // jsxEquals is now included in the assert library
  assert.jsxEquals(actual, expected, 'should render correctly')
})
```
