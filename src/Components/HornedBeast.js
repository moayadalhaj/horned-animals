import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {
  constructor() {
    super();
    this.state = {
      votes: 0,
    };
  }
  countVote = () => {
    let votesNumber = 1 + this.state.votes;
    this.setState({
      votes: votesNumber,
    });
  }
  showModal = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Card className="m-2" style={{ minWidth: '250px', height: '375px' }}>
          <Card.Img variant="top" onClick={this.showModal} src={this.props.img} alt={this.props.title} style={{ height: '180px' }} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" onClick={this.countVote}>{this.state.votes} ❤️</Button>
          </Card.Body>
        </Card>
        <SelectedBeast img={this.props.img}
          title={this.props.title}
          description={this.props.description}
          votes={this.state.votes}
          countVote={this.countVote}
          handleClose={this.handleClose}
          show={this.state.show} />
      </div >
    );
  }
}

export default HornedBeast;
