import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAdmin_role = this.onChangeAdmin_role.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      admin_role: "",
      password: "",
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/role/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          admin_role: response.data.admin_role,
          password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/role/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeAdmin_role(e) {
    this.setState({
      admin_role: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      admin_role: this.state.admin_role,
      password: this.state.password,
    };

    console.log(exercise);

    axios
      .post("/api/role/update/" + this.props.match.params.id, exercise)
      .then((res) => console.log(res.data));

    window.location = "/SupportAdmin";
  }

  render() {
    return (
      <div>
        <h3>Edit User Role</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Role: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.admin_role}
              onChange={this.onChangeAdmin_role}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Confirm Edit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
