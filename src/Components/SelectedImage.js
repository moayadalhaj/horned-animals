import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedImage extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Animal Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.img} alt={this.props.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <Button variant="primary" onClick={this.props.countVote}>{this.props.votes} ❤️</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedImage;
