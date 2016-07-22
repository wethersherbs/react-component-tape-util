import React from 'react'
import test, { renderJsx } from '.'

// Tests based entirely on react react-addons-test-utils'.

const MyComponent = ({ color }) => {
  const className = `box color-${color}`
  return <div className={className}></div>
}

test('MyComponent is properly rendered', t => {
  const result = renderJsx(<MyComponent color='red' />)
  t.jsxEquals(result, <div className='box color-red'></div>)

  t.end()
})
