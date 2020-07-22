import React from 'react'
import '../Styles/Actions.scss'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Actions = () => {
    return (
        <div className="actions">
            <div className="like">
                <ThumbUpAltOutlinedIcon /><span>Like</span>
            </div>

            <div className="comment">
                <ChatBubbleOutlineOutlinedIcon /><span>Comment</span>
            </div>

            <div className="share">
                <ShareOutlinedIcon /><span>Share</span>

            </div>
        </div>
    )
}

export default Actions
