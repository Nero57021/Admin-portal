import React from "react";
import Button from 'react-bootstrap/Button';
import Sales_page from "./Sales_Outline";
import '../component-CSS/sales.css'

function Sales() {

    
    // var sectionStyle = {
    //     width: "100vw",
    //     height: "100vh",
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(211, 202, 202, 0.185)), url(${Background})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundAttachment: "fixed",
    //     backgroundPosition: "center",
    //     display: "flex",
    //     flexDirection: "column"
    // };

  return (
    <div className="container-fluid d flex justify-content-center test"  >
      <h1>Sales Admin Page</h1>
                
                <div className="row">
                    <div className = "col-md-4">
                        <Sales_page title="Sales Reports"/>
                    </div>
                    <div className = "col-md-4">
                        <Sales_page title="Sales Leads"/>
                    </div>
                    <div className = "col-md-4">
                        <Sales_page title="Sales Demo"/>
                    </div>
                </div>
                <br></br>
                <div className="navbar-item d-flex justify-content-center">
                  
                    <Button variant="danger" onClick={event => window.location.href="/"}>Logout</Button>{' '}
                </div>
            </div>
  );
}
export default Sales;
