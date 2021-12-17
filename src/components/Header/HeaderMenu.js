
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { actLogOut } from '../../store/auth/actions';
import HeaderMainMenu from './HeaderMainMenu';

function HeaderMenu() {

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.Authen.currentUser)

    function handleLogout(evt) {
        evt.preventDefault()
        dispatch(actLogOut())
    }

    return (
        <div className="tcl-col-6">
            {/* Nav */}
            <div className="header-nav">
                <HeaderMainMenu />
                <ul className="header-nav__lists">
                    {
                        currentUser ?
                            (<li className="user">
                                <Link to="/dashboard"><i className="icons ion-person" />
                                    {currentUser.name}
                                </Link>
                                <ul>
                                    <li><a href='/' onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </li>) : (<li className="user">
                                <Link to="/login"><i className="icons ion-person" />
                                    Login
                                </Link>
                            </li>)
                    }

                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu