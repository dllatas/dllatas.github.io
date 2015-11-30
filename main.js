$ = global.jQuery = require('jquery');
require('bootstrap');
var Handlebars = require("handlebars");

$(function () {
    "use strict";
    var templates = [["#content-placeholder",".hb-content-placeholder",{
        skills: [
            {topic: 'bio', detail: "Lima, Peru. 1989 - 2014. Uppsala, Sweden. 2014 - today."},
            {topic: 'machine learning', detail: "genetic algorithm, artificial neural networks, deep learning"},
            {topic: 'uix', detail: "javascript"},
            {topic: 'music', detail: "guitar, wijkmanska blecket"}
        ]
    }],["#jumbotron-placeholder",".hb-jumbotron-placeholder",{title: "welcome to dllatas.github.io!",
        subtitle: "the broad spectrum of life seduces me"}],["#footer-placeholder",".hb-footer-placeholder",{footer: "2015 metAleph Inc."}]];

    function render(template) {
    	for(var i=0;i<template.length;i++){
    		var templateCompiled = Handlebars.compile($(template[i][0]).html());
    		var html = templateCompiled(template[i][2]);
    		$(template[i][1]).html(html);
    	}
    }

    render(templates);

});