import React, { Component } from 'react';
// import classes from './Cell.module.css';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Cell extends Component {
  
  render() {
    return (
        <div className="cell-container">
            {/* <article className="mini-post">
            <header>
                <h2><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></h2>
                <h4><strong>Author</strong>{this.props.author} </h4>
                <h5><strong>Posted on:</strong>{this.props.postedOn}</h5>
            </header>
            <p className={classes.Blog}>{this.props.description}</p>
            </article> */}
            {/* <Card className="text-center">
              <Card.Header>{this.props.featured}</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <Button variant="primary">Read the full article</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card> */}
            <Link to={{pathname: this.props.id}}>
              <Card hoverable="true" className='mt-1'>
                  <Card.Header as="h5">Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant="light" size='lg' block>Read full article</Button>
                  </Card.Body>
              </Card>
            </Link>
        </div>
    )
  }
}

export default Cell;
