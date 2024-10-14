import './Photo.css'

function Photo({ photo }) {
    return (
        <div className="photo-card">
            <div className="photo-image">
                <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
            <div className="photo-details">
                <h3 className="photo-title">{photo.title}</h3>
                <a href={photo.url} target="_blank" rel="noopener noreferrer" className="view-photo">View Full Image</a>
                <div className="photo-meta">
                    <span>Album ID: {photo.albumId}</span>
                    <span>Photo ID: {photo.id}</span>
                </div>
            </div>
        </div>
    )
}

export default Photo