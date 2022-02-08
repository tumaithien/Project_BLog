import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import useModal from '../../hook/useModal';

import { actLogOut } from '../../store/auth/actions';
import { actClearPostDetails } from '../../store/post/actions';
import Modal from '../shared/Modal';

import HeaderMainMenu from './HeaderMainMenu';

function HeaderMenu() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [modal, Toggle] = useModal()
    const currentUser = useSelector(state => state.Authen.currentUser)

    function handleLogout(evt) {
        dispatch(actClearPostDetails())
        dispatch(actLogOut())
        evt.preventDefault()
        history.push('/')
        Toggle()
    }

    return (
        <>
            <div className="tcl-col-6">
                <div className="header-nav">
                    <HeaderMainMenu />
                    <ul className="header-nav__lists">
                        {
                            currentUser ?
                                (<li className="user">
                                    <Link to="/info-user"><i className="icons ion-person" />
                                        {currentUser.name}
                                    </Link>
                                    <ul>
                                        <li><a href='#!' onClick={handleLogout}>Logout</a></li>
                                        <li><Link to="/change-pass">Change Password</Link></li>
                                    </ul>
                                </li>) : (<li className="user">
                                    <a href='/login'><i className="icons ion-person" />
                                        Login
                                    </a>
                                </li>)
                        }

                    </ul>
                </div>
            </div>
            <Modal show={modal} title="Đăng xuất" close={Toggle} onLogout={handleLogout}>Bạn có muốn đăng xuất tài khoản</Modal>
        </>
        
    );
}

export default HeaderMenu