import Button from '../../components/shared/Button'
import Input from '../../components/shared/Input'
import MainTitle from '../../components/shared/MainTitle'
import { Link } from 'react-router-dom'
import './login.css'


function Login() {
    return (
            <div>
                <main className="login">
                    <div className="spacing" />
                    <div className="tcl-container">
                        <div className="tcl-row">
                            <div className="tcl-col-12 tcl-col-sm-6 block-center">
                                <MainTitle>Đăng nhập</MainTitle>
                                <div className="form-login-register">
                                    <form action="true">
                                        <Input Label="Tên đăng nhập" placeholder="Nhập user name" />
                                        <Input type="password" placeholder="Nhập password" Label="Mật khẩu" />
                                        <div className="d-flex tcl-jc-between tcl-ais-center">
                                            <Button type="primary" size="large">Đăng nhập</Button>
                                            <Link to="/register">Đăng ký</Link>
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

export default Login