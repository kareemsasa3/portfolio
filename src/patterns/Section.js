import React from 'react';

const Section = props => {
    return (
        <div>
            <div className="ui divider"></div>
            <h3>{props.title}</h3>
            <img className="ui large image" alt="" src={props.image}/>
            <div className="ui divider"></div>
            <p>{props.body1}</p>
            <p>{props.body2}</p>
            <p>{props.body3}</p>
            <p>{props.body4}</p>
        </div>
    );
};

export default Section;