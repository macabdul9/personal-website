import React from 'react'
import axios, { post } from 'axios';
import classes from './FileUpload.module.css';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
	e.preventDefault() // Stop form submit
	console.log(this.state.file);
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <div className={classes.Top}>
		  <Form onSubmit={this.onFormSubmit} className={classes.Form}>
			<h1>File Upload</h1>
			<input type="file" onChange={this.onChange} />
			<Button type="submit" className={classes.Button}>Upload</Button>
		</Form>
	  </div>
   )
  }
}



export default FileUpload;