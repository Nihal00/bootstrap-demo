import React from 'react';
import { Button, Card, CardGroup, Col, Container, Image, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <header>
        <Navbar bg='dark' variant='dark' expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className='px-4 my-5'>
            <Col sm={7}>
              <Image src="https://picsum.photos/920/500" fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 className="font-weight-light">Tagline</h1>
              <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolorem. Harum facere laborum temporibus, alias tempora qui dolorum excepturi earum dignissimos assumenda possimus, quaerat fuga ab dolore autem? Illum, nulla?
              </p>
              <Button variant="outline-primary">Call to actions</Button>
            </Col>
          </Row>
          <Row>
            <Card className='text-center bg-secondary text-white my-5 py-4'>
              <Card.Body>
                This call to action card is a great place to showcase some important information or display a clever tagline!
              </Card.Body>
            </Card>
          </Row>
          <Row className='d-flex justify-content-between'>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/203/320/200" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/202/320/200" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Row>
        </Container>
      </main>
      <footer className='py-5 mt-5 bg-dark'>
        <Container className='px-4'>
          <p className='text-white text-center'>Copyright &copy; Your website 2023</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
