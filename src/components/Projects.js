import React, { useState } from 'react';
import Accordion from '../patterns/Accordion';

const classNames = require('classnames');

const react = [
    {
        title: "Portfolio",
        body1: "Constantly updating my personal website to keep an accurate record of my projects & accomplishments.",
        body2: "Building this site gave me lots of insight into the world of React development, where I learned concepts including, but not limited to, reusable/configurable components, Router, and useState.",
        body3: "I hope to continue expanding this site in hopes of giving the world an accurate idea of who I am."
    },
    {
        title: "Powerwash",
        body1: "Currently building a business website for a small power washing company."
    }
];

const python = [
    {
        title: "Simple Templating Engine",
        body1: "Takes as input a generic template with placeholders for generic data, a set of input files containing data which should be applied to the template, and a date.",
        body2: "Instantiated templates using the input data will be output to a subdirectory."
    },
    {
        title: "Face Mask Detector",
        body1: "A library and command line utility for detecting face masks in images and video streams."
    },
    {
        title: "Patient Management System",
        body1: "System to keep track of defibrillator patients billing information."
    },
    {
        title: "Fingerprint",
        body1: "Script that will run a sequence of commands in order to determine a unique key for that device."
    },
    {
        title: "RM Command Alternative",
        body1: "Takes an arbitrary number of paths as arguments, and, for each argument, move them to ~/rm_trash.",
        body2: "If ~/rm_trash does not already exist, it should be created."
    },
    {
        title: "Hangman",
        body1: "Terminal hangman game with different categories."
    }
];

const java = [
    {
        title: "Elevator",
        body1: "Implementation of an Elevator. The elevator can travel to floors 1, 2, or 3.",
        body2: "Object oriented design including State and Mediator patterns, along with UML state diagram."
    },
    {
        title: "War",
        body1: "Object-oriented implementation of the card game War, with three different variations to play.",
        body2: "Implemented several GRASP design principles including high cohesion and low coupling, as well as the Liskov Substitution SOLID design principle.",
    },
    {
        title: "Drawing",
        body1: "Program that stores an arbitrary sequence of commands that manipulates and uses a drawing list, with a primary focus on creation and maintenance of the drawing list.",
        body3: "Object-oriented design including Strategy, Command, and Memento patterns, along with UML class diagram of project."
    },
    {
        title: "Jurassic Park",
        body1: "Plan and track dinosours in each zone of the park as it develops and opens."
    },
    {
        title: "Starfleet",
        body1: "Application for Starfleet captains to log in and view the crew members about their assigned starship."
    }
];

const c = [
    {
        title: "Memory Management",
        body1: "Simulator that implements the operating system's address translation mechanisms.",
        body2: "Although an OS can usually support multiple processes, this simulator was designed to handle a single process."
    },
    {
        title: "Multilevel Queue Scheduler",
        body1: "Track the simulated processes that currently need to run, then schedule them to run on the CPU according to a set of rules."
    },
    {
        title: "Dining Philosophers",
        body1: "Solution to the famous Dining Philosophers problem using multithreading and concurrent programming techniques.",
        body2: "The problem was the brainchild of Dr. E. W. Dijkstra, in which five philosophers spend their lives simply thinking and eating, to the exclusion of all activities."
    },
    {
        title: "Course Catalog Database",
        body1: "System stores basic information about each course, allowing the user to create, read, update, and delete them.",
        body2: "All information for all courses are stored as binary records in a single file."
    },
    {
        title: "Word Count",
        body1: "Find out the number of words in multiple text files."
    }
];

const Projects = () => {
    const [ topic, setTopic ] = useState('React');
    
    const changeTopic = (e) => setTopic(e.target.id);

    return (
        <div>
            <h1>Projects</h1>
            <div className="ui inverted secondary pointing menu">
                <button className={classNames({
                    "item" : true,
                    "active" : topic==="React"
                })} id="React" onClick={changeTopic}>
                    React
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : topic==="Python"
                })} id="Python" onClick={changeTopic}>
                    Python
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : topic==="Java"
                })} id="Java" onClick={changeTopic}>
                    Java
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : topic==="C"
                })} id="C" onClick={changeTopic}>
                    C
                </button>
            </div>
            { topic === "React" && (
                <Accordion items={react} />
            )}
            { topic === "Python" && (
                <Accordion items={python} />
            )}
            { topic === "Java" && (
                <Accordion items={java} />
            )}
            { topic === "C" && (
                <Accordion items={c} />
            )}
        </div>
    );
};

export default Projects;