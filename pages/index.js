import React from "react";
import Slider from "react-slick";

export default class Home extends React.Component {
  render() {
  const settings = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  }
  
  return (
    <div>
      <header className="primary-header">
        <div className="container">
          <div className="nav-wrapper">
              <a href="#">
                <svg className="icon" width="146" height="24">
                  <use href="assets/logo.svg#logo"></use>
                </svg>
              </a>
              <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={toggleNav}>
                <span className="visually-hidden">Menu</span>
              </button>
              <nav className="primary-navigation" id="primary-navigation">
                <ul aria-label="Primary" role="list" className="nav-list">
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </nav>
            <button className="button | display-sm-none display-md-inline-flex">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero | text-center-sm-only padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow">
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
                <button className="button">Get Started</button>
              </div>
              <div className="hero__image">
                <img className="mx-auto" src="assets/illustration-intro.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sales-points | padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="sales-points__blob | flow text-center-sm-only margin-bottom-700" style={{'--flow-spacer': '1.5em'}}>
                <h2 className="fs-secondary-heading fw-bold">What's different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
              </div>
              <div>
                <ul className="numbered-items | flow" role="list">
                  <li>
                    <div className="flow" style={{"--flow-spacer": "1em"}}>
                      <h3 className="numbered-items__title | font-600 fw-bold">Track company-wide progress</h3>
                      <p className="numbered-items__body" data-width="wide">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                  </li>
                  <li>
                    <div className="flow" style={{"--flow-spacer": "1em"}}>
                      <h3 className="numbered-items__title | font-600 fw-bold">Advanced built-in reports</h3>
                      <p className="numbered-items__body" data-width="wide">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                    </div>
                  </li>
                  <li>
                    <div className="flow" style={{"--flow-spacer": "1em"}}>
                      <h3 className="numbered-items__title | font-600 fw-bold">Everything you need in one place</h3>
                      <p className="numbered-items__body" data-width="wide">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="carsousel | padding-block-700 text-center">
          <div className="carsousel-container">
            <h2 className="fs-secondary-heading fw-bold margin-bottom-700">What they've said</h2>
            <Slider { ...settings } className="slider">
              <div className="carousel-wrapper text-center">
                <div className="slider-bg"></div>
                <h3 className="fw-bold ">Ali Bravo</h3>
                <p className="carousel-text" data-width="wide">We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.</p>
                <img src="assets/avatar-ali.png" alt="" />   
              </div>
              <div className="carousel-wrapper text-center">
              <div className="slider-bg"></div>
                <img src="assets/avatar-richard.png" alt="" />         
                <h3 className="fw-bold">Richard Watts</h3>
                <p className="carousel-text" data-width="wide">Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!</p>
              </div>
              <div className="carousel-wrapper text-center">     
              <div className="slider-bg"></div>    
                <img src="assets/avatar-anisha.png" alt="" />              
                <h3 className="fw-bold">Anisha Li</h3>
                <p className="carousel-text" data-width="wide">Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.</p>
              </div>
              <div className="carousel-wrapper text-center">
              <div className="slider-bg"></div>
                <img src="assets/avatar-shanai.png" alt="" />
                <h3 className="fw-bold">Shanai Gough</h3>
                <p className="carousel-text" data-width="wide">Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.</p>
              </div>
            </Slider> 
            <button className="button">Get Started</button>
          </div>
        </section>

        <section className="cta | margin-top-900 padding-block-900 bg-accent-400 text-neutral-100 padding-block-700">
          <div className="container">
            <div className="even-columns vertical-align-center">
              <div> 
                <p className="fs-primary-heading fw-bold">Simplify how your team works today</p>
              </div>
              <div className="justify-self-end-md">
                <button className="button" data-type="inverted">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="primary-footer | bg-neutral-900 text-neutral-100 padding-block-700">
        <div className="container">
          <div className="primary-footer__wrapper">
            <a className="primray-footer__logo" href="#" aria-label="home">
              <svg className="icon" width="146" height="24">
                <use href="assets/logo.svg#logo"></use>
              </svg>
            </a>
            <ul className="social-list" role="list" aria-label="Social links">
              <li>
                <a aria-label="facebook" href="#">                    
                  <svg className="social-icon">
                    <use xlinkHref="assets/social-icons.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="youtube" href="#">              
                  <svg className="social-icon">
                    <use xlinkHref="assets/social-icons.svg#icon-youtube"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="twitter" href="#">
                  <svg className="social-icon">
                    <use xlinkHref="assets/social-icons.svg#icon-twitter"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="pinterest" href="#">
                  <svg className="social-icon">
                    <use xlinkHref="assets/social-icons.svg#icon-pinterest"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="#">
                  <svg className="social-icon">
                    <use xlinkHref="assets/social-icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="primary-footer-nav">
              <nav className="footer-nav">
                <ul className="flow" style={{"--flow-spacer": "1em"}} aria-label="Footer" role="list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </nav>
            </div>
            {/* <div className="primary-footer-form"> */}
              <form className="primary-footer__form" action="">
                <input type="email" />
                <button className="button" data-shadow="none">Go</button>
              </form>
              <p className="primary-footer__copyright">Copyright 2020. All Rights Reserved</p>
            {/* </div> */}
          </div>
        </div>
      </footer>
    </div>
  )
  function toggleNav() {
    const primaryHeader = document.querySelector('.primary-header');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
  
    primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)
  
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
  }
}


}