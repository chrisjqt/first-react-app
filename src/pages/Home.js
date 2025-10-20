import React from 'react';
import './Pages.css';
import myPhoto from '../assets/profile.jpg'; 

function Home() {
  return (
    <section className="page home">
      <img src={myPhoto} alt="Chris Jaylord Lacre" className="profile-pic" />
      <h1>Hi, I'm Chris Jaylord Lacre 👋</h1>
      <p>A passionate 4th Year BSIT student from Cebu Technological University – Danao Campus.</p>
      <p>I love exploring Web Development, IoT Systems, and crafting digital solutions that make life easier.</p>
    </section>
  );
}

export default Home;
