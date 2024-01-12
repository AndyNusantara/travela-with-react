import { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const onClickButtonHandler = () => {
    setOpen(!isOpen);
  };

  const changeNavbarBg = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <div className={navbar ? "navbar changebg" : "navbar"}>
      <div>
        <img src="public/travela.png" alt="logo.png" />
      </div>
      <div
        className={isOpen ? "navbar__links open-animation" : "navbar__links"}
      >
        <li>
          <a>
            <img src="/icons/home.svg" alt="Home" />
            Home
          </a>
        </li>
        <li>
          <a>
            <img src="/icons/plane.png" alt="Destinations" />
            Destinations
          </a>
        </li>
        <li>
          <a>
            <img src="/icons/exclamation.png" alt="About" />
            About
          </a>
        </li>
        <li>
          <a>
            <img src="/icons/phone.png" alt="Contact" />
            Contact
          </a>
        </li>
      </div>
      <div className="navbar__mobile-logo">
        <img
          src="/burger-button.svg"
          alt="burger_button"
          onClick={onClickButtonHandler}
        />
      </div>
    </div>
  );
};

export default NavBar;
