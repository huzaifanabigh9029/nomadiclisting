import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Footer_v1() {
  const { t, i18n } = useTranslation();
  const dir = useSelector((state) => state.dir);
  const $ = window.$;
  let publicUrl = process.env.PUBLIC_URL + "/";
  useEffect(() => {
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });
  }, []);

  $(document).on("click", ".theme-btn-1 ", function () {
    $("div").removeClass("modal-backdrop");
    $("div").removeClass("show");
    $("div").removeClass("fade");
    $("body").attr("style", "");
  });

  return (
    <footer className="ltn__footer-area" dir={dir}>
      <div className="footer-top-area  section-bg-2 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo">
                    <img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" />
                  </div>
                </div>
                <p>Nomadic Listig </p>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-placeholder" />
                      </div>
                      <div className="footer-address-info">
                        <p>Brooklyn, New York, United States</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="tel:+0123-456789">+0123-456789</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-mail" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="mailto:example@example.com">
                            example@example.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ltn__social-media mt-20">
                  <Social />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">{t(`Footer.Company.1`)}</h4>
                <div className="footer-menu go-top">
                  <ul>
                    <li>
                      <Link to="/about">{t(`Footer.Company.2`)}</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">{t(`Footer.Company.3`)}</Link>
                    </li>
                    <li>
                      <Link to="/shop">{t(`Footer.Company.4`)}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t(`Footer.Company.5`)}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t(`Footer.Company.7`)}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">{t(`Footer.Services.1`)}</h4>
                <div className="footer-menu go-top">
                  <ul>
                    <li>
                      <Link to="/cart">{t(`Footer.Services.2`)}</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">{t(`Footer.Services.3`)}</Link>
                    </li>
                    <li>
                      <Link to="/login">{t(`Footer.Services.4`)}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t(`Footer.Services.6`)}</Link>
                    </li>
                    <li>
                      <Link to="/shop">{t(`Footer.Services.7`)}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">{t(`Footer.Customer Care.1`)}</h4>
                <div className="footer-menu go-top">
                  <ul>
                    <li>
                      <Link to="/login">{t(`Footer.Customer Care.2`)}</Link>
                    </li>
                    <li>
                      <Link to="/my-account">
                        {t(`Footer.Customer Care.3`)}
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">{t(`Footer.Customer Care.4`)}</Link>
                    </li>
                    <li>
                      <Link to="/add-listing">
                        {t(`Footer.Customer Care.5`)}
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">{t(`Footer.Customer Care.6`)}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t(`Footer.Customer Care.7`)}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
              <div className="footer-widget footer-newsletter-widget">
                <h4 className="footer-title">{t(`Footer.Newsletter.1`)}</h4>
                <p>{t(`Footer.Newsletter.2`)}</p>
                <div className="footer-newsletter">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder={t(`Footer.email`)}
                    />
                    <div className="btn-wrapper">
                      <button className="theme-btn-1 btn" type="submit">
                        {" "}
                        <i className="fas fa-location-arrow" />
                      </button>
                    </div>
                  </form>
                </div>
                <h5 className="mt-30">{t(`Footer.Newsletter.3`)}</h5>
                <img
                  src={publicUrl + "assets/img/icons/payment-4.png"}
                  alt="Payment Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer_v1;
