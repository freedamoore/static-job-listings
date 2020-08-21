import React from 'react';
import testlogo from '../assets/manage.svg';
import './Card.css';
import FilterItem from './FilterItem';

const Card = ({ jobDetails, addToFilter }) => {
    const {
        company,
        contract,
        featured,
        languages,
        level,
        location,
        logo,
        position,
        postedAt,
        role,
        tools
    } = jobDetails;

    return (
        <div className="job-card">
            <div className="job-card__content">
                <div className="job-card__logo">
                    <img src={testlogo} alt="Company Logo" />
                </div>
                <div className="job-card__details">
                    <div className="job-card__company">
                        <h4>{company}</h4>
                        {
                            jobDetails.new ?
                                <span className="job-card__badge job-card__badge--new">NEW!</span>
                                : null
                        }
                        {
                            featured ?
                                <span className="job-card__badge job-card__badge--featured">FEATURED</span>
                                : null
                        }
                    </div>
                    <a href="#" className="job-card__title">{position}</a>
                    <div className="job-card__info">
                        <span>{postedAt} - {contract} - {location}</span>
                    </div>
                </div>
                <div className="job-card__filters">
                    <FilterItem languages={languages} level={level} role= {role} tools={tools} />
                </div>
            </div>
        </div>
    );
}

export default Card;