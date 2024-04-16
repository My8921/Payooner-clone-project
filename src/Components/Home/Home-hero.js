import React from "react";

class Home_hero extends  React.Component{

    constructor(props){
        super(props);
        this.props=props;
    }
render() {
    return (
  
<div class="card bg-body-tertiary h-50"  style={{marginTop:"80px",width:"99.1%"}}>
    
<div class="card">
  <div class="row">
    <div class="col-md-6">
      <div class="card-body">
        <div className="my-5"></div>
        <h5 class="card-title mx-5" style={{fontSize:"30px"}}>How do you Pay and <br></br>
         Get Paid Globally</h5>
         <div className="my-3"></div>
        <p class="card-text mx-5"  style={{fontSize:"20px",wordSpacing:"2px"}}>Someone you know or work with thinks you <br></br> could benefit from having 
         a Payoneer account <br></br> and gave you their referral link. 
      Well, if you’ve got <br></br> a growing cross-border business, you’ve come <br></br> to the right place..</p>

      <p className="card-text mx-5 my-4">After receiving your first 1,000 USD* (or equivalent), you and your referrer will both get 25 USD.
</p>



        <a href="#" class="btn btn-primary bg-black mx-5 my-3">Get Started</a>


      </div>
    </div>
    
    <div class="col-md-6 my-4 ">
      <img src="https://www.payoneer.com/wp-content/uploads/raf-header-img.png.webp" alt="Imageofpayooner" class="img-fluid" style={{height:"400px"}}/>
    </div>
  </div>
</div>

  </div>


        
    );
}


}
export default Home_hero;