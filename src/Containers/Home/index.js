import React from "react";
import {Row, Col} from 'react-bootstrap';
import {ClubOfficer, About, EventBtn, HomeSection, EventModal} from "../../Components"
import {getClubInformation} from '../Actions'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedEvent: {},
            info: "",
            officers: [],
            events: []
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(selectedEvent) {
        this.setState({show: true, selectedEvent: selectedEvent});
    }

    handleCloseModal(){
        this.setState({show: false, selectedEvent: {}});
    }

    componentDidMount() {
        getClubInformation().then((clubInformation) => {
            if (clubInformation.type === "home/getClubInformation")
                this.setState({
                    info: clubInformation.payload.homepage,
                    events: clubInformation.payload.events,
                    officers: clubInformation.payload.officers
                });
        }).catch((error) => {
            console.log(error);
        });
    }

    render()
    {
        return <React.Fragment>
            <Row className='home-row-container'>
                <Col>
                    <HomeSection header='South Houston Bass Club'>
                        <About clubinformation={this.state.info}/>
                    </HomeSection>
                </Col>
                <Col>
                    <HomeSection header='Upcoming Events'>
                        <EventModal show={this.state.show} event={this.state.selectedEvent} hideHandler={this.handleCloseModal}/>
                        {this.state.events.map((event) => {
                            let currentDate = new Date();
                            let startDate = new Date(event.date);
                            let endDate = new Date(event.endDate);

                            if (event.eventType === 'meeting') {
                                return <EventBtn key={event._id} event={event} showHandler={this.handleOpenModal}/>;
                            } else if (event.eventType === 'tournament') {
                                return <EventBtn key={event._id} active={(startDate < currentDate && currentDate < endDate)}
                                                 event={event} showHandler={this.handleOpenModal}/>;
                            }
                        })}
                    </HomeSection>
                    <HomeSection header='SHBC Officers'>
                        {this.state.officers.map(function (officer) {
                            return <ClubOfficer key={officer._id} title={officer.title} name={officer.name}
                                                canContact={officer.canContact} email={officer.email}/>
                        })}
                    </HomeSection>
                </Col>
            </Row>
        </React.Fragment>
    }
}


export default Home;