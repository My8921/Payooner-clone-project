import React from 'react';
import Register from "./Register.css"

const RegisterButton = () => {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
        
          {/* Register button with animation */}
          <a href="#" className="btn btn-primary btn-lg register-button">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterButton;
