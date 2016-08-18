import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Content from './content.js';

//export const Subheader = (props) => <p className='lead text-left sub-header'>{props.text}</p>

export const Subheader = (props) => <p className='sub-header text-left '>{props.text}</p>

export const Subheader2 = (props) => <p className='sub-header-2 text-left'>{props.text}</p>

export const Heading = (props) => <h1 className='text-right'>{props.heading}</h1>

export const Jumbotron = (props) => (
        <div className="jumbotron">
            <Heading heading={props.heading}/>
            <Subheader text={props.name}/>
            {props.misc.map( (misc) => {
                return <Subheader2 key={misc} text={misc}/>
            })}
        </div>
)

export const Desc = (props) => <p className="text-justify project-desc">{props.desc}</p>

export const Project = (props) => <h4 className="project-title"><strong>{props.project}</strong></h4>

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false, project: "", desc: "", task: "", date: "", task: []};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.update = this.update.bind(this);
    }
    update() {
        let el = event.target;
        let children = el.children;
        if (children.length===0) {
            el = event.target.parentElement;
            children = el.children;
        }
        let project = Content.detail.filter((index) => {
            return index.project === children[0].innerText;
        });
        this.setState({ showModal: true, project: project[0].project,
            desc: project[0].content, date: project[0].date, task: project[0].task});
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }
    componentDidMount() {
        const projectElements = document.getElementsByClassName("project");
        for (var i=0; i<projectElements.length; i++) {
            projectElements[i].addEventListener('click', this.update, false);
        }
    }
    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.project}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.date}</p>
                        <hr />
                        <p>{this.state.desc}</p>
                        <hr />
                        <h4>Tasks</h4>
                        {
                            this.state.task.map(function(task) {
                                return <p key={task}>{task}</p>
                            })
                        }
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

export const Line12 = (props) => (
    <article className="col-lg-12">
        <Project project={props.project}/>
        {props.desc.map( (desc) => {
            return <Desc key={desc} desc={desc}/>
        })}
    </article>
)

export const Line6 = (props) => (
    <article className="col-lg-6 project">
        <Project project={props.project}/>
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