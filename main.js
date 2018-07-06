import tape from 'tape'
import addAssertions from 'extend-tape'
import ShallowRenderer from 'react-test-renderer/shallow'
import reactElementToJsxString from 'react-element-to-jsx-string';

const jsxEquals = function (element1, element2, message) {
  this.equals(
    reactElementToJsxString(element1),
    reactElementToJsxString(element2),
    message
  )
}

export default addAssertions(tape, { jsxEquals })

export const renderJsx = component => {
  const renderer = new ShallowRenderer()
  renderer.render(component)

  return renderer.getRenderOutput()
}
