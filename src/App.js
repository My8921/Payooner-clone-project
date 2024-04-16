import React from "react";

import Home from "./Components/Home/Home";


class App extends React.Component{

constructor(props){
    super(props);
    this.props=props;
}

render() {
  return (
  <Home></Home>
  );
}


}

export default App;