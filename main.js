$ = global.jQuery = require('jquery');
require('bootstrap');
var Handlebars = require("handlebars");

$(function () {
    "use strict";
    var templates = [
        /*["#content-placeholder",".hb-content-placeholder",{
            skills: [
                {topic: 'bio', detail: "Daniel Llatas Spiers. Lima, Peru (1989 - 2014). Uppsala, Sweden (2014 - today)."},
                {topic: 'machine learning', detail: "ga, ann, deep learning"},
                {topic: 'metAleph', detail: "eese - data", link: "http://www.metaleph.com/eese-data"},
                {topic: 'uix', detail: [{content: "metAleph", link:"http://www.metaleph.com"}, {content: "The Flying Dutchman", link:""}, {content: "Brick Breaker", link:""}]},
                {topic: 'music', detail: "solo, wijkmanska blecket"}
            ]}]*/
        ["#content-placeholder",".hb-content-placeholder",{
            skills: [
                {topic: 'bio', detail: [{content: "Daniel Llatas Spiers. Lima, Peru (1989 - 2014). Uppsala, Sweden (2014 - today)."}]},
                {topic: 'machine learning', detail: [{content: "ga"}, {content: "ann"}]},
                {topic: 'uix', detail: [{content: "metAleph", link:"http://www.metaleph.com"}, {content: "The Flying Dutchman", link:""}, {content: "Brick Breaker", link:""}]},
                {topic: 'metAleph', detail: [{content: "eese - data", link:"http://www.metaleph.com/eese-data"}]},
                {topic: 'music', detail: [{content: "solo", link:""}, {content: "wijkmanska blecket", link:"http://www.blecket.org"}]}
            ]}],
        ["#jumbotron-placeholder",".hb-jumbotron-placeholder",{title: "welcome to dllatas.github.io!",subtitle: "the broad spectrum of life seduces me"}],
        ["#footer-placeholder",".hb-footer-placeholder",{footer: "2015 metAleph Inc."}]];

    function render(template) {
    	for(var i=0;i<template.length;i++){
    		var templateCompiled = Handlebars.compile($(template[i][0]).html());
    		var html = templateCompiled(template[i][2]);
    		$(template[i][1]).html(html);
    	}
    }
    render(templates);
});