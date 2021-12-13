import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Input from '../components/shared/Input'
import MainTitle from '../components/shared/MainTitle'
import { validateFormRegister } from '../helpers'
import { actAsyncRegister } from '../store/auth/actions'
import './LoginPage/login.css'

function Register() {

    const dispatch = useDispatch()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: {
            value: 'test05 ',
            error: ''
        },
        password:{
            value: '123456',
            error: ''
        },
        email:{
            value: 'test03@gmail.com',
            error: ''
        },
        nickname:{
            value: '',
            error: ''
        }
    })


    function handleOnChange(evt){
        const name = evt.target.name
        const value = evt.target.value.trim()
        const error = validateFormRegister({name, value})

        setFormData({
            ...formData,
            [name]:{
                value, error
            }
        })
        // setFormDirty(true)

        console.log('formData', formData)
    }

    function checkFormValid() {
        const newFormData = {}
        Object.keys(formData)
        .forEach(key => {
            const formValue = formData[key]
            newFormData[key] = {
                value: formValue.value,
                error: validateFormRegister({
                    value: formValue.value,
                    name: key
                })
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
        const { username, password, email, nickname } = formData

        setFormError('')
        setLoading(false)
        evt.preventDefault()
        const isValid = checkFormValid()

        if(!isValid || loading){
            return
        }

        setLoading(true)
        setFormError('')

        const actAsync = actAsyncRegister({
            username: username.value,
            nickname: nickname.value,
            email: email.value,
            password: password.value
        })
        dispatch(actAsync)
        .then(res => {
            if(!res.ok){
                setFormError(res.error)
            }
            setLoading(false)
        })
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
                                        <Button Loading={loading} type="primary" size="large">Đăng ký</Button>
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