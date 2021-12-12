import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Input from '../components/shared/Input'
import MainTitle from '../components/shared/MainTitle'
import { validateFormRegister } from '../helpers'
import './LoginPage/login.css'

function Register() {


    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isFormDirty, setFormDirty] = useState(false)
    const [formData, setFormData] = useState({
        username: {
            value: '',
            error: '',
            isTouched : false
        },
        password:{
            value: '',
            error: '',
            isTouched : false
        },
        email:{
            value: '',
            error: '',
            isTouched : false
        },
        nickname:{
            value: '',
            error: '',
            isTouched : false
        }
    })

    function handleOnChange(evt){
        const name = evt.target.name
        const value = evt.target.value.trim()
        const error = validateFormRegister({name, value})

        setFormData({
            ...formData,
            [name]:{
                value, error, isTouched : true
            }
        })
        // setFormDirty(true)
    }

    function checkFormValid() {
        // if(!isFormDirty){
        //     const newFormData = {
        //         nickname:{
        //             value: '',
        //             error: validateFormRegister({
        //                 value: '', name: 'nickname'
        //             })
        //         },
        //         username:{
        //             value: '',
        //             error: validateFormRegister({
        //                 value: '', name: 'username'
        //             })
        //         },
        //         email:{
        //             value: '',
        //             error: validateFormRegister({
        //                 value: '', name: 'email'
        //             })
        //         },
        //         password:{
        //             value: '',
        //             error: validateFormRegister({
        //                 value: '', name: 'password'
        //             })
        //         },
        //     }

        //     setFormData(newFormData)
        //     return false
        // }
        const newFormData = {}
        Object.keys(formData)
        .forEach(key => {
            const formValue = formData[key]

            if(formValue.isTouched === false){
                newFormData[key] = {
                    value: '',
                    isTouched: true,
                    error: validateFormRegister({
                        value: '',
                        name: key
                    })
                }
            }else{
                newFormData[key] = formData[key]
            }
        })
        setFormData(newFormData)
        for(const key in newFormData){
            if(newFormData[key].error){
                return false
            }
        }
        return true
    }

    function handleSubmit(evt) {
        setFormError('')
        evt.preventDefault()
        const isValid = checkFormValid()

        if(!isValid){
            return
        }
    }

    return (
        <div>
            <main className="login">
                <div className="spacing" />
                <div className="tcl-container">
                    <div className="tcl-row">
                        <div className="tcl-col-12 tcl-col-sm-6 block-center">
                            <MainTitle>Đăng Ký</MainTitle>
                            <div className="form-login-register">
                            { formError && <p className='form-login__error'>{formError}</p> }
                                <form action ="true" onSubmit={handleSubmit}>
                                    <Input 
                                        Label="Tên đăng nhập" 
                                        placeholder="Nhập user name"
                                        name="username"
                                        value={formData.username.value}
                                        error ={formData.username.error}
                                        onChange={handleOnChange} 
                                    />
                                    <Input 
                                        Label="Nickname" 
                                        placeholder="Nhập nickname" 
                                    />
                                    <Input 
                                        Label="Email" 
                                        placeholder="Nhập email"
                                        name="email"
                                        value={formData.email.value}
                                        error ={formData.email.error}
                                        onChange={handleOnChange}
                                    />
                                    <Input 
                                        type="password" 
                                        placeholder="Nhập password" 
                                        Label="Mật khẩu"
                                        name="password"
                                        value={formData.password.value}
                                        error ={formData.password.error}
                                        onChange={handleOnChange} 
                                    />
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