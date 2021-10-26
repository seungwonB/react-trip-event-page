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
              <Thumbnail src={user.thumbnail} alt="thumbnail" />
              <Where>
                <Where2>0{user.id}.</Where2> {user.name}
              </Where>
              {user.desc}
              <Recommend> 추천명소 :{user.sights}</Recommend>
              <br></br>
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
  height: 100%;
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  overflow: scroll;
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  max-width: 400px;
  padding: 0vh 1px;
`;

const Location = styled.div`
  width: 90vw;

  & > li {
    list-style: none;
  }
`;

const Where = styled.div`
  font-size: 30px;
`;

const Where2 = styled.span`
  color: #ffa01e;
`;

const Thumbnail = styled.img`
  width: 340px;
  height: 180px;
  border: 3px solid black;
`;

const Recommend = styled.div`
  color: #40a940;
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
