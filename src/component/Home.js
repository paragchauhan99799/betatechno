import '../css/Home.css';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>  
        <div>
            <nav id="navbar" className="navbar navbar-expand-sm navbar-default fixed-top" style={{backgroundColor: '#111111',fontSize: '11px'}}>
              <a className="navbar-brand" style={{color: 'white'}}>Company Name</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" data-target="#item-1">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-target="#item-2">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-target="#item-3">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-target="#item-4">Contact</a>
                  </li>    
                </ul>
              </div>
            </nav>
        </div>
        <div id="item-1" style={{height: '120vh'}}>
          <div className="container" id="home" style={{textAlign: 'center', marginTop: '-90px'}}>
            <div className="item2">
              <h1 className="regular" style={{fontSize: '3.5rem'}}>Making your</h1>
              <h1 className="regular" style={{fontSize: '3.5rem'}}> Idea Possible</h1>
            </div>

            <div className="item4">
              <button type="button" className="btn btn-outline-success btn-md">START NOW</button>
            </div>
          </div>
        </div>
        <div id="item-2" className="wrap" style={{display:'flex',justifyContent:'space-around',paddingTop: '4rem', paddingBottom: '4rem', backgroundColor:'#f7f9fa'}}>
          <div data-aos="zoom-in-up" className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{background:'white', textAlign:'center', padding:'5rem 1.5rem'}}>
            <span className="card-title subHeading">WHAT WE DO</span>
            <h2 className="card-text" style={{fontWeight:'600', padding: '1% 10%'}}>We Provide Awesome Digital Solutions With a Great Attention to Details</h2>
            <p className="card-text" style={{color:'#7a7a7a',padding: '2% 10%'}}>
              Canna is a responsive and elegant template with tons of features. Lorem ipsum dolor sit amet, consectetur. Grab this perfect solution. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip awesome. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip awesome.
            </p>
          </div>
        </div>
        <div id="item-3">
          <div data-aos="zoom-in-up" className="container paddingTopBottom" style={{borderBottom: '1px solid lightgray'}}>
            <div className="row paddingTopBottom">
              <div className="col-md-4 footer-widget" style={{textAlign: 'left'}}>
                <h4 className="footerWidgetHeader">Get in Touch</h4>
                <p className="footer-widget-detail">Phone: + 1 888 1554 456 123</p>
                <p className="footer-widget-detail">Email: cannasupport@gmail.com</p>
              </div>
              <div className="col-md-4 footer-widget" style={{textAlign: 'center'}}>
                <h4 className="footerWidgetHeader">CANNA</h4>
                <p className="footer-widget-detail">Canna Onepage is a very slick and clean template.Creating an awesome website with this Theme is easy than you can imagine.</p>
              </div>
              <div className="col-md-4 footer-widget" style={{textAlign: 'right'}}>
                <h4 className="footerWidgetHeader">Location</h4>
                <p className="footer-widget-detail">34/Sector-6,Chanakyapuri</p>
                <p className="footer-widget-detail">Ghatlodia, Ahmedabad</p>
                <p className="footer-widget-detail">Gujarat- 380061</p>
              </div>
            </div>
          </div>
          <div className="container footer-copyright-text-icon" style={{padding: '2.5rem 0rem'}}>
            <div className="row">
              <div className="col-md-6 col-sm-12 footer-text" style={{textAlign:'left',color: '#7a7a7a', marginTop:'1rem'}}>
                © 2018 | Made by Tirth Gajjar and Parag Chauhan
              </div>
              <div className="col-md-6 col-sm-12 footer-text" style={{textAlign:'right', marginTop:'1rem'}}>
                <i className="fab fa-facebook-f" style={{cursor: 'pointer',marginLeft:'1.5rem'}}></i>
                <i className="fab fa-twitter" style={{cursor: 'pointer',marginLeft:'1.5rem'}}></i>
                <i className="fab fa-google" style={{cursor: 'pointer',marginLeft:'1.5rem'}}></i>
                <i className="fab fa-linkedin-in" style={{cursor: 'pointer',marginLeft:'1.5rem'}}></i>
                <i className="fab fa-instagram" style={{cursor: 'pointer',marginLeft:'1.5rem'}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


/*
      <div id="item-2" style={{'paddingTop': '4%'}}>
          <div data-aos="zoom-in-up">
            <span className="section-heading">Some Projects</span>
          </div>
          <div id="cardsme" className = "someProjects container-fluid">
            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent:'space-around'}}>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src={`${host}/images/ecom.jpeg`} alt="Card image" width="100%"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Inventory Management</h5>
                  <p className="card-text">Used to manage college inventory.</p>
                  <p className="card-text d-md-none d-lg-block">during Jan 2017</p>
                </div>
              </div>
              <div style={{justifyContent: 'center'}}>
                <blockquote>Inventory management system</blockquote>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent: 'space-around'}}>
              <div style={{justifyContent : 'center'}}>
                <blockquote>Ecommerce website</blockquote>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src={`${host}/images/ecom.jpeg`} alt="Card image" width="100%"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Ecommerce Website</h5>
                  <p className="card-text">Ecommerce website for college project.</p>
                  <p className="card-text d-md-none d-lg-block">during March 2017</p>
                </div>
              </div>
            </div>
            
            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src={`${host}/images/tnt.jpg`} alt="Card image" width="100%"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Travel Management</h5>
                  <p className="card-text">Website and app with php backend.</p>
                  <p className="card-text d-md-none d-lg-block">during June 2017</p>
                </div>
              </div>
              <div style={{justifyContent: 'center'}}>
                <blockquote>Travel Management system</blockquote>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent: 'space-around'}}>
              <div style={{justifyContent: 'center'}}>
                <blockquote>Socket Chat Application</blockquote>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src={`${host}/images/chat.jpg`} alt="Card image" width="100%"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Chat App</h5>
                  <p className="card-text">Private chat app between registered user.</p>
                  <p className="card-text d-md-none d-lg-block">during Sep 2017</p>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src="./images/sup.jpg" alt="Card image" width="100%"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Ticket based Support</h5>
                  <p className="card-text">Support system with chat like interface.</p>
                  <p className="card-text d-md-none d-lg-block">during Sep 2017</p>
                </div>
              </div>
              <div style={{justifyContent: 'center'}}>
                <blockquote>Ticket based Support system</blockquote>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="wrap fixHeight" style={{display:'flex',justifyContent: 'space-around'}}>
              <div style={{justifyContent: 'center'}}>
                <blockquote>Live test taking system</blockquote>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card bg-dark text-white">
                <img className="card-img img-fluid" src="./images/q.jpg" alt="Card image"></img>
                <div className="card-img-overlay">
                  <h5 className="card-title">Live Test</h5>
                  <p className="card-text">Live test system with admin and user panels to take test with real time monitoring.</p>
                  <p className="card-text d-md-none d-lg-block">during Sep 2017</p>
                </div>
              </div>
            </div>			
          </div>
        </div>
*/