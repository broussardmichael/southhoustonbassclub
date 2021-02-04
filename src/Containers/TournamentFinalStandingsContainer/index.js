import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import {TournamentFinalStandings} from "../../Components";
import {getTournamentFinalResults} from "../Actions";

class TournamentFinalStandingsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: props.selectedYear,
        finalStandings: []};
    }

    componentDidMount() {
        getTournamentFinalResults().then((getTournamentFinalResultsAction)=>{
            if (getTournamentFinalResultsAction.type === "tournamentResults/getTournamentFinalResults")
                this.setState({finalStandings: getTournamentFinalResultsAction.payload});
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        if(this.state.finalStandings.hasOwnProperty(this.state.selectedYear)) {
            return <TournamentFinalStandings finalStandings={this.state.finalStandings[this.state.selectedYear]}/>
        } else {
            return null
        }
    }
}

TournamentFinalStandingsContainer.propTypes = {
    selectedYear: PropTypes.string
};

export default TournamentFinalStandingsContainer;