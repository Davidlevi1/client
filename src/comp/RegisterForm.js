import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';  

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    name: '',
    lastName: '',
    address: '',
    cellNum: '',
    mailAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', formData);
      alert('User registered successfully!');
      setFormData({
        userName: '',
        password: '',
        name: '',
        lastName: '',
        address: '',
        cellNum: '',
        mailAddress: ''
      });
    } catch (error) {
      // alert();
      console.error('Error:', error);
    }
  };

  return (
    <div className="center-container"> 
      <Card className="register-card"> 
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" name="userName" value={formData.userName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCellNum">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter cell phone number" name="cellNum" value={formData.cellNum} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicMailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="mailAddress" value={formData.mailAddress} onChange={handleChange} />
            </Form.Group>

           

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <Button variant="" type="link">
               <Link to="/login">Log In</Link>
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
