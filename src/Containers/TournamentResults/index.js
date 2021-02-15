import './index.css';
import React from "react";
import PropTypes from "prop-types";
import {TournamentFinalStandings, TournamentResult} from "../../Components";
import {getTournamentResults} from "../Actions";

class TournamentResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: props.match.params.selectedYear || new Date().getFullYear().toString(),
            results: [],
            finalStandings: {}
        }
    }

    componentDidMount() {
        getTournamentResults(this.state.selectedYear).then((getTournamentResultsAction)=>{
            if (getTournamentResultsAction.type === "tournamentResults/getTournamentResults")
                this.setState({
                    results: getTournamentResultsAction.payload.results,
                    finalStandings: getTournamentResultsAction.payload.finalStandings.length ? getTournamentResultsAction.payload.finalStandings[0] : {}
                });
        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.selectedYear  !== prevProps?.match.params.selectedYear ) {
            getTournamentResults(this.props.match.params.selectedYear).then((getTournamentResultsAction)=>{
                if (getTournamentResultsAction.type === "tournamentResults/getTournamentResults")
                    this.setState({
                        selectedYear: this.props.match.params.selectedYear,
                        results: getTournamentResultsAction.payload.results,
                        finalStandings: getTournamentResultsAction.payload.finalStandings.length ? getTournamentResultsAction.payload.finalStandings[0] : {}
                    });
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    render() {
        let finalStandings = null;
        let results = null;
        if(this.state.finalStandings && this.state.finalStandings.year) {
            finalStandings = <TournamentFinalStandings finalStandings={this.state.finalStandings}/>;
        }

        if(this.state.results.length > 0) {
            results = <div className = "shadow yr-result-container component-container">
                <div className="yr-title">Monthly Results</div>
                <div className = "break"/>
                {this.state.results.map(function(result, index) {
                    return <TournamentResult key = {result._id} result = {result}/>
                })}
            </div>
        }

            return <React.Fragment>
            {finalStandings}
            {results}
        </React.Fragment>
    }
}

TournamentResults.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            selectedYear: PropTypes.string
        })
    }),
    results: PropTypes.array,
    finalStandings: PropTypes.object
};

export default TournamentResults;