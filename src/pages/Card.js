import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./font/fonts.css";
require("dotenv").config();

function Card() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(process.env.REACT_APP_PRODUCT_URL);
    setUsers(response.data.themes);
    console.log(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Container>
      {users.map((user) => {
        return (
          <Product key={user.trips.id}>
            {user.trips[user.id].ticket_type},
            {user.trips[user.id].discount_percent}, [
            {user.trips[user.id].location}],
            {user.trips[user.id].title},{user.trips[user.id].price_origin},
            {user.trips[user.id].price_discounted}
          </Product>
        );
      })}
    </Container>
  );
}

const Container = styled.div``;

const Product = styled.div`
  border: 1px solid black;
`;
export default Card;
