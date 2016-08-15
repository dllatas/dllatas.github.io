'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _components = require('./components.js');

var Components = _interopRequireWildcard(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ id: "1", project: "facial emotion detection using deep learning", desc: "asdf" }, { id: "2", project: "MoNAD", desc: "asdf" }, { id: "3", project: "bot twitter account detection", desc: "asdf" }, { id: "4", project: "eese data", desc: "asdf" }, { id: "5", project: "the flying dutchman", desc: "asdf" }, { id: "6", project: "brick breaker", desc: "asdf" }, { id: "7", project: "metAleph", desc: "asdf" }, { id: "8", project: "resolana", desc: "asdf" }, { id: "9", project: "wijkmanska blecket", desc: "asdf" }];

_reactDom2.default.render(_react2.default.createElement('div', null, _react2.default.createElement(Components.Jumbotron, { heading: "welcome!", bio: "the broad spectrum of life seduces me" }), _react2.default.createElement(Components.Row12, { project: "daniel llatas spiers", desc: "lima, peru (1989 - 2014) uppsala, sweden (2014 - today)" }), _react2.default.createElement(Components.Row6, { data: data })), document.getElementById('container'));
//# sourceMappingURL=maps/app.js.map
//# sourceMappingURL=maps/app.js.map
