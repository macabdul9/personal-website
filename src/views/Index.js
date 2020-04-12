import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'
import Main from '../layouts/Main';
import FileUpload from '../containers/FileUpload';
import CustomForm from '../containers/CustomForm';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Index extends Component {

    state = {
      fileUpload:false
    }
    handleFileUpload = (event) =>{
        // event.preventDefault();
        const {fileUpload} = {...this.state}
        this.setState({fileUpload:!fileUpload})
    }

    render() {
      let inputMethod = null;
      if(!this.state.fileUpload){
        inputMethod = (
          <CustomForm fileUpload={this.state.fileUpload} handleFileUpload={this.handleFileUpload}/>
        )
      }else{
        inputMethod = (
          <FileUpload/>
        )
      }
      return (
        <>
          <Main>
            <Helmet  title="Home" />
            <div style={{"textAlign":"center"}}>
                {/* <img src={background} alt="background" className={classes.Image}/> */}
                <h1>Reddiec Flair Detector</h1>
                <p>Enter Submission URL(from r/India) or upload text file containing URLs to predict the flair(s)</p>
            </div>

            {/* <form onSubmit={this.handleSubmit} className={classes.Form}>
                <input type="text" value={this.state.value} onChange={this.handleChange}  placeholder='Enter Subreddit URL' style={{"borderRadius":"50px"}}/>
                <text>Please enter a valid url</text>
                <Button type="submit" value="Submit" className={classes.Button}>Predict</Button>
            </form> */}
        
            <FormGroup>
                <FormControlLabel
                    control={<Switch color="primary" checked={this.fileUpload} onChange={this.handleFileUpload} name="anythin" />}
                    label="Upload File"
                />
            </FormGroup>
            {/* <Form style={{'position':'absolute','flex':'1','justifyContent':'center','width':'70%'}}>
              <Form.Group controlId="formGroupText">
                <Form.Label>Submission URL</Form.Label>
                <Form.Control type="text" placeholder="Enter r/india Submission URL" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
            {inputMethod}
          </Main>
        </>
      )
    }
  }
  
  export default Index
  
