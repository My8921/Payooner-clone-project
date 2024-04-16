import React from "react";
import RegisterButton from "./Register_button";


class Navbar extends React.Component{

constructor(props){
    super(props);
    this.props=props;
}

render() {
    return (
         <div>
        <nav class="navbar  fixed-top navbar-expand-lg bg-white" style={{marginTop:"12px"}}>
  <div class="container-fluid mx-5 px-5">
    <a class="navbar-brand mx-5 px-5"  href="#" >Pay</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
    
        <li class="nav-item dropdown ml-5 mr-2">
          <a class="nav-link dropdown-toggle mx-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Freelancer
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Bussiness
          </a>
          <ul class="dropdown-menu mx-3">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Market-place
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">SignIn</a>
        </li>

      </ul>
      <RegisterButton></RegisterButton>
    </div>
  </div>
</nav>
         </div>
    );
}

}

export default Navbar;