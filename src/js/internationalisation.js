/**
 * Created by mike on 24/02/16.
 */

function inName(name) {
  "use strict";
  name = name.split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);