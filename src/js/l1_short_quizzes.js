/**
 * Created by mike on 15/02/16.
 */



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