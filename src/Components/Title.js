import React from 'react'
import '../Styles/Title.scss'

const Title = ({ image_url, from_user_name, created_at }) => {
    return (
        <div className="title_section">
            <img src={image_url} alt="" className="user_imag" />
            <div className="title_info">
                <h3 className="user_name">{from_user_name}</h3>
                <p className="created_at">{created_at}</p>
            </div>

        </div>
    )
}

export default Title
