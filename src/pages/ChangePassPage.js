import Button from '../components/shared/Button'
import Input from '../components/shared/Input'
import MainTitle from '../components/shared/MainTitle'

function ChangePassPage() {

    

    return(
        <>
            <div>
                <main className="login">
                    <div className="spacing" />
                    <div className="tcl-container">
                        <div className="tcl-row">
                            <div className="tcl-col-12 tcl-col-sm-6 block-center">
                                <MainTitle>Thay đổi Mật khẩu</MainTitle>
                                <div className="form-login-register">
                                    {/* { formError && <p className='form-login__error'>{formError}</p> } */}
                                    <form action="true">
                                    <Input type="password" 
                                            placeholder="Nhập password" 
                                            Label="Mật khẩu cũ"
                                            name="password"
                                        />
                                        <Input type="password" 
                                            placeholder="Nhập password" 
                                            Label="Mật khẩu mới"
                                            name="new_password"
                                        />
                                        <Input type="password" 
                                            placeholder="Nhập password" 
                                            Label="Xác nhận lại mật khẩu"
                                            name="confirm_new_password"
                                        />
                                        <div className="d-flex tcl-jc-between tcl-ais-center">
                                            <Button type="primary" size="large">Đồng ý</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacing" />
                </main>
            </div>
        </>
    )
}

export default ChangePassPage