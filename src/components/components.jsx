import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Content from './content.js';

/* JUMBOTRON */

export const Subheader = (props) => <p className={props.styleName}>{props.text}</p>

export const Header = (props) => <h1 className='text-left'>{props.header}</h1>

export const Jumbotron = (props) => (
        <div className="jumbotron">
            <Header header={props.header}/>
            <Subheader styleName={'sub-header text-left'} text={props.name}/>
            {props.misc.map((misc) => {
                return <Subheader key={misc} styleName={'sub-header-2 text-left'} text={misc}/>
            })}
        </div>
)

/* PROJECT LIST*/

export class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, project: "", desc: "", date: "", task: [], url: []};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.update = this.update.bind(this);
    }
    update(event) {
        let el = event.target;
        let children = el.children;
        if (children.length===0) {
            el = event.target.parentElement;
            children = el.children;
        }
        let project = Content.detail.filter((detail) => {
            return detail.project === children[0].innerHTML;
        });
        this.setState({ showModal: true, project: project[0].project,
            desc: project[0].content, date: project[0].date, task: project[0].task, url: project[0].url});
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
                        <Modal.Title className="text-center modal-header-title">
                            {this.state.project}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 className="modal-body-title">When?</h4>
                        <p className="modal-body-desc">{this.state.date}</p>
                        <p>
                        {
                            this.state.url.map((url) => {
                                return <a key={url.key} target="_blank" href={url.link}>{url.label}. </a>
                            })
                        }
                        </p>
                        <hr />
                        <h4 className="modal-body-title">What?</h4>
                        <p className="modal-body-desc">{this.state.desc}</p>
                        <hr />
                        <h4 className="modal-body-title">Collaboration</h4>
                        {
                            this.state.task.map(function(task) {
                                return (
                                    <p className="modal-body-desc" key={task}>
                                        <span className="glyphicon glyphicon-menu-right" aria-hidden="true">
                                        </span>
                                        {task}
                                    </p>);
                            })
                        }
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
};

export const Project = (props) => (
    <article className="col-lg-6 project">
        <h4 className="project-title">{props.project}</h4>
        <p className="text-justify project-desc">{props.desc}</p>
    </article>
)

export const ProjectList = (props) => (
    <div className="row marketing">
        { props.data.map(function(data) { return <Project key={data.id} {...data} /> }) }
        <ProjectModal />
    </div>
)

export const App = (props) => (
    <section>
        <Jumbotron header={props.header} name={props.name} misc={props.misc}/>
        <ProjectList data={props.data} detail={props.detail} />
    </section>
)