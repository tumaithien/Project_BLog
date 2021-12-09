import Button from '../../components/shared/Button'
import Input from '../../components/shared/Input'
import MainTitle from '../../components/shared/MainTitle'
import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import { validateFormData } from '../../helpers'


function Login() {

    const [isFormDirty, setIsFormDirty] = useState(false);

    const [formData, setFormData] = useState({
        username:{
            value: '',
            error: ''
        },
        password:{
            value: '',
            error: ''
        }
    });
    let key = Object.keys(formData);
    key.forEach((key, index) => {
        console.log(`${key}: ${formData[key]}`)
        let c = Object.values(formData[key])
        console.log(c)
    })

    function handleOnChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        const error = validateFormData({ name, value });
        setFormData({
            ...formData,
            [name]: {
                value,
                error
            }
        })
        setIsFormDirty(true)
    }
    
    function checkFormIsValid() {
        if(!isFormDirty){
            setFormData({
                username:{
                    value: '',
                    error: validateFormData({
                        value: '',
                        name: 'username'
                    })
                },
                password:{
                    value: '',
                    error: validateFormData({
                        value: '',
                        name: 'password'
                    })
                }
            })
        }
        
        if(formData.username.error || formData.password.error){
            return false;
        }
        return true
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const isValid = checkFormIsValid(); 
        if(!isValid){
            console.log('Form error');
            return
        }
        console.log('submit thanh cong')
    }

    return (
            <div>
                <main className="login">
                    <div className="spacing" />
                    <div className="tcl-container">
                        <div className="tcl-row">
                            <div className="tcl-col-12 tcl-col-sm-6 block-center">
                                <MainTitle>Đăng nhập</MainTitle>
                                <div className="form-login-register">
                                    <form action="true" onSubmit={handleSubmit}>
                                        <Input 
                                            Label="Tên đăng nhập"
                                            placeholder="Nhập user name"
                                            value = {formData.username.value}
                                            error={formData.username.error}
                                            name="username"
                                            onChange={handleOnChange}
                                            autoComplete = "off"
                                         />
                                        <Input type="password" 
                                            placeholder="Nhập password" 
                                            Label="Mật khẩu"
                                            value={formData.password.value}
                                            error={formData.password.error}
                                            name="password"
                                            onChange={handleOnChange}
                                        />
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