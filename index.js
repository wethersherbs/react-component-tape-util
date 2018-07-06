'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderJsx = undefined;

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _extendTape = require('extend-tape');

var _extendTape2 = _interopRequireDefault(_extendTape);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsxEquals = function jsxEquals(element1, element2, message) {
  this.equals((0, _reactElementToJsxString2.default)(element1), (0, _reactElementToJsxString2.default)(element2), message);
};

exports.default = (0, _extendTape2.default)(_tape2.default, { jsxEquals: jsxEquals });
var renderJsx = exports.renderJsx = function renderJsx(component) {
  var renderer = new _shallow2.default();
  renderer.render(component);

  return renderer.getRenderOutput();
};

