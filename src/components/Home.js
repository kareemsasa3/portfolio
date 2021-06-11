import React from 'react';
import Section from '../patterns/Section';
import UnorderedList from '../patterns/UnorderedList';

const Home = () => {
    return (
        <div>
            <Section 
                title="Who am I?" 
                body1="I am a recent Computer Science graduate from The University of Texas at San Antonio. My research and technological interests are mainly in areas of web development, user-friendly software engineering, and cyber security." 
                body2="I spend the majority of my time now improving my technical web development skills, while also pursuing full-time work. This includes taking on independent projects, and collaborating with other individuals interested in software development."
                body3="With everything I do, I genuinely try my best. I am passionate about technology and hope I make a positive impact on the world."
                body4="In my free time, I enjoy lifting weights, playing basketball, and staying active."
            />
            <Section
                title="About This Site"
                body1="This website was initially developed in the spring of 2021."
                body2="The main purposes of this website are listed here:"
            />
            <UnorderedList 
                item1="Discuss the interesting aspects and technical details regarding computer science, cyber security, and software engineering"
                item2="Document the implementation of solutions to real problems"
                item3="Present my independent research projects"
                item4="Record my personal achievements"
            />
            <Section 
                title="Contact Me"
                body1="If you have any questions regarding my Github open source projects, please open an issue ticket in the repository. For private questions, please contact me via my personal email."
            />
        </div>
    );
};

export default Home;