import React from 'react'
import Navbar from '../components/Navbar';
import TextBody from './TextBody';
function Homepage() {
  return (
   <>
  <section className="bg-secondary h">
  <Navbar title="TextUtils" page="About"/>
   <div className='container'>
   <TextBody/>
   </div>
  </section>
   </>
  );
}

export default Homepage;