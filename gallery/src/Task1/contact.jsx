import React, { useState } from 'react';
 
 
import './contact.css';
 
function Media() {
     const [text, setText] = useState("");
        const [text1, setText1] = useState("");
  return (
    <div className="page">
   
      <div className="contact" id="contact">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required value={text} onChange={(e)=> setText(e.target.value)}/>
 
          <label htmlFor="number">Number:</label>
          <input type="number" id="number" placeholder="Enter your number" required value={text1} onChange={(e)=> setText1(e.target.value)}/>
 
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
 
          <button type="submit">Submit</button>
        </form>
        <p>Your Name:{text}</p>
        <hp>Your Number:{text1}</hp>
      </div>
 
   
      <footer className="footer">
        <p>© 2025 Gallery of Photos. All rights reserved.</p>
      </footer>
    </div>
  );
}
 
export default Media;