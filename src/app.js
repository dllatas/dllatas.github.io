'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _components = require('./components.js');

var Components = _interopRequireWildcard(_components);

var _content = require('./content.js');

var Content = _interopRequireWildcard(_content);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(Components.Jumbotron, { heading: Content.jumbotron[0].heading,
        name: Content.jumbotron[0].name,
        misc: Content.jumbotron[0].misc }),
    _react2.default.createElement(Components.Row6, { data: Content.main }),
    _react2.default.createElement(Components.ProjectModal, null)
), document.getElementById('container'));
//# sourceMappingURL=maps/app.js.map
