import React from 'react';
import './FilterItem.css';

const FilterItem = ({languages, level, role, tools}) => {
    return (
        <div className="filter-items">
            {
                languages &&
                languages.map((language, i) => 
                    <span key={i} className="filter-item">{language}</span> 
                )
            }
            
            <span className="filter-item">{level}</span>
            <span className="filter-item">{role}</span>
            {
                tools &&
                tools.map((tool, i) => 
                    <span className="filter-item">{tool}</span>
                )
                
            }
        </div>
    )
}

export default FilterItem
