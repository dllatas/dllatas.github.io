import React from 'react';
//import Portal from 'react-portal';
import { ProjectModal } from './projectModal.jsx';
//import { ProjectModal } from './modalTest.jsx';

const Project = (props) => (
    <article className={props.articleClass}>
        <h4 className={props.headerClass}>{props.project}</h4>
        <p className={props.pClass}>{props.desc}</p>
    </article>
)

export const ProjectList = (props) => (
    <section className={props.CClass}>
        <section className={props.RClass}>
            <section className={props.ColClass}>
                { props.data.map(function(data) {
                    return <Project key={data.id} {...data} articleClass={props.articleClass}
                        headerClass={props.headerClass} pClass={props.pClass} />;
                })}
            </section>
        </section>
        <ProjectModal />
    </section>
)

