import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

axios({
  method: "get",
  url: "https://f177470e-beca-4f6a-9c56-1afd36fe9484.mock.pstmn.io/location",

  responseType: "json",
}).then(function (response) {
  console.log(response.data);
});

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
        const response = await axios.get(
          "https://f177470e-beca-4f6a-9c56-1afd36fe9484.mock.pstmn.io/location"
        );
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
              {user.id} {user.name} ({user.desc})
              <img src={user.sights} alt="thumbnail" />
              {user.thumbnail}
            </li>
          ))}
        </Location>
        <h4>#내가 원하는 제주 여행은?</h4>
        <SelecOptions>
          <p>#자연#힐링</p>
          <p>#활동#재미</p>
          <p>#가족#아이</p>
        </SelecOptions>
      </Outter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  height: 95vh;
  max-width: 400px;
  padding: 0vh 16px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Location = styled.div`
  width: 90vw;
  height: 95vh;
  list-tyle: none;
`;

const SelecOptions = styled.div`
  display: flex;
  cursor: pointer;
  & > p {
    border: 1px solid #ffa01e;
    width: 25vw;
    height: 5vh;
    text-align: center;
    color: #ffa01e;
  }
`;

export default Home;
