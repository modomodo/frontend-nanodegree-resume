//----------------------------------------
//  UTILITIES & GENERAL FUNCTIONS
//----------------------------------------

var amountScrolled = 200;

$(document).ready(function(){
  //---------------------------------------------
  // Smooth scroll function for Navigation links
  //---------------------------------------------
  $(".mdl-navigation__link").on('click', function(event) {
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").stop().animate({
      scrollTop: $target.offset().top
    }, 1000, function () {
      window.location.hash = target;
    });
  });

  //---------------------------------------------
  // FLOATING ACTION BUTTON BEHAVIOUR
  //---------------------------------------------
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('a.to-top').fadeIn('slow');
    } else {
      $('a.to-top').fadeOut('slow');
    }
  });

  $('a.to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
});



//----------------------------------
//  First practice of JS Append
//
//  $("#main").append("Michael");
//---------------------------------


//Practice of Javascript replace method
var email = "michael.muita.dev@udacity.com";
var newEmail = email.replace("udacity", "gmail");

var formattedName = HTMLheaderName.replace("%data%","MICHAEL MUITA");
var formattedRole = HTMLheaderRole.replace("%data%","FULL STACK ENGINEER");

$("#header").append(formattedName);
$("#header").append(formattedRole);

/*
console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Michael and I'm AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);
*/
