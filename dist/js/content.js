"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jumbotron = exports.jumbotron = [{
    heading: "welcome!",
    motto: "the broad spectrum of life seduces me",
    name: "daniel llatas spiers",
    misc: ["computer scientist, music enthusiast", "lima, peru (1989 - 2014) uppsala, sweden (2014 - today)"]
}];

var main = exports.main = [{
    id: "1",
    project: "facial emotion detection using deep learning",
    desc: "Master thesis research conducted at Social Robotics Lab in Uppsala University." }, {
    id: "2",
    project: "bot twitter account detection",
    desc: "Project that aims to classify a twitter account as a human or a bot." }, {
    id: "3",
    project: "MoNAD",
    desc: "Open source platform to optimize the use of public transportation." }, {
    id: "4",
    project: "eese data",
    desc: "International Labour Office (ILO) app that reports indicators on several contexts." }, {
    id: "5",
    project: "the flying dutchman",
    desc: "Web app that handles the daily operations of a bar." }, {
    id: "6",
    project: "brick breaker",
    desc: "The classic arcade game now entertaining people on the web." }, {
    id: "7",
    project: "metAleph",
    desc: "Web page for metAleph." }, {
    id: "8",
    project: "resolana",
    desc: "Single containing a pair of songs full of melancholy." }, {
    id: "9",
    project: "tv search",
    desc: "Looking for that nice TV show you 've heard about? Check for it here !!" }, {
    id: "10",
    project: "memory grid",
    desc: "Are you up for a memory challenge ?? Go ahead and try memory grid !!"
}];

