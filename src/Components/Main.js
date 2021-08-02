import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
  render() {
    let arrayElements = data.map(element => {
      return <Col><HornedBeast img={element.image_url}
        title={element.title}
        description={element.description}
        keyword={element.keyword}
        horns={element.horns} />
      </Col>;
    });
    return (
      <main>
        <Row xs="1" md="2" xl="3" xxl="4" className="d-flex justify-content-center">
          {arrayElements}
        </Row>
      </main >
    );
  }
}

export default Main;
