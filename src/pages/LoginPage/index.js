import Button from '../../components/shared/Button'
import Input from '../../components/shared/Input'
import MainTitle from '../../components/shared/MainTitle'
import { Link } from 'react-router-dom'
import './login.css'
import { useEffect, useState } from 'react'
import { validateFormData } from '../../helpers'
import { useDispatch } from 'react-redux'
import { actAsyncLogin } from '../../store/auth/actions'
import {useHistory} from 'react-router-dom'


function Login() {

    const history = useHistory()
    const dispatch = useDispatch();

    const [isFormDirty, setIsFormDirty] = useState(false);
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false);
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
            // for(const key in formData){
            //     setFormData(
            //         {
            //         [key]:{
            //             value: '',
            //             error: validateFormData({
            //                 value: '',
            //                 name: `${key}`
            //             })
            //         }
            //     })
            // }
            setFormData(
                {
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

        for(const key in formData){
            if(formData[key].error){
                return false
            }
        }
        
        // if(formData.username.error || formData.password.error){
        //     return false;
        // }
        return true
    }

    function handleSubmit(evt) {
        const { username, password } = formData;
        if(loading){
            return
        }
        setLoading(true)
        setFormError('')
        evt.preventDefault();
        const isValid = checkFormIsValid(); 
        if(!isValid){
            console.log('Form error');
            return
        }
        dispatch(actAsyncLogin(username.value, password.value))
        .then(res => {
            if(res.ok){
                history.push('/')
            }else{
                console.log('Error', res.error)
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
                                <MainTitle>Đăng nhập</MainTitle>
                                <div className="form-login-register">
                                    { formError && <p className='form-login__error'>{formError}</p> }
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
                                            <Button Loading={loading} type="primary" size="large">Đăng nhập</Button>
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