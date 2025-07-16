import './Photo.css'

import {uploads} from "../../utils/config"
import Message from '../../components/Message/Message';
import PhotoItem from '../../components/PhotoItem/PhotoItem';


import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto, like } from '../../slices/photoSlice';
import LikeContainer from '../../components/Like/LikeContainer';
import useResetComponentMessage from '../../hooks/useResetComponentMessage';

const Photo = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)

  const resetMessage = useResetComponentMessage(dispatch)

  // load photo data
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  const handleLike = () => {
    dispatch(like(photo._id));
    resetMessage()
  }

  if(loading) <p>Carregando...</p>
  return ( 
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
    </div>
   );
}
 
export default Photo;