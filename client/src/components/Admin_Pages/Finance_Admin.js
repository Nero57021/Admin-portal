import React from "react";
import "../component-CSS/finance.css";
import FinanceOutline from "./Finance_outline"
import Button from 'react-bootstrap/Button';

function Finance() {
  return (
    <div className="container-fluid d flex justify-content-center finance">
                <div className = "Title"> Finance Admin Page</div>
                <div className="row mx-auto">
                    <div className = "col-md-3 p-3">
                        <FinanceOutline title="Finance Reports"/>
                    </div>
                    <div className = "col-md-3 p-3">
                        <FinanceOutline title="Account Payable"/>
                    </div>
                    <div className = "col-md-3 p-3">
                        <FinanceOutline title="Account Recieveable"/>
                    </div>
                    <div className = "col-md-3 p-3">
                        <FinanceOutline title="Tax"/>
                    </div>
                </div>
                <div className="navbar-item d-flex justify-content-center">
                    <Button variant="danger" onClick={event => window.location.href="/"}>Logout</Button>{' '}
                </div>
  </div>
  );
}
export default Finance;
