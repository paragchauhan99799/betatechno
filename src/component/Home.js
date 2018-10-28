import '../css/Home.css';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
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
        <div id="item-1">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 vh-100" src={'../img/1.jpg'} alt="First slide"></img>
              <div className="carousel-caption d-none d-md-block">
                <h1>Image 1 Heading</h1>
                <h2>Image 1 Details</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 vh-100" src={'../img/2.jpg'} alt="Second slide"></img>
              <div className="carousel-caption d-none d-md-block">
                <h1>Image 1 Heading</h1>
                <h2>Image 1 Details</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 vh-100" src={'../img/3.jpg'} alt="Third slide"></img>
              <div className="carousel-caption d-none d-md-block">
                <h1>Image 1 Heading</h1>
                <h2>Image 1 Details</h2>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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
        <div className="content" style={{display:'flex',backgroundColor:'#484B54'}}>
          <div className="grid row col-md-12">
            <div data-aos="zoom-in-up" className="col-md-4">
              <figure className="effect-sadie">
                <img height="400" src={'../img/4.jpg'} alt="img02"></img>
                <figcaption>
                  <h2>Holy <span>Sadie</span></h2>
                  <p>Sadie never took her eyes off me. She had a dark soul.</p>
                  <a href="#">View more</a>
                </figcaption>			
              </figure>
            </div>
            <div data-aos="zoom-in-up" className="col-md-4">
              <figure className="effect-sadie">
                <img height="400" src={'../img/5.jpg'} alt="img14"/>
                <figcaption>
                  <h2>Holy <span>Sadie</span></h2>
                  <p>Sadie never took her eyes off me. She had a dark soul.</p>
                  <a href="#">View more</a>
                </figcaption>			
              </figure>
            </div>
            <div data-aos="zoom-in-up" className="col-md-4">
              <figure className="effect-sadie">
                <img height="400" src={'../img/6.jpg'} alt="img02"></img>
                <figcaption>
                  <h2>Holy <span>Sadie</span></h2>
                  <p>Sadie never took her eyes off me. She had a dark soul.</p>
                  <a href="#">View more</a>
                </figcaption>			
              </figure>
            </div>
          </div>
        </div>
        <div id="item-3" className="about-us" style={{padding:'5rem 3rem'}}>
          <div className="col-md-12">
            <div className="row col-md-12 col-lg-12" style={{textAlign: 'center', paddingLeft: '2rem'}}>
              <span className="card-title subHeading">ABOUT US</span>
            </div>
            <div className="row col-md-12 col-lg-12">
              <div data-aos="zoom-in-up" className="col-md-6 col-lg-6">
                <h4 className="font-weight-700">We work since 2005.</h4>
                <p className="footer-widget-detail">
                  We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind. Our subconscious mind contains such power and complexity that it literally staggers the imagination. In order to understand how the conscious and subconscious minds work together as a team to create your reality, let me again use an analogy.
                </p>
              </div>
              <div data-aos="zoom-in-up" className="col-md-6 col-lg-6">
                {/*FIRST */}
                <div className="col-md-12" style={{padding:'0.3rem 0rem'}}>
                  <div className="col-md-12" style={{padding:'0.3rem 0rem', fontWeight:'700', fontSize: '11px'}}>
                    <h7>DESIGN</h7>
                    <h7 style={{float:'right'}}>100%</h7>
                  </div>
                  <div className="progress" style={{height:'7px'}}>
                    <div className="progress-bar pg-bar-color" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/*SECOND */}
                <div className="col-md-12" style={{padding:'0.3rem 0rem'}}>
                  <div className="col-md-12" style={{padding:'0.3rem 0rem', fontWeight:'700', fontSize: '11px'}}>
                    <h7>HTML</h7>
                    <h7 style={{float:'right'}}>80%</h7>
                  </div>
                  <div className="progress" style={{height:'7px'}}>
                    <div className="progress-bar pg-bar-color" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/*THIRD */}
                <div className="col-md-12" style={{padding:'0.3rem 0rem'}}>
                  <div className="col-md-12" style={{padding:'0.3rem 0rem', fontWeight:'700', fontSize: '11px'}}>
                    <h7>CSS</h7>
                    <h7 style={{float:'right'}}>100%</h7>
                  </div>
                  <div className="progress" style={{height:'7px'}}>
                    <div className="progress-bar pg-bar-color" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/*FOURTH */}
                <div className="col-md-12" style={{padding:'0.3rem 0rem'}}>
                  <div className="col-md-12" style={{padding:'0.3rem 0rem', fontWeight:'700', fontSize: '11px'}}>
                    <h7>JQUERY</h7>
                    <h7 style={{float:'right'}}>75%</h7>
                  </div>
                  <div className="progress" style={{height:'7px'}}>
                    <div className="progress-bar pg-bar-color" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item-4" style={{backgroundColor:'#484B54', padding:'4rem 0rem'}}>
          <div data-aos="zoom-in-up">
            <div className="container" style={{textAlign:'center'}}>
              <span className="card-title subHeading">CONTACT</span>
            </div>
            <div className="container" style={{textAlign:'center'}}>
              <h2 style={{color: 'white', padding: '0rem 0rem 1rem 0rem'}}>GET IN TOUCH</h2>
            </div>
            <div className="container" style={{display:'flex'}}>
              <div style={{flex:'1', padding:'1rem 2rem'}}>
                <input type="text" className="form-control no-border-radius" placeholder="Name"></input>
              </div>
              <div style={{flex:'1', padding:'1rem 2rem'}}>
                <input type="email" className="form-control no-border-radius" placeholder="Email"></input>
              </div>
            </div>
            <div className="container" style={{display:'flex'}}>
              <div style={{flex:'1', padding:'1rem 2rem'}}>
                <textarea className="form-control no-border-radius" rows="3" placeholder="Message"></textarea>
              </div>
            </div>
            <div className="container" style={{textAlign:'center', paddingTop: '1rem'}}>
              <button type="button" className="btn btn-info">Send Message</button>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in-up" className="container paddingTopBottom" style={{borderBottom: '1px solid lightgray'}}>
            <div className="row paddingTopBottom ml-0 mr-0">
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
            <div className="row ml-0 mr-0">
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
  Image On Hover Effect - https://tympanus.net/Development/HoverEffectIdeas/index.html
*/

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

/*
<div id="item-1" style={{height: '120vh'}}>
  <div className="container" id="home" style={{textAlign: 'center', marginTop: '-90px'}}>
    <div className="item2">
      <h1 className="regular" style={{fontSize: '3.5rem'}}>Makiiiing your</h1>
      <h1 className="regular" style={{fontSize: '3.5rem'}}> Idea Possible</h1>
    </div>

    <div className="item4">
      <button type="button" className="btn btn-outline-success btn-md">START NOW</button>
    </div>
  </div>
</div>
*/