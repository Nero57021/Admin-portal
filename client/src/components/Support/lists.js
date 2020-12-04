import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom";

const UserRole = (props) => (
  <tr>
    <td>{props.roles.username}</td>
    <td>{props.roles.admin_role}</td>
    <td>
      <Link to={"/edit/" + props.roles._id}>edit</Link> |{" "}
      <a
        href="supportAdmin"
        onClick={() => {
          props.deleteroles(props.roles._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const FetcherList = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    console.log("TEST");
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/role/");
        setValue(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const rolesList = () => {
    return value.map((currentroles) => {
      return (
        <UserRole
          roles={currentroles}
          deleteroles={deleteroles}
          key={currentroles._id}
        />
      );
    });
  };
  const deleteroles = (id) => {
    axios.delete("/api/role/" + id).then((response) => {
      console.log(response.data);
    });

    setValue(value.filter((el) => el._id !== id));
  };
  return (
    <div>
      <h3>Logged Users</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rolesList()}</tbody>
      </table>
    </div>
  );
};

export default FetcherList;
