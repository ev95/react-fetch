import { useEffect, useState } from 'react';

import { baseURL, urls } from '../../env';
import './Albums.css'
import Album from '../../Components/Album/Album';

function Albums() {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch(`${baseURL}${urls.albums}`)
            .then(res => res.json())
            .then(res => setAlbums(res))
    }, []);


    return (
        <div className='albums-container'>
            {albums.map((album) => {
                return <Album key={album.id} album={album} />
            })}
        </div>
    )
}

export default Albums