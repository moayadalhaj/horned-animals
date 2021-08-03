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
        <Card className="mb-3" style={{ width: '18rem', height: '350px' }}>
          <Card.Img variant="top" onClick={this.countVote} src={this.props.img} alt={this.props.title} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">{this.state.votes} ❤️</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
