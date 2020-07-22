import React, { useState, useEffect } from 'react'
import '../Services/DataService'
import { fetchPosts } from '../Services/DataService'
import { CircularProgress } from '@material-ui/core'
import Posts from './Posts'
import '../Styles/Home.scss'
const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPosts().then(result => {
            setPosts(result.data.rows)
            setLoading(false)
        })
    }, [])
    return (
        <>

            {loading ? <div className="loading_indicator">
                <CircularProgress disableShrink />
            </div> :
                <div className="posts_section">
                    <Posts posts={posts}/>
                </div>
            }


        </>
    )
}

export default Home
