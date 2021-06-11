import React, { useState } from 'react';
import Accordion from '../patterns/Accordion';

const classNames = require('classnames');

const year2021 = [
    {
        title: "Software & Malware Reverse Engineering",
        body1: "Understood in detail some complex concepts such as x86 assembly language, static analysis of code, and dynamic debugging.",
        body2: "Presented with key tools and techniques useful for examining executable programs.",
        body3: "Completed several challenging lab assignments, as well as a group project to reverse engineer a decryption algorithm, then write an encryption algorithm that would work with it."
    },
    {
        title: "Database Systems",
        body1: "Introduction to modern database systems, including file systems, relational databases, non-relational databases, and big data systems.",
        body2: "The photo above is a screenshot from a project I completed during the course, where I was required to manage records in a hash using several commands including insert, delete, print, printall, and nuke."
    },
    {
        title: "Data Science",
        body1: "Learned about the fundamentals of data science, e.g. data collection, preprocessing and transformation, visualization, and exploratory analysis. Introduced to data mining and machine learning algorithms.",
        body2: "Developed proficiency with visualization and statistical analysis of data. Learned to build and assess data-based models, and apply concepts and methods learned to solve real-world problems."
    },
    {
        title: "Cellular & Mobile Tech",
        body1: "Studied cellular and mobile infrastructure, networks, applications, as well as differences in core architecture between different generations of technology.",
        body2: "It is important for those involved in cyber operations to understand how data is processed and transmitted using these ubiquitous devices.",
        body3: "Provided an introduction to wireless networking, mobile device hardware/software architectures, as well as the application of security fundamentals for Long-Term Evolution (LTE)/5G cellular networks."
    }
];

const year2020 = [
    {
        title: "Operating Systems",
        body1: "Understood fundamental operating systems concepts, became more familiar with UNIX, and also became a more proficient programmer with regard to concepts of concurrency and synchronization."
    },
    {
        title: "Software Validation & Quality Assurance",
        body1: "Understood the basic concepts of software quality, and major approaches to software validation and quality assurance.",
        body2: "Learned and gained experience with existing tools and approaches, as well as gained insights about current research progress."
    },
    {
        title: "Object Oriented Systems",
        body1: "Introduced different aspects of object-oriented analysis and design.",
        body2: "Studied object-oriented concepts and techniques, encapsulation, inheritance mechanisms, polymorphism, and programming in Java.",
        body3: "Examined design patterns that provide reusable solutions to problems in object-oriented design."
    },
    {
        title: "Software Engineering",
        body1: "Introduced formal software engineering process and surveys a variety of software engineering models, methods, and tools.",
        body2: "Focused on requirements analysis, validation and software testing, software architecture, AGILE techniques (particularly Scrum and Extreme Programming), and UML."
    },
    {
        title: "Computer Architecture",
        body1: "Covered the internal design of modern day microprocessors, how multiple components work together to achieve the best possible performance.",
        body2: "Examined general Instruction Set Architecture (ISA) design principles and considerations, optimizations, caching, virtual memory, performance, pipelining, memory hierarchy, and the underlying hardware used to construct modern day CPUs."
    },
    {
        title: "Cyber Operations",
        body1: "Studied both offensive and defensive cyber operations, risk management, social engineering, perception management, and the international legal issues and considerations surrounding cyber operations, conflict, and war."
    }
];

const year2019 = [
    {
        title: "Systems Programming",
        body1: "Studied systems-level programming in Linux. Topics included were shell programming, UNIX utilities (grep, find, sed, awk), regular expressions, Python programming, file I/O, process control, interprocess communication, and sockets.",
        body2: "Learned to program with shell, Python, and C."        
    },
    {
        title: "Programming Languages",
        body1: "An introduction to high-level procedural, functional, and object-oriented programming languages, their theoretical foundations, organzation, and implementation.",
        body2: "Topics included storage management, data representation, data control (scope, parameter passing, bindings), operations and their characteristics, sequence control, LISP, Python, C++, object-oriented languages, and error handling.",
        body3: "Learned to understand different approaches for implementing language features."
    },
    {
        title: "Principles of Cyber Security",
        body1: "Introduction to Cyber Security including an examination of the fundamental principles underlying cyber security, how these principles interrelate and how they are typically employed to secure computer systems and networks.",
        body2: "Examined how failures in fundamental security design principles can lead to system vulnerabilities that can be exploited, as well as legal issues governing cyber law and cyber operations.",
        body3: "Learned about the basic principles of computer security, basic security technology (firewalls, intrusion prevention systems, etc), cryptography and steganography, cyber ethics, cyber laws, cybersecurity information sharing, models of computer security and principles of cyber operations and warfare."
    },
    {
        title: "Analysis of Algorithms"
    },
    {
        title: "Application Programming",
        body1: "Introduction to the software lifecycle, best programming practices, and modern tools for application development.",
        body2: "Learned to use and master essential features of Java including control (sequential, selection, repetition), parameter passing, arrays, ArrayLists, and Strings.",
        body3: "Introduced to elements of GUI design and event-driven models of execution."
    },
    {
        title: "Computer Organization"
    }
];

const year2018 = [
    {
        title: "Data Structures"
    },
    {
        title: "Discrete Math Structures"
    },
    {
        title: "Math Foundations of CS"
    },
    {
        title: "Intro to Computer Programming II"
    },
    {
        title: "Basic Statistics"
    }
];

const year2017 = [
    {
        title: "Intro to Computer Programming I"
    }
];

const UndergradCoursework = () => {
    const [ year, setYear ] = useState('2021');

    const changeYear = (e) => setYear(e.target.id);

    return (
        <div>
            <h1>Undergraduate Coursework</h1>
            <div className="ui inverted secondary pointing menu">
                <button className={classNames({
                    "item" : true,
                    "active" : year==="2021"
                })} id="2021" onClick={changeYear}>
                    2021
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : year==="2020"
                })} id="2020" onClick={changeYear}>
                    2020
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : year==="2019"
                })} id="2019" onClick={changeYear}>
                    2019
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : year==="2018"
                })} id="2018" onClick={changeYear}>
                    2018
                </button>
                <button className={classNames({
                    "item" : true,
                    "active" : year==="2017"
                })} id="2017" onClick={changeYear}>
                    2017
                </button>
            </div>
            { year === "2021" && (
                <Accordion items={year2021} />
            )}
            { year === "2020" && (
                <Accordion items={year2020} />
            )}
            { year === "2019" && (
                <Accordion items={year2019} />
            )}
            { year === "2018" && (
                <Accordion items={year2018} />
            )}
            { year === "2017" && (
                <Accordion items={year2017} />
            )}
        </div>
    );
};

export default UndergradCoursework;