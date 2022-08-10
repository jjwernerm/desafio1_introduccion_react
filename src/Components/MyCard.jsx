import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const MyCard = ({imgMyCard, title, description}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgMyCard} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" id="saberMas">Saber más...</Button>
      </Card.Body>
    </Card>
  )  
}


export default MyCard;