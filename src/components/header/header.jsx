import React from "react";
// import { Link } from "react-router-dom";
// REACT CONTRY FLAGS
import Flags from "country-flag-icons/react/3x2";
// REACT CURRENCY SYMBOLS
// import currencyToSymbolMap from "currency-symbol-map/map";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// SOLID ICONS
import {
  faUser,
  faShoppingBag,
  faSearch,
  faPhoneAlt,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
// REGULAR ICONS
import { faEnvelope as fasEnvelope } from "@fortawesome/free-regular-svg-icons";
// STYLINGS MODULES
import buttons from "../../styles/buttons.module.scss";
import "../../styles/navs.module.scss";

function Header({ fetchUrl, cartItemsTotal, handleShow }) {
  const ShowCarts = () => (
    <>
      <button
        type="button"
        className={"btn rounded-circle position-relative " + buttons.btn_grey}
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faShoppingBag} />
        <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItemsTotal.total_unique_items
            ? cartItemsTotal.total_unique_items
            : 0}
          <span className="visually-hidden">products</span>
        </span>
      </button>
    </>
  );

  return (
    <>
      {/* TOP HEADER NAV BAR */}
      <div className="bg-primary py-2">
        <div className="container">
          <div className="row justify-content-between">
            {/* STARTS: CONTACT INFO */}
            <ul className="list-inline w-auto mb-0">
              <li className="list-inline-item text-white me-4 small">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                +88012 3456 7894
              </li>
              <li className="list-inline-item text-white small">
                <FontAwesomeIcon icon={fasEnvelope} className="me-2" />
                support@ui-lib.com
              </li>
            </ul>
            {/* ENDS: CONTACT INFO */}
            {/* FAQ and CONTACT SUPPORT*/}
            <ul className="list-inline w-auto mb-0">
              <li className="list-inline-item text-white me-3 small">
                <a href="!#" className="text-decoration-none text-white">
                  FAQ's
                </a>
              </li>
              <li className="list-inline-item text-white me-3 small">
                <a href="!#" className="text-decoration-none text-white">
                  Contact Support
                </a>
              </li>
              {/* LANGAGUE SELECTION */}
              <li className="list-inline-item text-white me-3">
                <div className="dropdown open">
                  <a
                    className="dropdown-toggle small text-decoration-none text-white"
                    type="button"
                    id="language"
                    href="!#"
                    data-bs-toggle="dropdown"
                    // aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Flags.GB title="English" width="25" className="me-1" />
                    EN
                  </a>
                  <div className="dropdown-menu" aria-labelledby="language">
                    <a className="dropdown-item" href="!#">
                      <Flags.GB title="English" width="25" className="me-1" />
                      EN
                    </a>
                    <a className="dropdown-item" href="!#">
                      <Flags.FR title="Francais" width="25" className="me-1" />
                      FR
                    </a>
                    <a className="dropdown-item" href="!#">
                      <Flags.ES title="Spanish" width="25" className="me-1" />
                      FR
                    </a>
                  </div>
                </div>
              </li>
              {/* CURRENCY SELECTION */}
              <li className="list-inline-item text-white">
                <div className="dropdown open">
                  <a
                    className="dropdown-toggle small text-decoration-none text-white"
                    type="button"
                    id="currency"
                    href="!#"
                    data-bs-toggle="dropdown"
                    // aria-haspopup="true"
                    aria-expanded="false"
                  >
                    USD ($)
                  </a>
                  <div className="dropdown-menu" aria-labelledby="currency">
                    <a className="dropdown-item" href="!#">
                      USD ($)
                    </a>
                    <a className="dropdown-item" href="!#">
                      EURO (€)
                    </a>
                    <a className="dropdown-item" href="!#">
                      GBP (£)
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* LOGO WITH SEARCH NAV BAR */}
      <nav className="navbar navbar-expand-md navbar-light bg-white py-3">
        <div className="container">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="collapsibleNavId"
          >
            <a className="navbar-brand" href="/">
              ELECTRONICA
            </a>
            {/* SEARCH CATEGORIES */}
            <form className="d-flex my-2 my-lg-0 w-50">
              <div className="input-group">
                <button
                  className={
                    "btn btn-outline-light border-end-0 " +
                    buttons.btn_rounded_left +
                    " text-black-50"
                  }
                  type="button"
                  id="button-addon1"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <input
                  type="text"
                  className="form-control border-light border-start-0 text-black-50"
                  placeholder="Search and hit enter..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button
                  className={
                    "btn btn-outline-light dropdown-toggle " +
                    buttons.btn_rounded_right +
                    " text-black-50"
                  }
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Cameras, Camcorders & Drones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Cell Phones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Laptops & Computers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Tablets & E-Readers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      TVs & Projectors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Video Games, Consoles & VR
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <div>
              <button
                type="button"
                className={"btn rounded-circle " + buttons.btn_grey + " me-3"}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              <ShowCarts />
            </div>
          </div>
        </div>
      </nav>
      {/* NAVBAR WITH CATEGORIES LIST */}
      <div className="bg-white py-2 shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              {/* DROP DOWN MENU CATEGORIES */}
              <div className="dropdown">
                <div className="d-grid gap-1">
                  <button
                    className={
                      "btn " + buttons.btn_grey + " dropdown-toggle shadow-sm"
                    }
                    type="button"
                    id="categories"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faShapes} className="me-2" />{" "}
                    Categories
                  </button>
                  <div className="dropdown-menu" aria-labelledby="categories">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Cameras, Camcorders & Drones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Cell Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Headphones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Laptops & Computers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Tablets & E-Readers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        TVs & Projectors
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Video Games, Consoles & VR
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              {/* MENU NAVIGATION */}
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    User Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    Vendor Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    Track My Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
