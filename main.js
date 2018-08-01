//creating typewriter effect for intro bio on page


var txt = "Front-end web developer";
var i = 0;
var speed = 60;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed );
  }
}


// function blur(){
//
// var body = document.getElementById("body");
// body.classList.add("blur");

// var delay = setTimeout(blur, 2000);

// clearTimeout(delay);
// }

var isScrolling;

window.addEventListener('scroll', function ( event ) {

  var body = document.getElementById("body");
  body.classList.add("blur");
  window.clearTimeout( isScrolling );

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function() {

    // Run the callback
    body.classList.remove("blur");

  }, 66);

}, false);






nycda = {

  name: "New York Code Academy",

  location: "90 John St #404, New York, NY 10038",

  skills: [{ html: "Developed content with semantic HTML, understanding html structure in relation to user flow and expirience.",

            css: "Using advanced knowledge of CSS, ie: cssgrid, bootstrap, SASS etc.. to create animations and responsive sites. implementing scss variables to maintain readable and faster code.",

            javaScript: "Using behavioral JavaScript to manipulate DOM elements.Using AJAX to setup API calls with vanilla javascript. using minimal jquery for quick and easy DOM traversal.",

}]


}
//load nycda object to DOM need to create click actions like button and transitions for text

 nyc = document.getElementById("nyc");

nyc.addEventListener("click", function(){
var title = document.getElementById("title");
var location = document.getElementById("location");
var skill = document.getElementById("html");
title.innerHTML = nycda.name;
location.innerHTML = nycda.location;
skill.innerHTML = nycda.skills[0].html;

})














lewagon = {

  name: "Le-Wagon",

  location: "Bali/indonesia",

  skills: [{ ruby: "using ruby for backend application logic and writing scripts to solve complicated programming issues.",

            html: "Understanding basic html setup and syntax from frontend and backend.",

            css:  "using css to manipulate html elements, importing extenal libraries such as bootstrap to organize web pages and UI components",

            rails: "Using the rails frame-work and ruby to create production apps, ie: REST api calls various ruby gems and MVC setup. and creating all controller methods.",
            figma: "Using figma for agile development workflow, building collaborative wireframes and user stories for heroku launched app"

  }]
}







































