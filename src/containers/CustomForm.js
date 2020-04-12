import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import classes from "./CustomForm.module.css";
import background from '../assets/home.png';

import { CircularProgress } from '@material-ui/core';

class CustomForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '', submit:false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
    //   alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
      this.setState({submit:true});
    }
    
  
    render() {
      let progress=  null;
      if (this.state.submit){
        progress =  (<CircularProgress />);
      }
      console.log(this.state.submit);
      return (
        <div className={classes.Top}>
        <div >
            <Form className={classes.Form} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formText">
                    <Form.Control type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Submission URL" style={{"borderRadius":"50px"}}/>
                    <Form.Text className="text-muted" style={{"color":"red"}}>
                        Please Enter a valid submission url.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className={classes.Button}>
                    Predict
                </Button>
            </Form>
            {progress}

        </div>
        </div>
      );
    }
  }

export default CustomForm;
