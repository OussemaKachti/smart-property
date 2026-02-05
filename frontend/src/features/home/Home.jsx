import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="main-header-two">
        {/* Header Start */}
        <header className="header header-three">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand logo">
                  <img src="/assets/img/logo-white.svg" className="img-fluid" alt="Logo" />
                </Link>
                <Link to="/" className="navbar-brand logo-dark">
                  <img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </Link>
                <a id="mobile_btn" href="javascript:void(0);">
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
                  <a id="menu_close" className="menu-close" href="javascript:void(0);">
                    <i className="material-icons-outlined">close</i>
                  </a>
                </div>
                <div className="mobile-search">
                  <input type="text" className="form-control form-control-lg" placeholder="Search" />
                </div>

                <ul className="main-nav">
                  <li className="has-submenu megamenu active">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Listing <i className="material-icons-outlined">expand_more</i></a>
                    <ul className="submenu">
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Buy Property</a>
                        <ul className="submenu">
                          <li><a href="/buy-property-grid.html">Buy Grid</a></li>
                          <li><a href="/buy-property-list.html">Buy List</a></li>
                          <li><a href="/buy-property-grid-sidebar.html">Buy Grid with Sidebar</a></li>
                          <li><a href="/buy-property-list-sidebar.html">Buy List with Sidebar</a></li>
                          <li><a href="/buy-grid-map.html">Buy Grid with map</a></li>
                          <li><a href="/buy-list-map.html">Buy List with map</a></li>
                          <li><a href="/buy-details.html">Buy Details</a></li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Rent Property</a>
                        <ul className="submenu">
                          <li><a href="/rent-property-grid.html">Rent Grid</a></li>
                          <li><a href="/rent-property-list.html">Rent List</a></li>
                          <li><a href="/rent-property-grid-sidebar.html">Rent Grid with Sidebar</a></li>
                          <li><a href="/rent-property-list-sidebar.html">Rent List with Sidebar</a></li>
                          <li><a href="/rent-grid-map.html">Rent Grid with map</a></li>
                          <li><a href="/rent-list-map.html">Rent List with map</a></li>
                          <li><a href="/rent-details.html">Rent Details</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Agent <i className="material-icons-outlined">expand_more</i></a>
                    <ul className="submenu">
                      <li><a href="/agent-grid.html">Agent Grid</a></li>
                      <li><a href="/agent-list.html">Agent List</a></li>
                      <li><a href="/agent-grid-sidebar.html">Agent Grid with Sidebar</a></li>
                      <li><a href="/agent-list-sidebar.html">Agent List with Sidebar</a></li>
                      <li><a href="/agent-details.html">Agent Details</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Agency <i className="material-icons-outlined">expand_more</i></a>
                    <ul className="submenu">
                      <li><a href="/agency-grid.html">Agency Grid</a></li>
                      <li><a href="/agency-list.html">Agency List</a></li>
                      <li><a href="/agency-grid-sidebar.html">Agency Grid with Sidebar</a></li>
                      <li><a href="/agency-list-sidebar.html">Agency List with Sidebar</a></li>
                      <li><a href="/agency-details.html">Agency Details</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Pages <i className="material-icons-outlined">expand_more</i></a>
                    <ul className="submenu">
                      <li><a href="/about-us.html">About Us</a></li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Authentication</a>
                        <ul className="submenu">
                          <li><Link to="/signup">Sign Up</Link></li>
                          <li><Link to="/login">Sign In</Link></li>
                          <li><a href="/forgot-password.html">Forgot Password</a></li>
                          <li><a href="/reset-password.html">Reset Password</a></li>
                        </ul>
                      </li>
                      <li><a href="/invoice-details.html">Invoice Details</a></li>
                      <li><a href="/contact-us.html">Contact Us</a></li>
                      <li><a href="/wishlist.html">Wishlist</a></li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Error Page</a>
                        <ul className="submenu">
                          <li><a href="/error-404.html">Error 404</a></li>
                          <li><a href="/error-500.html">Error 500</a></li>
                        </ul>
                      </li>
                      <li><a href="/pricing.html">Pricing</a></li>
                      <li><a href="/faq.html">FAQ</a></li>
                      <li><a href="/gallery.html">Gallery</a></li>
                      <li><a href="/our-team.html">Our Team</a></li>
                      <li><a href="/testimonial.html">Testimonials</a></li>
                      <li><a href="/terms-condition.html">Terms & Conditions</a></li>
                      <li><a href="/privacy-policy.html">Privacy Policy</a></li>									
                      <li><a href="/maintenance.html">Maintenance</a></li>
                      <li><a href="/coming-soon.html">Coming Soon</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Blog <i className="material-icons-outlined">expand_more</i></a>
                    <ul className="submenu">
                      <li><a href="/blog-list.html">Blog List</a></li>
                      <li><a href="/blog-grid.html">Blog Grid</a></li>
                      <li><a href="/blog-details.html">Blog Details</a></li>	
                    </ul>
                  </li>
                </ul>

                <div className="menu-dropdown">
                  <div className="dropdown mb-2">
                    <a href="#" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                      <img src="/assets/img/flags/us.svg" alt="Language" className="me-1" height="16" />English
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                        <img src="/assets/img/flags/us.svg" alt="" className="me-2" height="16" /> <span className="align-middle">English</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                        <img src="/assets/img/flags/de.svg" alt="" className="me-2" height="16" /> <span className="align-middle">German</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                        <img src="/assets/img/flags/fr.svg" alt="" className="me-2" height="16" /> <span className="align-middle">French</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                        <img src="/assets/img/flags/ae.svg" alt="" className="me-2" height="16" /> <span className="align-middle">Arabic</span>
                      </a>								
                    </div>		
                  </div>
                  <div className="dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Light
                    </a>
                    <ul className="dropdown-menu mt-2">
                      <li><a className="dropdown-item light-mode" href="javascript:void(0);">Light</a></li>
                      <li><a className="dropdown-item dark-mode" href="javascript:void(0);">Dark</a></li>
                    </ul>
                  </div>
                </div>

                <div className="menu-login">
                  <Link to="/login" className="btn btn-primary w-100 mb-2">Sign In</Link>
                  <Link to="/signup" className="btn btn-secondary w-100">Register</Link>
                </div>
              </div>

              <div className="nav header-items">
                <a href="#" className="topbar-link btn btn-light topbar-search" data-bs-toggle="modal" data-bs-target="#search-modal">
                  <i className="material-icons-outlined">search</i>
                </a>

                <div className="dropdown topbar-lang">
                  <a href="#" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
                    <img src="/assets/img/flags/us.svg" alt="Language" height="16" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                      <img src="/assets/img/flags/us.svg" alt="" className="me-2" height="16" /> <span className="align-middle">English</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                      <img src="/assets/img/flags/de.svg" alt="" className="me-2" height="16" /> <span className="align-middle">German</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                      <img src="/assets/img/flags/fr.svg" alt="" className="me-2" height="16" /> <span className="align-middle">French</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">
                      <img src="/assets/img/flags/ae.svg" alt="" className="me-2" height="16" /> <span className="align-middle">Arabic</span>
                    </a>								
                  </div>		
                </div>

                <div className="dropdown">
                  <a href="javascript:void(0);" className="topbar-link btn btn-light" data-bs-toggle="dropdown">
                    <i className="material-icons-outlined">wb_sunny</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center" id="light-mode-toggle">
                      <i className="material-icons-outlined me-2">wb_sunny</i> <span className="align-middle">Light Mode</span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center" id="dark-mode-toggle">
                      <i className="material-icons-outlined me-2">dark_mode</i> <span className="align-middle">Dark Mode</span>
                    </a>
                  </div>
                </div>

                <Link to="/login" className="btn btn-lg btn-primary d-inline-flex align-items-center">
                  <i className="material-icons-outlined me-1">lock</i>Sign In
                </Link>

                <Link to="/signup" className="btn btn-lg btn-dark d-inline-flex align-items-center">
                  <i className="material-icons-outlined me-1">perm_identity</i>Register
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {/* Header End */}
      </div>

      {/* Banner Section Start */}
      <section className="banner-section-three aos">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <div className="banner-content" data-aos="fade-up">
                <div className="banner-badge d-inline-flex align-items-center">
                  <span className="badge bg-warning me-2">New</span>
                  <p className="mb-0">No 1 Best Selling Realestate Website</p>
                </div>
                <h1>World's Largest Property Listing site for <span>Rental, Buy & Sell...</span></h1>
                <p>Properties for buy / rent in in your location. We have more than 3000+ listings </p>
                <a href="/buy-property-grid.html" className="btn btn-primary">
                  <i className="material-icons-outlined me-2">lock</i>List Your Property
                </a>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5">
              <div className="banner-right-content">
                <div className="banner-card">
                  <div className="me-3 card-img">
                    <a href="/buy-details.html">
                      <img src="/assets/img/home-3/banner-01.png" className="rounded" alt="" />
                    </a>
                  </div>
                  <div>
                    <h6 className="text-white">
                      <a href="/buy-details.html" className="text-white">Beautiful Condo Room</a>
                    </h6>
                    <span className="text-white mb-1 d-block">Willow Crest Apartment</span>
                    <p className="rate-info mb-3"><span>$400 </span> / Month</p>
                    <div className="d-flex align-items-center card-info">
                      <p className="me-3">
                        <span className="me-2"><i className="material-icons-outlined">bed</i></span>2 Bedroom
                      </p>
                      <p>
                        <span className="me-2"><i className="material-icons-outlined">bathtub</i></span>2 Bath
                      </p>
                    </div>
                  </div>
                </div>
                <div className="banner-users d-flex align-items-center flex-wrap gap-2 mb-3">
                  <div className="avatar-list-stacked"> 
                    <span className="avatar avatar-md rounded-circle border-0">
                      <img src="/assets/img/users/user-01.jpg" className="img-fluid rounded-circle" alt="Img" />
                    </span>
                    <span className="avatar avatar-md rounded-circle border-0">
                      <img src="/assets/img/users/user-02.jpg" className="img-fluid rounded-circle" alt="Img" />
                    </span>
                    <span className="avatar avatar-md rounded-circle border-0">
                      <img src="/assets/img/users/user-03.jpg" className="img-fluid rounded-circle" alt="Img" />
                    </span>
                    <span className="avatar avatar-md rounded-circle border-0">
                      <img src="/assets/img/users/user-04.jpg" className="img-fluid rounded-circle" alt="Img" />
                    </span>
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
          </div>

          {/* Search Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-search banner-search-three" data-aos="fade-down">
                <div className="banner-tab">
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <h5 className="mb-0">Search For your Property</h5>
                      </div>
                    </div>

                    <div className="col-lg-8">
                      <div>
                        <ul className="nav nav-tabs justify-content-lg-end" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a className="nav-link active" data-bs-toggle="tab" href="#buy_property" role="tab" aria-controls="buy_property" aria-selected="true"> 
                              <i className="material-icons-outlined me-2">shopping_basket</i>Buy Property
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="tab" href="#rent_property" role="tab" aria-controls="rent_property" aria-selected="false">
                              <i className="material-icons-outlined me-2">king_bed</i>Rent Property
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="tab" href="#commercial_property" role="tab" aria-controls="commercial_property" aria-selected="false">
                              <i className="material-icons-outlined me-2">home</i>Commercial
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="buy_property" role="tabpanel">
                    <div>
                      <form action="/html/buy-property-grid-sidebar.html">
                        <div className="row g-3">
                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Type of Property</label>
                              <select className="select">
                                <option>Select</option>
                                <option>Buy Property</option>
                                <option>Rent Property</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Location</label>
                              <input type="email" className="form-control" placeholder="Search location" />
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="d-flex align-items-end">
                              <div className="flex-fill me-3">
                                <label className="form-label">Min Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div className="flex-fill me-3">
                                <label className="form-label">Max Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div>
                                <button type="submit" className="btn btn-primary">
                                  <span><i className='material-icons-outlined'>search</i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="rent_property" role="tabpanel">
                    <div>
                      <form action="/html/buy-property-grid-sidebar.html">
                        <div className="row g-3">
                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Type of Property</label>
                              <select className="select">
                                <option>Select</option>
                                <option>Buy Property</option>
                                <option>Rent Property</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Location</label>
                              <input type="email" className="form-control" placeholder="Search location" />
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="d-flex align-items-end">
                              <div className="banner-property-grid flex-fill me-3">
                                <label className="form-label">Min Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div className="flex-fill me-3">
                                <label className="form-label">Max Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div>
                                <button type="submit" className="btn btn-primary">
                                  <span><i className='material-icons-outlined'>search</i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="commercial_property" role="tabpanel">
                    <div>
                      <form action="/html/buy-property-grid-sidebar.html">
                        <div className="row g-3">
                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Type of Property</label>
                              <select className="select">
                                <option>Select</option>
                                <option>Buy Property</option>
                                <option>Rent Property</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div>
                              <label className="form-label">Location</label>
                              <input type="email" className="form-control" placeholder="Search location" />
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="d-flex align-items-end">
                              <div className="banner-property-grid flex-fill me-3">
                                <label className="form-label">Min Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div className="flex-fill me-3">
                                <label className="form-label">Max Price</label>
                                <input type="text" className="form-control" placeholder="$" />
                              </div>
                              <div>
                                <button type="submit" className="btn btn-primary">
                                  <span><i className='material-icons-outlined'>search</i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Work Section Start */}
      <section className="work-section-three">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-xl-3 col-lg-4 col-md-6 d-flex" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
              <div className="work-card bg-soft-warning flex-fill">
                <div className="work-card-icon mb-3">
                  <span className="bg-warning me-2">
                    <img src="/assets/img/icons/work-icon-01.svg" alt="icon" />
                  </span>
                  <h5>Verified Listings</h5>
                </div>
                <p>All properties are thoroughly checked to ensure authenticity and avoid time-wasting.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 d-flex" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
              <div className="work-card bg-soft-secondary flex-fill">
                <div className="work-card-icon mb-3">
                  <span className="bg-secondary me-2">
                    <img src="/assets/img/icons/work-icon-02.svg" alt="icon" />
                  </span>
                  <h5>Wide Reach</h5>
                </div>
                <p>Access thousands of listings across top cities, towns, and emerging locations.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 d-flex" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
              <div className="work-card bg-soft-pink flex-fill">
                <div className="work-card-icon mb-3">
                  <span className="bg-pink me-2">
                    <img src="/assets/img/icons/work-icon-03.svg" alt="icon" />
                  </span>
                  <h5>Direct Communication</h5>
                </div>
                <p>Connect instantly with sellers, agents, or property managers—no middlemen.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 d-flex" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="400">
              <div className="work-card bg-soft-teal flex-fill">
                <div className="work-card-icon mb-3">
                  <span className="bg-teal me-2">
                    <img src="/assets/img/icons/work-icon-04.svg" alt="icon" />
                  </span>
                  <h5>Time-Saving </h5>
                </div>
                <p>No need to hop between sites—everything you need to discover and decide is right here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Section End */}

      {/* Property Section Start */}
      <section className="property-section">
        <div className="container">
          <div className="section-heading-three">
            <div className="sec-line-three">
              <span className="sec-line1"></span>
              <span className="sec-line2"></span>
            </div>
            <h2>Recommended Properties</h2>
            <p>Discover our top service areas, where quality meets convenience.</p>
          </div>

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="location-item">
                <div className="location-img">
                  <a href="#"><img src="/assets/img/home-3/location/location-01.jpg" alt="" /></a>
                  <div className="bottom-text">
                    <div className="location-name">
                      <h5>Ukraine</h5>
                      <p>300 Properties</p>
                    </div>
                    <div className="arrow-overlay">
                      <a href="javascript:void(0);"><i className="material-icons-outlined">north_east</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="location-item">
                <div className="location-img">
                  <a href="#"><img src="/assets/img/home-3/location/location-02.jpg" alt="" /></a>
                  <div className="bottom-text">
                    <div className="location-name">
                      <h5>Russia</h5>
                      <p>458 Properties</p>
                    </div>
                    <div className="arrow-overlay">
                      <a href="javascript:void(0);"><i className="material-icons-outlined">north_east</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="location-item">
                <div className="location-img">
                  <a href="#"><img src="/assets/img/home-3/location/location-03.jpg" alt="" /></a>
                  <div className="bottom-text">
                    <div className="location-name">
                      <h5>Thailand</h5>
                      <p>175 Properties</p>
                    </div>
                    <div className="arrow-overlay">
                      <a href="javascript:void(0);"><i className="material-icons-outlined">north_east</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="location-item">
                <div className="location-img">
                  <a href="#"><img src="/assets/img/home-3/location/location-04.jpg" alt="" /></a>
                  <div className="bottom-text">
                    <div className="location-name">
                      <h5>Azerbaijan</h5>
                      <p>155 Properties</p>
                    </div>
                    <div className="arrow-overlay">
                      <a href="javascript:void(0);"><i className="material-icons-outlined">north_east</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <div className="location-item">
                <div className="location-img">
                  <a href="#"><img src="/assets/img/home-3/location/location-05.jpg" alt="" /></a>
                  <div className="bottom-text">
                    <div className="location-name">
                      <h5>Germany</h5>
                      <p>265 Properties</p>
                    </div>
                    <div className="arrow-overlay">
                      <a href="javascript:void(0);"><i className="material-icons-outlined">north_east</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-3">
            <a href="javascript:void(0);" className="btn btn-dark btn-lg d-inline-flex align-items-center">
              View More Locations<i className="material-icons-outlined ms-1">north_east</i>
            </a>
          </div>
        </div>
      </section>
      {/* Property Section End */}

      {/* Footer */}
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
                    <li><a href="/our-team.html">Our Team</a></li>
                    <li><a href="/pricing.html">Pricing Plans</a></li>
                    <li><a href="/gallery.html">Gallery</a></li>
                    <li><a href="javascript:void(0);">Settings</a></li>
                    <li><a href="javascript:void(0);">Profile</a></li>
                    <li><a href="/buy-property-list.html">Listings</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h5 className="footer-title">Company</h5>
                  <ul className="footer-menu">
                    <li><a href="/about-us.html">About Us</a></li>
                    <li><a href="javascript:void(0);">Careers</a></li>
                    <li><a href="/blog-grid.html">Blog</a></li>
                    <li><a href="javascript:void(0);">Affiliate Program</a></li>
                    <li><a href="/add-property-buy.html">Add Your Listing</a></li>
                    <li><a href="javascript:void(0);">Our Partners</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h5 className="footer-title">Destinations</h5>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0);">Hawai</a></li>
                    <li><a href="javascript:void(0);">Istanbul</a></li>
                    <li><a href="javascript:void(0);">San Diego</a></li>
                    <li><a href="javascript:void(0);">Belgium</a></li>
                    <li><a href="javascript:void(0);">Newyork</a></li>
                    <li><a href="javascript:void(0);">Los Angeles</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h5 className="footer-title">Useful Links</h5>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0);">Legal Notice</a></li>
                    <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="/terms-condition.html">Terms & Conditions</a></li>
                    <li><a href="javascript:void(0);">Support</a></li>
                    <li><a href="javascript:void(0);">Refund Policy</a></li>
                    <li><a href="/contact-us.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="text-center">
              <p className="copy-right">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved, Dreams Estate</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


