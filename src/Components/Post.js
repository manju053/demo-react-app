import React from 'react'
import Title from './Title'
import Main from './Main';
import '../Styles/Post.scss'
import Counts from './Counts';
import Actions from './Actions';

const Post = ({post}) => {
    
    const getDate = (value) => {
        const date =  new Date(value * 1000).toString().split(' ');
        return `${date[2]} ${date[1]} at ${date[4].substring(0,5)}`
    }

    const generateCommnents = () => {
        const count = Math.round((Math.random() * 10000));
        if (count > 1000) {
            return (count/1000).toFixed(2) + 'K'
        }

        return count;
    }   

    const generateShares = () => {
        const count =  Math.round((Math.random() * 10000));
        if (count > 1000) {
            return (count/1000).toFixed(2) + 'K'
        }

        return count;
    }

    const formatLikes = (count) => {
        if (count > 1000) {
            return (count/1000).toFixed(2) + 'K'
        }

        return count;
    }
    return (
        <>
        <div className="post">
            <Title image_url={post.image_url} from_user_name={post.from_user_name} created_at={getDate(post.created_at)}/>
            <Main description={post.description} image_url={post.image_url}/>
            <Counts likes={formatLikes(post.votes)} comments={generateCommnents()} shares={generateShares()}/>
            <Actions />
        </div>
        </>
    )
}

export default Post
