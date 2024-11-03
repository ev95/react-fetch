import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAlbumsThunk } from '../../store/albumsReducer';
import Album from '../../Components/Album/Album';
import './Albums.css'

function Albums() {
    const { albums } = useSelector((state) => state.photosState)

    useEffect(() => {
        getAlbumsThunk();
    }, []);

    return (
        <div className='albums-container'>
            {albums?.map((album) => {
                return <Album key={album.id} album={album} />
            })}
        </div>
    )
}

export default Albums