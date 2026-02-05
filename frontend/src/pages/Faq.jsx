import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
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
								<Link to="/faq">Home <i  className="material-icons-outlined">expand_more</i></Link>
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
									<li className="active"><Link to="/faq">FAQ</Link></li>
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
								<Link to="/faq" className="avatar avatar-sm">
									<img src="/assets/img/users/user-06.jpg" alt="img" className="img-fluid rounded-circle" />
								</Link>
							</div>
						</div>

						<div className="menu-dropdown">
                            <div className="dropdown mb-2">
								<Link to="/faq" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
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

						<Link to="/faq" className="topbar-link btn btn-light topbar-search" data-bs-toggle="modal" data-bs-target="#search-modal">
							<i className="material-icons-outlined">search</i>
						</Link>

						<div className="dropdown topbar-lang">
							<Link to="/faq" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
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
												<Link to="/faq" className="text-body" data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
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
							<Link to="/faq" className="avatar" data-bs-toggle="dropdown">
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
                        <h1 className="breadcrumb-title">FAQ</h1>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><span><i className="material-icons-outlined me-1">home</i></span>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            

			
            <div className="content">

                <div className="container">

                    
                    <div className="row" id="cart-wrap">
                        <div className="col-lg-12 mx-auto">

                            <div className="cart-item-wrap">
                                
                                <div className="row row-gap-3">
									<div className="col-lg-3">
										<div className="card faq-sidebar mb-lg-0">
											<div className="card-body">
												<h5 className="mb-3">Table of Contents</h5>
												<ul className="faq-sidebar">
													<li><Link to="/faq" className="nav-link">General</Link></li>
													<li><Link to="/faq" className="nav-link">Buying</Link></li>
													<li><Link to="/faq" className="nav-link">Sellings</Link></li>
													<li><Link to="/faq" className="nav-link">Renting</Link></li>
													<li><Link to="/faq" className="nav-link">Legal</Link></li>
													<li><Link to="/faq" className="nav-link">Financial</Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-lg-9">
										<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0">
											<div className="mb-4" id="general">
												<h4 className="mb-3">General</h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading1">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse1" aria-expanded="true" aria-controls="CustomIconcollapse1">
																What is real estate?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse1" className="accordion-collapse collapse show" aria-labelledby="CustomIconheading1" data-bs-parent="#CustomIconaccordionExample">
															<div className="accordion-body">Real estate refers to land and any permanent structures on it, such as homes or buildings.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample2">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading2">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse2" aria-expanded="false" aria-controls="CustomIconcollapse2">
																What types of properties are included in real estate?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse2" className="accordion-collapse collapse" aria-labelledby="CustomIconheading2" data-bs-parent="#CustomIconaccordionExample2">
															<div className="accordion-body">Real estate includes residential, commercial, industrial, land, and special-purpose properties.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample3">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading3">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse3" aria-expanded="false" aria-controls="CustomIconcollapse3">
																What is the role of a real estate agent?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse3" className="accordion-collapse collapse" aria-labelledby="CustomIconheading3" data-bs-parent="#CustomIconaccordionExample3">
															<div className="accordion-body">A real estate agent assists clients in buying, selling, or renting properties by guiding them through the process.</div>
														</div>
													</div>
												</div>
											</div>
											<hr className="my-4" />

											<div className="mb-4" id="buying">
												<h4 className="mb-3">Buying </h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample4">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading4">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse4" aria-expanded="false" aria-controls="CustomIconcollapse4">
																How do I start the home-buying process?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse4" className="accordion-collapse collapse" aria-labelledby="CustomIconheading4" data-bs-parent="#CustomIconaccordionExample4">
															<div className="accordion-body">Start home-buying process by checking your budget, getting pre approved for a mortgage & consulting a real estate agent.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample5">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading5">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse5" aria-expanded="false" aria-controls="CustomIconcollapse5">
																How much down payment do I need?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse5" className="accordion-collapse collapse" aria-labelledby="CustomIconheading5" data-bs-parent="#CustomIconaccordionExample5">
															<div className="accordion-body">The down payment typically ranges from 3% to 20% of the home's price, depending on the loan type and requirements.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample6">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading6">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse6" aria-expanded="false" aria-controls="CustomIconcollapse6">
																What is a home inspection?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse6" className="accordion-collapse collapse" aria-labelledby="CustomIconheading6" data-bs-parent="#CustomIconaccordionExample6">
															<div className="accordion-body">A home inspection is a professional evaluation of a property's condition to identify any issues before finalizing the purchase.</div>
														</div>
													</div>
												</div>
											</div>
											<hr className="my-4" />

											<div className="mb-4" id="selling">
												<h4 className="mb-3">Selling </h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample7">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading7">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse7" aria-expanded="false" aria-controls="CustomIconcollapse7">
																WhatÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s the best time to sell a home?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse7" className="accordion-collapse collapse" aria-labelledby="CustomIconheading7" data-bs-parent="#CustomIconaccordionExample7">
															<div className="accordion-body">The best time to sell a home is usually in spring or early summer when buyer demand is strongest.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample8">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading8">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse8" aria-expanded="false" aria-controls="CustomIconcollapse8">
																Should I renovate before selling?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse8" className="accordion-collapse collapse" aria-labelledby="CustomIconheading8" data-bs-parent="#CustomIconaccordionExample8">
															<div className="accordion-body">Renovating before selling can increase your home's value, but focus on cost-effective updates that appeal to buyers.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample9">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading9">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse9" aria-expanded="false" aria-controls="CustomIconcollapse9">
																How is the listing price determined?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse9" className="accordion-collapse collapse" aria-labelledby="CustomIconheading9" data-bs-parent="#CustomIconaccordionExample9">
															<div className="accordion-body">The listing price is set by comparing the home to similar properties and current market conditions.</div>
														</div>
													</div>
												</div>
											</div>
											<hr className="my-4" />

											<div className="mb-4" id="renting">
												<h4 className="mb-3">Renting </h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample10">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading10">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse10" aria-expanded="false" aria-controls="CustomIconcollapse10">
																What documents do I need to rent a property?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse10" className="accordion-collapse collapse" aria-labelledby="CustomIconheading10" data-bs-parent="#CustomIconaccordionExample10">
															<div className="accordion-body">You typically need identification, proof of income, rental application, and references to rent a property.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample11">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading11">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse11" aria-expanded="false" aria-controls="CustomIconcollapse11">
																WhatÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s included in the rent?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse11" className="accordion-collapse collapse" aria-labelledby="CustomIconheading11" data-bs-parent="#CustomIconaccordionExample11">
															<div className="accordion-body">Rent typically covers the property cost and may include utilities, maintenance, or amenities.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample12">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading12">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse12" aria-expanded="false" aria-controls="CustomIconcollapse12">
																How long is a typical lease agreement?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse12" className="accordion-collapse collapse" aria-labelledby="CustomIconheading12" data-bs-parent="#CustomIconaccordionExample12">
															<div className="accordion-body">A typical lease agreement usually lasts 12 months, but can vary from month-to-month to several years.</div>
														</div>
													</div>
												</div>
											</div>
											<hr className="my-4" />

											<div className="mb-4" id="legal">
												<h4 className="mb-3">Legal </h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample13">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading13">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse13" aria-expanded="false" aria-controls="CustomIconcollapse13">
																What is a title deed?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse13" className="accordion-collapse collapse" aria-labelledby="CustomIconheading13" data-bs-parent="#CustomIconaccordionExample13">
															<div className="accordion-body">A title deed is an official document proving ownership of a property.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample14">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading14">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse14" aria-expanded="false" aria-controls="CustomIconcollapse14">
																What is escrow?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse14" className="accordion-collapse collapse" aria-labelledby="CustomIconheading14" data-bs-parent="#CustomIconaccordionExample14">
															<div className="accordion-body">Escrow is when a third party holds funds or documents until a transaction is complete.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample15">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading15">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse15" aria-expanded="false" aria-controls="CustomIconcollapse15">
																What are property taxes?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse15" className="accordion-collapse collapse" aria-labelledby="CustomIconheading15" data-bs-parent="#CustomIconaccordionExample15">
															<div className="accordion-body">Property taxes are fees paid to local governments based on the value of a property.</div>
														</div>
													</div>
												</div>
											</div>
											<hr className="my-4" />

											<div className="mb-0" id="financial">
												<h4 className="mb-3">Financial </h4>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample16">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading16">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse16" aria-expanded="false" aria-controls="CustomIconcollapse16">
																What is a mortgage?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse16" className="accordion-collapse collapse" aria-labelledby="CustomIconheading16" data-bs-parent="#CustomIconaccordionExample16">
															<div className="accordion-body">A mortgage is a loan used to buy a property, paid back over time with interest.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample17">
													<div className="accordion-item">
														<h6 className="accordion-header" id="CustomIconheading17">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse17" aria-expanded="false" aria-controls="CustomIconcollapse17">
																What are closing costs?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse17" className="accordion-collapse collapse" aria-labelledby="CustomIconheading17" data-bs-parent="#CustomIconaccordionExample17">
															<div className="accordion-body">Closing costs are fees paid at the end of a property purchase for services and taxes.</div>
														</div>
													</div>
												</div>
												<div className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none" id="CustomIconaccordionExample18">
													<div className="accordion-item mb-0">
														<h6 className="accordion-header" id="CustomIconheading18">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomIconcollapse18" aria-expanded="false" aria-controls="CustomIconcollapse18">
																Can I get assistance as a first-time homebuyer?
																<i className="ti ti-plus accordion-icon accordion-icon-on"></i>
																<i className="ti ti-minus accordion-icon accordion-icon-off"></i>
															</button>
														</h6>
														<div id="CustomIconcollapse18" className="accordion-collapse collapse" aria-labelledby="CustomIconheading18" data-bs-parent="#CustomIconaccordionExample18">
															<div className="accordion-body">Yes, many programs offer assistance and benefits specifically for first-time homebuyers.</div>
														</div>
													</div>
												</div>
											</div>

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

export default Faq;



