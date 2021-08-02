import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor() {
    super();
    this.state = {
      votes: 0
    };
  }
  countVote = () => {
    let votesNumber = 1 + this.state.votes;
    this.setState({
      votes: votesNumber
    });
  }
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} alt={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" onClick={this.countVote}>{this.state.votes} ❤️</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
