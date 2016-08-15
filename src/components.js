import React from 'react';

export const Bio = props => React.createElement(
    'p',
    { className: 'lead' },
    props.bio
);

export const Heading = props => React.createElement(
    'h1',
    null,
    props.heading
);

export const Jumbotron = props => React.createElement(
    'div',
    { className: 'jumbotron' },
    React.createElement(Heading, { heading: props.heading }),
    React.createElement(Bio, { bio: props.bio })
);

export const Desc = props => React.createElement(
    'p',
    null,
    props.desc
);

export const Project = props => React.createElement(
    'h4',
    null,
    props.project
);

export const Line12 = props => React.createElement(
    'div',
    { className: 'col-lg-12' },
    React.createElement(Project, { project: props.project }),
    React.createElement(Desc, { desc: props.desc })
);

export const Line6 = props => React.createElement(
    'div',
    { className: 'col-lg-6' },
    React.createElement(Project, { project: props.project }),
    React.createElement(Desc, { desc: props.desc })
);

export const Row12 = props => React.createElement(
    'div',
    { className: 'row marketing' },
    React.createElement(Line12, { project: props.project, desc: props.desc })
);

export const Row6 = props => React.createElement(
    'div',
    { key: '0', className: 'row marketing' },
    props.data.map(function (data) {
        return React.createElement(Line6, { key: data.id, project: data.project, desc: data.desc });
    })
);

/*
var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});
*/
//# sourceMappingURL=maps/components.js.map
