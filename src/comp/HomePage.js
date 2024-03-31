// HomePage.js
import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; import './HomePage.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <Container fluid>
        <Row>
          <Col sm={8} className="central-page">
            {/* Central content goes here */}
            <h1>Welcome to My Website</h1>
            {/* Add more content as needed */}



          </Col>
          <Col sm={4} className="fixed-sidebar">
            {/* Navigation menu goes here */}
            <ul>
              <h2>nav</h2>
              <Row >
              <Col>
                <Link to="/login" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  <button className="login-button">Login</button>
                </Link>
              </Col>

              <Col>
                <Link to="/register" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  <button className="login-button">SginUpg</button>
                </Link>
              </Col>
           
              <Row>
               <Col sm={8} className="search-container">
                 {/* Search bar */}
                 
                 <Form className="search-form">
                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-primary">
                     <FaSearch />
                   </Button>
                 </Form>
               </Col>
             </Row>

              </Row>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              {/* Add more links as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
