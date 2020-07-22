import React, { useState } from 'react'
import '../Styles/Main.scss'
import Linkify from 'react-linkify'
const Main = ({ description, image_url }) => {
    const [showMore, setShowMore] = useState(false);
    const [displayStyle, setDisplayStyle] = useState({display: 'none'})
    

    const setReadMore = () => {
        setShowMore(!showMore)
        const style = showMore ? {display: 'none'} : {display: 'inline'}
        setDisplayStyle(style)
    }
    return (
        <div>
            <Linkify ><span className="description_text">{description.slice(0, 150)}</span></Linkify >
            <Linkify ><span style={displayStyle}  className="description_text_long">{description.slice(151)}</span></Linkify >
     
            {
                description.length > 150 && <><span className="text-dots">....</span>
                <span className="show-more-button" data-more="0" onClick={() => setReadMore()}>{!showMore ? 'Read More' : 'Read Less'} </span></>
            }
            
            
            <img src={image_url} alt="" className="description_image" />
        </div>
    )
}

export default Main
