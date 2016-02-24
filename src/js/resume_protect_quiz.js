/**
 * Created by mike on 15/02/16.
 */

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
  var newHTML = _html;
  // How will you make sure that newHTML doesn't contain any < or > ?
  // Your code goes here!
  newHTML.replace()

  // Don't delete this line!
  return newHTML;
};

//INSTRUCTOR SOLUTION
var charEscape = function(_html) {
  var newHTML = _html;

  newHTML = _html.replace(/</g, "&lt;");
  newHTML = newHTML.replace(/>/g, "&gt;");

  return newHTML;
};