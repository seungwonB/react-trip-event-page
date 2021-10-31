import React, { Component } from "react";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Family from "./pages/Family";
import Active from "./pages/Active";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Route excat path="/" component={Home} />
          <Route path="/card" component={Card} />
          <Route path="/active" component={Active} />
          <Route path="/family" component={Family} />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  background-color: #b4e5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  // height: 100%;
  margin: 0px auto;
  max-width: 400px;
  border: 1px solid b4e5ff;
  padding: 0vh 16px;
  padding-top: 10px;
  font-family: "NanumRegular";
`;

export default withRouter(App);
