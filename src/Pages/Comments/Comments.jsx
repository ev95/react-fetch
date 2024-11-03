import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCommentsThunk } from '../../store/commentsReducer';
import Comment from '../../Components/Comment/Comment';
import './Comments.css';

function Comments() {
    const { comments } = useSelector((state) => state.commentsState)

    useEffect(() => {
        getCommentsThunk();
    }, []);

    return (
        <div className='comments-container'>
            {comments?.map((comment) => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </div>
    )
}

export default Comments