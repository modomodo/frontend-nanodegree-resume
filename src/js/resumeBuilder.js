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
    value: 7,
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
    value: 4,
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
  for (skill in polarSkills) {
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
  "firstName": "Michael",
  "lastName": "Muita",
  "role": "Full-Stack Engineer",
  "welcomeMessage": "I am a lover of all things tech, especially on the mobile, security and web front. My goals are to work with and understand the intricacies of various mobile and web architectures, with the ultimate goal being to analyse and determine their security weaknesses",
  "contacts": {
    "mobile": "tel:+254790406319",
    "email": "mailto:michael.muita.dev@gmail.com",
    "github": "https://github.com/modomodo",
    "twitter": "https://twitter.com/Modomodo3",
    "linkedin": "https://ke.linkedin.com/in/michaelmuita",
    "blog": "https://blog.michaelmuita.me",
    "location": "Nairobi, Kenya"
  },
  "skills": ["HTML5", "CSS", "JavaScript", "jQuery", "PHP", "WordPress", "SQL", "Git"]
};

var work = {
  "jobs": {
    "employer": "Securex Agencies Ltd",
    "title": "ISO Management Trainee",
    "url": "http://www.securex.co.ke/",
    "years": "2011",
    "location": "Westlands, Nairobi",
    "description": "Trained in ISO management – This entailed linking operations between various departments in the company and applying my knowledge of computers through assisting in troubleshooting computer systems between the departments. Additionally, hands-on work through each department"
  }
};

work.display = function() {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer) + HTMLworkLocation.replace("%data%", work.jobs.location);

  $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs.title))
                       .append(formattedEmployer)
                       .append(HTMLworkDates.replace("%data%", work.jobs.years))
                       .append(HTMLworkDescription.replace("%data%", work.jobs.description));

};

var education = {
  "schools": [
    {
      "name": "The University of Nottingham",
      "location": "Semenyih, Malaysia",
      "degree": "Bachelors",
      "majors": "BSc(Hons) Software Engineering",
      "years": "2012 - 2015",
      "url": "http://www.nottingham.edu.my/index.aspx"
    },
    {
      "name": "Aga Khan Academy",
      "location": "Nairobi, Kenya",
      "degree": "Diploma",
      "majors": "International Baccalaureate",
      "years": "2010 - 2012",
      "url": "http://www.agakhanschools.org/kenya/akan/"
    }
  ],
  "onlineCourses": [
    {
      "title": "PHP Development",
      "school": "Treehouse",
      "years": 2015,
      "url": "http://teamtreehouse.com/home"
    },
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "years": "2015 - 2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Web Development",
      "school": "CodeSchool",
      "years": "2015 - 2016",
      "url": "https://www.codeschool.com"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Bootstrap Blast-Off",
      "dates": "Jan 2016 - Feb 2016",
      "description": "A CodeSchool practice project on the Bootstrap CSS Framework",
      "images": [
        //TODO: Add image paths
      ],
      "url": "http://modomodo-bootstrap-blastoff.bitballoon.com/"
    },
    {
      "title": "Ribbit Design Agency",
      "dates": "Nov 2015",
      "description": "A Practice Challenge of basic Front-End skills",
      "images": [
        //TODO: Add image paths
      ],
      "url": " http://modomodo-ribbit.bitballoon.com/"
    }
  ]
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (var index = 0; index < bio.skills.length; index++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
  }
}

work.display();