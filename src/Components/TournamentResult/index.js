import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import ResultField from '../ResultField';


const TournamentResult = ({result}) => {
    return <div className="yr-container">
        <div className="yr-field">
            <div className = "yr-title-container">
                <div className = "yr-field-title">{result.month}</div>
                <div>{result.lake}</div>
            </div>
        </div>
        <div className="yr-field">
            <div className = "yr-field-label">First Place</div>
            <ResultField name={result.first.name} value={result.first.weight}/>
        </div>
        <div className="yr-field">
            <div className = "yr-field-label">Second Place</div>
            <ResultField name={result.second.name} value={result.second.weight}/>
        </div>
        <div className="yr-field">
            <div className = "yr-field-label">Third Place</div>
            <ResultField name={result.third.name} value={result.third.weight}/>
        </div>
        <div className="yr-field">
            <div className = "yr-field-label">Big Bass</div>
            <ResultField name={result.bigBass.name} value={result.bigBass.weight}/>
        </div>
    </div>;
}

TournamentResult.propTypes = {
    result: PropTypes.shape({
        month: PropTypes.string,
        lake: PropTypes.string,
        first: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        }),
        second: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        }),
        third: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        }),
        bigBass: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        })
    })
};

export default TournamentResult;