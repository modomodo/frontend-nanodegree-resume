//----------------------------------------
//  UTILITIES & GENERAL FUNCTIONS
//----------------------------------------

var amountScrolled = 200;

var polarSkills = [
  {
    value: 9,
    label: 'HTML5',
    color: "#F44336",
    highlight: "#EF5350"
  },
  {
    value: 8,
    label: 'CSS',
    color: '#2196F3',
    highlight: "#42A5F5"
  },
  {
    value: 6,
    label: 'JavaScript',
    color: '#FFC107',
    highlight: '#FFCA28'
  },
  {
    value: 5,
    label: 'jQuery',
    color: '#8BC34A',
    highlight: '#9CCC65'
  },
  {
    value: 5,
    label: 'PHP',
    color: '#673AB7',
    highlight: '#7E57C2'
  },
  {
    value: 3,
    label: 'WordPress',
    color: '#3F51B5',
    highlight: '#5C6BC0'
  },
  {
    value: 8,
    label: 'Git',
    color: '#E91E63',
    highlight: '#EC407A'
  },
  {
    value: 5,
    label: 'SQL',
    color: '#9E9E9E',
    highlight: '#BDBDBD'
  }
];

// Function to display the list of skill labels
var skillsChartLegend = function () {
  "use strict";
  for (var skill in polarSkills) {
    var skillLabel = polarSkills[skill].label;
    var skillColor = polarSkills[skill].color;
    var skillHTML = '<span class="label" style="background-color: ' + skillColor + '">' + skillLabel + '</span>';
    $(".skills-list").append(skillHTML);
  }
};

$(document).ready(function () {
  //---------------------------------------------
  // NAVIGATION LINK FUNCTIONALITY
  //---------------------------------------------
  $(".mdl-navigation__link").on("click", function (event) {
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);
    var mdlLayoutDrawer = $(".mdl-layout__drawer");

    //SMOOTH SCROLL TO ID
    $(".mdl-layout__content").stop().animate({
      scrollTop: $target.get(0).offsetTop
    }, 1000, function () {
      window.location.hash = target;
    });

    //TOGGLE DRAWER VISIBILITY SMALL SCREENS
    if ($(".custom-layout").hasClass("is-small-screen")) {
      mdlLayoutDrawer.toggleClass("is-visible");
      mdlLayoutDrawer.attr("aria-hidden", "true");
      $(".mdl-layout__obfuscator").toggleClass("is-visible");
      $(".mdl-layout__drawer-button").attr("aria-expanded", "false");
    }
  });

  //---------------------------------------------
  // FLOATING ACTION BUTTON BEHAVIOUR
  //---------------------------------------------
  $(".mdl-layout__content").scroll(function () {
    if ($(this).scrollTop() > amountScrolled) {
      $(".to-top").fadeIn("slow");
    } else {
      $(".to-top").fadeOut("slow");
    }
  });

  $(".to-top").click(function () {
    $(".mdl-layout__content").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  //--------------
  // SKILLS CHART
  //--------------
  var context = $("#skills-chart").get(0).getContext("2d");
  var skillsChart = new Chart(context).PolarArea(polarSkills);

  //CALL SKILLS LIST FUNCTION
  skillsChartLegend();
});

var bio = {
  "name": "Michael Muita",
  "role": "Full-Stack Engineer",
  "welcomeMessage": "I am a lover of all things tech, especially on the mobile, security and web front.<br><br>" +
  "My goals are to work with and understand the intricacies of various mobile and web architectures with the " +
  "ultimate goal being to analyse and determine their security vulnerabilities, areas of improvements, and seeking " +
  "to provide solutions",
  "biopic": "img/avatar.png",
  "contacts": {
    "mobile": "tel:+000000000",
    "email": "michael.muita.dev[at]gmail",
    "github": "https://github.com/modomodo",
    "twitter": "https://twitter.com/Modomodo3",
    "linkedin": "https://ke.linkedin.com/in/michaelmuita",
    "blog": "https://blog.michaelmuita.me",
    "location": "Nairobi, Kenya"
  },
  "skills": ["HTML5", "CSS", "JavaScript", "jQuery", "PHP", "WordPress", "SQL", "Git"]
};

bio.display = function () {
  "use strict";

  //Add the Bio Information to the drawer header
  $(".custom-drawer-header").append(HTMLbioPic.replace("%data%", bio.biopic))
    .append(HTMLheaderName.replace("%data%", bio.name))
    .append(HTMLemailDrawer.replace("%data%", bio.contacts.email).replace("#", "mailto:michael.muita.dev@gmail.com"))
    .append(HTMLblogDrawer.replace("%data%", bio.contacts.blog).replace("#", bio.contacts.blog));

  //Add the about information to the about section
  $(".about-holder").append(HTMLaboutMsg.replace("%data%", bio.welcomeMessage));

  //Add the footer social contact bio
  $("#lets-connect").append(HTMLfooterListStart);
  $(".mdl-mini-footer__link-list").append(HTMLemail.replace("#", "mailto:michael.muita.dev@gmail.com"))
    .append(HTMLgithub.replace("#", bio.contacts.github))
    .append(HTMLtwitter.replace("#", bio.contacts.twitter))
    .append(HTMLlinkedIn.replace("#", bio.contacts.linkedin))

};

var work = {
  "jobs": [
    {
      "employer": "Securex Agencies Ltd",
      "title": "ISO Management Trainee",
      "url": "http://www.securex.co.ke/",
      "dates": "2011",
      "location": "Westlands, Nairobi",
      "description": "Trained in ISO management – This entailed linking operations between various departments in the company and applying my knowledge of computers to assist in troubleshooting computer systems between the departments. Additionally, I performed hands-on work through each department"
    }
  ]
};

work.display = function () {
  "use strict";

  for (var job in work.jobs) {
    //Add work-entry div to work section
    $("#workExperience").append(HTMLworkStart);

    //Format employer details to include location and a link
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
        .replace("#", work.jobs[job].url)
      + HTMLworkLocation.replace("%data%", work.jobs[job].location);

    //Add all work details
    $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title))
      .append(formattedEmployer)
      .append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
      .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }

};

