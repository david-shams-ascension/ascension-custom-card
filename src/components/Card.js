import React from 'react';
import './card.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ACard = (props) => {
  return (
    <div>

    <Card style={{ width: '18rem' }}>
      {<Card.Img variant="top" src="https://ascensiononlinecare.org/static/release_e3aaf4f43d050213e79ec46711a1271e46b41fff/images/common/IMG_Login_FormTopLogo.jpg" /> }
      <Card.Body>
        <Card.Title>Waiting Room</Card.Title>
        <Card.Text>
            {props.children}
        </Card.Text>
        <Button variant="primary">Book appointment</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ACard;
