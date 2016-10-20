import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components.js';
import * as Content from './content.js';

ReactDOM.render(<App {...Content.jumbotron} data={Content.main} detail={Content.detail} />,
    document.getElementById('container'));