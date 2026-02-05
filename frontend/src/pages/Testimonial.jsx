import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Testimonial = () => {
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

        
		<header className="header">
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
							<li className="has-submenu megamenu">
								<Link to="/testimonial">Home <i  className="material-icons-outlined">expand_more</i></Link>
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
													<div className="single-demo">
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
							<li className="has-submenu active">
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
									<li><Link to="/contact-us">Contact Us</Link></li>
									<li><Link to="/wishlist">Wishlist</Link></li>
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
									<li className="active"><Link to="/testimonial">Testimonials</Link></li>
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

						<div className="menu-account">
							<h6>Account</h6>
							<div className="d-flex align-items-center gap-2">
								<div>
									<Link to="/wishlist">
										<i className="material-icons-outlined">favorite_border</i>
										<span className="badge-icon bg-orange">4</span>
									</Link>
								</div>
								<div>
									<Link to="/cart">
										<i className="material-icons-outlined">shopping_cart</i>
										<span className="badge-icon bg-danger">3</span>
									</Link>
								</div>
								<Link to="/testimonial" className="avatar avatar-sm">
									<img src="/assets/img/users/user-06.jpg" alt="img" className="img-fluid rounded-circle" />
								</Link>
							</div>
						</div>

						<div className="menu-dropdown">
                            <div className="dropdown mb-2">
								<Link to="/testimonial" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
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

						<Link to="/testimonial" className="topbar-link btn btn-light topbar-search" data-bs-toggle="modal" data-bs-target="#search-modal">
							<i className="material-icons-outlined">search</i>
						</Link>

						<div className="dropdown topbar-lang">
							<Link to="/testimonial" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
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

						<div className="dropdown">
							<a href="#" className="topbar-link btn btn-light"  data-bs-toggle="dropdown">
								<i className="material-icons-outlined animate-ring">notifications_none</i>
								<span className="badge-icon bg-orange">4</span>
							</a>
							<div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style={{ minHeight: '300px' }}>
							
								<div className="notification-head">
									<div className="row align-items-center">
										<div className="col">
											<h6 className="m-0"> Notifications</h6>
										</div>
										<div className="col-auto">
											<div className="dropdown">
												<Link to="/testimonial" className="text-body" data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
													<i className="material-icons-outlined">settings</i>
												</Link>
												<div className="dropdown-menu dropdown-menu-end">
													
													<a href="#" className="dropdown-item">Mark as Read</a>
													
													<a href="#" className="dropdown-item">Delete All</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="notification-body position-relative z-2 rounded-0" data-simplebar>
								 
									
									<div className="dropdown-item notification-item text-wrap border-bottom" id="notification-1">
										<div className="d-flex">
											<div className="avatar avatar-md avatar-rounded bg-teal text-white flex-shrink-0">
												MH
											</div>
											<div className="flex-grow-1">
												<p className="mb-1"><span className="fw-medium text-dark">Maria Hill</span> notifications inform you when someone likes</p>
												<div className="d-flex justify-content-between align-items-center">
													<span className="fs-13 d-flex align-items-center"><i className="material-icons-outlined text-body fs-13 me-1">schedule</i>45 mins ago</span>
													<div className="notification-action d-flex align-items-center float-end gap-2">
														<a href="#" className="notification-read rounded-circle bg-danger" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
														<button className="btn rounded-circle p-0" data-dismissible="#notification-1">
															<i className="material-icons-outlined me-1">close</i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
							
									
									<div className="dropdown-item notification-item text-wrap border-bottom" id="notification-2">
										<div className="d-flex">
											<div className="avatar avatar-md flex-shrink-0">
												<img src="/assets/img/users/user-03.jpg" alt="img" className="img-fluid rounded-circle" />
											</div>
											<div className="flex-grow-1">
												<p className="mb-1"><span className="fw-medium text-dark">Edward Curr</span> notifications alert you to new messages in your estates inbox.</p>
												<div className="d-flex justify-content-between align-items-center">
													<span className="fs-13 d-flex align-items-center"><i className="material-icons-outlined text-body fs-13 me-1">schedule</i>17 mins ago</span>
													<div className="notification-action d-flex align-items-center float-end gap-2">
														<a href="#" className="notification-read rounded-circle bg-danger" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
														<button className="btn rounded-circle p-0" data-dismissible="#notification-2">
															<i className="material-icons-outlined me-1">close</i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									
									<div className="dropdown-item notification-item text-wrap border-bottom" id="notification-3">
										<div className="d-flex">
											<div className="avatar avatar-md flex-shrink-0">
												<img src="/assets/img/users/user-06.jpg" alt="img" className="img-fluid rounded-circle" />
											</div>
											<div className="flex-grow-1">
                                                <p className="mb-1"><span className="fw-medium text-dark">Alex Carter</span>  added a comment to Alex Carter <span className="fw-medium text-dark">ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œOh, I finished de-bugging the phonesÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</span></p>
												<div className="d-flex justify-content-between align-items-center">
													<span className="fs-13 d-flex align-items-center"><i className="material-icons-outlined text-body fs-13 me-1">schedule</i>1 Day Ago</span>
													<div className="notification-action d-flex align-items-center float-end gap-2">
														<a href="#" className="notification-read rounded-circle bg-danger" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
														<button className="btn rounded-circle p-0" data-dismissible="#notification-3">
															<i className="material-icons-outlined me-1">close</i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									
									<div className="dropdown-item notification-item text-wrap border-bottom" id="notification-4">
										<div className="d-flex">
											<div className="avatar avatar-md avatar-rounded bg-teal text-white flex-shrink-0">
												AN
											</div>
											<div className="flex-grow-1">
												<p className="mb-1"><span className="fw-medium text-dark">Annie Nirain</span> payment attempt failed. Please verify your details and try again.</p>
												<div className="d-flex justify-content-between align-items-center">
													<span className="fs-13 d-flex align-items-center"><i className="material-icons-outlined text-body fs-13 me-1">schedule</i>45 mins ago</span>
													<div className="notification-action d-flex align-items-center float-end gap-2">
														<a href="#" className="notification-read rounded-circle bg-danger" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
														<button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-4">
															<i className="material-icons-outlined me-1">close</i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									 
								</div>
								
								
								<div className="notification-footer text-center">
									<Link to="/notifications" className="text-center mb-0">
										View All
									</Link>
								</div>
								
							</div>
						</div>

						<Link to="/cart" className="topbar-link btn btn-light topbar-cart">
                            <i className="material-icons-outlined">shopping_cart</i>
							<span className="badge-icon bg-danger">3</span>
                        </Link>

						<Link to="/add-property-buy" className="btn btn-lg btn-dark d-inline-flex align-items-center topbar-add"><i className="material-icons-outlined me-1">home</i>Post Property</Link>

						<div className="dropdown topbar-profile d-flex">
							<Link to="/testimonial" className="avatar" data-bs-toggle="dropdown">
								<img src="/assets/img/users/user-06.jpg" alt="img" className="img-fluid rounded-circle" />
							</Link>
							<div className="dropdown-menu dropdown-menu-end">
                        
								<div className="d-flex align-items-center user-profile">
									<img src="/assets/img/users/user-06.jpg" className="rounded-circle" width="42" height="42" alt="" />
									<div className="ms-2">
										<h6 className="mb-1">Jafna Cremson</h6>
										<span className="d-block">Administrator</span>
									</div>
								</div>

								
								<a href="#" className="dropdown-item d-inline-flex align-items-center">
									<i className="material-icons-outlined me-2">person_outline</i>Profile Settings
								</a>

								
								<Link to="/notifications" className="dropdown-item d-inline-flex align-items-center">
									<i className="material-icons-outlined me-2">notifications_none</i>Notifications
								</Link>
								
								
								<a href="#" className="dropdown-item d-inline-flex align-items-center">
									<i className="material-icons-outlined me-2">help_outline</i>Help & Support
								</a>
								
								
								<a href="#" className="dropdown-item d-inline-flex align-items-center">
									<i className="material-icons-outlined me-2">settings</i>Settings
								</a>

								<hr className="dropdown-divider" />
								
								<Link to="/login" className="dropdown-item d-inline-flex align-items-center link-danger">
									<i className="material-icons-outlined me-2">logout</i>Sign Out
								</Link>
							</div>
						</div>

					</div>
				</nav>

            </div>
		</header>
		


		
		<div className="page-wrapper">

            
            <div className="breadcrumb-bar">
                <img src="/assets/img/bg/breadcrumb-bg-01.png" alt="" className="breadcrumb-bg-01 d-none d-lg-block" />
                <img src="/assets/img/bg/breadcrumb-bg-02.png" alt="" className="breadcrumb-bg-02 d-none d-lg-block" />
                <img src="/assets/img/bg/breadcrumb-bg-03.png" alt="" className="breadcrumb-bg-03" />
                <div className="row align-items-center text-center position-relative z-1">
                    <div className="col-md-12 col-12 breadcrumb-arrow">
                        <h1 className="breadcrumb-title">Testimonials</h1>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><span><i className="material-icons-outlined me-1">home</i></span>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                            </ol>
                        </nav>							
                    </div>
                </div>
            </div>
            

			
            <div className="content">

                <div className="container">

                    
                    <div className="row row-gap-4">
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>We ended up with our dream home in less than two months! I canÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢t recommend them enough</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-18.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Robert King</a>
											<p className="mb-0">Harlingen</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œThey explained every step clearly and found me the perfect home within my budget.ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-17.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Erin Hawkins</a>
											<p className="mb-0">Penns Neck.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œSelling our family home was an emotional journey, but Ethel Laughlin made it was easier!ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-02.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Margaret Buchanan</a>
											<p className="mb-0">Wausau.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œHighly recommend for anyone selling a home.Their market expertise helped us price the home rightÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-04.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">George William</a>
											<p className="mb-0">Memphis.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œIÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve worked with [Agent/Company Name] on three investment properties, and every timeÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-06.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Kent Lintz</a>
											<p className="mb-0">San Jose.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œTheyÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve brought solid opportunities and helped me maximize returns. Their property managementÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-03.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Margaret Lee</a>
											<p className="mb-0">Montgomery.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œManaging tenants used to be stressful until I hired Anne Smith.ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-13.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Amanda Krahn</a>
											<p className="mb-0">Dallas.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œThey handle everything ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â screening, rent collection, and maintenance.ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-16.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">David Marx</a>
											<p className="mb-0">Aberdeen.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œThe application process was quick, and theyÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve been responsive with any issues since I moved in.ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-12.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Billy Davis</a>
											<p className="mb-0">Allen.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>We ended up with our dream home in less than two months! I canÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢t recommend them enough</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-09.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Robert King</a>
											<p className="mb-0">Harlingen</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ I was nervous and totally overwhelmed. But our agent walked us through every step.ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-11.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Martina Smith</a>
											<p className="mb-0">Glendale.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="card mb-0">
								<div className="card-body">
									<div className="d-flex align-items-center mb-2">
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star</i></span>
										<span className="text-warning"><i className="material-icons-outlined">star_half</i></span>
									</div>
									<p>ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œThe marketing strategy was spot-on, and they handled everything from staging to closingÃƒÂ¢Ã¢â€šÂ¬Ã‚Â</p>
									<div className="d-flex align-items-center">
										<a href="#"><img src="/assets/img/users/user-10.jpg" alt="img" className="avatar avatar-lg rounded-circle me-2" /></a>
										<div>
											<a href="#" className="fw-semibold mb-1">Roy Pasco</a>
											<p className="mb-0">Lompoc, London.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    

                </div>

			</div>
            

		</div>

		

		
		<footer className="footer-three footer-dark">
			<div className="footer-bg">
				<img src="/assets/img/bg/footer-bg-01.png" className="bg-1" alt="" />
				<img src="/assets/img/bg/footer-bg-02.png" className="bg-2" alt="" />
				<img src="/assets/img/bg/footer-bg-03.png" className="bg-3" alt="" />
			</div>
			<div className="container">

				
				<div className="footer-top">
					<div className="row gy-4">
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget">
								<h5 className="footer-title">Pages</h5>
								<ul className="footer-menu">
									<li><Link to="/our-team">Our Team</Link></li>
									<li><Link to="/pricing">Pricing Plans</Link></li>
									<li><Link to="/gallery">Gallery</Link></li>
									<li><a href="#">Settings</a></li>
									<li><a href="#">Profile</a></li>
									<li><Link to="/buy-property-list">Listings</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget">
								<h5 className="footer-title">Company</h5>
								<ul className="footer-menu">
									<li><Link to="/about-us">About Us</Link></li>
									<li><a href="#">Careers</a></li>
									<li><Link to="/blog-grid">Blog</Link></li>
									<li><a href="#">Affiliate Program</a></li>
									<li><Link to="/add-property-buy">Add Your Listing</Link></li>
									<li><a href="#">Our Partners</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget">
								<h5 className="footer-title">Destinations</h5>
								<ul className="footer-menu">
									<li><a href="#">Hawai</a></li>
									<li><a href="#">Istanbul</a></li>
									<li><a href="#">San Diego</a></li>
									<li><a href="#">Belgium</a></li>
									<li><a href="#">Newyork</a></li>
									<li><a href="#">Los Angeles</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget">
								<h5 className="footer-title">Useful Links</h5>
								<ul className="footer-menu">
									<li><a href="#">Legal Notice</a></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
									<li><Link to="/terms-condition">Terms & Conditions</Link></li>
									<li><a href="#">Support</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				

				<div className="footer-middle">
					<div className="row justify-content-xl-between align-items-center gy-4">
						<div className="col-xl-4">
							<div className="social-icon">
								<a href="#"><i className="fa-brands fa-facebook"></i></a>
								<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
								<a href="#"><i className="fa-brands fa-instagram"></i></a>
								<a href="#"><i className="fa-brands fa-linkedin"></i></a>
								<a href="#"><i className="fa-brands fa-pinterest"></i></a>
							</div>
						</div>
						<div className="col-xl-7">
							<div className="row justify-content-center gy-4">
								<div className="col-md-4 col-sm-6">
									<div className="contact-info">
										<span className="bg-primary"><i className="material-icons-outlined">headphones</i></span>
										<div>
											<p>Customer Support</p>
											<h6>+1 56589 54598</h6>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="contact-info">
										<span className="bg-secondary"><i className="material-icons-outlined">message</i></span>
										<div>
											<p>Drop Us an Email</p>
											<h6></h6>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="contact-info">
										<span className="bg-danger"><i className="material-icons-outlined">phone</i></span>
										<div>
											<p>Customer Support</p>
											<h6>1800 5656 5458</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div className="footer-bottom">
				<div className="text-center">
					<p className="copy-right">Copyright &copy; . All Rights Reserved, Dreams Estate</p>
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

export default Testimonial;



