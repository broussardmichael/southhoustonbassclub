import './index.css';
import React from "react";
import {TournamentResultsContainer, TournamentFinalStandingsContainer} from "../index";
import PropTypes from "prop-types";

class TournamentResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedYear: props.match.params.selectedYear || "2021"};
    }

    render() {
        return <React.Fragment>
            <TournamentFinalStandingsContainer selectedYear={this.state.selectedYear}/>
            <TournamentResultsContainer selectedYear={this.state.selectedYear}/>
        </React.Fragment>
    }
}

TournamentResults.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            selectedYear: PropTypes.string
        })
    })
};

export default TournamentResults;