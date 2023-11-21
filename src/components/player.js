
import React from 'react';
import Card from 'react-bootstrap/Card';
import './playerStyles.css';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  const inlineStyle = {
    card: { margin: '10px', width: '300px' },
    image: { objectFit: 'cover' }
  };

  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageUrl} alt={`Image of ${name}`} style={inlineStyle.image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: '00',
  age: 'Unknown',
  imageUrl: 'default-image-url'
};

export default Player;
