import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';
import * as Content from './content.js';

ReactDOM.render(React.createElement(
    'section',
    null,
    React.createElement(Components.Jumbotron, { heading: "welcome!", bio: "the broad spectrum of life seduces me" }),
    React.createElement(Components.Row12, { project: "daniel llatas spiers", desc: "lima, peru (1989 - 2014) uppsala, sweden (2014 - today)" }),
    React.createElement(Components.Row6, { data: Content.main }),
    React.createElement(Components.ProjectModal, null)
), document.getElementById('container'));
//# sourceMappingURL=maps/app.js.map
