import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import { Navbar, Nav, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

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
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
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
