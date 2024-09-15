import React from 'react'
import Navbar from '../components/Navbar';
import TextBody from './TextBody';
function Homepage() {
  return (
   <>
   <Navbar title="TextUtils" page="About"/>
   <div className='container'>
   <TextBody/>
   </div>
   </>
  );
}

export default Homepage;