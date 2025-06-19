// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Confetti from 'react-confetti';
import { FaBirthdayCake, FaHeart, FaGift, FaRegSadTear } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { CgDollar } from 'react-icons/cg';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sample photos - replace with your actual photos
  const photos = [
    "./2.jpg",
    "./1.jpg",
    "./3.jpg",

  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(photoTimer);
  }, [photos.length]);

  return (
    <div className="app">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <header className="header">
        <h1 className="title">
          Happy Birthday, Moti ! <FaBirthdayCake className="icon cake" />
        </h1>
        <p className="subtitle">Cake Khaale Virtual vala </p>
      </header>

      <main className="main-content">
        <div className="photo-gallery">
          <div className="photo-container">
            <img 
              src={photos[currentPhotoIndex]} 
              alt="Sister" 
              className="sister-photo"
            />
            <div className="photo-overlay">
              <span>We miss you!</span>
            </div>
          </div>
        </div>

        <div className="message-box">
          <h2>
            <FaHeart className="icon heart" /> Happy Birthday <FaHeart className="icon heart" />
          </h2>
          <p>
            Paisa kamao aur pesa udao merpe.
          </p>
          <p>
            Gift toh nahi bhej paaye (budget tight tha 😎 can't courier aur amazon.uk pe somehow login hi nhi ho rha tha).
          </p>
          <p>
            Toh enjoy karo apna din – cake khao, photo daalo, aur hume tag karna mat bhoolna.  
            May this year bring you… Money$💵.
          </p>

          <div className="apology">
            <FaRegSadTear className="icon sad" />
            <span>Sorry we couldn't send a present!</span>
            <FaGift className="icon gift" />
          </div>
        </div>

        <div className="wishes-container">
          <h3>Our Wishes for You:</h3>
          <ul className="wishes-list">
            <li>Good health and happiness</li>
            <li>Success in all your endeavors</li>
            <li>New adventures and experiences</li>
            <li>Lots of love from back home</li>
            <li>Virtual cake (since we can't share a real one!)</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p>Made with love by your family</p>
        <p>We can't wait to see you again!</p>
      </footer>
    </div>
  );
}

export default App;