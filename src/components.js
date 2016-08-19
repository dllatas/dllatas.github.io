import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Content from './content.js';

//export const Subheader = (props) => <p className='lead text-left sub-header'>{props.text}</p>

export const Subheader = props => React.createElement(
    'p',
    { className: 'sub-header text-left ' },
    props.text
);

export const Subheader2 = props => React.createElement(
    'p',
    { className: 'sub-header-2 text-left' },
    props.text
);

export const Heading = props => React.createElement(
    'h1',
    { className: 'text-left' },
    props.heading
);

export const Jumbotron = props => React.createElement(
    'div',
    { className: 'jumbotron' },
    React.createElement(Heading, { heading: props.heading }),
    React.createElement(Subheader, { text: props.name }),
    props.misc.map(misc => {
        return React.createElement(Subheader2, { key: misc, text: misc });
    })
);

export const Desc = props => React.createElement(
    'p',
    { className: 'text-justify project-desc' },
    props.desc
);

export const Project = props => React.createElement(
    'h4',
    { className: 'project-title' },
    React.createElement(
        'strong',
        null,
        props.project
    )
);

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, project: "", desc: "", date: "", task: [], url: [] };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.update = this.update.bind(this);
    }
    update() {
        let el = event.target;
        let children = el.children;
        if (children.length === 0) {
            el = event.target.parentElement;
            children = el.children;
        }
        let project = Content.detail.filter(detail => {
            return detail.project === children[0].innerText;
        });
        console.log(project[0].url);
        this.setState({ showModal: true, project: project[0].project,
            desc: project[0].content, date: project[0].date, task: project[0].task, url: project[0].url });
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }
    componentDidMount() {
        const projectElements = document.getElementsByClassName("project");
        for (var i = 0; i < projectElements.length; i++) {
            projectElements[i].addEventListener('click', this.update, false);
        }
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Modal,
                { show: this.state.showModal, onHide: this.close },
                React.createElement(
                    Modal.Header,
                    { closeButton: true },
                    React.createElement(
                        Modal.Title,
                        { className: 'text-center modal-header-title' },
                        this.state.project
                    )
                ),
                React.createElement(
                    Modal.Body,
                    null,
                    React.createElement(
                        'h4',
                        { className: 'modal-body-title' },
                        'When?'
                    ),
                    React.createElement(
                        'p',
                        { className: 'modal-body-desc' },
                        this.state.date
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.state.url.map(url => {
                            return React.createElement(
                                'a',
                                { key: url.key, target: '_blank', href: url.link },
                                url.label,
                                '. '
                            );
                        })
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'h4',
                        { className: 'modal-body-title' },
                        'What?'
                    ),
                    React.createElement(
                        'p',
                        { className: 'modal-body-desc' },
                        this.state.desc
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'h4',
                        { className: 'modal-body-title' },
                        'Collaboration'
                    ),
                    this.state.task.map(function (task) {
                        return React.createElement(
                            'p',
                            { className: 'modal-body-desc', key: task },
                            React.createElement('span', { className: 'glyphicon glyphicon-menu-right', 'aria-hidden': 'true' }),
                            task
                        );
                    })
                )
            )
        );
    }
};

export const Line12 = props => React.createElement(
    'article',
    { className: 'col-lg-12' },
    React.createElement(Project, { project: props.project }),
    props.desc.map(desc => {
        return React.createElement(Desc, { key: desc, desc: desc });
    })
);

export const Line6 = props => React.createElement(
    'article',
    { className: 'col-lg-6 project' },
    React.createElement(Project, { project: props.project }),
    React.createElement(Desc, { desc: props.desc })
);

export const Row12 = props => React.createElement(
    'div',
    { className: 'row marketing' },
    React.createElement(Line12, { project: props.project, desc: props.desc })
);

export const Row6 = props => React.createElement(
    'div',
    { className: 'row marketing' },
    props.data.map(function (data) {
        return React.createElement(Line6, { key: data.id, project: data.project, desc: data.desc });
    })
);
//# sourceMappingURL=maps/components.js.map
