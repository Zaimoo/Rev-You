import React from 'react';
import Footer from './Footer';

const MainContent = () => {
  return (
    <>
        <div className="main-content container">
      <div>
      <h1>Study easier, study smarter.</h1>
      <h3>RevYou is a website that automatically <br>
      </br> creates reviewers for students who wish <br></br>to make their studying process easier.</h3>
      <br></br>
      <a href= '/reviewer-maker'className="green-btn">Try it now!</a>
      </div>

    </div>
    <div className='main-content-footer'>
      <Footer />
      </div>
    </>

  );
};

export default MainContent;
