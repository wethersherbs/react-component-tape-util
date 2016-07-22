'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderJsx = undefined;

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _extendTape = require('extend-tape');

var _extendTape2 = _interopRequireDefault(_extendTape);

var _tapeJsxEquals = require('tape-jsx-equals');

var _tapeJsxEquals2 = _interopRequireDefault(_tapeJsxEquals);

var _reactAddonsTestUtils = require('react-addons-test-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extendTape2.default)(_tape2.default, { jsxEquals: _tapeJsxEquals2.default });
const renderJsx = exports.renderJsx = component => {
  const renderer = (0, _reactAddonsTestUtils.createRenderer)();
  renderer.render(component);
  return renderer.getRenderOutput();
};

