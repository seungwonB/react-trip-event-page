import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./font/fonts.css";
require("dotenv").config();

function Card() {
  const [users, setUsers] = useState([]);

  function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

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
          <Product key={user.id}>
            <Thumbnail
              src={user.trips[user.id].thumbnail}
              alt="thumbnail"
            ></Thumbnail>
            <Ticket>
              {user.trips[user.id].ticket_type}
              <div>{user.trips[user.id].discount_percent}%</div>
            </Ticket>
            <Location>
              [{user.trips[user.id].location}]<br></br>
              {user.trips[user.id].title}
            </Location>
            <Price>
              <span>{addComma(user.trips[user.id].price_origin)}원</span>
              <div>{addComma(user.trips[user.id].price_discounted)}원~</div>
            </Price>
          </Product>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
`;

const Product = styled.div`
  border: 1px solid black;
`;

const Thumbnail = styled.img`
  width: 50%;
  display: block;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
`;

const Ticket = styled.div`
  padding: 5px;
  font-size: 10px;
  color: gray;
  & > div {
    background-color: #b4e5ff;
    text-align: center;
    width: 6vw;
    border-radius: 10px;
    display: inline;
    float: right;
    color: #000069;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Location = styled.div`
  padding: 5px;
  font-weight: bold;
`;

const Price = styled.div`
  padding: 5px;
  font-size: 14px;
  & > span {
    color: #fff064;
    text-decoration: line-through;
  }
  & > div {
    display: inline;
    font-weight: bold;
    color: black;
    padding-left: 40px;
  }
`;

export default Card;
