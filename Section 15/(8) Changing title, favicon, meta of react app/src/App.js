import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';



let name = "Sam";
function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = "Dark Mode";
      setInterval(() => {
        document.title = "Your device is infected with a virus";
      }, 2000);
      setInterval(() => {
        document.title = "Install an antivirus software";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar title="Practice project" aboutText="About Us"/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Textform heading="Text Area" mode={mode}/>
      {/* <About/> */}
      
    </>
  );
}

export default App;
