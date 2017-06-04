/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "myName": "Mark Moberg",
    "myRole": "IT Professional",
    "myContact": {
        "mobile": "651-324-2863",
        "email": "mobergmk@gmail.com",
        "twitter": "@mobergmk",
        "github": "mobergmk",
        "location": "St. Paul, MN"
    },
    "myPictureUrl": "images/Moberg_Mark_200x200.jpg",
    "welcomeMessage": "Hello! Welcome to my resume.",
    "skills": ["HTML", "CSS", "JavaScript", "JQuery", "PowerShell"],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.myName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.myRole);
        var formattedMobile = HTMLmobile.replace("%data%", bio.myContact.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.myContact.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.myContact.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.myContact.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.myContact.location);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.myPictureUrl);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
        $("#header").append(formattedPicture);
        $("#header").append(formattedWelcome);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
        
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var work = {
    "jobs": [
        {  
            "title": "Campus Technologies Representative",
            "employer": "University of Northwestern",
            "location": "St. Paul, MN",
            "dates": "August 2010 - January 2011",
            "description": "Campus Helpdesk supporting phones, printers, projectors and computers."
        },
        {   
            "title": "IT Service Desk",
            "employer": "CHS Inc.",
            "location": "Inver Grove Heights, MN",
            "dates": "June 2011 - September 2015",
            "description": "Tier I, II and III Helpdesk technician."
        },
        {
            "title": "IT Business Systems Analyst",
            "employer": "CHS Inc.",
            "location": "Inver Grove Heights, MN",
            "dates": "September 2015 - Present",
            "description": "IT Professional working with collaboration and productivity tools.  Deploy, train and supporting end users on Office 365 services. Including but not limited to Office ProPlus, Skype for Business, OneDrive for Business, SharePoint and Conferencing Technology"
        }
    ],
    "display": function () {
        if (work.jobs.length > 0) {
            for (i in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                $(".work-entry:last").append(formattedDates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                $(".work-entry:last").append(formattedDescription);
            }
        }   
    }
};

var education = {
    "schools": [
        {
            "name": "Capella University",
            "location": "Minneapolis, MN",
            "degree": "BS",
            "major": "General Information Technology"
        }],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": "2016"
        },
        {
            "title": "Intro to JQuery",
            "school": "Udacity",
            "date": "2016"
        }],
    "display": function () {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry:last").append(formattedschoolName);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedschoolDegree);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(formattedschoolMajor);
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses){
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                $(".education-entry:last").append(formattedTitle);
                var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                $(".education-entry:last").append(formattedDate);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                $(".education-entry:last").append(formattedSchool);
            }
        }
    }
};

var project = {
    "projects": [
        {
            "title": "Project 1",
            "hyperlink": "https://mobergmk.github.io/MMPortfolio/",
            "dates": "2016",
            "description": "My Project 1",
            "images": ["images/MMPortfolio.png"]
        },
        {
            "title": "Project 2",
            "hyperlink": "https://mobergmk.github.io/MMAbout",
            "dates": "2016",
            "description": "My Project 2",
            "images": ["images/thehelpdocs.png"]
        }],
    "display": function () {
        if (project.projects.length > 0) {
            for (i in project.projects){
                $("#projects").append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
                var formattedProjectLink = formattedProjectTitle.replace("%link%", project.projects[i].hyperlink);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
                $(".project-entry:last").append(formattedProjectLink + formattedProjectDates + formattedProjectDescription);
                if (project.projects[i].images.length > 0) {
                    for (image in project.projects[i].images) {
                        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[i].images[image]);
                        $(".project-entry:last").append(formattedProjectImage);
                    }
                }
            }
        }
    }
};

//$("#main").append(internationalizeButton);
//var inName = function(_name) {
//    var splitName = _name.split(" ");
//    var firstName = splitName[0][0].toUpperCase() + splitName[0].slice(1);
//    var lastName = splitName[1].toUpperCase();
//    var internationalName = firstName + " " + lastName;
//    return internationalName;
//};

bio.display();
work.display();
education.display();
project.display();

$("#mapDiv").append(googleMap);