import './Post.css'

function Post({ post }) {
    return (
        <div className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-meta">
                <span>User ID: {post.userId}</span>
                <span>Post ID: {post.id}</span>
            </div>
        </div>
    )
}

export default Post