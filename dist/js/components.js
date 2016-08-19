'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row6 = exports.Row12 = exports.Line6 = exports.Line12 = exports.ProjectModal = exports.Project = exports.Desc = exports.Jumbotron = exports.Heading = exports.Subheader2 = exports.Subheader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _content = require('./content.js');

var Content = _interopRequireWildcard(_content);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//export const Subheader = (props) => <p className='lead text-left sub-header'>{props.text}</p>

var Subheader = exports.Subheader = function Subheader(props) {
    return _react2.default.createElement('p', { className: 'sub-header text-left ' }, props.text);
};

var Subheader2 = exports.Subheader2 = function Subheader2(props) {
    return _react2.default.createElement('p', { className: 'sub-header-2 text-left' }, props.text);
};

var Heading = exports.Heading = function Heading(props) {
    return _react2.default.createElement('h1', { className: 'text-left' }, props.heading);
};

var Jumbotron = exports.Jumbotron = function Jumbotron(props) {
    return _react2.default.createElement('div', { className: 'jumbotron' }, _react2.default.createElement(Heading, { heading: props.heading }), _react2.default.createElement(Subheader, { text: props.name }), props.misc.map(function (misc) {
        return _react2.default.createElement(Subheader2, { key: misc, text: misc });
    }));
};

var Desc = exports.Desc = function Desc(props) {
    return _react2.default.createElement('p', { className: 'text-justify project-desc' }, props.desc);
};

var Project = exports.Project = function Project(props) {
    return _react2.default.createElement('h4', { className: 'project-title' }, _react2.default.createElement('strong', null, props.project));
};

var ProjectModal = exports.ProjectModal = function (_React$Component) {
    _inherits(ProjectModal, _React$Component);

    function ProjectModal(props) {
        _classCallCheck(this, ProjectModal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectModal).call(this, props));

        _this.state = {
            showModal: false, project: "", desc: "", date: "", task: [], url: [] };
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(ProjectModal, [{
        key: 'update',
        value: function update() {
            var el = event.target;
            var children = el.children;
            if (children.length === 0) {
                el = event.target.parentElement;
                children = el.children;
            }
            var project = Content.detail.filter(function (detail) {
                return detail.project === children[0].innerText;
            });
            this.setState({ showModal: true, project: project[0].project,
                desc: project[0].content, date: project[0].date, task: project[0].task, url: project[0].url });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({ showModal: true });
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({ showModal: false });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var projectElements = document.getElementsByClassName("project");
            for (var i = 0; i < projectElements.length; i++) {
                projectElements[i].addEventListener('click', this.update, false);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Modal, { show: this.state.showModal, onHide: this.close }, _react2.default.createElement(_reactBootstrap.Modal.Header, { closeButton: true }, _react2.default.createElement(_reactBootstrap.Modal.Title, { className: 'text-center modal-header-title' }, this.state.project)), _react2.default.createElement(_reactBootstrap.Modal.Body, null, _react2.default.createElement('h4', { className: 'modal-body-title' }, 'When?'), _react2.default.createElement('p', { className: 'modal-body-desc' }, this.state.date), _react2.default.createElement('p', null, this.state.url.map(function (url) {
                return _react2.default.createElement('a', { key: url.key, target: '_blank', href: url.link }, url.label, '. ');
            })), _react2.default.createElement('hr', null), _react2.default.createElement('h4', { className: 'modal-body-title' }, 'What?'), _react2.default.createElement('p', { className: 'modal-body-desc' }, this.state.desc), _react2.default.createElement('hr', null), _react2.default.createElement('h4', { className: 'modal-body-title' }, 'Collaboration'), this.state.task.map(function (task) {
                return _react2.default.createElement('p', { className: 'modal-body-desc', key: task }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-right', 'aria-hidden': 'true' }), task);
            }))));
        }
    }]);

    return ProjectModal;
}(_react2.default.Component);

;

var Line12 = exports.Line12 = function Line12(props) {
    return _react2.default.createElement('article', { className: 'col-lg-12' }, _react2.default.createElement(Project, { project: props.project }), props.desc.map(function (desc) {
        return _react2.default.createElement(Desc, { key: desc, desc: desc });
    }));
};

var Line6 = exports.Line6 = function Line6(props) {
    return _react2.default.createElement('article', { className: 'col-lg-6 project' }, _react2.default.createElement(Project, { project: props.project }), _react2.default.createElement(Desc, { desc: props.desc }));
};

var Row12 = exports.Row12 = function Row12(props) {
    return _react2.default.createElement('div', { className: 'row marketing' }, _react2.default.createElement(Line12, { project: props.project, desc: props.desc }));
};

var Row6 = exports.Row6 = function Row6(props) {
    return _react2.default.createElement('div', { className: 'row marketing' }, props.data.map(function (data) {
        return _react2.default.createElement(Line6, { key: data.id, project: data.project, desc: data.desc });
    }));
};
//# sourceMappingURL=maps/components.js.map
//# sourceMappingURL=maps/components.js.map
