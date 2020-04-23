/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import appStore from "../../img/Download_on_the_App_Store_Badge.svg";
import googleStore from "../../img/google-play-badge.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <!-- footer list --> */}
          <div className="col-12 col-md-3">
            <h6 className="footer__title">Download Our App</h6>
            <ul className="footer__app">
              <li>
                <a href="#">
                  <img src={appStore} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={googleStore} alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- end footer list --> */}

          {/* <!-- footer list --> */}
          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Resources</h6>
            <ul className="footer__list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Pricing Plan</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          {/* <!-- end footer list --> */}

          {/* <!-- footer list --> */}
          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Legal</h6>
            <ul className="footer__list">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
          {/* <!-- end footer list --> */}

          {/* <!-- footer list --> */}
          <div className="col-12 col-sm-4 col-md-3">
            <h6 className="footer__title">Contact</h6>
            <ul className="footer__list">
              <li>
                <a href="tel:+18002345678">+1 (800) 234-5678</a>
              </li>
              <li>
                <a href="mailto:support@moviego.com">support@flixgo.com</a>
              </li>
            </ul>
            <ul className="footer__social">
              <li className="facebook">
                <a href="#">
                  <i className="icon ion-logo-facebook"></i>
                </a>
              </li>
              <li className="instagram">
                <a href="#">
                  <i className="icon ion-logo-instagram"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <i className="icon ion-logo-twitter"></i>
                </a>
              </li>
              <li className="vk">
                <a href="#">
                  <i className="icon ion-logo-vk"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- end footer list --> */}

          {/* <!-- footer copyright -->
          <div className="col-12">
            <div className="footer__copyright">
              <small>
                <a target="_blank" href="https://www.templateshub.net">
                  Templates Hub
                </a>
              </small>

              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- end footer copyright --> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
