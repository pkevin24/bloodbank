import React from 'react'
import { Form,Button } from "react-bootstrap";

import {Link} from 'react-router-dom';

function Login() {
    return (
        <>
       <div style={{border:"2px solid black",width:"400px",borderRight:"40px",borderLeft:"none"}}>
       <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
    <Form.Control style={{fontSize:"20px"}} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <div><h1 style={{fontSize:"20px",marginTop:"20px"}}>New User?</h1></div>
  <Link to="/Register" className="btn btn-primary">Sign up</Link>
</Form>
       </div>
        </>
    )
}

export default Login
