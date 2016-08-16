import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';

const data = [{ id: "1", project: "facial emotion detection",
    desc: "Research conducted at Social Robotics Lab in Uppsala University. The main goal was to train a multi classifier on six facial emotions using deep learning techniques such as convolutional neural networks." }, { id: "2", project: "MoNAD",
    desc: "Project CS is a collaboration between Uppsala University and Ericsson Research. This project was aimed to develop an open source platform to optimize the use of public transportation. MoNAD stands for Mobile Network Assisted Driving." }, { id: "4", project: "eese data",
    desc: "“EESE data” is an app that helps International Labour Office (ILO) to report indicators on five contexts: macro and micro economics, institutional, environmental and social. Currently, it is being used in all the regions around the world." }, { id: "3", project: "bot twitter account detection",
    desc: "As part of the Machine learning course, this project was aimed to explore the functionality of a selected method. A binary classification was developed using Matlab to classify when a twitter account was human or bot. " }, { id: "5", project: "the flying dutchman",
    desc: "User inteface programming course project." }, { id: "6", project: "brick breaker",
    desc: "User inteface programming 2 course project." }, { id: "7", project: "metAleph",
    desc: "According to Borges: '... the Aleph is a point in space that contains all other points. Anyone who gazes into it can see everything in the universe from every angle simultaneously, without distortion, overlapping or confusion ...' and meta goes for abstraction: an Aleph explaining itself. This is a data - driven startup!!!" }, { id: "8", project: "resolana",
    desc: "Music project. A single with two songs: resolana and cintas. It was recorded and produced with the help of Mariana Roggero and Louis Schofield." }, { id: "9", project: "wijkmanska blecket",
    desc: "Uplands Nation student orchestra." }];

ReactDOM.render(React.createElement(
    'section',
    null,
    React.createElement(Components.Jumbotron, { heading: "welcome!", bio: "the broad spectrum of life seduces me" }),
    React.createElement(Components.Row12, { project: "daniel llatas spiers", desc: "lima, peru (1989 - 2014) uppsala, sweden (2014 - today)" }),
    React.createElement(Components.Row6, { data: data }),
    React.createElement(Components.ProjectModal, { project: "asdf", desc: "asdf", task: "asdf" }),
    React.createElement(Components.Launch, null)
), document.getElementById('container'));
//# sourceMappingURL=maps/app.js.map
