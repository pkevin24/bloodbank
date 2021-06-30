// import {Button,Modal} from "react-bootstrap";
import {React} from 'react'
import { Form, Button,Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Register() {
    return(<>
        <div style={{border:"2px solid black",width:"400px",borderRight:"40px",borderLeft:"none"}}>
        <Form>
        <Col>
        <Form.Group controlId="formBasicEmail">
     <Form.Label style={{fontSize:"20px"}}>Name</Form.Label>
     <Form.Control style={{fontSize:"20px"}} type="text" placeholder="Enter name" />
     
    </Form.Group>
        </Col>
    <Col>
    <Form.Group controlId="formBasicEmail">
     <Form.Label style={{fontSize:"20px"}}>Age</Form.Label>
     <Form.Control style={{fontSize:"20px"}} type="text" placeholder="Enter age" />
     
    </Form.Group>
    </Col>
    

    <Col>
    <Form.Label style={{fontSize:"20px"}}>Blood group</Form.Label>
    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Blood Group</option>
        <option value="1">O+</option>
        <option value="2">O-</option>
        <option value="3">B-</option>
        <option value="4">AB+</option>
        <option value="5">B+</option>
        <option value="6">Other</option>
      </Form.Control>
    </Col>




    <Col>
    <Form.Group controlId="formBasicEmail">
     <Form.Label style={{fontSize:"20px"}}>Address</Form.Label>
     <Form.Control style={{fontSize:"20px"}} type="text" placeholder="Enter Address" />
     
    </Form.Group>
    </Col>
    <Col>
    <Form.Group controlId="formBasicEmail">
     <Form.Label style={{fontSize:"20px"}}>Pincode</Form.Label>
     <Form.Control style={{fontSize:"20px"}} type="pincode" placeholder="Enter pincode" />
     
    </Form.Group>
    </Col>

    <Col><Form.Group controlId="formBasicEmail">
     <Form.Label style={{fontSize:"20px"}}>Email address</Form.Label>
     <Form.Control style={{fontSize:"20px"}} type="email" placeholder="Enter email" />
     
    </Form.Group></Col>

    
    <Col><Form.Group controlId="formBasicPassword">
     <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" />
    </Form.Group></Col>
    
    <Col><Link to="/" className="btn btn-primary">
     Submit
    </Link></Col>
    {/* <div><h1 style={{fontSize:"20px",marginTop:"20px"}}>New User?</h1></div> */}
    {/* <Link to="/Register" className="btn btn-primary">Sign up</Link> */}
    </Form>
        </div>
        
          </>);
    
  }
  
//   render(<Register />);
  export default Register;