import React from 'react';
/* Import components */
import { Jumbotron } from './jumbotron.jsx';
import { ProjectList } from './project.jsx';
/* Import content */
import * as Content from '../content.js';
/* Import style */
import { socialLinkAStyle, socialLinkSpanStyle, socialLinkImgStyle, titleStyle, jumbotronStyle} from './style.js';
/* Import CSS */
import '../css/bootstrap.min.css';
import '../css/bootstrap-theme.min.css';
import '../css/custom-fonts.css';
import '../css/jumbotron-narrow.css';
import '../css/main.css';
import '../css/modal.css';
import '../css/project.css';

export const App = (props) => (
    <section>
        <Jumbotron CFClass={'container-fluid'} JTClass={'jumbotron'} JTStyle={jumbotronStyle}
            titleClass={'text-center'} titleStyle={titleStyle} titleText={Content.jumbotron.header}
            subtitleClass={'sub-header text-center'} subtitleText={Content.jumbotron.name}
            misc={Content.jumbotron.misc} miscClass={'sub-header-2 text-center'}
            rowClass={'row'} colClass={'col-lg-12'} social={Content.jumbotron.social}
            SLStyle={socialLinkAStyle} SLSpanStyle={socialLinkSpanStyle} SLImgStyle={socialLinkImgStyle} />
        <ProjectList CClass={'container'} RClass={'row marketing'} ColClass={'col-lg-12'}
            data={Content.main} detail={Content.detail} articleClass = {'col-lg-6 project'}
            headerClass = {'project-title'} pClass = {'text-justify project-desc'} />
    </section>
)