import React from 'react';
import ReactDOM from 'react-dom';
import * as Components from './components.js';

const data = [
        {id: "1", project: "facial emotion detection using deep learning", desc: "asdf"}
        , {id: "2", project: "MoNAD", desc: "asdf"}
        , {id: "3", project: "bot twitter account detection", desc: "asdf"}
        , {id: "4", project: "eese data", desc: "asdf"}
        , {id: "5", project: "the flying dutchman", desc: "asdf"}
        , {id: "6", project: "brick breaker", desc: "asdf"}
        , {id: "7", project: "metAleph", desc: "asdf"}
        , {id: "8", project: "resolana", desc: "asdf"}
        , {id: "9", project: "wijkmanska blecket", desc: "asdf"}
        ];

ReactDOM.render(
    <div>
        <Components.Jumbotron heading={"welcome!"} bio={"the broad spectrum of life seduces me"} />
        <Components.Row12 project={"daniel llatas spiers"} desc={"lima, peru (1989 - 2014) uppsala, sweden (2014 - today)"} />
        <Components.Row6 data={data} />
    </div>,
    document.getElementById('container'));