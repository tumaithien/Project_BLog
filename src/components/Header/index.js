import "./header.css";
import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";

function Header({ type }) {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
