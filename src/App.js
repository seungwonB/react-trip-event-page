import React from "react";
import Home from "./pages/Home";
import axios from "axios";
axios({
  method: "get",
  url: "https://f177470e-beca-4f6a-9c56-1afd36fe9484.mock.pstmn.io/location",

  responseType: "json",
}).then(function (response) {
  console.log(response.data);
});
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
