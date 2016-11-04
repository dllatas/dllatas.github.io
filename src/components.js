'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = exports.ProjectModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var LinkedInAStyle = {
    textDecoration: "none",
    paddingRight: '10px'
};

var LinkedInSpanStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "80%",
    color: "#0783B6",
    textDecoration: 'none'
};

var LinkedInImgStyle = {
    verticalAlign: "middle"
};

var HeaderStyle = {
    marginTop: '1%'
};

var JumbotronStyle = {
    marginBottom: '0px',
    paddingBottom: '15px'
};

/* JUMBOTRON */

var Subheader = function Subheader(props) {
    return _react2.default.createElement(
        'p',
        { className: props.styleName },
        props.text
    );
};

var Header = function Header(props) {
    return _react2.default.createElement(
        'h1',
        { className: 'text-center', style: HeaderStyle },
        props.header
    );
};

var LinkedIn = function LinkedIn(props) {
    return _react2.default.createElement(
        'a',
        { target: '_blank', href: 'https://se.linkedin.com/pub/daniel-llatas-spiers/5a/1a8/370', style: LinkedInAStyle },
        _react2.default.createElement(
            'span',
            { style: LinkedInSpanStyle },
            _react2.default.createElement('img', { src: 'https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png',
                width: '20', height: '15', alt: 'LinkedIn profile', style: LinkedInImgStyle }),
            "LinkedIn"
        )
    );
};

var Github = function Github(props) {
    return _react2.default.createElement(
        'a',
        { target: '_blank', href: 'https://github.com/dllatas', style: LinkedInAStyle },
        _react2.default.createElement(
            'span',
            { style: LinkedInSpanStyle },
            _react2.default.createElement('img', { src: './dist/github.png', width: '20', height: '15', alt: 'Github repo', style: LinkedInImgStyle }),
            "Github"
        )
    );
};

var CV = function CV(props) {
    return _react2.default.createElement(
        'a',
        { target: '_blank', href: './dist/cv.pdf', style: LinkedInAStyle },
        _react2.default.createElement(
            'span',
            { style: LinkedInSpanStyle },
            _react2.default.createElement('img', { src: './dist/cv.png', width: '20', height: '15', alt: 'CV file', style: LinkedInImgStyle }),
            "CV"
        )
    );
};

var Main = function Main(props) {
    return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(Header, { header: props.header }),
        _react2.default.createElement(Subheader, { styleName: 'sub-header text-center', text: props.name }),
        props.misc.map(function (misc) {
            return _react2.default.createElement(Subheader, { key: misc, styleName: 'sub-header-2 text-center', text: misc });
        })
    );
};

var Jumbotron = function Jumbotron(props) {
    return _react2.default.createElement(
        'div',
        { className: 'jumbotron', style: JumbotronStyle },
        _react2.default.createElement(Main, { header: props.header, name: props.name, misc: props.misc }),
        _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col-lg-12' },
                _react2.default.createElement(LinkedIn, null),
                _react2.default.createElement(Github, null),
                _react2.default.createElement(CV, null)
            )
        )
    );
};

/* PROJECT LIST*/

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
        value: function update(event) {
            var el = event.target;
            var children = el.children;
            if (children.length === 0) {
                el = event.target.parentElement;
                children = el.children;
            }
            var project = Content.detail.filter(function (detail) {
                return detail.project === children[0].innerHTML;
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
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: this.state.showModal, onHide: this.close },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            { className: 'text-center modal-header-title' },
                            this.state.project
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        _react2.default.createElement(
                            'h4',
                            { className: 'modal-body-title' },
                            'When?'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'modal-body-desc' },
                            this.state.date
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.state.url.map(function (url) {
                                return _react2.default.createElement(
                                    'a',
                                    { key: url.key, target: '_blank', href: url.link },
                                    url.label,
                                    '. '
                                );
                            })
                        ),
                        _react2.default.createElement('hr', null),
                        _react2.default.createElement(
                            'h4',
                            { className: 'modal-body-title' },
                            'What?'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'modal-body-desc' },
                            this.state.desc
                        ),
                        _react2.default.createElement('hr', null),
                        _react2.default.createElement(
                            'h4',
                            { className: 'modal-body-title' },
                            'Collaboration'
                        ),
                        this.state.task.map(function (task) {
                            return _react2.default.createElement(
                                'p',
                                { className: 'modal-body-desc', key: task },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-right', 'aria-hidden': 'true' }),
                                task
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ProjectModal;
}(_react2.default.Component);

;

var Project = function Project(props) {
    return _react2.default.createElement(
        'article',
        { className: 'col-lg-6 project' },
        _react2.default.createElement(
            'h4',
            { className: 'project-title' },
            props.project
        ),
        _react2.default.createElement(
            'p',
            { className: 'text-justify project-desc' },
            props.desc
        )
    );
};

var ProjectList = function ProjectList(props) {
    return _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        props.data.map(function (data) {
            return _react2.default.createElement(Project, _extends({ key: data.id }, data));
        }),
        _react2.default.createElement(ProjectModal, null)
    );
};

var App = exports.App = function App(props) {
    return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
            'section',
            { className: 'container-fluid' },
            _react2.default.createElement(Jumbotron, { header: props.header, name: props.name, misc: props.misc })
        ),
        _react2.default.createElement(
            'section',
            { className: 'container' },
            _react2.default.createElement(
                'div',
                { className: 'row marketing' },
                _react2.default.createElement(ProjectList, { data: props.data, detail: props.detail })
            )
        )
    );
};

// <div className="col-lg-10 col-lg-offset-2 main">
// <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
// <AsideBar />
// <div className="col-lg-10 col-lg-offset-2">
//# sourceMappingURL=maps/components.js.map
