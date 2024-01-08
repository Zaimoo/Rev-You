
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import OpenAI from 'openai';
import './css/Result.css';
import Footer from './Footer';
import loading from './loading.gif'

const Result = () => {
  // test
  const location = useLocation();
  const { text } = location.state || { text: '' };
  const [reviewer, setReviewer] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dummy = ["sk-vZBjn1", "KTWGpTtixvoUXKT3BlbkFJ", "2LZjFEz5aE9oBA7hYsws"]

  const generateResponse = useCallback(async () => {
    const openai = new OpenAI({
      apiKey: dummy.join(""),
      dangerouslyAllowBrowser: true
    });

    try {
      setIsLoading(true);
      const response = await openai.chat.completions.create({
        model: "ft:gpt-3.5-turbo-1106:personal::8RxSjgMO",
        messages: [
          {
            "role": "system",
            "content": "You are a writer and a frontend developer. You turn inputted learning material into reviewers for students to learn, then convert it to an html format to be displayed in a website."
          },
          {
            "role": "user",
            "content": text,
          },
        ],
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setReviewer(response.choices[0].message.content);
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsLoading(false);
    }
  }, [text]);

  useEffect(() => {
    if (text) {
      generateResponse();
    }
  }, [text, generateResponse]);


  return (
    <div className="result-container">
      {isLoading ? (
        <div className="loading-screen"> <img src= {loading} alt='Loading...'></img></div>
      ) : (
        <div className='results'>
          <div className='reviewer-container' dangerouslySetInnerHTML={{ __html: reviewer }} />
          <a href='/reviewer-maker'className='green-btn'>Generate Again</a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Result;

