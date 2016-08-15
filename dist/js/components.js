'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row6 = exports.Row12 = exports.Line6 = exports.Line12 = exports.Project = exports.Desc = exports.Jumbotron = exports.Heading = exports.Bio = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bio = exports.Bio = function Bio(props) {
    return _react2.default.createElement('p', { className: 'lead' }, props.bio);
};

var Heading = exports.Heading = function Heading(props) {
    return _react2.default.createElement('h1', null, props.heading);
};

var Jumbotron = exports.Jumbotron = function Jumbotron(props) {
    return _react2.default.createElement('div', { className: 'jumbotron' }, _react2.default.createElement(Heading, { heading: props.heading }), _react2.default.createElement(Bio, { bio: props.bio }));
};

var Desc = exports.Desc = function Desc(props) {
    return _react2.default.createElement('p', null, props.desc);
};

var Project = exports.Project = function Project(props) {
    return _react2.default.createElement('h4', null, props.project);
};

var Line12 = exports.Line12 = function Line12(props) {
    return _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement(Project, { project: props.project }), _react2.default.createElement(Desc, { desc: props.desc }));
};

var Line6 = exports.Line6 = function Line6(props) {
    return _react2.default.createElement('div', { className: 'col-lg-6' }, _react2.default.createElement(Project, { project: props.project }), _react2.default.createElement(Desc, { desc: props.desc }));
};

var Row12 = exports.Row12 = function Row12(props) {
    return _react2.default.createElement('div', { className: 'row marketing' }, _react2.default.createElement(Line12, { project: props.project, desc: props.desc }));
};

var Row6 = exports.Row6 = function Row6(props) {
    return _react2.default.createElement('div', { key: '0', className: 'row marketing' }, props.data.map(function (data) {
        return _react2.default.createElement(Line6, { key: data.id, project: data.project, desc: data.desc });
    }));
};

/*
var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});
*/
//# sourceMappingURL=maps/components.js.map
//# sourceMappingURL=maps/components.js.map
