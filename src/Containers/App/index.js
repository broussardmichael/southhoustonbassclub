import './index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Routes from 'Routes';
import {Content, Footer, NavBar} from 'Components';

/**
 * App Container - class that composes header, content and footer, and routes.
 */

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <NavBar/>
            <div className = 'background-container'>
                <Container>
                    <Content>
                        <Routes/>
                    </Content>
                </Container>
            </div>
            <Footer/>
        </React.Fragment>
    }
}

export default App;