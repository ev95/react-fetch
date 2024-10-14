import { useEffect, useState } from 'react';
import { baseURL, urls } from '../../env';
import './Photos.css';
import Photo from '../../Components/Photo/Photo';

function Photos() {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(`${baseURL}${urls.photos}`)
            .then(res => res.json())
            .then(res => setPhotos(res))
    }, []);
    return (
        <div className='photos-container'>
            {photos.map((photo) => {
                return <Photo key={photo.id} photo={photo} />
            })}
        </div>
    )
}

export default Photos