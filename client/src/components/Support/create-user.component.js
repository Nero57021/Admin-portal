import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeadmin_role = this.onChangeadmin_role.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      admin_role: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeadmin_role(e) {
    this.setState({
      admin_role: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      admin_role: this.state.admin_role,
    };

    console.log(user);

    axios
      .post("api/role/add", user) //This is where it post to the endpoint
      .then((res) => console.log(res.data));

    this.setState({
      //were sending the username
      username: "",
      password: "",
      admin_role: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>password: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>admin_role: </label>

            {/* <input
              type="select"
              required
              className="form-control"
              value={this.state.admin_role}
              onChange={this.state.admin_role}
            /> */}

            <div class="input-group mb-3">
              <select
                class="custom-select"
                onChange={this.onChangeadmin_role}
                value={this.state.admin_role}
                id="inputGroupSelect01"
              >
                <option value="">Choose an admin role</option>
                <option value="HR">HR</option>
                <option value="SupportAdmin">Support Admin</option>
                <option value="Technology">Technology Admin</option>
                <option value="Finance">Financial Admin</option>
                <option value="Sales">Sales Admin</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

{
  /* <label>Username: </label>
<select ref="userInput"
required
className="form-control"
value={​​​​​this.state.username}​​​​​
onChange={​​​​​this.onChangeUsername}​​​​​>
{​​​​​
this.state.users.map(function(user) {​​​​​
return <option
key={​​​​​user}​​​​​
value={​​​​​user}​​​​​>{​​​​​user}​​​​​
</option>;
}​​​​​)
}​​​​​ */
}
