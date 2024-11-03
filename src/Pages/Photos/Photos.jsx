import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Photo from '../../Components/Photo/Photo';
import { getPotosThunk } from '../../store/photosReducer';
import './Photos.css';

function Photos() {
    const { photos } = useSelector((state) => state.photosState)

    useEffect(() => {
        getPotosThunk();
    }, []);

    return (
        <div className='photos-container'>
            {photos?.map((photo) => {
                return <Photo key={photo.id} photo={photo} />
            })}
        </div>
    )
}

export default Photos