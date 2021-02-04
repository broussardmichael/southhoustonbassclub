import './index.css';
import React from "react";
import {Row, Col} from 'react-bootstrap';
import {FAQ, MembershipForm} from "../../Components";
import {getFaqs} from "../Actions";

class Membership extends React.Component {
    constructor(props) {
        super(props);
        this.state = {faqs: []}
    }

    componentDidMount() {
        getFaqs().then((faqs) => {
            if (faqs.type === "membership/getFaqs")
                this.setState({faqs: faqs.payload});
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return <Row className="membership-row-container">
            <Col>
                <div className="shadow mb-3 membership-container component-container">
                    <h2 className='membership-header'>Faqs</h2>
                    <div className="membership-faqs-container">{this.state.faqs.map(function (faq) {
                        return <FAQ key={faq.id} question={faq.question} answer={faq.answer}/>
                    })}
                    </div>
                </div>
            </Col>
            <Col>
                <div className="shadow membership-container component-container">
                    <h2 className='membership-header'>Membership Form</h2>
                    <div className="membership-form-container"><MembershipForm/></div>
                </div>

            </Col>
        </Row>
    }
}

export default Membership;