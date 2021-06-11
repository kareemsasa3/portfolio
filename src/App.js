import React from 'react';

const App = () => {
    return (
        <div className="center-content">
            <div className="ui inverted secondary button" tabindex="0">
                <div className="visible content">Click to Enter</div>
                <div className="hidden content">
                    <i className="right arrow icon"></i>
                </div>
            </div> 
        </div>
    );
};

export default App;