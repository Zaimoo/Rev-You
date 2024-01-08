import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const MainContent = () => {
  const hasToken = sessionStorage.getItem('token');

  const link = hasToken ? '/#/reviewer-maker' : '/#/login';

  return (
    <>
      <div className="main-content container">
        <div>
          <h1>Study easier, study smarter.</h1>
          <h3>
            RevYou is a website that automatically
            <br />
            creates reviewers for students who wish
            <br />
            to make their studying process easier.
          </h3>
          <br />
          <Link to={link} className="green-btn">
            Try it now!
          </Link>
        </div>
      </div>
      <div className='main-content-footer'>
        <Footer />
      </div>
    </>
  );
};

export default MainContent;
