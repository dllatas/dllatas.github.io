import React from 'react';
import { Modal } from 'react-bootstrap';

export const Bio = (props) => <p className='lead'>{props.bio}</p>

export const Heading = (props) => <h1>{props.heading}</h1>

export const Jumbotron = (props) => (
        <div className="jumbotron">
            <Heading heading={props.heading}/>
            <Bio bio={props.bio}/>
        </div>
)

export const Desc = (props) => <p className="text-justify">{props.desc}</p>

export const Project = (props) => <h4>{props.project}</h4>

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
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
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.props.project}</h4>
                        <p>{this.props.desc}</p>
                        <hr />
                        <h4>Tasks</h4>
                        <p>{this.props.task}</p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

export const Launch = (props) => <button onClick={ProjectModal.open}>Launch demo modal</button>

export const Line12 = (props) => (
    <article className="col-lg-12">
        <Project project={props.project}/>
        <Desc desc={props.desc}/>
    </article>
)

export const Line6 = (props) => (
    <article className="col-lg-6">
        <Project project={props.project} desc={"asdf"} task={"asdf"}/>
        <Desc desc={props.desc}/>
    </article>
)

export const Row12 = (props) => (
    <div className="row marketing">
        <Line12 project={props.project} desc={props.desc} />
    </div>
)

export const Row6 = (props) => (
    <div className="row marketing">
        {props.data.map(function(data) {
           return <Line6 key={data.id} project={data.project} desc={data.desc} />
        })}
    </div>
)

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