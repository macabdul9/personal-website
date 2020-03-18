import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';

class Product extends Component {
  render() {
    const age = this.props.status!== "new" ? 0 :(new Date(this.props.status)).getMonth() - (new Date()).getMonth();
    return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Footer>Category : {this.props.category} &nbsp;&nbsp;&nbsp;&nbsp; Brand:new  {this.props.brand}</Card.Footer>
        <Card.Img variant="top" src={this.props.source}/>
        <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Subtitle><strong>Price : </strong>{this.props.price} USD</Card.Subtitle>
            <p><strong>Satus : </strong>{age===0?"Unused" :age+"Month Old"}</p>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Checkout</Button>
        </Card.Body>
        </Card>
    </div>
    )

  }
}

export default Product;
