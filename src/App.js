import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

// Components
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

// Styles
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
  }
  window.addEventListener('scroll', toggleVisible);


  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <main className="main" id="main">
        <div id='back-to-top' style={{ display: visible ? "flex" : "none" }} onClick={scroll_to_Top}>
          <FaArrowUp />
        </div>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default App;
