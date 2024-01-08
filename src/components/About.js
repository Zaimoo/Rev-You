import React from 'react';
import './css/About.css'
import aboutus from './img/about-us.png';
import paragraphBreak from './img/paragraph-break.png';
import Footer from './Footer';
const About = () => {
    return (
        <>
         <div className='about'>
         <div className='about-body'>
                <div className='about-text-container'>
                    <h2>The RevYou Team</h2>
                    <p> RevYou was founded by six aspiring students who came up with the concept of starting a reviewer-making website that makes reviewers in minutes just by uploading the reading materials instructors have provided in PDF format. </p>
                    <img src= {paragraphBreak}></img>
                </div>
                
                <div className='about-text-container'>
                    <h2>Reviewing made easier than ever</h2>
                        <p> RevYou seeks to provide students with a website that they can use from anywhere at any time, with the goal of assisting them in creating study materials that will improve their comprehension of the lecture. 

                        This is accomplished by allowing users to upload their lecture materials and converting them into a reviewer which could save their time in making a study material. </p>
                        <img src= {paragraphBreak}></img>
                </div>

                <div className='about-text-container'>
                    <h2>Studying efficiently and effectively </h2>
                    <p>Unlike other websites, RevYou has made the process easier, only having to upload a PDF file of your reading material - the less hassle, the more time you get to study. </p>
                    <img src= {paragraphBreak}></img>
                </div>

                <div className='pic-container'>
                    <img src={aboutus}></img>
                </div>
            </div>
         </div>
         <Footer />
        </>
       
    );
  };

export default About;