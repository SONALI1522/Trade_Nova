import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();
  const handleSignUp = () =>{
    navigate("/signup");
  };

  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
          <img
            src='media/Images/homeHero.png'
            alt='Hero Image'
            className='mb-5'
            style={{width: '100%'}}
          />
          <h1 className='mt-5'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:'20%', margin:'0 auto'}}
          onClick={handleSignUp}
          >Signup now</button>
      </div>
    </div>
  );
}

export default Hero;