
export const validate = values => {
    let errors = {}
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if (!values.user_name) {
        errors.user_name = 'User Name is required'
    } 


    if (!values.email) {
        errors.email = 'Email is required'
    } else {
        if (!validEmailRegex.test(values.email)) {
            errors.email = "Email format is incorrect"
        }
    }

    if (!values.password) {
        errors.password = 'Enter password'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Enter confirm password'
    }

    if ((values.password && values.confirmPassword) && values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords does not match'
    }

    return errors
}
