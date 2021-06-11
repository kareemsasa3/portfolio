import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = props => {
    return (
        <div className="item">
            <div className="content">
                <div className="ui sub header">
                    <Link to={props.nav} className="item">{props.name}</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderItem;