import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                    <div className="ui divider"></div>
                </div>
                <div className={`content ${active}`}>
                    <p>{item.body1}</p>
                    <p>{item.body2}</p>
                    <p>{item.body3}</p>
                    <p>{item.body4}</p>
                    <div className="ui divider"></div>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui inverted accordion">
        {renderedItems}
    </div>;
};

export default Accordion;