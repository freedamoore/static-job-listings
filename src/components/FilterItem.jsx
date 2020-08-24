import React from 'react';
import './FilterItem.css';

const FilterItem = ({languages, level, role, tools, addToFilter}) => {
    return (
        <div className="filter-items">
            {
                languages &&
                languages.map((language, i) => 
                    <span key={i} className="filter-item" onClick={addToFilter}>{language}</span> 
                )
            }
            
            <span className="filter-item" onClick={addToFilter}>{level}</span>
            <span className="filter-item" onClick={addToFilter}>{role}</span>
            {
                tools &&
                tools.map((tool, i) => 
                    <span key={i} className="filter-item" onClick={addToFilter}>{tool}</span>
                )
                
            }
        </div>
    )
}

export default FilterItem
