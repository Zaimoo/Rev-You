import React from 'react';
import './css/About.css'
import aboutUs from '../about-us.png';
import paragraphBreak from '../paragraph-break.png';
import Footer from './Footer';
import './css/Values.css'
const Values = () => {
    return (
        <>
         <div className='values'>
         <div className='values-body'>
                <div className='values-text-container'>
                    <h2>Vision</h2>
                    <p>RevYou aspires to be a reviewer-making website that lets students make studying smarter and easier in any subject. </p>
                    <img src= {paragraphBreak}></img>
                </div>
                
                <div className='values-text-container'>
                    <h2>Mission</h2>
                        <p>   RevYou primarily exists to help high school students specifically to study more effectively and efficiently. We aim to automatically provide reviewer material that makes students study smarter and easier as this site offers convenience in the making of reviewers. </p>
                        <img src= {paragraphBreak}></img>
                </div>

                <div className='values-text-container'>
                    <h2>Ethical use of AI </h2>
                    <p>    RevYou is an automatic reviewer maker that uses the power of AI to help students make reviewers during exam weeks. Being committed to the ethical use of AI, RevYou focuses on easing the studying experience of students. <br></br><br></br>
                    RevYou is not a tool for cheating, nor is it a tool that encourages students to cram their work. Instead, RevYou helps them in times when making a fast yet reliable and accurate text-based summary is needed.  </p>
                    <img src= {paragraphBreak}></img>
                </div>

                <div className='pic-container'>
                    <img src={aboutUs}></img>
                </div>
            </div>
         </div>
         <Footer />
        </>
       
    );
  };

export default Values;