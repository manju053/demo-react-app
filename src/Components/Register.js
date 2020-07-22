import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import Styles from '../Styles/Styles.module.css'
import { validate } from './RegisterValidation'
import { createUser } from '../Services/AuthService'
import { useHistory } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { fireStorage } from '../firebase'

const Register = () => {

    const [registerError, setRegisterError] = useState()
    const [selectedImage, setSelectedImage] = useState()
    const [loading, setLoading] = useState()
    const history = useHistory()
    const registerForm = useFormik({

        initialValues: {
            user_name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,

        onSubmit(values) {
            setLoading(true)
            createUser(values, selectedImage).then(async user => {
                setLoading(false)
                if (user) {
                    history.push('/home')
                }
            })

                .catch(error => {
                    setLoading(false)
                    setRegisterError(error)
                })
        }
    })

    const fileChangeHandler = (e) => {
        console.log(e.target.files[0]['name']);

        setSelectedImage(e.target.files[0])

    }

    return (
        <>

            {loading && <div className="loading_indicator">
                <CircularProgress disableShrink />
            </div>
            }
            <form className={Styles.register} onSubmit={registerForm.handleSubmit} noValidate>
                <h3>Sign Up</h3>
                {registerError && <span className="err_class">{registerError.code}</span>}
                <div className={['form_group', Styles.register_form_group].join(' ')} >
                    <label htmlFor="user_name" className={Styles.label_text}>User Name</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Enter User Name" required
                        value={registerForm.values.user_name} onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                    />
                    {(registerForm.errors.user_name) && <span className="err_class">{registerForm.errors.user_name}</span>}

                </div>
                <div className={['form_group', Styles.register_form_group].join(' ')} >
                    <label htmlFor="user_name" className={Styles.label_text}>Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter Email Address" required
                        value={registerForm.values.email} onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                    />
                    {(registerForm.touched.email && registerForm.errors.email) && <span className="err_class">{registerForm.errors.email}</span>}

                </div>

                <div className={['form_group', Styles.register_form_group].join(' ')}>
                    <label htmlFor="user_name" className={Styles.label_text}>Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password"
                        value={registerForm.values.password} onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                    />
                    {(registerForm.touched.password && registerForm.errors.password) && <span className="err_class">{registerForm.errors.password}</span>}
                </div>

                <div className={['form_group', Styles.register_form_group].join(' ')}>
                    <label htmlFor="user_name" className={Styles.label_text}>Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Password Again"
                        value={registerForm.values.confirmPassword} onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                    />
                    {(registerForm.touched.confirmPassword && registerForm.errors.confirmPassword) && <span className="err_class">{registerForm.errors.confirmPassword}</span>}
                </div>

                <div className={['form_group', Styles.register_form_group].join(' ')}>
                    <label htmlFor="file" className={Styles.label_text}>Upload Photo</label>
                    <input type="file" name="file" id="file" onChange={fileChangeHandler} />
                </div>


                <div className={['btn_section', Styles.register_btn_section].join(' ')}>
                    <button type="submit" disabled={!(registerForm.isValid && registerForm.dirty)}>Register</button>
                </div>
                <span className="err_class">{registerForm.isValid}</span>
            </form>

        </>
    )
}

export default Register
