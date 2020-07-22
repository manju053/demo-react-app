import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../Styles/Header.scss'
import { UserContext } from '../Context/UserProvider'
import { logout } from '../Services/AuthService'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Styles from '../Styles/Styles.module.css'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const userContext = useContext(UserContext)
    console.log("User:::::::", userContext.user)
    const history = useHistory()

    const signout = (e) => {
        e.preventDefault()
        setAnchorEl(null);
        logout().then(result => {
            history.push('/login')
        })
            .catch(error => {
                alert(error)
            })

    }
    return (
        <div className="header_wrapper">

            <nav className="nav">

                <div className="logo_section">
                    <Link to="/home"><span >SocialApp</span></Link>
                </div>

                <ul className="nav-list">
                    <li className="list-item">
                        <Link to="/about">About</Link>
                    </li>
                    {/* {
                        !userContext.user ? <li className="list-item">
                            <Link to="/login">Login</Link>
                        </li> : <li className="list-item">
                                <a href="" onClick={(e) => signout(e)}>Logout</a>
                            </li>
                    } */}

                    {
                        !userContext.user && <li className="list-item">
                            <Link to="/register">Sign Up</Link>
                        </li>
                    }

                    {
                        userContext.user && 
                        <>
                        <img src={userContext.user.photoURL} className={Styles.profile_pic} alt="profile_pic"/>
                        <li className="list-item">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            {userContext.user.displayName}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={(e) => signout(e)}>Logout</MenuItem>
                        </Menu>
                    </li>
                    </>
                    }
                </ul>
            </nav>


        </div>
    )
}

export default Header