var detail = exports.detail = [{
    project: "facial emotion detection using deep learning",
    date: "Jan 2016 - Jun 2016",
    content: "On my master thesis project, I was supervised by professor Ginevra Castellano and PhD candidate Maike Paetzel. Both of them conduct the research at Social Robotics Lab in Uppsala University. The research was focused on developing machine perception by means of machine learning to improve human-machine interaction. From a technical standpoint, the goal was to train a multi classifier on six facial emotions using deep learning techniques such as convolutional neural networks.",
    task: ["Image processing of extended Cohn-Kanade dataset and video processing of Affectiva-MIT facial expression dataset using OpenCV 2.4 Python’s library.", "Implementing a convolutional neural network using Google’s TensorFlow 0.7 library. This classifier was trained on static facial images.", "Fine tune the different parameters related to the model: network topology, learning rate, optimizers, kernel size, etc. Explore their impact on the training time and the classification accuracy."],
    url: [{
        key: "1",
        label: "git repository",
        link: "https://github.com/dllatas/deepLearning"
    }, {
        key: "2",
        label: "webpage",
        link: "https://dllatas.github.io/deepLearning/"
    }, {
        key: "3",
        label: "publication",
        link: "http://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-300712"
    }]
}, {
    project: "MoNAD",
    date: "Sep 2015  - Jan 2016",
    content: "Project CS is a collaboration between Uppsala University and Ericsson Research. This project was aimed to develop an open source platform to optimize the use of public transportation. MoNAD stands for Mobile Network Assisted Driving.",
    task: ["As part of the “Look Ahead” team, my work was mainly devoted to design and to implement this module. Its goal is to generate bus timetables based on past user requests. Genetic algorithms were chosen to provide a solution. The two main reasons behind this decision were: scalability and proven experience on solving optimization problems.", "A plugin to the “Look Ahead” module that modifies the timetable based on weather conditions. Forecastio was the weather API selected to gather the information. The main idea behind this plugin is that whenever raining or snowing are detected, the bus frequency should be reduced by 50%.", "The “Look Ahead” module was implemented using Python 2.7. Especially the following libraries: DEAP, SCOOP, NumPy and PyMongo. The database used was MongoDB 3.0.7.", "Installation and configuration of MongoDB 3.0.7 and MySQL 5.6 on the test environment.", "SCRUM, an AGILE methodology, was used on project’s management."],
    url: [{
        key: "1",
        label: "course webpage",
        link: "http://www.it.uu.se/edu/course/homepage/projektDV/ht15"
    }, {
        key: "2",
        label: "git repository",
        link: "https://github.com/EricssonResearch/monad"
    }]
}, {
    project: "eese data",
    date: "Aug 2013  - Oct 2015",
    content: "eese data is an app that helps International Labour Office (ILO) to report statistics about five contexts: macro and micro economics, institutional, environmental and social based on sources like: “Global Competitiveness Index”, “Doing Business”, “Global Enabling Trade Index”, “Human Development Index”, etc. Currently, it is being used in all the regions around the world.",
    task: ["Design and implementation of the database for the app. The database engine is MySQL 5.6, and MySQL Workbench 5.6 was used as the design tool. PhpmyAdmin was used to interact with the database. Nowadays, it is used to perform maintenance activities.", "Development of the “front  - end” using HTML5, Bootstrap, CSS3 and JavaScript, especially JQuery and Google Charts.", "Development of the “back - end” using PHP 5."],
    url: [{
        key: "1",
        label: "app webpage",
        link: "http://metaleph.com/eese-data/"
    }]
}, {
    project: "bot twitter account detection",
    date: "Apr 2015  - Jun 2015",
    content: "As part of the Machine Learning course taught by professor Olle Gällmo, my classmate Zingo Tawfique and me developed a binary classifier to detect when a twitter account is a bot or not. The dataset used was one from the MIB project. This project is hosted at IIT (Institute of Informatics and Telematics) of the Italian National Research Council (CNR).",
    task: ["Get access to MIB dataset.", "Fine tune neural network parameters along with Zingo."],
    url: [{
        key: "1",
        label: "git repository",
        link: "https://github.com/dllatas/bot-account"
    }]
}, {
    project: "the flying dutchman",
    date: "Feb 2015  - Apr 2015",
    content: "As part of the User Interface Programming 1 course taught by professor Lars Oestreicher, a group project was aimed to develop a web app to handle the daily operation of a bar named The Flying Dutchman. The project emphasized the use of MVC architecture, internationalization, CSS independency, undo/redo, drag and drop and API consumption.",
    task: ["Internationalization of the app by implementing a JS native method to translate the content to English, Swedish and Spanish.", "Implement an UNDO/REDO JS native method on the payment interface, so users have a better experience at the moment of selecting beverages on their shopping carts."],
    url: [{
        key: "1",
        label: "git repository",
        link: "https://github.com/joolify/dutchman2"
    }]
}, {
    project: "brick breaker",
    date: "Apr 2015 - Jun 2015",
    content: "As part of the User Interface Programming 2 course taught by professor Lars Oestreicher,  a group project was aimed to develop a web game app. In this case, Brick Breaker was chosen. The project had a strong focus on structure a game engine using html's Canvas, MVC architectures' use, internationalization, use of local storage to customize the user experience and to provide a demo on how to play the game.",
    task: ["Implement a native JS MVC framework.", "Internationalization of the app by implementing a JS native method to translate the content of the game to several languages.", "Generate a user settings screen. The user was able to set the background image, music theme and music volume for its game."],
    url: [{
        key: "1",
        label: "git repository",
        link: "https://github.com/dllatas/brick-breaker"
    }, {
        key: "2",
        label: "webpage",
        link: "https://dllatas.github.io/brick-breaker/index.html"
    }]
}, {
    project: "metAleph",
    date: "Jan 2016",
    content: "metAleph is an initiative where I collaborate with PhD candidate (and lifetime friend) Cristhian Seminario. Our main interest is to develop products to facilitate data handling. The webpage aims to inform about our vision and current projects.",
    task: ["Design webpage layout taking into account brand identity.", "Implement that layout using HTML5, CSS3 and JS.", "Automate front-end JS development using Gulp."],
    url: [{
        key: "1",
        label: "webpage",
        link: "http://metaleph.com"
    }]
}, {
    project: "resolana",
    date: "Jan 2014 - Jul 2014",
    content: "Resolana is a musical collaboration with my beloved friends Mariana Roggero and Louis Schofield. The idea was to record a couple of sonds that I wrote some time ago. Sadly, the project has been stopped since I moved to Sweden, but I hope we will work together on the future again.",
    task: ["Songwriting of resolana and cintas.", "Record vocals for both songs."],
    url: [{
        key: "1",
        label: "soundcloud",
        link: "https://soundcloud.com/muraya-producciones/sets/daniel-llatas-resolana"
    }]
}, {
    project: "tv search",
    date: "Aug 2016",
    content: "tv search is a fully JS web app that presents a detailed list of episodes about a particular show.",
    task: ["Design webpage layout to provide a good user experience.", "Consuming OMDB api for each request.", "Using ES6, Gulp, React and Browserify to run components on the browser."],
    url: [{
        key: "1",
        label: "webpage",
        link: "https://dllatas.github.io/tvSearch"
    }]
}, {
    project: "memory grid",
    date: "Oct 2016",
    content: "memory grid is a React web game that challenges the player's memory by forcing him to recall a set of cells in a grid. Inspired on tutorial by Samer Buna Succinctly book: React.js.",
    task: ["It was developed using: React, SystemJS, ES2015."],
    url: [{
        key: "1",
        label: "webpage",
        link: "https://dllatas.github.io/memory-grid-game"
    }]
}];
//# sourceMappingURL=maps/content.js.map
