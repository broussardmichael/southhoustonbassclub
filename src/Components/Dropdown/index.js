import React from "react";
import './index.css';
import PropTypes from 'prop-types';

class Dropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:this.props.currentSelection}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (handlerFn) {
        let that = this;
        return function (event) {
            that.setState({value: event.target.value});
            handlerFn(event.target.value);
        }
    }

    render() {
        let options = this.props.optionItems.map(function(item, index) {
            return  <option key = {item + "_" + index} value = {item}>{item}</option>
        });

        return (<div className = "dropdown-container"><select className = "select-css"
            value={this.state.value}
            onChange={this.handleChange(this.props.handler)}>
            {options}
        </select></div>)
    }
}


Dropdown.propTypes = {
    optionItems: PropTypes.array,
    handler: PropTypes.func,
    currentSelection: PropTypes.number,
};

export default Dropdown;