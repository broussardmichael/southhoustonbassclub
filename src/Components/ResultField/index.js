import './index.css';
import React from "react";
import PropTypes from "prop-types";

const ResultField = ({name, value}) => {
    return <div className="result-field-container">
        <div className="rf-field"><span>{name} - </span><span>{value}</span></div>
    </div>;
}

ResultField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string
};

export default ResultField;