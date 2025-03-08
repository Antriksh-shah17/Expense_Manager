import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChartLine, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import './CSS/home.css'; 

function MainPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    // Handle authentication status updates
    const updateAuthStatus = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', updateAuthStatus);
    return () => {
      window.removeEventListener('storage', updateAuthStatus);
    };
  }, []);



  useEffect(() => {
    // Handle scrolling when navigating from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay ensures page is fully loaded
      }
      else{
        console.log("Element not found");
      }
    }
  }, [location]);

  const [strongColor, setStrongColor] = useState("white");
  const [spanColor, setSpanColor] = useState("rgb(0, 243, 0)");

  const change = () => {
    setStrongColor("rgb(0, 243, 0)");
    setSpanColor("white");
  };

  const change1 = () => {
    setStrongColor("white");
    setSpanColor("rgb(0, 243, 0)");
  };

  return (
    <div className="container">


      {/* Home Section */}
      <section id="home" className="home-container">
        <div className="home">
          <div className="info">
            <h1 className="animate-text" style={{ color: strongColor }} onMouseOut={change1}>
              Track Your <span id='span' onMouseOver={change} style={{ color: spanColor }}> Expense</span>
            </h1>
            <h2 className="animate-text">"Save money and money will save you."</h2>

            {isAuthenticated ? (
              <div className="buttons11">
                <button id='button12' type="button" onClick={() => navigate('/add-expense')}>Add Expense</button>
                <button id='button12' type="button" onClick={() => navigate('/view-expense')}>View Expense</button>
              </div>
            ) : (
              <h3 style={{ color: "red" }}>Please Login First To Add Expenses</h3>
            )}
          </div>
         
          <div className="card">
          <h1>CashControl</h1>
          <p> "Managing your personal finances doesn’t have to be complicated. Our expense tracker is designed to help you track every dollar you spend, categorize your expenses. Start tracking today and take the first step toward smarter financial decisions!" </p>
          </div>
        </div>
      </section>






      {/* Services Section */}
      <section id="services" className="services-container">
        <div className="services-wrapper">
          <h1>Our Services</h1>
          <p>Explore the features that make managing your finances easier!</p>

          <div className="services-grid">
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3>Expense Tracking</h3>
              <p>Monitor and categorize your spending in real-time.</p>
            </div>

            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h3>Secure Transactions</h3>
              <p>Keep your financial data safe with top security measures.</p>
            </div>

            <div className="service-card">
              <FaMoneyBillWave className="service-icon" />
              <h3>Budget Planning</h3>
              <p>Set monthly budgets and save smarter with our AI-powered insights.</p>
            </div>
          </div>
        </div>
      </section>






      {/* About Section */}
      <section id="about" className="about-container">
        <div className="about_conatiner1">
          
          <h1>About Us</h1>
          <p>
            Welcome to <strong>CashControl</strong>, a personal finance manager designed to help you track and manage your expenses easily.
          </p>
          <p>
          "Our goal is to make personal finance management simpler, allowing you to stay on top of your spending and savings.

    With CashControl, you can effortlessly log daily expenses, categorize transactions, and gain insights into your spending habits. Our intuitive interface helps you track where your money goes, ensuring better financial discipline and smarter budgeting.

By setting monthly budgets and financial goals, you can monitor your progress and make informed decisions to reduce unnecessary expenses and increase savings. Our real-time analytics and visual reports provide a clear breakdown of your spending patterns, empowering you to take control of your finances.

Whether you're planning for short-term needs or long-term financial stability, CashControl equips you with the right tools to achieve financial freedom. Start managing your finances today and build a secure financial future with ease!"
          </p>
          
          <p>Thank you for choosing <strong>CashControl</strong>. We hope it helps you take control of your financial future!</p>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <form className="contact-form">
          <h1>Contact Us</h1>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <br/>
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <br/>
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <br/>
          <button type="submit">Send Message</button>
        </form>
      </section>



      
    </div>
  );
}

export default MainPage;
