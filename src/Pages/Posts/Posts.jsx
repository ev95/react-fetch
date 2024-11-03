import { useSelector } from 'react-redux';
import { useEffect } from 'react'

import { getPostsThunk } from '../../store/postsReducer';
import Post from '../../Components/Post/Post';
import './Posts.css'

function Posts() {
    const { posts } = useSelector((state) => state.postsState)

    useEffect(() => {
        getPostsThunk();
    }, []);


    return (
        <div className='posts-container'>
            {posts?.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    )
}

export default Posts