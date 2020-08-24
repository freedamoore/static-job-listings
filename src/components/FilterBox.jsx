import React from 'react'
import './FilterBox.css';
import IconRemove from '../assets/icon-remove.svg';

const FilterBox = ({filterList, clearAllFilters, removeFilter}) => {
    return (
        <div className="filter-box">
            <div className="filter-box__items">
                {
                    filterList.map((item, i) => 
                    <div key={i} className="filter-box__item-wrapper" >
                        <span  className="filter-box__item">{item}</span>
                        <span  className="filter-box__item-remove" onClick={() => removeFilter({item})}><img src={IconRemove} alt="remove"/></span>
                    </div>
                    )
                }
            </div>
            <div className="filter-box__clear">
                <button className="filter-box__clear-btn" onClick={clearAllFilters}>Clear</button>
            </div>
        </div>
    )
}

export default FilterBox
