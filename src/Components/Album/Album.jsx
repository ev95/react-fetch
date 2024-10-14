import './Album.css'

function Album({ album }) {
    return (
        <div className="album-container">
            <div className="album-icon">
                <span>🎵</span>
            </div>
            <div className="album-details">
                <h3 className="album-title">{album.title}</h3>
                <div className="album-meta">
                    <span className="album-id">Album ID: {album.id}</span>
                    <span className="user-id">User ID: {album.userId}</span>
                </div>
            </div>
        </div>
    )
}

export default Album