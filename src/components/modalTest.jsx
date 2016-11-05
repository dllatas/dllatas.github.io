import React from 'react';
import { Modal } from 'react-bootstrap';

/* Import content */
import * as Content from '../content.js';

const ModalWhen = (props) => (
    <section>
        <h4 className="modal-body-title">When?</h4>
        <p className="modal-body-desc">{props.date}</p>
        <p>
        {
            props.url.map((url) => {
                return <a key={url.key} target="_blank" href={url.link}>{url.label}. </a>
            })
        }
        </p>
        <hr />
    </section>
)

const ModalWhat = (props) => (
    <section>
        <h4 className="modal-body-title">What?</h4>
        <p className="modal-body-desc">{props.desc}</p>
        <hr />
    </section>
)

const ModalCollab = (props) => (
    <section>
        <h4 className="modal-body-title">Collaboration</h4>
        {
            props.task.map(function(task) {
                return (
                    <p className="modal-body-desc" key={task}>
                        <span className="glyphicon glyphicon-menu-right" aria-hidden="true">
                        </span>
                        {task}
                    </p>);
            })
        }
    </section>
)

const ModalBody = (props) => (
    <Modal.Body>
        <ModalWhen date={props.date} url={props.url} />
        <ModalWhat desc={props.desc} />
        <ModalCollab task={props.task} />
    </Modal.Body>
)

const ModalHeader = (props) => (
    <Modal.Header closeButton>
        <Modal.Title className="text-center modal-header-title">
            {props.project}
        </Modal.Title>
    </Modal.Header>
)

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            currentProject: {}
        };

    }

    render() {
        return (
            <Modal show={true} onHide={this.props.closePortal}>
                <ModalHeader project={"project"} />
                <ModalBody date={"date"} url={"date"} desc={"date"} task={[1,2,3]} />
            </Modal>
        );
    }
};