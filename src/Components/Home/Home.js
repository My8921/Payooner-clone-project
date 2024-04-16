import React from "react";
import Navbar from "../General/Navbar";
import Home_hero from "./Home-hero";

class Home extends React.Component{

constructor(props){
super(props);
this.props=props;

}
render() {
    return (
        <div>
 <Navbar></Navbar>
<hr></hr>
         <Home_hero></Home_hero>
        </div>
        
    );
}



}

export default Home;