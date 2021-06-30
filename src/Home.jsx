import React from 'react'
import Login from './Login'
function Home() {
    return (
        <>
        <section className="container">
            <div className="row" id="hei">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
                <span style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"900",fontSize:"100px",marginTop:"32px"}} >Donate Blood and Save lives</span>
                </div>
                <div id="form1" className="col-lg-5 col-md-5 col-sm-12 col-12 ">
                <div style={{fontSize:"30px",marginLeft:"30px"}}><Login/></div>
                
                </div>
            </div>
        </section>
        </>
    )
}

export default Home
