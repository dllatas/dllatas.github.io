import React from 'react';
import { Modal } from 'react-bootstrap';
import * as Content from './content.js';

const LinkedInAStyle = {
    textDecoration: "none",
    paddingRight: '10px'
};

const LinkedInSpanStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "80%",
    color: "#0783B6",
    textDecoration: 'none'
};

const LinkedInImgStyle = {
    verticalAlign: "middle"
};

const HeaderStyle = {
    marginTop: '1%'
};

const JumbotronStyle = {
    marginBottom: '0px',
    paddingBottom: '15px'
};

/* JUMBOTRON */

const Subheader = (props) => <p className={props.styleName}>{props.text}</p>

const Header = (props) => <h1 className='text-center' style={HeaderStyle}>{props.header}</h1>

const LinkedIn = (props) => (
    <a target="_blank" href="https://se.linkedin.com/pub/daniel-llatas-spiers/5a/1a8/370" style={LinkedInAStyle}>
        <span style={LinkedInSpanStyle}>
            <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png"
                width="20" height="15" alt="LinkedIn profile" style={LinkedInImgStyle} />
            {"LinkedIn"}
        </span>
    </a>
)

const Github = (props) => (
    <a target="_blank" href="https://github.com/dllatas" style={LinkedInAStyle}>
        <span style={LinkedInSpanStyle}>
            <img src="./dist/github.png" width="20" height="15" alt="Github repo" style={LinkedInImgStyle} />
            {"Github"}
        </span>
    </a>
)

const CV = (props) => (
    <a target="_blank" href="./dist/cv.pdf" style={LinkedInAStyle}>
        <span style={LinkedInSpanStyle}>
            <img src="./dist/cv.png" width="20" height="15" alt="CV file" style={LinkedInImgStyle} />
            {"CV"}
        </span>
    </a>
)

const Main = (props) => (
    <section>
        <Header header={props.header} />
        <Subheader styleName={'sub-header text-center'} text={props.name} />
        {props.misc.map((misc) => {
            return <Subheader key={misc} styleName={'sub-header-2 text-center'} text={misc} />
        })}
    </section>
)

const Jumbotron = (props) => (
    <div className="jumbotron" style={JumbotronStyle}>
        <Main header={props.header} name={props.name} misc={props.misc} />
        <div className="row">
            <div className="col-lg-12">
                <LinkedIn /><Github /><CV />
            </div>
        </div>
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

const Project = (props) => (
    <article className="col-lg-6 project">
        <h4 className="project-title">{props.project}</h4>
        <p className="text-justify project-desc">{props.desc}</p>
    </article>
)

const ProjectList = (props) => (
    <div className="col-lg-12">
        { props.data.map(function(data) { return <Project key={data.id} {...data} /> }) }
        <ProjectModal />
    </div>
)

export const App = (props) => (
    <section>
        <section className="container-fluid">
            <Jumbotron header={props.header} name={props.name} misc={props.misc}/>
        </section>
        <section className="container">
            <div className="row marketing">
                <ProjectList data={props.data} detail={props.detail} />
            </div>
        </section>
    </section>
)


// <div className="col-lg-10 col-lg-offset-2 main">
// <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
// <AsideBar />
// <div className="col-lg-10 col-lg-offset-2">