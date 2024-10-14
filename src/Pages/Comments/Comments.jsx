import { useEffect, useState } from 'react';

import Comment from '../../Components/Comment/Comment';
import { baseURL, urls } from '../../env';
import './Comments.css';

function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`${baseURL}${urls.comments}`)
            .then(res => res.json())
            .then(res => setComments(res))
    }, []);

    return (
        <div className='comments-container'>
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </div>
    )
}

export default Comments