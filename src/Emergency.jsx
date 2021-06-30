import React from 'react'
import { Form,Button,Col } from "react-bootstrap";

function Emergency() {
    return (
        <>
        <div className="row" id="ad">
                {/* <div class="col-lg-9 col-md-2 col-sm-12 col-12"></div> */}
                <h1 style={{textAlign:"center",width:"100vw",fontSize:"40px",fontFamily:"'Bebas Neue', cursive",fontWeight:"900",marginBottom:"90px"}}>Check the availablity</h1>
                <div class="col-lg-12 col-md-12 col-sm-12 col-12" style={{alignContent:"center"}}></div>
                <Form>
  <Form.Row>
    <Col>
    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Preference
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
      <Form.Control placeholder="Pincode" />
    </Col>
    <Col>
    <Button variant="primary" type="submit">
    Submit
  </Button>
    </Col>
  </Form.Row>
</Form>
                </div>
        </>
    )
}

export default Emergency
