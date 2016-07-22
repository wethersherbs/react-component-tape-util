import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
import { createRenderer } from 'react-addons-test-utils'

export default addAssertions(tape, { jsxEquals })

export const renderJsx = component => {
  const renderer = createRenderer()
  renderer.render(component)
  return renderer.getRenderOutput()
}
