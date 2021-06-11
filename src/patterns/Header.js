import React from 'react';
import HeaderItem from './HeaderItem';


const Header = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted menu">
                <HeaderItem 
                    nav="/"
                    name="KAREEM SASA"
                />
                <div className="right menu">
                    <HeaderItem 
                        nav="/projects"
                        name="PROJECTS"
                    />
                    <HeaderItem 
                        nav="/resume"
                        name="RESUME"
                    />
                    <HeaderItem 
                        nav="/coursework"
                        name="UNDERGRADUATE COURSEWORK"
                    />
                    <HeaderItem
                        nav="/readings"
                        name="READINGS"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;