import React from 'react';
import './css/Help.css'
import Footer from './Footer';
import paragraphBreak from '../paragraph-break.png'
import help1 from '../help1.png'
import help2 from '../help2.png'
import aboutus from '../about-us.png'
const Help = () => {
    return (
        <>
         <div className='help'>
         <div className='help-body'>
                <div className='help-text-container'>
                    <h2 id='title'>How to use RevYou?</h2>
                    <p>Open the <span>Reviewer Maker</span> and upload your reading material in PDF (.pdf) format:</p>
                    <img src= {help1}></img>


                    <p>Once the reviewer is completed, you will be redirected to the results page:</p>
                    <img src= {help2} className='help2'></img>
                </div>
                
                <div className='help-text-container'>
                    <img src= {paragraphBreak} className='paragraph-break'></img>
                <p>Create a RevYou account for bonuses and discounts. You may also get RevYou’s premium version <span>RevYou More </span>to unlock more features!</p>
                <img src= {paragraphBreak} className='paragraph-break'></img>
                <img src={aboutus}></img>
                </div>
                
            </div>
         </div>
         <Footer />
        </>
       
    );
  };

export default Help;