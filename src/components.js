import React from 'react';
import { Modal } from 'react-bootstrap';

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
        this.state = { showModal: false };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
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
                        'Modal heading'
                    )
                ),
                React.createElement(
                    Modal.Body,
                    null,
                    React.createElement(
                        'h4',
                        null,
                        this.props.project
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.props.desc
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'h4',
                        null,
                        'Tasks'
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.props.task
                    )
                )
            )
        );
    }
};

export const Launch = props => React.createElement(
    'button',
    { onClick: ProjectModal.open },
    'Launch demo modal'
);

export const Line12 = props => React.createElement(
    'article',
    { className: 'col-lg-12' },
    React.createElement(Project, { project: props.project }),
    React.createElement(Desc, { desc: props.desc })
);

export const Line6 = props => React.createElement(
    'article',
    { className: 'col-lg-6' },
    React.createElement(Project, { project: props.project, desc: "asdf", task: "asdf" }),
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

/*
<Modal.Footer>
    <Button onClick={this.close}>Close</Button>
</Modal.Footer>
<Button bsStyle="primary" bsSize="large"onClick={this.open}>Launch demo modal</Button>
const popover = (
    <Popover id="modal-popover" title="popover">very popover.</Popover>
);
const tooltip = (
    <Tooltip id="modal-tooltip">wow.</Tooltip>
);
*/
//# sourceMappingURL=maps/components.js.map
