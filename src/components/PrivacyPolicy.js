import React from 'react';
import './css/PrivacyPolicy.css'
import aboutus from '../about-us.png';
import paragraphBreak from '../paragraph-break.png';
import Footer from './Footer';
const PrivacyPolicy = () => {
    return (
        <>
        <div className='privacy-policy'>
        <div className='privacy-policy-body'>
        <div className='privacy-policy-text-container'>
            <h2>Privacy Policy</h2>
            <span>At RevYou, we are committed to protecting the users’ privacy. This Privacy Policy outlines how we collect, use, share, and safeguard your personal information in this website.</span>
            <img src= {paragraphBreak}></img>
        </div>

        <div className='privacy-policy-text-container'>
            <h3>Information we collect:</h3>
            <span>RevYou may collect the following information: </span>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone Number</li>
            </ul>
            <img src= {paragraphBreak}></img>
        </div>

        <div className='privacy-policy-text-container'>
            <h3>How RevYou collects information:</h3>
            <span>RevYou may collect information through the following:</span>
            <ul>
                <li>Account Creation</li>
                <li>Contact Forms and inquiries</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Analytics Tools</li>
            </ul>
            <img src= {paragraphBreak}></img>
        </div>


        <div className='privacy-policy-text-container'>
            <h3>Purpose of Information Collection:</h3>
            <span>RevYou collects and processes your information for the following purposes:</span>
            <ul>
                <li>To provide and personalize our services</li>
                <li>To process transactions and fulfill orders</li>
                <li>To analyze website usage and improve user experience</li>
            </ul>
            <img src= {paragraphBreak}></img>
        </div>

        <div className='privacy-policy-text-container'>
            <h3>Use of Information:</h3>
            <span>The users’ information will only be used for the purposes stated above and will not be sold or shared with third parties without consent, except as required by law.</span>
            <img src= {paragraphBreak}></img>
        </div>

        <div className='privacy-policy-text-container'>
            <h3>User Rights</h3>
            <span>
            All users of RevYou have the right to access, correct, or delete your personal information.
            <br />
            <br />
            To exercise these rights or for any privacy-related concerns, please contact us at RevYou@gmail.com
            </span>
            <img src= {paragraphBreak}></img>
        </div>


        <div className='privacy-policy-text-container'>
            <h3>Compliance With Laws:</h3>
            <span>RevYou is committed to complying with any applicable privacy laws and regulations.</span>
            <img src= {paragraphBreak}></img>
        </div>

        <h3>Thank You for trusting RevYou with your information!</h3>

        <img src={aboutus}></img>
        </div>
        </div>
        <Footer />
        </>
       
    );
  };

export default PrivacyPolicy;