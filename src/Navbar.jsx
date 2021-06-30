
import React from 'react';
// import Internship from './Internships';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,} from 'react-bootstrap'
import './index';
import Fade from 'react-reveal/Fade';


function Navbar1() {
    return (
        <Navbar  style={{lineHeight:"70px", justifyContent:"space-between",textAlign:"center",color:"black",paddingRight:"20px",background:"#f7f9f8"}} bg="#f7f9f8" expand="lg">
        <Navbar.Brand href="/"><img src="/Images/bblogo.png" alt="LOGO" width="100px" style={{borderRadius:"20px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{padding: "1.5rem 1rem",borderColor:"rgba(0,0,0,0)"}}/>
        <div className='nav'>
        <Navbar.Collapse  className="nav1" id="basic-navbar-nav" style={{padding: "0.5rem 2rem"}}>
          <Nav className="mr-auto" style={{paddingRight: "1rem"}} >
            {/* <Nav.Link exact activeClassName='active_class' href="/home"><span style={{paddingRight:"25px"}}>Home</span></Nav.Link>
            <Nav.Link exact activeClassName='active_class' href="/project"><span style={{paddingRight:"25px"}}>Project</span></Nav.Link>
            <Nav.Link exact activeClassName='active_class' href="/internships"><span style={{paddingRight:"25px"}}>Internship</span></Nav.Link> */}
            {/* <div class="aa"> */}
            <Fade left>
            <NavLink style={{color:"black", fontWeight:"900",fontFamily:"'Bebas Neue', cursive"}} exact activeClassName='active_class' to='/'><span className="n1" style={{marginRight:"45px"}}>Home</span></NavLink>
              <NavLink style={{color:"black", fontWeight:"900",fontFamily:"'Bebas Neue', cursive"}} exact activeClassName='active_class' to='/emergency'><span className="n1" style={{marginRight:"45px"}}>Emergency</span></NavLink>
              {/* <NavLink style={{color:"black", fontWeight:"900",fontFamily:"'Bebas Neue', cursive"}} exact activeClassName='active_class' to='/internship'><span className="n1" style={{marginRight:"45px"}}>Internship</span></NavLink> */}
            </Fade>
            
            
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
    )
}

export default Navbar1
