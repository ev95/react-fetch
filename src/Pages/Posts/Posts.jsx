import { useEffect, useState } from 'react'

import Post from '../../Components/Post/Post';
import { baseURL, urls } from '../../env'
import './Posts.css'

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`${baseURL}${urls.posts}`)
            .then(res => res.json())
            .then(res => setPosts(res))
    }, []);


    return (
        <div className='posts-container'>
            {posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    )
}

export default Posts