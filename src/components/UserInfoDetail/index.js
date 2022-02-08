import './info-user.css'
import { useSelector } from "react-redux"
import { DEFAULT_AVATAR } from "../../constants"


function UserInfoDetail() {

    const currentUser = useSelector(state => state.Authen.currentUser)
    const {name, email, avatar} = currentUser

    return(
        <div className="spacing box-info-user">
            <div className="box-info-user__avatar">
                <img src={avatar || DEFAULT_AVATAR} alt={name} />
            </div>
            <div className='box-info-user__content'>
                <p>Tài khoản: {name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}

export default UserInfoDetail