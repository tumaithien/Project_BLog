import './header.css'
import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'


function Header() {
    return (
            <header id="header">
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

export default Header