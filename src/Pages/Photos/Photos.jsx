import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Photo from '../../Components/Photo/Photo';
import { getPotosThunk } from '../../store/photosReducer';
import './Photos.css';

function Photos() {
    const { photos } = useSelector((state) => state.photosState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPotosThunk());
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