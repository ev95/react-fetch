import './Comment.css'

function Comment({ comment }) {
    return (
        <div className="comment-container">
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-body">{comment.body}</p>
            <div className="comment-meta">
                <span className="comment-email">Email: {comment.email}</span>
                <span className="comment-id">Comment ID: {comment.id}</span>
                <span className="post-id">Post ID: {comment.postId}</span>
            </div>
        </div>
    )
}

export default Comment