import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'

import Main from '../layouts/Main';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Form, Button} from 'react-bootstrap';
import FileUpload from '../containers/FileUpload'
  
class Index extends Component {
    render() {
      return (
        <>
          <Main>
            <Helmet  title="Home" />
            {/* <Form style={{'position':'absolute','flex':'1','justifyContent':'center','width':'70%'}}>
              <Form.Group controlId="formGroupText">
                <Form.Label>Submission URL</Form.Label>
                <Form.Control type="text" placeholder="Enter r/india Submission URL" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
            <FileUpload/>
          </Main>
        </>
      )
    }
  }
  
  export default Index
  
