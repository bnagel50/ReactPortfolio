import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(65,185,101)", "rgb(153,255,243)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Bradley",
    lastName: "Nagel",
    initials: "BN", // the example uses first and last, but feel free to use three or more if you like.
    position: "an Aspiring Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Coffee Enthusiast'
        },
        {
            emoji: '🌎',
            text: 'Ohio-Based'
        },
        {
            emoji: "💼",
            text: "Looking for Work!"
        },
        {
            emoji: "📧",
            text: "nagelb500@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/bnagel50",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/bradley-nagel-9bba32237",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://docs.google.com/document/d/1seeqEiNMCq_fCe0QJmeJ1mIjAYsqGlS_5F9HIzQlyFg/edit?usp=sharing",
            icon: "fa fa-safari",
            label: 'resume'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello all! I'm Brad, a recent graduate of The Ohio State Full-Time Coding Bootcamp. I am proficient with all things JavaScript, and have experience with front-end and back-end work. I made the switch to this field due to my love of computers and problem-solving. I aim to always make things easier for others in any way possible. In my free time, I am an avid gamer and always appreciate recommendations. Please reach out with any questions as I am currently looking for any work in the developer industry!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css', 'figma', 'mongoDB', 'express.js', 'node.js'],
            exposedTo: ['data science', 'python', 'R']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        // {
        //     label: 'theater',
        //     emoji: '🎭'
        // },
        {
            label: 'horror movies',
            emoji: '🎥'
        },
        {
            label: 'cats',
            emoji: '🐈'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Concert Finder - Search Tool using HTML, CSS, JS, and Ticketmaster's API",
            live: "https://dkempen98.github.io/concert-finder/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/dkempen98/concert-finder", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Bug Tracker App - Support Ticket Forum using JS, Express, and Handlebars",
            live: "https://congenial-potatoes.herokuapp.com/login",
            source: "https://github.com/IvanGoya/congenial-potato",
            image: mock2
        },
        {
            title: "Coding Bootcamp Reviewer - Course Review Site using MongoDB, Express, React, and Node.js",
            // live: "to-do",
            source: "https://github.com/IvanGoya/Computer-Course-report",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}