import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import TextBody from './TextBody';

function Homepage() {
  const [mode, setMode]=useState("tertiary");
  const [titleMode,setTitleMode]=useState('Disable darkMode')

  const toggleMode=()=>{
    if(mode==='tertiary')
    {
      setMode('dark');
      setTitleMode('Enable darkMode');
      document.body.style.backgroundColor='rgb(40, 38, 49)'
    }
    else
    {
      setMode('tertiary');
      setTitleMode('Disable darkMode');
      document.body.style.backgroundColor='white'
    }
  }
  return (
   <>
  
  <Navbar title="TextUtils" page="About" handleMode={toggleMode} mode={mode} darkMode={titleMode}/>
   <div className='container'>
   <TextBody mode={mode}/>
   </div>
   </>
  );
};

export default Homepage;