import React from 'react';
import {Component } from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDailyAdjusted } from '../actions/index';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.OnInputChange = this.OnInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    OnInputChange(event) {
       console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchDailyAdjusted(this.state.term);
        this.setState({ term: ''});
    }
    
    render() {
        return (
     <form onSubmit={this.onFormSubmit} className="test" noValidate autoComplete="off">
     <Input 
     placeholder="Ticker" 
     value={this.state.term} 
     onChange={this.OnInputChange}
     inputProps={{ 'aria-label': 'description' }} />
     <span><Button type="submit" variant="contained" color="primary">Press Me to IPO</Button></span>
   </form>
        );
    }
}

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ fetchDailyAdjusted }, dispatch);
    } 

export default connect(null, mapDispatchToProps)(SearchBar);