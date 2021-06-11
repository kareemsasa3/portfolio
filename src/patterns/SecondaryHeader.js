import React from 'react';

const SecondaryHeader = () => {
    return (
        <div className="four wide column">
            <img alt="secondaryHeader" className="ui medium circular image" src="/kareem.jpg" />
            <h3>Kareem Sasa</h3>
            <div className="ui divider"></div>
            <i>Web Development, Cyber Security, Software Engineering, Computer Science</i>
            <div className="ui divider"></div>
            <i className="large linkedin middle aligned icon"></i>
            <a href="https://www.linkedin.com/in/kareem-sasa-b614401b6/">LinkedIn</a>
            <br />
            <i className="large github middle aligned icon"></i>
            <a href="https://www.github.com/kareemsasa3">GitHub</a>
            <br />
            <i className="large facebook middle aligned icon"></i>
            <a href="https://www.facebook.com/kareem.sasa">Facebook</a>
        </div>
    );
};

export default SecondaryHeader;