import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { actLogOut } from '../../store/auth/actions';
import { actClearPostDetails } from '../../store/post/actions';

import HeaderMainMenu from './HeaderMainMenu';

function HeaderMenu() {

    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state => state.Authen.currentUser)

    function handleLogout(evt) {
        dispatch(actClearPostDetails())
        evt.preventDefault()
        dispatch(actLogOut())
        history.push('/')
    }

    return (
        <div className="tcl-col-6">
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
                                    <li><Link to="/change-pass">Change Password</Link></li>
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