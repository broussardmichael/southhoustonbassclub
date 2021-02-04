import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import {TournamentResult} from "../../Components";
import {getTournamentResults} from "../Actions";

class TournamentResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: props.selectedYear,
            results: []
        };
    }

    componentDidMount() {
        getTournamentResults().then((getTournamentResultsAction)=>{
            if (getTournamentResultsAction.type === "tournamentResults/getTournamentResults")
                this.setState({results: getTournamentResultsAction.payload});
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        if(this.state.results.hasOwnProperty(this.state.selectedYear)) {
            return <div className = "shadow yr-result-container component-container">
                <div className="yr-title">Monthly Results</div>
                <div className = "break"/>
                {this.state.results[this.state.selectedYear].map(function(result, index) {
                    return <TournamentResult key = {"result_" + index} result = {result}/>
                })}</div>
        } else
            return null
    }
}

TournamentResultContainer.propTypes = {
    selectedYear: PropTypes.string
};

export default TournamentResultContainer;