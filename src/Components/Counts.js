import React from 'react'
import '../Styles/Count.scss'

const Counts = ({likes, comments, shares}) => {
    return (
        <div className="count_section">
            <span><span className="count">{likes}</span> likes</span>
            <span><span className="count">{comments}</span> comments  <span  className="count"> {shares} </span>shares</span>
        </div>
    )
}

export default Counts
