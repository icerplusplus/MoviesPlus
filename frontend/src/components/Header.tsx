import { LOGO } from "../utils/constants";
import { HiOutlineMagnifyingGlass, HiOutlineUser } from "react-icons/hi2";


export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="#">
                <img src={LOGO} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <a href="">Homepage</a>
                  </li>
                  <li>
                    <a href="#">
                      Categories
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Categories</a>
                      </li>
                      <li>
                        <a href="#">Anime Details</a>
                      </li>
                      <li>
                        <a href="#">Anime Watching</a>
                      </li>
                      <li>
                        <a href="#">Blog Details</a>
                      </li>
                      <li>
                        <a href="#">Sign Up</a>
                      </li>
                      <li>
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <a href="#" className="search-switch">
                <span><HiOutlineMagnifyingGlass /></span>
              </a>
              <a href="#">
                <span> <HiOutlineUser /></span>
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};
