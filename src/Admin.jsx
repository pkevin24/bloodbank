import React from 'react'
import { Form,Button } from "react-bootstrap";
function Admin() {
    return (
        <>
        <h1 style={{textAlign:"center",width:"100vw",fontSize:"80px",fontFamily:"'Bebas Neue', cursive",fontWeight:"900"}}>Admin Login</h1>
        <div className="row" id="ad">
                {/* <div class="col-lg-9 col-md-2 col-sm-12 col-12"></div> */}
                <div class="col-lg-12 col-md-12 col-sm-12 col-12" style={{alignContent:"center"}}>
                <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-12"></div>
            </div>
        </>
    )
}

export default Admin
