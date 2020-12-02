import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../Support/navbar.component"
import EditRole from "../Support/edit-role.component";
import CreateUser from "../Support/create-user.component";
import NewRoleList from "../Support/lists"
import '../component-CSS/support-admin.css'

function Support() {
  return (
    <Router>
      <Navbar />
      <div className="container support"> 
      <Route path="/supportAdmin" exact component={NewRoleList} />
      {/* <Route path="/" exact component={RolesList} /> */}
      <Route path="/edit/:id" component={EditRole} />
      {/* <Route path="/create" component={CreateRole} /> */}
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default Support;