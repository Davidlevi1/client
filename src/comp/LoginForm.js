import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';  

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', formData);
      if (response.status === 200) {
        alert('User login successful!');
        setFormData({
          userName: '',
          password: ''
        });
      }
    } catch (error) {
      alert(error.message);
      console.error('Error:', error);
    }
  };
  

  return (  
    <div className="center-container"> 
      <Card className="login-card"> 
        <Card.Body>
          <Card.Title>Welcome</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" name="userName" value={formData.userName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Login
            </Button>

           
          </Form>

            <Button variant="" type="link">
               <Link to="/register">Sgin Up</Link>
            </Button>
            
            <Button variant="" type="link">
              Forget Password? 
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
