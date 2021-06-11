import React from 'react';

const List = props => {
    return (
        <ul>
            <li>
                <p>{props.item1}</p>
            </li>
            <li>
                <p>{props.item2}</p>
            </li>
            <li>
                <p>{props.item3}</p>
            </li>
            <li>
                <p>{props.item4}</p>
            </li>
        </ul>
    );
};

export default List;