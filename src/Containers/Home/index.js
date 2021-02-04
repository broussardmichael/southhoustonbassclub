import React from "react";
import {Row, Col} from 'react-bootstrap';
import {ClubOfficer, About, EventBtn, HomeSection, EventModal} from "../../Components"
import {getClubInformation, getClubOfficers, getClubEvents} from '../Actions'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedEvent: {},
            clubInformation: {homepage: ''},
            clubOfficers: [],
            clubEvents: []
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
                this.setState({clubInformation: clubInformation.payload});
            return getClubOfficers();
        }).then((clubOfficers) => {
            if (clubOfficers.type === "home/getClubOfficers")
                this.setState({clubOfficers: clubOfficers.payload});
            return getClubEvents();
        }).then((clubEvents) => {
            if (clubEvents.type === "home/getClubEvents")
                this.setState({clubEvents: clubEvents.payload});
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
                        <About clubinformation={this.state.clubInformation.homepage}/>
                    </HomeSection>
                </Col>
                <Col>
                    <HomeSection header='Upcoming Events'>
                        <EventModal show={this.state.show} event={this.state.selectedEvent} hideHandler={this.handleCloseModal}/>
                        {this.state.clubEvents.map((event) => {
                            let currentDate = new Date();
                            let startDate = new Date(event.date);
                            let endDate = new Date(event.endDate);

                            if (event.type === 'meeting' && endDate > currentDate) {
                                return <EventBtn key={event.id} event={event} showHandler={this.handleOpenModal}/>;
                            } else if (event.type === 'tournament' && endDate > currentDate) {
                                return <EventBtn key={event.id} active={(startDate < currentDate && currentDate < endDate)}
                                                 event={event} showHandler={this.handleOpenModal}/>;
                            }
                        })}
                    </HomeSection>
                    <HomeSection header='SHBC Officers'>
                        {this.state.clubOfficers.map(function (officer) {
                            return <ClubOfficer key={officer.id} title={officer.title} name={officer.name}
                                                canContact={officer.canContact} email={officer.email}/>
                        })}
                    </HomeSection>
                </Col>
            </Row>
        </React.Fragment>
    }
}


export default Home;