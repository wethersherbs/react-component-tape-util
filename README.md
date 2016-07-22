# `react-component-tape-util` [![Build Status](https://travis-ci.org/wethersherbs/react-component-tape-util.svg?branch=master)](https://travis-ci.org/wethersherbs/react-component-tape-util)

A tape wrapper for testing React components.

This package ties together `react-addons-test-utils` and `tape-jsx-equals` for your React testing. The default export is Tape with `jsxEquals()` added to the test object. The `renderJsx` export is a function that will render JSX components that can then
be checked with the `jsxEquals` test.

`npm install react-component-tape-util`

## Usage

```js
import React from 'react'
import test, { renderJsx } from 'react-component-tape-util'

const HelloWorld = () => <h1>Hello, world!</h1>

test('component.HelloWorld', assert => {
  const expected = <h1>Hello, world!</h1>
  const actual = renderJsx(<HelloWorld />)

  // jsxEquals is now included in the assert library
  assert.jsxEquals(actual, expected, 'should render correctly')
})
```
