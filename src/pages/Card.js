import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./font/fonts.css";
require("dotenv").config();

function Card() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // axios({
    //   method: "GET",
    //   url: process.env.REACT_APP_PRODUCT_URL,
    //   data: {},
    // })
    //   .then((res) => {
    //     setUsers(res.data);
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     throw new Error(error);
    //   });

    const response = await axios.get(process.env.REACT_APP_PRODUCT_URL);
    setUsers(response.data.themes);
    console.log(response.data);
    // const response = await axios({
    //   method: "GET",
    //   url: process.env.REACT_APP_PRODUCT_URL,
    //   data: {},
    // }).then((res) => {
    //   console.log(res.data.themes);
    //   setUsers(res.data.themes);
    // });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.trips[user.id].ticket_type},
          {user.trips[user.id].discount_percent}, [
          {user.trips[user.id].location}],
          {user.trips[user.id].title},{user.trips[user.id].price_origin},
          {user.trips[user.id].price_discounted},
        </li>
      ))}
    </div>
  );
}

export default Card;
