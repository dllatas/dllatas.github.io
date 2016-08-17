import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';
import * as Content from './content.js';

ReactDOM.render(
    <section>
        <Components.Jumbotron heading={"welcome!"} bio={"the broad spectrum of life seduces me"} />
        <Components.Row12 project={"daniel llatas spiers"} desc={"lima, peru (1989 - 2014) uppsala, sweden (2014 - today)"} />
        <Components.Row6 data={Content.main} />
        <Components.ProjectModal />
    </section>,
    document.getElementById('container'));