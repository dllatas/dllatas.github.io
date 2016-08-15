import React from 'react';

export const Bio = (props) => <p className='lead'>{props.bio}</p>

export const Heading = (props) => <h1>{props.heading}</h1>

export const Jumbotron = (props) => (
        <div className="jumbotron">
            <Heading heading={props.heading}/>
            <Bio bio={props.bio}/>
        </div>
)

export const Desc = (props) => <p>{props.desc}</p>

export const Project = (props) => <h4>{props.project}</h4>

export const Line12 = (props) => (
    <div className="col-lg-12">
        <Project project={props.project}/>
        <Desc desc={props.desc}/>
    </div>
)

export const Line6 = (props) => (
    <div className="col-lg-6">
        <Project project={props.project}/>
        <Desc desc={props.desc}/>
    </div>
)

export const Row12 = (props) => (
    <div className="row marketing">
        <Line12 project={props.project} desc={props.desc} />
    </div>
)

export const Row6 = (props) => (
    <div key="0" className="row marketing">
        {props.data.map(function(data) {
           return <Line6 key={data.id} project={data.project} desc={data.desc} />
        })}
    </div>
)


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



