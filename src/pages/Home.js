import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./font/fonts.css";
require("dotenv").config();

function Home() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(process.env.REACT_APP_LOCATION_URL);
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <Container>
      <Outter>
        <Location>
          {users.map((user) => (
            <li key={user.id}>
              <Thumbnail src={user.thumbnail} alt="thumbnail" />
              <Where>
                <Where2>0{user.id}.</Where2> {user.name}
              </Where>
              {user.desc}
              <Recommend> 추천명소 :{user.sights}</Recommend>
              <br></br>
              <br></br>
            </li>
          ))}
        </Location>

        <h4>#내가 원하는 제주 여행은?</h4>
        <SelecOptions>
          <a href="#">#자연#힐링</a>
          <a href="#">#활동#재미</a>
          <a href="#">#가족#아이</a>
        </SelecOptions>
      </Outter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 16px;

  box-sizing: border-box;
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  margin: 0px auto;
  max-width: 400px;
  border: 1px solid black;
  padding: 0vh 16px;
  padding-top: 10px;
  font-family: "NanumRegular";
`;

const Location = styled.div`
  & > li {
    list-style: none;
  }
`;

const Where = styled.div`
  font-size: 30px;
  font-family: "NanumBold";
`;

const Where2 = styled.span`
  color: #ffa01e;
`;

const Thumbnail = styled.img`
  width: 30vw;
  border: 3px solid black;
`;

const Recommend = styled.div`
  color: #40a940;
`;

const SelecOptions = styled.nav`
  display: flex;
  cursor: pointer;

  & > a {
    padding: 9px;
    border: 1px solid black;
  }
`;

export default Home;
