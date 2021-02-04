import './index.css';
import React from "react";

class MembershipForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'firstName': '',
            'lastName': '',
            'address': '',
            'addressLine2': '',
            'city': '',
            'state': '',
            'zip': '',
            'cell': '',
            'email': '',
            'reason': ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A member was submitted');
        //EmailJS service to send your emails.
        event.preventDefault();
    }

    render() {
        return (
            <div className = 'membership-form'>
                <div>
                    <input type="text" value={this.state.firstName} placeholder = "First Name" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" value={this.state.lastName} placeholder = "Last Name" onChange={this.handleChange} />
                </div>
                <div className = "break"/>
                <div className = "wide">
                    <input type="text" value={this.state.address} placeholder = "Address" onChange={this.handleChange} />
                </div>
                <div className = "break"/>
                <div className = "wide">
                    <input type="text" value={this.state.addressLine2} placeholder = "Second Address Line" onChange={this.handleChange} />
                </div>
                <div className = "break"/>
                <div>
                    <input type="text" value={this.state.city} placeholder = "City" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" value={this.state.state} placeholder = "State" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" value={this.state.zip} placeholder = "Zip Code" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" value={this.state.cell} placeholder = "Cell Phone" onChange={this.handleChange} />
                </div>
                <div className = "wide">
                    <input type="text" value={this.state.email} placeholder = "Email" onChange={this.handleChange} />
                </div>
                <div className = "break"/>
                <div className = "wide">
                    <input id = "reason" type="textarea" value={this.state.reason} placeholder = "Reason for joining" onChange={this.handleChange} />
                </div>
                <div className = "break"/>
                <div className = "submitBtn">
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

export default MembershipForm;