var education = {
  "schools": [
    {
      "name": "The University of Nottingham",
      "edu-location": "Malaysia",
      "location": "Kuala Lumpur, Malaysia",
      "degree": "Bachelors",
      "majors": ["BSc(Hons) Software Engineering"],
      "dates": "2012 - 2015",
      "url": "http://www.nottingham.edu.my/Study/Undergraduate-courses/Computer-Science/Software-Engineering-BSc-Hons.aspx"
    },
    {
      "name": "Aga Khan Academy",
      "edu-location": "Kenya",
      "location": "Nairobi, Kenya",
      "degree": "Diploma",
      "majors": ["International Baccalaureate"],
      "dates": "2010 - 2012",
      "url": "http://www.agakhanschools.org/kenya/akan/curriculum.asp"
    }
  ],
  "onlineCourses": [
    {
      "title": "PHP Development",
      "school": "Treehouse",
      "date": "August 2015 - October 2015",
      "url": "https://teamtreehouse.com/michaelmugo"
    },
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "December 2015 - July 2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Web Development",
      "school": "CodeSchool",
      "date": "August 2015 - August 2016",
      "url": "https://www.codeschool.com/users/1707790"
    }
  ]
};

education.display = function () {
  "use strict";

  var educationHolder = $(".education-holder");

  for (var school in education.schools) {

    //Add education-entry div to education section
    educationHolder.append(HTMLschoolStart);

    var lastEducationEntry = $(".education-entry:last");

    //Format School Details
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name)
      + HTMLschoolLocation.replace("%data%", education.schools[school]["edu-location"]);

    lastEducationEntry.append(formattedSchool)
      .append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));

    //Loop through majors array for every school
    for (var major in education.schools[school].majors) {
      lastEducationEntry.append(
        HTMLschoolMajor.replace("%data%", education.schools[school].majors[major])
          .replace("#", education.schools[school].url)
      );
    }

    lastEducationEntry.append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
  }

  educationHolder.append(HTMLonlineClasses);
  for (var course in education.onlineCourses) {
    //Add online-entry div to education section
    educationHolder.append(HTMLonlineStart);

    //Format online School details
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
      .replace("#", education.onlineCourses[course].url);

    $(".online-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title))
      .append(formattedOnlineSchool)
      .append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
  }
};

var projects = {
  "projects": [
    {
      "title": "Bootstrap Blast-Off",
      "dates": "Jan 2016 - Feb 2016",
      "description": "A CodeSchool practice project on the Bootstrap CSS Framework",
      "images": ["img/bootstrap-blastoff-16_9-w_320.png"],
      "url": "http://modomodo-bootstrap-blastoff.bitballoon.com/",
      "github": "https://github.com/modomodo/bootstrap-blastoff"
    },
    {
      "title": "Ribbit Design Agency",
      "dates": "Nov 2015",
      "description": "A Practice Challenge of basic Front-End skills<br><br>",
      "images": ["img/ribbit-design-page-16_9-w_320.png"],
      "url": "http://modomodo-ribbit.bitballoon.com/",
      "github": "https://github.com/modomodo/ribbit-design-agency"
    },
    {
      "title": "Portfolio Demonstration",
      "dates": "Jan 2016",
      "description": "First Project of Udacity's FEND program, making use of the Bootstrap CSS Framework",
      "images": ["img/p2-320w.png"],
      "url": "http://modomodo-p2.bitballoon.com/",
      "github": "https://github.com/modomodo/FE-Nanodegree-Project-1"
    },
    {
      "title": "African Short Stories",
      "dates": "Nov 2015",
      "description": "First HTML & CSS project<br><br>",
      "images": ["img/african-stories-16_9-w_320.png"],
      "url": "http://modomodo-african-short-stories.bitballoon.com/",
      "github": "https://github.com/modomodo/African-Short-Stories"
    }
  ]
};

projects.display = function () {
  "use strict";

  for (var project in projects.projects) {
    //Add project-entry div to projects section
    $(".project-holder").append(HTMLprojectStart);

    var lastProjectEntry = $(".project-entry:last");

    //Add images conditionally
    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        lastProjectEntry.append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]))
      }
    }

    //Add information on Project title, date & description
    lastProjectEntry.append(HTMLprojectTitle.replace("%data%", projects.projects[project].title))
      .append(HTMLprojectDates.replace("%data%", projects.projects[project].dates))
      .append(HTMLprojectDescription.replace("%data%", projects.projects[project].description))

    // Display demo or github info if existing
    if (projects.projects[project].url != undefined)
      lastProjectEntry.append(HTMLprojectDemo.replace("#", projects.projects[project].url));
    if (projects.projects[project].github != undefined)
      lastProjectEntry.append(HTMLprojectGithub.replace("#", projects.projects[project].github));

  }
};

bio.display();
work.display();
projects.display();
education.display();

//-----
// MAP
//-----
$("#mapDiv").append(googleMap);