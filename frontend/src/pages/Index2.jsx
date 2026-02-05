import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index2 = () => {
  useEffect(() => {
    // Force enable scrolling
    const enableScrolling = () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.body.style.position = 'static';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.classList.remove('no-scroll', 'modal-open', 'overflow-hidden');
      document.documentElement.classList.remove('no-scroll', 'modal-open', 'overflow-hidden');
    };
    enableScrolling();

    // Initialize plugins
    const initializePlugins = () => {
      enableScrolling();
      if (window.AOS) {
        window.AOS.refresh();
        window.AOS.init({ duration: 1200, once: true });
      }
      if (window.jQuery && window.jQuery.fn.select2) {
        window.jQuery('.select2').select2({ minimumResultsForSearch: -1 });
      }
      if (window.jQuery) {
        window.jQuery('#mobile_btn').off('click').on('click', function() {
          window.jQuery('.main-menu-wrapper').addClass('open');
        });
        window.jQuery('#menu_close').off('click').on('click', function() {
          window.jQuery('.main-menu-wrapper').removeClass('open');
        });
        window.jQuery('.has-submenu > a').off('click').on('click', function(e) {
          if (window.jQuery(window).width() < 992) {
            e.preventDefault();
            window.jQuery(this).parent().toggleClass('open');
            window.jQuery(this).parent().find('.submenu').first().slideToggle();
          }
        });
      }
    };
    const timer = setTimeout(initializePlugins, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      overflow: 'visible',
      position: 'relative',
      width: '100%'
    }}>


	
	<div className="main-wrapper">

		<div className="main-header-two">

			
			<header className="header header-two">
				<div className="container">

					<nav className="navbar navbar-expand-lg header-nav">
						<div className="navbar-header">
							<Link to="/" className="navbar-brand logo">
								<img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
							</Link>
							<Link to="/" className="navbar-brand logo-dark">
								<img src="/assets/img/logo-white.svg" className="img-fluid" alt="Logo" />
							</Link>
							<a id="mobile_btn" href="#">
								<i className="material-icons-outlined">menu</i>
							</a>
						</div>

						<div className="main-menu-wrapper">

							<div className="menu-header">
								<Link to="/" className="menu-logo">
									<img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
								</Link>				
								<Link to="/" className="menu-logo menu-logo-dark">
									<img src="/assets/img/logo-white.svg" className="img-fluid" alt="Logo" />
								</Link>				
								<a id="menu_close" className="menu-close" href="#">
									<i className="material-icons-outlined">close</i>
								</a>
							</div>
							<div className="mobile-search">
								<input type="text" className="form-control form-control-lg" placeholder="Search" />
							</div>

							<ul className="main-nav">
								<li className="has-submenu megamenu active">
									<Link to="/index-2">Home <i  className="material-icons-outlined">expand_more</i></Link>
									<ul className="submenu mega-submenu">
										<li>
											<div className="megamenu-wrapper">
											<div className="row">
												<div className="col-lg-3">
													<div className="single-demo">
														<div className="demo-img">
															<Link to="/" className="inner-demo-img"><img src="/assets/img/home/home-01.jpg" className="img-fluid " alt="img" /></Link>
														</div>
														<div className="demo-info">
															<Link to="/" className="inner-demo-img">Home 1</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="single-demo active">
														<div className="demo-img">
															<Link to="/index-2" className="inner-demo-img"><img src="/assets/img/home/home-02.jpg" className="img-fluid " alt="img" /></Link>
														</div>
														<div className="demo-info">
															<Link to="/index-2" className="inner-demo-img">Home 2</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="single-demo">
														<div className="demo-img">
															<Link to="/index-3" className="inner-demo-img"><img src="/assets/img/home/home-03.jpg" className="img-fluid " alt="img" /></Link>
														</div>
														<div className="demo-info">
															<Link to="/index-3" className="inner-demo-img">Home 3</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3">
													<div className="single-demo">
														<div className="demo-img">
															<a href="#" className="inner-demo-img"><img src="/assets/img/home/coming-soon.jpg" className="img-fluid " alt="img" /></a>
														</div>
														<div className="demo-info">
															<a href="#" className="inner-demo-img">Coming Soon</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										</li>
									</ul>
								</li>
								<li className="has-submenu">
									<a href="#">Listing <i  className="material-icons-outlined">expand_more</i></a>
									<ul className="submenu">
										<li className="has-submenu">
											<a href="#">Buy Property</a>
											<ul className="submenu">
												<li><Link to="/buy-property-grid">Buy Grid</Link></li>
												<li><Link to="/buy-property-list">Buy List</Link></li>
												<li><Link to="/buy-property-grid-sidebar">Buy Grid with Sidebar</Link></li>
												<li><Link to="/buy-property-list-sidebar">Buy List with Sidebar</Link></li>
												<li><Link to="/buy-grid-map">Buy Grid with map</Link></li>
												<li><Link to="/buy-list-map">Buy List with map</Link></li>
												<li><Link to="/buy-details">Buy Details</Link></li>
											</ul>
										</li>
										<li className="has-submenu">
											<a href="#">Rent Property</a>
											<ul className="submenu">
												<li><Link to="/rent-property-grid">Rent Grid</Link></li>
												<li><Link to="/rent-property-list">Rent List</Link></li>
												<li><Link to="/rent-property-grid-sidebar">Rent Grid with Sidebar</Link></li>
												<li><Link to="/rent-property-list-sidebar">Rent List with Sidebar</Link></li>
												<li><Link to="/rent-grid-map">Rent Grid with map</Link></li>
												<li><Link to="/rent-list-map">Rent List with map</Link></li>
												<li><Link to="/rent-details">Rent Details</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="has-submenu">
									<a href="#">Agent <i className="material-icons-outlined">expand_more</i></a>
									<ul className="submenu">
										<li><Link to="/agent-grid">Agent Grid</Link></li>
										<li><Link to="/agent-list">Agent List</Link></li>
										<li><Link to="/agent-grid-sidebar">Agent Grid with Sidebar</Link></li>
										<li><Link to="/agent-list-sidebar">Agent List with Sidebar</Link></li>
										<li><Link to="/agent-details">Agent Details</Link></li>
									</ul>
								</li>
								<li className="has-submenu">
									<a href="#">Agency <i className="material-icons-outlined">expand_more</i></a>
									<ul className="submenu">
										<li><Link to="/agency-grid">Agency Grid</Link></li>
										<li><Link to="/agency-list">Agency List</Link></li>
										<li><Link to="/agency-grid-sidebar">Agency Grid with Sidebar</Link></li>
										<li><Link to="/agency-list-sidebar">Agency List with Sidebar</Link></li>
										<li><Link to="/agency-details">Agency Details</Link></li>
									</ul>
								</li>
								<li className="has-submenu">
									<a href="#">Pages <i className="material-icons-outlined">expand_more</i></a>
									<ul className="submenu">
										<li><Link to="/about-us">About Us</Link></li>
										<li className="has-submenu">
											<a href="#">Authentication</a>
											<ul className="submenu">
												<li><Link to="/signup">Sign Up</Link></li>
												<li><Link to="/login">Sign In</Link></li>
												<li><Link to="/forgot-password">Forgot Password</Link></li>
												<li><Link to="/reset-password">Reset Password</Link></li>
											</ul>
										</li>
										<li><Link to="/invoice-details">Invoice Details</Link></li>
										<li><Link to="/wishlist">Wishlist</Link></li>
										<li><Link to="/contact-us">Contact Us</Link></li>
										<li className="has-submenu">
											<a href="#">Error Page</a>
											<ul className="submenu">
												<li><Link to="/error-404">Error 404</Link></li>
												<li><Link to="/error-500">Error 500</Link></li>
											</ul>
										</li>
										<li><Link to="/pricing">Pricing</Link></li>
										<li><Link to="/faq">FAQ</Link></li>
										<li><Link to="/gallery">Gallery</Link></li>
										<li><Link to="/our-team">Our Team</Link></li>
										<li><Link to="/testimonial">Testimonials</Link></li>
										<li><Link to="/terms-condition">Terms & Conditions</Link></li>
										<li><Link to="/privacy-policy">Privacy Policy</Link></li>									
										<li><Link to="/maintenance">Maintenance</Link></li>
										<li><Link to="/coming-soon">Coming Soon</Link></li>
									</ul>
								</li>
								<li className="has-submenu">
									<a href="#">Blog <i className="material-icons-outlined">expand_more</i></a>
									<ul className="submenu">
										<li><Link to="/blog-list">Blog List</Link></li>
										<li><Link to="/blog-grid">Blog Grid</Link></li>
										<li><Link to="/blog-details">Blog Details</Link></li>	
									</ul>
								</li>
							</ul>

							<div className="menu-dropdown">
								<div className="dropdown mb-2">
									<Link to="/index-2" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
										<img src="/assets/img/flags/us.svg" alt="Language" className="me-1" height="16" />English
									</Link>
									<div className="dropdown-menu dropdown-menu-end">
										<a href="#" className="dropdown-item d-flex align-items-center">
											<img src="/assets/img/flags/us.svg" alt="" className="me-2" height="16" /> <span className="align-middle">English</span>
										</a>
										<a href="#" className="dropdown-item d-flex align-items-center">
											<img src="/assets/img/flags/de.svg" alt="" className="me-2" height="16" /> <span className="align-middle">German</span>
										</a>
										<a href="#" className="dropdown-item d-flex align-items-center">
											<img src="/assets/img/flags/fr.svg" alt="" className="me-2" height="16" /> <span className="align-middle">French</span>
										</a>
										<a href="#" className="dropdown-item d-flex align-items-center">
											<img src="/assets/img/flags/ae.svg" alt="" className="me-2" height="16" /> <span className="align-middle">Arabic</span>
										</a>								
									</div>		
								</div>
								<div className="dropdown">
									<a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
										Light
									</a>
									<ul className="dropdown-menu mt-2">
										<li><a className="dropdown-item light-mode" href="#">Light</a></li>
										<li><a className="dropdown-item dark-mode" href="#">Dark</a></li>
									</ul>
								</div>
							</div>

							<div className="menu-login">
								<Link to="/login" className="btn btn-primary w-100 mb-2">Sign In</Link>
								<Link to="/signup" className="btn btn-secondary w-100">Register</Link>
							</div>

						</div>

						<div className="nav header-items">

							<Link to="/index-2" className="topbar-link btn btn-light topbar-search" data-bs-toggle="modal" data-bs-target="#search-modal">
								<i className="material-icons-outlined">search</i>
							</Link>

							<div className="dropdown topbar-lang">
								<Link to="/index-2" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
									<img src="/assets/img/flags/us.svg" alt="Language" height="16" />
								</Link>
								<div className="dropdown-menu dropdown-menu-end">
									<a href="#" className="dropdown-item d-flex align-items-center">
										<img src="/assets/img/flags/us.svg" alt="" className="me-2" height="16" /> <span className="align-middle">English</span>
									</a>
									<a href="#" className="dropdown-item d-flex align-items-center">
										<img src="/assets/img/flags/de.svg" alt="" className="me-2" height="16" /> <span className="align-middle">German</span>
									</a>
									<a href="#" className="dropdown-item d-flex align-items-center">
										<img src="/assets/img/flags/fr.svg" alt="" className="me-2" height="16" /> <span className="align-middle">French</span>
									</a>
									<a href="#" className="dropdown-item d-flex align-items-center">
										<img src="/assets/img/flags/ae.svg" alt="" className="me-2" height="16" /> <span className="align-middle">Arabic</span>
									</a>								
								</div>		
							</div>

							<div className="dropdown">
								<a href="#" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
									<i className="material-icons-outlined">wb_sunny</i>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<a href="#" className="dropdown-item d-flex align-items-center" id="light-mode-toggle">
										<i className="material-icons-outlined me-2">wb_sunny</i> <span className="align-middle">Light Mode</span>
									</a>
									<a href="#" className="dropdown-item d-flex align-items-center" id="dark-mode-toggle">
										<i className="material-icons-outlined me-2">dark_mode</i> <span className="align-middle">Dark Mode</span>
									</a>
								</div>
							</div>

							<Link to="/login" className="btn btn-lg btn-primary d-inline-flex align-items-center"><i className="material-icons-outlined me-1">lock</i>Sign In</Link>

							<Link to="/signup" className="btn btn-lg btn-dark d-inline-flex align-items-center"><i className="material-icons-outlined me-1">perm_identity</i>Register</Link>

						</div>
					</nav>

				</div>
			</header>
			

		</div>

		
		<section className="home-banner-two">

			<div>
				<div className="banner-img-right" data-aos="fade-down" data-aos-duration="1000">
					<img src="/assets/img/section-bg/banner-bg-02.png" alt="" />
				</div>
				<div>
					<img src="/assets/img/bg/banner-round-bg.svg" className="banner-round" alt="" />
				</div>
				<div>
					<img src="/assets/img/bg/banner-shape.svg" className="banner-shape" alt="" />
				</div>
			</div>

			<div className="container">

				
				<div className="row">

					<div className="col-lg-5">
						<div className="banner-users d-flex align-items-center flex-wrap gap-2 mb-3">
							<div className="avatar-list-stacked"> 
								<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-01.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
								<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-02.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
								<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-03.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
								<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-04.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
							</div>
							<div>
								<div className="d-flex align-items-center mb-1">
									<h6 className="mb-0 me-2 text-white fw-semibold fs-14">Ratings 5.0</h6>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
								<p className="mb-0 text-white fs-13">Trusted By Client around the World</p>
							</div>
						</div>
						<div className="banner-title aos" data-aos="fade-up">
							<h1>Find your <span>Next Home</span> Away from Home.</h1>
							<p>Say goodbye to the complexities and headaches of traditional solutions and embrace a streamlined approach.</p>
						</div>
						<div className="d-flex align-items-center">
							<Link to="/buy-property-grid" className="btn btn-primary btn-lg d-inline-flex align-items-center me-3"><i className="material-icons-outlined me-2">shopping_basket</i>Buy Property</Link>
							<Link to="/rent-property-grid" className="btn btn-white btn-lg d-inline-flex align-items-center"><i className="material-icons-outlined me-2">king_bed</i>Rent Property</Link>
						</div>
					</div> 

				</div>
				

			</div>
		</section>
		

		
		<div className="home-search-2">
			<div className="container">
				<form action="buy-property-grid-sidebar.html">
					<div className="d-flex align-items-end flex-wrap flex-md-nowrap gap-3">
						<div className="flex-fill select-field">
							<label className="form-label">Buy / Sell</label>
							<select className="select">
								<option>Select</option>
								<option>Buy</option>
								<option>Sell</option>
							</select>
						</div>
						<div className="flex-fill select-field">
							<label className="form-label">Type of Property</label>
							<select className="select">
								<option>Select</option>
								<option>Buy Property</option>
								<option>Rent Property</option>
							</select>
						</div>
						<div className="flex-fill select-field">
							<label className="form-label">Location</label>
							<input type="text" className="form-control" />
						</div>
						<div className="flex-fill select-field">
							<label className="form-label">Min Price</label>
							<input type="text" className="form-control" placeholder="$" />
						</div>
						<div className="flex-fill select-field">
							<label className="form-label">Max Price</label>
							<input type="text" className="form-control" placeholder="$" />
						</div>
						<div className="select-btn">
							<button type="submit" className="btn btn-primary">
								<i className="material-icons-outlined">search</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		

		
		<section className="about-us-section-2">
			<div className="container">

				
				<div className="row align-items-center gy-4">

					<div className="col-lg-6">

						
						<div className="title-head" data-aos="fade-up" data-aos-duration="500">
							<span className="badge bg-secondary mb-2">About Us</span>
							<h2 className="mb-2">We make property discovery simple, transparent, and stress-free.</h2>
							<p>These hand-picked locations highlight our strongest presence, fastest response times, and highest customer satisfaction. Whether you're looking for expert professionals or trusted services nearby, explore what's available in your area.</p>
							<div className="d-flex align-items-center">
								<Link to="/add-property-buy" className="btn btn-dark btn-lg me-3">Start Post Your Property</Link>
								<Link to="/contact-us" className="btn btn-primary btn-lg">Contact Us</Link>
							</div>
						</div>
						

					</div> 

					<div className="col-lg-6">
						<div className="position-relative" data-aos="fade-up" data-aos-duration="1000">
							<div><img src="/assets/img/section-bg/section-bg-01.png" className="img-fluid" alt="" /></div>
							<div className="position-absolute end-0 top-0">
								<img src="/assets/img/bg/line-01.svg" alt="" />
							</div>
							<div className="position-absolute start-0 bottom-0">
								<img src="/assets/img/bg/line-02.svg" alt="" />
							</div>
						</div>
					</div> 

				</div>
				

				<div className="counter-list">

					
					<div className="row">

						<div className="col-lg-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-duration="1000">
							<div className="counting-item flex-fill">
								<span className="count-icon">
									<img src="/assets/img/icons/count-01.svg" alt="" />
								</span>
								<div>
									<h4 className="mb-1"><span className="counter-up">12000</span>+</h4>
									<p className="mb-0">Rentals Completed</p>
								</div>
							</div>
						</div> 

						<div className="col-lg-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-duration="1500">
							<div className="counting-item flex-fill">
								<span className="count-icon">
									<img src="/assets/img/icons/count-02.svg" alt="" />
								</span>
								<div>
									<h4 className="mb-1"><span className="counter-up">1514</span>+</h4>
									<p className="mb-0">Trusted Owners</p>
								</div>
							</div>
						</div> 

						<div className="col-lg-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-duration="2000">
							<div className="counting-item flex-fill">
								<span className="count-icon">
									<img src="/assets/img/icons/count-03.svg" alt="" />
								</span>
								<div>
									<h4 className="mb-1"><span className="counter-up">9</span>K+</h4>
									<p className="mb-0">Happy Clients</p>
								</div>
							</div>
						</div> 

						<div className="col-lg-3 col-sm-6 d-flex" data-aos="fade-up" data-aos-duration="2500">
							<div className="counting-item flex-fill">
								<span className="count-icon">
									<img src="/assets/img/icons/count-02.svg" alt="" />
								</span>
								<div>
									<h4 className="mb-1"><span className="counter-up">1514</span>+</h4>
									<p className="mb-0">Total Bookings</p>
								</div>
							</div>
						</div> 

					</div>
					

				</div>
			</div>
		</section>
		

		
		<section className="property-type-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="1000">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Recommended <span> Property</span> Types </h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Discover our top service areas, where quality meets convenience.</p>
				</div>
				

				
				<div className="row">

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
						<div className="property-type-item">
							<div className="property-img">
								<Link to="/buy-details"><img src="/assets/img/property-type/property-type-01.jpg" className="img-fluid" alt="" /></Link>
								<Link to="/buy-details" className="overlay-arrow"><i className="material-icons-outlined">north_east</i></Link>
							</div>
							<div className="text-center">
								<h5 className="mb-1"><Link to="/buy-details">Houses</Link></h5>
								<p className="fs-14 mb-0">288 Property Available</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
						<div className="property-type-item">
							<div className="property-img">
								<Link to="/buy-details"><img src="/assets/img/property-type/property-type-02.jpg" className="img-fluid" alt="" /></Link>
								<Link to="/buy-details" className="overlay-arrow"><i className="material-icons-outlined">north_east</i></Link>
							</div>
							<div className="text-center">
								<h5 className="mb-1"><Link to="/buy-details">Offices</Link></h5>
								<p className="fs-14 mb-0">300 Property Available</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
						<div className="property-type-item">
							<div className="property-img">
								<Link to="/buy-details"><img src="/assets/img/property-type/property-type-03.jpg" className="img-fluid" alt="" /></Link>
								<Link to="/buy-details" className="overlay-arrow"><i className="material-icons-outlined">north_east</i></Link>
							</div>
							<div className="text-center">
								<h5 className="mb-1"><Link to="/buy-details">Villas</Link></h5>
								<p className="fs-14 mb-0">145 Property Available</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="2500">
						<div className="property-type-item">
							<div className="property-img">
								<Link to="/buy-details"><img src="/assets/img/property-type/property-type-04.jpg" className="img-fluid" alt="" /></Link>
								<Link to="/buy-details" className="overlay-arrow"><i className="material-icons-outlined">north_east</i></Link>
							</div>
							<div className="text-center">
								<h5 className="mb-1"><Link to="/buy-details">Apartments</Link></h5>
								<p className="fs-14 mb-0">875  Property Available</p>
							</div>
						</div>
					</div> 

				</div>
				

				<div className="text-center pt-3">
					<Link to="/buy-property-grid" className="btn btn-dark d-inline-flex align-items-center">View More Type<i className="material-icons-outlined ms-1">north_east</i></Link>
				</div>

			</div>
		</section>
		

		
		<section className="support-section">
			<div className="horizontal-slide d-flex" data-direction="right" data-speed="slow">
				<div className="slide-list d-flex">
					<div className="support-item">
						<h5>Personalized Itineraries</h5>
					</div>
					<div className="support-item">
						<h5>Comprehensive Planning</h5>
					</div>
					<div className="support-item">
						<h5>Expert Guidance</h5>
					</div>
					<div className="support-item">
						<h5>Local Experience</h5>
					</div>
					<div className="support-item">
						<h5>Customer Support</h5>
					</div>
					<div className="support-item">
						<h5>Sustainability Efforts</h5>
					</div>
					<div className="support-item">
						<h5>Multiple Regions</h5>
					</div>
				</div>
			</div>
		</section>
		

		
		<section className="popular-listing-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="500">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Discover <span> Popular</span> Listing</h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Ready to buy your dream home? find it here</p>
				</div>
				

				<ul className="nav nav-pills listing-nav-2" role="tablist">
					<li className="nav-item" role="presentation">
						<Link className="nav-link active" data-bs-toggle="tab" to="/index-2" role="tab" aria-controls="listing-1" aria-selected="true"> 
							For Rent
						</Link>
					</li>
					<li className="nav-item" role="presentation">
						<Link className="nav-link" data-bs-toggle="tab" to="/index-2" role="tab" aria-controls="listing-2" aria-selected="false" tabindex="-1">
							For Sale
						</Link>
					</li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade active show" id="listing-1" role="tabpanel">

						
						<div className="row">

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-01.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="d-flex align-items-center gap-2">
												<div className="badge badge-sm bg-danger d-flex align-items-center">
													<i className="material-icons-outlined">offline_bolt</i>Trending
												</div>
												<div className="badge badge-sm bg-orange d-flex align-items-center">
													<i className="material-icons-outlined">loyalty</i>Featured
												</div>
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-01.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Serenity Condo Suite</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i> 17, Grove Towers, New York, USA</p>
											</div>
											<span className="badge bg-secondary">Condo</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">5.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1596</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												1 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												400 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-02.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="d-flex align-items-center gap-2">
												<div className="badge badge-sm bg-danger d-flex align-items-center">
													<i className="material-icons-outlined">offline_bolt</i>Trending
												</div>
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-02.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Loyal Apartment</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>25, Willow Crest Apartment, USA</p>
											</div>
											<span className="badge bg-secondary">Apartment</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_half</i>
												<span className="ms-1 fs-14">4.5</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1940</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												2 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												350 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-03.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-orange d-flex align-items-center">
												<i className="material-icons-outlined">loyalty</i>Featured
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-03.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Grand Villa House</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>10, Oak Ridge Villa, USA</p>
											</div>
											<span className="badge bg-secondary">Villa</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">4.9</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1370</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												4 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												3 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												520 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-04.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-orange d-flex align-items-center">
												<i className="material-icons-outlined">loyalty</i>Featured
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-04.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Palm Cove Bungalows</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>42, Pine Residency, Miami, USA</p>
											</div>
											<span className="badge bg-secondary">Bungalow</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_half</i>
												<span className="ms-1 fs-14">4.5</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1560</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												5 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												3 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												700 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-05.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-danger d-flex align-items-center">
												<i className="material-icons-outlined">offline_bolt</i>Trending
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-05.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Blue Horizon Villa</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>76, Golden Oaks, Dallas, USA</p>
											</div>
											<span className="badge bg-secondary">Villa</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">5.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$2000</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												1 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												400 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/rent-details">
											<img className="img-fluid rounded" src="/assets/img/buy/buy-grid-img-06.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-danger d-flex align-items-center">
												<i className="material-icons-outlined">offline_bolt</i>Trending
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Rent</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-06.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/rent-details">Wanderlust Lodge</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>91, Birch Residences, Boston, USA</p>
											</div>
											<span className="badge bg-secondary">Lodge</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_border</i>
												<span className="ms-1 fs-14">4.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1950</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												3 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												2 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												550 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-md-12">
								<div className="text-center pt-3">
									<Link to="/rent-property-grid" className="btn btn-dark d-inline-flex align-items-center">Explore all Listings<i className="material-icons-outlined ms-1">north_east</i></Link>
								</div>
							</div> 

						</div>
						

					</div>

					<div className="tab-pane fade" id="listing-2" role="tabpanel">

						
						<div className="row">

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-01.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="d-flex align-items-center gap-2">
												<div className="badge badge-sm bg-danger d-flex align-items-center">
													<i className="material-icons-outlined">offline_bolt</i>Trending
												</div>
												<div className="badge badge-sm bg-orange d-flex align-items-center">
													<i className="material-icons-outlined">loyalty</i>Featured
												</div>
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-07.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Stylish Skyline Room</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i> 17, Grove Towers, New York, USA</p>
											</div>
											<span className="badge bg-secondary">Condo</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">5.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1596</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												1 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												400 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-02.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="d-flex align-items-center gap-2">
												<div className="badge badge-sm bg-danger d-flex align-items-center">
													<i className="material-icons-outlined">offline_bolt</i>Trending
												</div>
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-08.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Getaway Apartment</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>25, Willow Crest Apartment, USA</p>
											</div>
											<span className="badge bg-secondary">Apartment</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_half</i>
												<span className="ms-1 fs-14">4.5</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1940</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												2 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												350 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-03.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-orange d-flex align-items-center">
												<i className="material-icons-outlined">loyalty</i>Featured
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-09.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Cozy Urban Condo</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>10, Oak Ridge Villa, USA</p>
											</div>
											<span className="badge bg-secondary">Villa</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">4.9</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1370</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												4 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												3 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												520 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-04.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-orange d-flex align-items-center">
												<i className="material-icons-outlined">loyalty</i>Featured
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-10.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Coral Bay Cabins</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>42, Pine Residency, Miami, USA</p>
											</div>
											<span className="badge bg-secondary">Bungalow</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_half</i>
												<span className="ms-1 fs-14">4.5</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1560</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												5 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												3 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												700 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-05.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-danger d-flex align-items-center">
												<i className="material-icons-outlined">offline_bolt</i>Trending
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-11.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Majestic Stay</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>76, Golden Oaks, Dallas, USA</p>
											</div>
											<span className="badge bg-secondary">Villa</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<span className="ms-1 fs-14">5.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$2000</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												2 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												1 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												400 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
								<div className="property-listing-item">
									<div className="buy-grid-img">
										<Link to="/buy-details">
											<img className="img-fluid rounded" src="/assets/img/rent/rent-grid-img-06.jpg" alt="" />
										</Link>
										<div className="d-flex align-items-center justify-content-between position-absolute top-0 start-0 end-0 p-3">
											<div className="badge badge-sm bg-danger d-flex align-items-center">
												<i className="material-icons-outlined">offline_bolt</i>Trending
											</div>
											<a href="javascript:void(0)" className="favourite">
												<i className="material-icons-outlined">favorite_border</i>
											</a>
										</div>
										<div className="d-flex align-items-center justify-content-between position-absolute bottom-0 end-0 start-0 p-3">
											<span className="badge bg-light text-dark">For Sale</span>
											<div className="user-avatar avatar avatar-md">
												<img src="/assets/img/users/user-12.jpg" alt="User" className="rounded-circle" />
											</div>
										</div>
									</div> 
									<div className="buy-grid-content">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div>
												<h6 className="title">
													<Link to="/buy-details">Noble Nest</Link> 
												</h6>
												<p className="d-flex align-items-center fs-14 mb-0"><i className="material-icons-outlined me-1">location_on</i>91, Birch Residences, Boston, USA</p>
											</div>
											<span className="badge bg-secondary">Lodge</span>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
											<div className="d-flex align-items-center justify-content-center">
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star</i>
												<i className="material-icons-outlined text-warning">star_border</i>
												<span className="ms-1 fs-14">4.0</span>
											</div>
											<div className="d-flex align-items-center">
												<span>Starts From</span>
												<h6 className="text-primary mb-0 ms-1">$1950</h6>
											</div>
										</div>
										<ul className="d-flex buy-grid-details justify-content-between align-items-center flex-wrap gap-1">
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bed</i>
												3 Bedroom
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">bathtub</i>
												2 Bath
											</li>
											<li className="d-flex align-items-center gap-1">
												<i className="material-icons-outlined bg-light text-dark">straighten</i>
												550 Sq Ft
											</li>
										</ul>
									</div>
								</div> 
							</div> 

							<div className="col-md-12">
								<div className="text-center pt-3">
									<Link to="/buy-property-grid" className="btn btn-dark d-inline-flex align-items-center">Explore all Listings<i className="material-icons-outlined ms-1">north_east</i></Link>
								</div>
							</div> 

						</div>
						

					</div>

				</div>
			</div>
		</section>
		

		
		<section className="exclusive-benifit-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="500">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Discover the <span> Advantages & Exclusive</span> Benefits</h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Along the way, weÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve collaborated with incredible clients, tackled exciting challenges</p>
				</div>
				

				
				<div className="row">

					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Verified Listings</h5>
								<p className="mb-0">All properties are thoroughly checked to ensure authenticity and avoid time-wasting.</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Wide Reach</h5>
								<p className="mb-0">Access thousands of listings across top cities, towns, and emerging locations.</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="2000">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Direct Communication</h5>
								<p className="mb-0">Connect instantly with sellers, agents, or property managersÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Âno middlemen.</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="2500">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Expert Guidance</h5>
								<p className="mb-0">Receive professional insights to make informed real estate decisions confidently.</p>
							</div>
						</div>
					</div> 
					
					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Tailored Solutions</h5>
								<p className="mb-0">We customize property options based on your specific needs and preferences.</p>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
						<div className="benifit-item">
							<span className="benifit-icon">
								<i className="material-icons-outlined">check_circle</i>
							</span>
							<div>
								<h5 className="mb-2">Seamless Process</h5>
								<p className="mb-0">Enjoy a smooth, stress-free experience from property search to final transaction.</p>
							</div>
						</div>
					</div> 

				</div>
				

				<div className="sec-bottom-imgs">
					<div className="bottom-img-1"><img src="/assets/img/benifits/benifit-01.jpg" alt="" /></div>
					<div className="bottom-img-2"><img src="/assets/img/benifits/benifit-02.jpg" alt="" /></div>
					<div className="bottom-img-3"><img src="/assets/img/benifits/benifit-03.jpg" alt="" /></div>
					<div className="bottom-img-4"><img src="/assets/img/benifits/benifit-04.jpg" alt="" /></div>
					<div className="bottom-img-5"><img src="/assets/img/benifits/benifit-05.jpg" alt="" /></div>
					<div className="bottom-img-6"><img src="/assets/img/benifits/benifit-06.jpg" alt="" /></div>
				</div>

			</div>
		</section>
		

		
		<section className="feature-location-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="500">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Discover <span> Featured</span> Location</h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Ready to buy your dream home? find it here</p>
				</div>
				

				
				<div className="row">

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
						<div className="location-item-two">
							<div className="location-img">
								<a href="javascript:void(0)"><img src="/assets/img/location/location-01.jpg" className="img-fluid" alt="" /></a>
								<div className="position-absolute top-0 end-0 p-3 z-1"><span className="badge bg-light text-dark">200 Properties</span></div>
								<h5 className="position-absolute start-0 bottom-0 text-white z-1 p-3">Switzerland</h5>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
						<div className="location-item-two">
							<div className="location-img">
								<a href="javascript:void(0)"><img src="/assets/img/location/location-02.jpg" className="img-fluid" alt="" /></a>
								<div className="position-absolute top-0 end-0 p-3 z-1"><span className="badge bg-light text-dark">156 Properties</span></div>
								<h5 className="position-absolute start-0 bottom-0 text-white z-1 p-3">Argentina</h5>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
						<div className="location-item-two">
							<div className="location-img">
								<a href="javascript:void(0)"><img src="/assets/img/location/location-03.jpg" className="img-fluid" alt="" /></a>
								<div className="position-absolute top-0 end-0 p-3 z-1"><span className="badge bg-light text-dark">238 Properties</span></div>
								<h5 className="position-absolute start-0 bottom-0 text-white z-1 p-3">Singapore</h5>
							</div>
						</div>
					</div> 

					<div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="2500">
						<div className="location-item-two">
							<div className="location-img">
								<a href="javascript:void(0)"><img src="/assets/img/location/location-04.jpg" className="img-fluid" alt="" /></a>
								<div className="position-absolute top-0 end-0 p-3 z-1"><span className="badge bg-light text-dark">145 Properties</span></div>
								<h5 className="position-absolute start-0 bottom-0 text-white z-1 p-3">Thailand</h5>
							</div>
						</div>
					</div> 

				</div>
				

				<div className="text-center pt-3">
					<a href="javascript:void(0)" className="btn btn-dark d-inline-flex align-items-center">More Locations<i className="material-icons-outlined ms-1">north_east</i></a>
				</div>

			</div>
		</section>
		

		
		<section className="work-section">
			<div className="container">

				
				<div className="row align-items-center justify-content-lg-end"	>

					<div className="col-lg-6">
						
						<div className="section-title-2" data-aos="fade-up" data-aos-duration="500">
							<div className="d-flex align-items-center mb-3">
								<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
								<span className="text-white d-inline-block ms-2">Post Your Property</span>
							</div>
							<h2>Looking to Post your Exsisting Property We Provide Awesome Solution</h2>
							<p>Whether you're selling or renting, we make it easy to post your property and reach the right audience with powerful tools and expert support.</p>
							<Link to="/add-property-buy" className="btn btn-primary">Start Post Your Property</Link>
						</div>
						
					</div>

					<div className="col-lg-6">
						<div className="card work-item border-0 mb-0">
							<div className="card-body">
								<div className="mb-4">
									<span className="badge bg-secondary mb-2">How it Works</span>
									<h2>Want tailor this more for a specific niche</h2>
								</div>
								<div className="work-steps">
									<h6 className="fw-semibold fs-16 mb-1 text-secondary">01. Search for Location</h6>
									<p className="mb-0 fs-14">Search by location, category, budget, and amenities. Find listings that match your needsÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Âwhether it's a home, office, or land.</p>
								</div>
								<div className="work-steps">
									<h6 className="fw-semibold fs-16 mb-1 text-teal">02. Select Property Type</h6>
									<p className="mb-0 fs-14">Choose from modern apartments, spacious houses, stylish condos, or commercial spaces that meet your specific needs.</p>
								</div>
								<div className="work-steps mb-0">
									<h6 className="fw-semibold fs-16 mb-1 text-purple">03. Book Your Property</h6>
									<p className="mb-0 fs-14">Select your preferred property type, provide your details, and confirm your booking in just a few easy steps.</p>
								</div>
							</div> 
						</div> 
					</div> 

				</div>
				

			</div>
		</section>
		

		
		<section className="customer-review-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="500">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Success <span> Stories</span> in their Own Words</h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Hear from our happy customers</p>
				</div>
				

				<div className="review-slider swiper" data-aos="fade-up">
					<div className="swiper-wrapper">
						<div className="review-item-two swiper-slide">
							<span className="mb-3 d-block"><img src="/assets/img/icons/quote-down.svg" className="w-auto m-auto" alt="" /></span>
							<div className="review-content">
								<p className="mb-2">Booking our dream home was incredibly easy with Dreams Estate The interface was user-friendly</p>
								<div className="d-flex align-items-center justify-content-center">
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0)" className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="/assets/img/users/user-02.jpg" alt="" /></a>
								<div>
									<h6 className="fs-16 fw-semibold mb-0"><a href="javascript:void(0)">Lily Brooks</a></h6>
									<span className="fs-14">South Africa</span>
								</div>
							</div>
						</div>
						<div className="review-item-two swiper-slide">
							<span className="mb-3 d-block"><img src="/assets/img/icons/quote-down.svg" className="w-auto m-auto" alt="" /></span>
							<div className="review-content">
								<p className="mb-2">Dreams Estate made home booking a breeze. Super easy and stress-free! listing Portal of all time</p>
								<div className="d-flex align-items-center justify-content-center">
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0)" className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="/assets/img/users/user-04.jpg" alt="" /></a>
								<div>
									<h6 className="fs-16 fw-semibold mb-0"><a href="javascript:void(0)">Daniel Cooper</a></h6>
									<span className="fs-14">United States of America</span>
								</div>
							</div>
						</div>
						<div className="review-item-two swiper-slide">
							<span className="mb-3 d-block"><img src="/assets/img/icons/quote-down.svg" className="w-auto m-auto" alt="" /></span>
							<div className="review-content">
								<p className="mb-2">Dreams Estate made home booking a breeze. Super easy and stress-free! listing Portal of all time</p>
								<div className="d-flex align-items-center justify-content-center">
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0)" className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="/assets/img/users/user-03.jpg" alt="" /></a>
								<div>
									<h6 className="fs-16 fw-semibold mb-0"><a href="javascript:void(0)">Amina</a></h6>
									<span className="fs-14">North German Union</span>
								</div>
							</div>
						</div>
						<div className="review-item-two swiper-slide">
							<span className="mb-3 d-block"><img src="/assets/img/icons/quote-down.svg" className="w-auto m-auto" alt="" /></span>
							<div className="review-content">
								<p className="mb-2">Dreams Estate made home booking a breeze. Super easy and stress-free! listing Portal of all time</p>
								<div className="d-flex align-items-center justify-content-center">
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0)" className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="/assets/img/users/user-06.jpg" alt="" /></a>
								<div>
									<h6 className="fs-16 fw-semibold mb-0"><a href="javascript:void(0)">Mohammed</a></h6>
									<span className="fs-14">United Kingdom</span>
								</div>
							</div>
						</div>
						<div className="review-item-two swiper-slide">
							<span className="mb-3 d-block"><img src="/assets/img/icons/quote-down.svg" className="w-auto m-auto" alt="" /></span>
							<div className="review-content">
								<p className="mb-2">Dreams Estate made home booking a breeze. Super easy and stress-free! listing Portal of all time</p>
								<div className="d-flex align-items-center justify-content-center">
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
									<i className="material-icons-outlined text-warning">star</i>
								</div>
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<a href="javascript:void(0)" className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="/assets/img/users/user-04.jpg" alt="" /></a>
								<div>
									<h6 className="fs-16 fw-semibold mb-0"><a href="javascript:void(0)">Daniel Cooper</a></h6>
									<span>United States of America</span>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
				<div className="text-center">
					<div className="d-inline-flex align-items-center flex-wrap gap-2 review-users">
						<div className="avatar-list-stacked"> 
							<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-01.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
							<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-02.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
							<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-03.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
							<span className="avatar avatar-md rounded-circle border-0"><img src="/assets/img/users/user-04.jpg" className="img-fluid rounded-circle" alt="Img" /></span>
						</div>
						<div>
							<div className="d-flex align-items-center mb-1">
								<h6 className="mb-0 me-2 text-white fw-semibold fs-14">Ratings 5.0</h6>
								<i className="material-icons-outlined text-warning">star</i>
								<i className="material-icons-outlined text-warning">star</i>
								<i className="material-icons-outlined text-warning">star</i>
								<i className="material-icons-outlined text-warning">star</i>
								<i className="material-icons-outlined text-warning">star</i>
							</div>
							<p className="mb-0 text-white fs-13">Trusted By Client around the World</p>
						</div>
					</div>
				</div>

			</div>
		</section>
		

		
		<section className="faq-section-two">
			<div className="container">

				
				<div className="section-title-2">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Frequently Asked <span> Questions</span></h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Quick Answers to Common Questions</p>
				</div>
				

				
				<div className="row align-items-center gy-4">

					<div className="col-lg-6" data-aos="fade-up">
						<div className="property-sec-img mt-0">
							<div className="row g-3">
								<div className="col-md-6 d-flex">
									<div className="flex-fill">
										<div><img src="/assets/img/home-3/property/property-01.jpg" className="img-fluid" alt="" /></div>
									</div>
								</div>
								<div className="col-md-6 d-flex">
									<div className="flex-fill">
										<div className="mb-3"><img src="/assets/img/home-3/property/property-02.jpg" className="img-fluid" alt="" /></div>
										<div><img src="/assets/img/home-3/property/property-03.jpg" alt="" /></div>
									</div>
								</div>
							</div>
							<div className="rotate-div">
							<div className="img-center-text">
								<h3 className="mb-1 text-white">10+</h3>
								<p className="mb-0 fs-14 text-white text-center">Years of <br /> Experience</p>
							</div>
							</div>
						</div>
					</div> 

					<div className="col-lg-6" data-aos="fade-up" data-aos-duration="1500">
						<div className="accordion accordions-items-seperate faq-accordion" id="faq-accordion">
							<div className="accordion-item">
								<div className="accordion-header">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1" aria-expanded="true">
										Does offer free cancellation for a full refund?
									</button>
								</div>
								<div id="accordion-1" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
									<div className="accordion-body">
										<p className="mb-0">Does have fully refundable room rates available to book on our site. If youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve booked a fully 
										refundable room rate, this can be cancelled up to a few days before check-in depending on the 
										property's cancellation policy. 
										Just make sure to check this property's cancellation policy for the exact terms and conditions.
										</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2" aria-expanded="false">
										Is there a pool?
									</button>
								</div>
								<div id="accordion-2" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
									<div className="accordion-body">
										<p className="mb-0">Yes, there is a pool available for guests, providing a perfect place to relax, unwind, and enjoy some leisure time during their stay.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3" aria-expanded="false">
										Are pets allowed?
									</button>
								</div>
								<div id="accordion-3" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
									<div className="accordion-body">
										<p className="mb-0">Yes, pets are allowed, and we welcome your furry friends to stay with you, ensuring a comfortable experience for both you and your pets.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-4" aria-expanded="false">
										Is airport shuttle service offered?
									</button>
								</div>
								<div id="accordion-4" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
									<div className="accordion-body">
										<p className="mb-0">Yes, airport shuttle service is offered to provide convenient and reliable transportation for our guests between the airport and their destination, ensuring a smooth and stress-free travel experience.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-5" aria-expanded="false">
										What are the check-in and check-out times?
									</button>
								</div>
								<div id="accordion-5" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
									<div className="accordion-body">
										<p className="mb-0">Check-in is typically from 12:00 PM, and check-out is usually by 11:00 AM to ensure a smooth transition for all guests.</p>
									</div>
								</div>
							</div>
						</div>
					</div> 

				</div>
				

				<div className="partner-slider-two swiper">
					<div className="swiper-wrapper">
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-01.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-02.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-03.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-04.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-05.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-06.svg" alt="" />
						</div>
						<div className="partner-logo swiper-slide">
							<img src="/assets/img/icons/partner-03.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
		

		
		<section className="blogs-section">
			<div className="container">

				
				<div className="section-title-2" data-aos="fade-up" data-aos-duration="1000">
					<div className="d-flex align-items-center justify-content-center">
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
						<h2>Latest <span> Blogs</span></h2>
						<span className="title-square bg-primary"></span><span className="title-square bg-secondary"></span>
					</div>
					<p>Explore our featured blog posts on premium properties for sales & rents</p>
				</div>
				

				
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
						<div className="blog-item-two">
							<div className="blog-content">
								<div className="blog-img">
									<Link to="/blog-details"><img src="/assets/img/blogs/blog-img-22.jpg" className="img-fluid" alt="" /></Link>
								</div>
								<div className="position-absolute top-0 start-0 p-3 z-1">
									<div className="blog-date">
										<h6 className="mb-0">10</h6>
										<span>Jul</span>
									</div>
								</div>
								<div className="position-absolute bottom-0 start-0 end-0 p-3 text-center z-1">
									<span className="badge bg-danger mb-2">Bookings</span>
									<h5 className="mb-0"><Link to="/blog-details">Top 10 Tips for First-Time Homebuyers in 2025</Link></h5>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
						<div className="blog-item-two">
							<div className="blog-content">
								<div className="blog-img">
									<Link to="/blog-details"><img src="/assets/img/blogs/blog-img-23.jpg" className="img-fluid" alt="" /></Link>
								</div>
								<div className="position-absolute top-0 start-0 p-3 z-1">
									<div className="blog-date">
										<h6 className="mb-0">10</h6>
										<span>Jul</span>
									</div>
								</div>
								<div className="position-absolute bottom-0 start-0 end-0 p-3 text-center z-1">
									<span className="badge bg-danger mb-2">Rental</span>
									<h5 className="mb-0"><Link to="/blog-details">First-Time BuyerÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s Guide: What to Expect in 2025</Link></h5>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="2000">
						<div className="blog-item-two">
							<div className="blog-content">
								<div className="blog-img">
									<Link to="/blog-details"><img src="/assets/img/blogs/blog-img-24.jpg" className="img-fluid" alt="" /></Link>
								</div>
								<div className="position-absolute top-0 start-0 p-3 z-1">
									<div className="blog-date">
										<h6 className="mb-0">10</h6>
										<span>Jul</span>
									</div>
								</div>
								<div className="position-absolute bottom-0 start-0 end-0 p-3 text-center z-1">
									<span className="badge bg-danger mb-2">Tips</span>
									<h5 className="mb-0"><Link to="/blog-details">Top Property Investment Trends in 2025</Link></h5>
								</div>
							</div>
						</div>
					</div> 

				</div>

			</div>
		</section>
		

		
		<footer className="footer-two">
			<div className="container">

				<div className="join-sec">
					<div>
						<h2>Join now and redefine your work experience!</h2>
						<p>Connect with us, streamline collaboration, and unlock success. </p>
					</div>
					<Link to="/add-property-buy" className="btn btn-primary btn-lg">Start Post Your Property</Link>
				</div>

				
				<div className="footer-top">
					<div className="row gy-4">
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget">
								<h5 className="footer-title">Company</h5>
								<ul className="footer-menu">
									<li><Link to="/about-us">About Us</Link></li>
									<li><a href="#">Careers</a></li>
									<li><Link to="/blog-grid">Blog</Link></li>
									<li><a href="#">Affiliate Program</a></li>
									<li><Link to="/add-property-buy">Add Your Listing</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget">
								<h5 className="footer-title">Destinations</h5>
								<ul className="footer-menu">
									<li><a href="#">Hawai</a></li>
									<li><a href="#">Istanbul</a></li>
									<li><a href="#">San Diego</a></li>
									<li><a href="#">Belgium</a></li>
									<li><a href="#">Newyork</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget footer-contacts">
								<h5 className="footer-title">Reach Us</h5>
								<div className="contact-info">
									<h6>Location</h6>
									<p>123 East 26th Street,Fifth Floor,New York, NY 10011</p>
								</div>
								<div className="contact-info">
									<h6>Phone</h6>
									<p>+1 34245 67678</p>
								</div>
								<div className="contact-info">
									<h6>Email</h6>
									<p></p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget footer-subscribe">
								<h5 className="footer-title">Newsletter</h5>
								<div className="email-info">
									<h6>Subscribe to Our Newsletter</h6>
									<p>Just sign up and we'll send you a notification by email.</p>
								</div>
								<div className="d-flex align-items-center subscribe-wrap">
									<div className="input-group input-group-flat">
										<span className="input-group-text">
											<i className="material-icons-outlined">email</i>
										</span>
										<input type="email" className="form-control form-control-lg" placeholder="Enter Email Address" />
									</div>
									<button type="submit" className="btn btn-primary"><i className="material-icons-outlined">send</i></button>
								</div>
								<div className="social-icon">
									<a href="#"><i className="fa-brands fa-facebook"></i></a>
									<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
									<a href="#"><i className="fa-brands fa-instagram"></i></a>
									<a href="#"><i className="fa-brands fa-linkedin"></i></a>
									<a href="#"><i className="fa-brands fa-pinterest"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				

			</div>

			
			<div className="footer-bottom">
				<div className="container">
					<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
						<p className="copy-right">Copyright &copy; . All Rights Reserved, Dreams Estate</p>
						<div className="policy-link">
							<Link to="/privacy-policy">Privacy Policy</Link>
							<a href="#">Legal Notice</a>
							<a href="#">Refund Policy</a>
							<Link to="/terms-condition">Terms and Conditions</Link>
						</div>
					</div>
				</div>
			</div>
			

		</footer>
		

		
		<div className="modal fade" id="search-modal" tabindex="-1" aria-hidden="true">
			<div className="modal-dialog  modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-body search-wrap">
						<form className="search-form" id="search-form" action="rent-property-grid.html">
							<div className="d-flex align-items-center justify-content-between mb-4">
								<h5>What Are You Looking for?</h5>
								<a href="#" className="close" data-bs-dismiss="modal"><i className="material-icons-outlined">close</i></a>
							</div>
							<div className="input-group input-group-flat">
								<input type="text" className="form-control" placeholder="Type a Keyword...." />
								<span className="input-group-text">
									<i className="material-icons-outlined">search</i>
								</span>
							</div>
							<h6>Popular Properties</h6>
							<div className="search-list">
								<p><Link to="/rent-property-grid">Beautiful Condo Room</Link></p>
								<p><Link to="/rent-property-grid">Royal Apartment</Link></p>
								<p><Link to="/rent-property-grid">Grand Villa House</Link></p>
								<p><Link to="/rent-property-grid">Grand Mahaka</Link></p>
								<p><Link to="/rent-property-grid">Lunaria Residence</Link></p>
								<p><Link to="/rent-property-grid">Stephen Alexander Homes</Link></p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		

	</div>
    </div>
  );
};

export default Index2;



