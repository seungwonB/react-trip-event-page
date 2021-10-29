import React from "react";
import Home from "./pages/Home";
import Card from "./pages/Card";

class App extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <div>
        <Home />
        <Card />
      </div>
    );
  }
}

export default App;
