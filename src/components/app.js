import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';
import * as Content from './content.js';

ReactDOM.render(
    <section>
        <Components.Jumbotron heading={Content.jumbotron[0].heading}
            name={Content.jumbotron[0].name}
            misc={Content.jumbotron[0].misc}/>
        <Components.Row6 data={Content.main} />
        <Components.ProjectModal />
    </section>,
    document.getElementById('container'));