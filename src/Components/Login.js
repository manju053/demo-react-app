import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../Styles/Login.scss'
import {signInWithEmailAndPassword} from '../Services/AuthService'

const Login = (props) => {
    const validEmailRegex =
    RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const title = 'Login'
    const [loginForm, setLoginForm] = useState({
        'email': '',
        'password': '',
        'confirmPassword': '',
        'emailValid': true,
        'passwordValid': true,
        'confirmPasswordValid': true,
        'formValid': true,
        errorMsg: {}
    })
    const [loginError, setLoginError] = useState('')

    let history = useHistory();
    const handleSubmit = (e) => {
        console.log("Inside submit")
        e.preventDefault()
        signInWithEmailAndPassword(loginForm).then(user => {
            history.push("/home")
        })
        .catch(error => {
            setLoginError(error)
        })
        
    }

    const changeEmail = (e) => {
        setLoginForm({ ...loginForm, email: e.target.value })
    }

    const changePassowrd = (e) => {
        setLoginForm({ ...loginForm, password: e.target.value })
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        validateEmail(loginForm.email)
    }, [loginForm.email, validateEmail])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        validatePassword(loginForm.password)
    }, [loginForm.password, validatePassword])


    const validateEmail = (value) => {
        if (!value) {
            setLoginForm({ ...loginForm, emailValid: false, formValid: false, errorMsg: { ...loginForm.errorMsg, email: 'Email Field format is incorrect' } })
            return
        } else {
            if (!validEmailRegex.test(value)) {
                setLoginForm({ ...loginForm, emailValid: false, errorMsg: { ...loginForm.errorMsg, email: 'Email Field format is incorrect' }, formValid: false })
                return
            }
        }

        setLoginForm({ ...loginForm, emailValid: true, errorMsg: { ...loginForm.errorMsg, email: '' }, formValid: true })

    }

    const validatePassword = (value) => {
        if (!value) {
            setLoginForm({ ...loginForm, passwordValid: false, errorMsg: { ...loginForm.errorMsg, password: 'Please enter password' }, formValid: false })
            return
        }

        setLoginForm({ ...loginForm, passwordValid: true, errorMsg: { ...loginForm.errorMsg, password: '' }, formValid: true })
    }

    const validateConfirmPassword = (value) => {
        if (!value) {
            setLoginForm({ ...loginForm, confirmPasswordValid: false, errorMsg: { ...loginForm.errorMsg, confirmPassword: 'Please enter confirm password' }, formValid: false })
            return
        } else {
            if (value !== loginForm.password) {
                setLoginForm({ ...loginForm, confirmPasswordValid: false, errorMsg: { ...loginForm.errorMsg, confirmPassword: 'Confirm password does not match password' }, formValid: false })
            return
            }
        }

        setLoginForm({ ...loginForm, confirmPasswordValid: true, errorMsg: { ...loginForm.errorMsg, password: '' }, formValid: true })
    }

    const register = (e) => {
        history.push('/register')
    }


return (
    <div className="login_wrapper">
        <form className="form_section" onSubmit={handleSubmit}>
            <h3>{title}</h3>
             {loginError && <span className="err_class">{loginError.code.substring(5)}</span>}
            <div className="form_group" >
                {/* <label htmlFor="email">Email Address</label> */}
                {!loginForm.emailValid && <span className="err_class">{loginForm.errorMsg.email}</span>}
                <input type="text" id="email" name="email" placeholder="Enter Email Address" required
                    value={loginForm.email} onChange={e => changeEmail(e)}
                    onBlur={e => validateEmail(e.target.value)} />

            </div>

            <div className="form_group">
                {/* <label htmlFor="password">Email Address</label> */}
                {!loginForm.passwordValid && <span className="err_class">{loginForm.errorMsg.password}</span>}
                <input type="password" id="password" name="password" placeholder="Enter Password"
                    value={loginForm.password} onChange={e => changePassowrd(e)}
                    onBlur={e => validatePassword(e.target.value)} />
            </div>

            
            

            <div className="btn_section">
                <button type="submit" disabled={!loginForm.formValid}>{title}</button>
            </div>

            <div className="form_footer">
                <p>Don't have an account?, <button className="register_btn" onClick={e => register(e)}>click here</button></p>
                <button className="forgot_password_btn" >Forgot Password</button>
            </div>
        </form>


    </div>
)
}

export default Login
