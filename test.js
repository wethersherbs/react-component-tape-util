import React from 'react'
import test, { renderJsx } from '.'

const MyComponent = ({ color }) => {
  const className = `box color-${color}`
  return <div className={className}></div>
}

test('MyComponent is properly rendered', t => {
  const result = renderJsx(<MyComponent color='red' />)
  t.jsxEquals(result, <div className='box color-red'></div>)

  t.end()
})
