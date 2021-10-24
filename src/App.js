import React from "react";
import Home from "./pages/Home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
