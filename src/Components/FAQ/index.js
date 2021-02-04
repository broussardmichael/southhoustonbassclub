import './index.css';
import React from "react";
import PropTypes from "prop-types";

const FAQ = ({question, answer}) => {
    return <div className = "faq-container">
        <div className = "faq-question">{question}</div>
        <div className = "faq-answer">{answer}</div>
    </div>;
};

FAQ.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
};

export default FAQ;