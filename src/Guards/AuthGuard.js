


export const requireLogin = (to, from, next) => {
    
    if (localStorage.getItem('isLoggedIn')) {
        next()
    } else {
        next.redirect('/login')
    }
}