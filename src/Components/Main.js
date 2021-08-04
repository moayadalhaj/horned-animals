import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import { Navbar, Nav, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArray: data,
      renderData: data
    };
  }

  selectionForm(e) {
    e.preventDefault();
    let dataArr = this.state.dataArray;
    if (e.target.value) {
      dataArr = this.state.dataArray.filter(element => {
        if (parseInt(e.target.value) === element.horns)
          return element;
      });
    } else {
      dataArr = this.state.dataArray;
    }
    this.setState({
      renderData: dataArr
    });
  }

  render() {
    let arrayElements = this.state.renderData.map(element => {
      return <Col><HornedBeast img={element.image_url}
        title={element.title}
        description={element.description}
        keyword={element.keyword}
        horns={element.horns} />
      </Col>;
    });
    return (
      <main>
        <Container>
          <Form.Select aria-label="Default select example" onChange={(e) => { this.selectionForm(e); }} className="mx-auto mb-3 rounded bg-secondary " style={{ maxWidth: '400px', color: '#fff' }}>
            <option value="">Selct Number Of Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One hundred</option>
          </Form.Select>
          <Row>
            {arrayElements}
          </Row>
        </Container>
      </main >
    );
  }
}

export default Main;
// className='justify-content-center d-flex'
// style={{ flexWrap: 'wrap' }}
