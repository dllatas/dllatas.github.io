import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Content from './content.js';

export const Bio = props => React.createElement(
    'p',
    { className: 'lead' },
    props.bio
);

export const Heading = props => React.createElement(
    'h1',
    null,
    props.heading
);

export const Jumbotron = props => React.createElement(
    'div',
    { className: 'jumbotron' },
    React.createElement(Heading, { heading: props.heading }),
    React.createElement(Bio, { bio: props.bio })
);

export const Desc = props => React.createElement(
    'p',
    { className: 'text-justify' },
    props.desc
);

export const Project = props => React.createElement(
    'h4',
    null,
    props.project
);

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, project: "", desc: "", task: "", date: "", task: [] };
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
        /* Nasty thingy to be modular */
        let project = Content.detail.filter(index => {
            return index.project === children[0].innerText;
        });
        this.setState({ showModal: true, project: project[0].project,
            desc: project[0].content, date: project[0].date, task: project[0].task });
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
                        null,
                        this.state.project
                    )
                ),
                React.createElement(
                    Modal.Body,
                    null,
                    React.createElement(
                        'p',
                        null,
                        this.state.date
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'p',
                        null,
                        this.state.desc
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'h4',
                        null,
                        'Tasks'
                    ),
                    this.state.task.map(function (task) {
                        return React.createElement(
                            'p',
                            null,
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
    React.createElement(Desc, { desc: props.desc })
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
