import './index.css';
import React from "react";
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";
import ResultField from '../ResultField';

const TournamentFinalStandings = ({finalStandings}) => {
    return <div className="shadow mb-3 fr-container component-container">
        <Row>
            <Col>
                <div className="fr-result mb-3">
                    <div className="fr-title">Top Six</div>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">1:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.first}</span></Col></Row>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">2:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.second}</span></Col></Row>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">3:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.third}</span></Col></Row>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">4:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.fourth}</span></Col></Row>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">5:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.fifth}</span></Col></Row>
                    <Row><Col className = "col-2 col-md-1"><span className = "top-six-label">6:</span></Col><Col className = "col-6  col-md-2"><span>{finalStandings.sixth}</span></Col></Row>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="fr-result">
                    <div className='fr-title'>Heavy Stringer</div>
                    <div className='fr-fisherman'><ResultField name={finalStandings.heavyStringer.name}
                                                               value={finalStandings.heavyStringer.weight}/></div>
                </div>
            </Col>
            <Col>
                <div className="fr-result">
                    <div className='fr-title'>Fish Over 5lbs</div>
                    <div>
                        <span className='fr-fisherman'><ResultField name={Array.isArray(finalStandings.fishOver5lbs.name) ? finalStandings.fishOver5lbs.name.join(", ") : finalStandings.fishOver5lbs.name}
                                                                    value={finalStandings.fishOver5lbs.numOfFishOver}/></span>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="fr-result">
                    <div className='fr-title'>Big Bass of the Year</div>
                    <div className='fr-fisherman'><ResultField name={finalStandings.bigBass.name} value={finalStandings.bigBass.weight}/></div>
                </div>
            </Col>
        </Row>
    </div>
}

TournamentFinalStandings.propTypes = {
    finalStandings: PropTypes.shape({
        first: PropTypes.string,
        second: PropTypes.string,
        third: PropTypes.string,
        fourth: PropTypes.string,
        fifth: PropTypes.string,
        sixth: PropTypes.string,
        heavyStringer: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        }),
        fishOver5lbs: PropTypes.shape({
            name: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array
            ]),
            numOfFishOver: PropTypes.string
        }),
        bigBass: PropTypes.shape({
            name: PropTypes.string,
            weight: PropTypes.string
        })
    })
};

export default TournamentFinalStandings;