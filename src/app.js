import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';
import * as Content from './content.js';

ReactDOM.render(React.createElement(
    'section',
    null,
    React.createElement(Components.Jumbotron, { heading: Content.jumbotron[0].heading,
        name: Content.jumbotron[0].name,
        misc: Content.jumbotron[0].misc }),
    React.createElement(Components.Row6, { data: Content.main }),
    React.createElement(Components.ProjectModal, null)
), document.getElementById('container'));
//# sourceMappingURL=maps/app.js.map
