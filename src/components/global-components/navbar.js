import React, { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import { useTranslation } from "react-i18next";
import * as actions from "../../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const dir = useSelector((state) => state.dir);
  let publicUrl = process.env.PUBLIC_URL + "/";

  const { t, i18n } = useTranslation();
  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
    if (lang === "ar") {
      dispatch(actions.Direction("rtl"));
    } else {
      dispatch(actions.Direction("ltr"));
    }
  }
  const [lang, setLang] = useState("");
  return (
    <div>
      <header
        className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---"
        dir={dir}
        lang={lang}
      >
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" /> info@w808080.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" /> 15/A, Nest Tower, NYC
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <Social />
                      </li>
                      <li>
                        {/* header-top-btn */}
                        <div className="header-top-btn">
                          <Link to="/add-listing">
                            {t(`Navbar.addlisting`)}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                    </Link>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <ul>
                        <li>
                          <Link to="/">{t(`Navbar.home`)}</Link>
                        </li>
                        <li>
                          <Link to="/about">{t(`Navbar.about`)}</Link>
                        </li>
                        <li>
                          <Link to="/blog-grid">{t(`Navbar.blogs`)}</Link>
                        </li>
                        <li>
                          <Link to="/shop-right-sidebar">{t(`Navbar.shope`)}</Link>
                          </li>
                        <li>
                          <Link to="/contact">{t(`Navbar.contact`)}</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* header-search-1 */}
                <div className="header-search-wrap">
                  <div className="header-search-1">
                    <div className="search-icon">
                      <i className="icon-search for-search-show" />
                      <i className="icon-cancel  for-search-close" />
                    </div>
                  </div>
                  <div className="header-search-1-form">
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        defaultValue
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>

                {/* user-menu */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-user" />
                      </Link>
                      <ul className="go-top">
                        <li>
                          <Link to="/login">Sign in</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/my-account">My Account</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* mini-cart */}

                {/* ltn__language-menu */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-globe" />
                      </Link>
                    <ul className="go-top">
                        <li>
                          <button className="lanchange" onClick={() => handleLanguage("en")}>
                            English
                          </button>
                        </li>
                        <li>
                          <button className="lanchange" onClick={() => handleLanguage("ar")}>
                            عربي
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* mini-cart */}
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile NavBM */}
      <div>
        <nav className="mobile-nav">
          <div className="container">
            <div className="mobile-group">
              <Link to="/" className="mobile-widget">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to="/my-account" class="mobile-widget">
                <i className="icon-user"></i>
                <span>My Account</span>
              </Link>
              <Link to="/add-listing" class="mobile-widget plus-btn">
                <i className="fas fa-plus"></i>
                <span>Add Listing</span>
              </Link>
              <a href="notification.html" class="mobile-widget">
                <i className="fas fa-bell"></i>
                <span>notify</span>
                <sup>0</sup>
              </a>
              <a href="message.html" class="mobile-widget">
                <i className="fas fa-envelope"></i>
                <span>message</span>
                <sup>0</sup>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile NavBM */}

      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div
          className="ltn__utilize-menu-inner ltn__scrollbar"
          dir={dir}
          lang={lang}
        >
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
          <ul>
                        <li>
                          <Link to="/">{t(`Navbar.home`)}</Link>
                        </li>
                        <li>
                          <Link to="/about">{t(`Navbar.about`)}</Link>
                        </li>
                        <li>
                          <Link to="/blog-grid">{t(`Navbar.blogs`)}</Link>
                        </li>
                        <li>
                          <Link to="/shop-right-sidebar">{t(`Navbar.shope`)}</Link>
                          </li>
                        <li>
                          <Link to="/contact">{t(`Navbar.contact`)}</Link>
                        </li>
                      </ul>
          </div>
          
          
        </div>
      </div>

      {/* Utilize Cart Menu Start */}
      
      {/* Utilize Cart Menu End */}
    </div>
  );
}

export default Navbar;
