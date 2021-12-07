import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Input from '../components/shared/Input'
import MainTitle from '../components/shared/MainTitle'
import './LoginPage/login.css'

function Register() {
    return (
        <div>
            <main className="login">
                <div className="spacing" />
                <div className="tcl-container">
                    <div className="tcl-row">
                        <div className="tcl-col-12 tcl-col-sm-6 block-center">
                            <MainTitle>Đăng Ký</MainTitle>
                            <div className="form-login-register">
                                <form action ="true">
                                    <Input Label="Tên đăng nhập" placeholder="Nhập user name" />
                                    <Input Label="Ngày sinh" placeholder="Nhập ngày sinh" />
                                    <Input type="password" placeholder="Nhập password" Label="Mật khẩu" />
                                    <Input type="password" placeholder="Nhập password" Label="Xác nhận lại mật khẩu" />
                                    <div className="d-flex tcl-jc-between tcl-ais-center">
                                        <Button type="primary" size="large">Đăng ký</Button>
                                        <Link to="/login">Bạn đã có tài khoản?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacing" />
            </main>
        </div>
    )
}

export default Register