/**
 * Created by mike on 15/02/16.
 */

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;
  // Your code goes here!
  var firstName = finalName.slice(0, finalName.indexOf(' ')).toLowerCase();

  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  finalName = firstName + finalName.slice(finalName.indexOf(' ')).toUpperCase();

  // Don't delete this line!
  return finalName;
}


//INSTRUCTOR SOLUTION
function nameChanger(oldName) {
  var finalName = oldName;
  var names = oldName.split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  finalName = names.join(" ");
  return finalName;
}