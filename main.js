var Handlebars = require("handlebars");
var $ = require("jquery");

$(function () {
	"use strict";
	var source = $("#title-template").html();
	var template = Handlebars.compile(source);
	var context = {
	    title: "welcome to dllatas.github.io!",
	    subtitle: "the broad spectrum of life seduces me / el amplio espectro de la vida me seduce",
	    address1: "Lima, Peru. 1989 - 2014",
	    address2: "Uppsala, Sweden. 2014 - today",
	};
	var html = template(context);
	$('.content-placeholder').html(html);
});

/*
$(function () {
  'use strict';
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
*/