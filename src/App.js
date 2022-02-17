import './App.css';
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPhotos } from './galleryState';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector( state => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos())
  },[dispatch])
console.log(photos)
  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk</p>
      <hr/>
      <div className='Gallery'>
       {
         photos.map((photo) => 
         <img 
           key={photo.id}
           alt={photo.author}
           src= {photo.download_url}
           width="400x"
           height="400px"
         />
        )
       }
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
