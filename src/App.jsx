import { useEffect, useState } from 'react';
import './App.css';
import { Album, Photo } from './components';
import axios from 'axios';
import { useAlbums, usePhotos } from './hooks/useAlbum';

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedId, setSelecteId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const { fetchAlbums } = useAlbums();
  const { fetchPhotos } = usePhotos();

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        const result = await fetchAlbums();
        setAlbums(result);
      } catch (error) {
        setError('Failed to fetch albums');
      }
    };
    fetchData();
  }, [fetchAlbums]);

  const albumPhotos = async albumId => {
    try {
      setLoading(true);
      setError('');
      const result = await fetchPhotos(albumId);
      console.log(albumId);
      console.log('Fetched photos:', result);

      setPhotos(result);
      setSelecteId(albumId);
    } catch (error) {
      setError('Failed to fetch photos');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='flex gap-4'>
        <div>
          <h1 className='pb-4 border-b-2 mb-4 sticky'>Albums</h1>

          <div className='flex flex-col gap-2 h-screen overflow-y-auto pr-2'>
            {error && <p className='text-red-500'>{error}</p>}
            {albums.length > 0 ? (
              albums.map(album => (
                <Album
                  key={album.id}
                  album={album}
                  onClick={() => albumPhotos(album.id)}
                />
              ))
            ) : (
              <p>Loading albums...</p>
            )}
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='pb-4 border-b-2 mb-4'>Photos</h1>

          <div className='grid grid-cols-4 gap-4'>
            {loading ? (
              <p className='col-span-4 text-gray-500'>Loading photos...</p>
            ) : error ? ( // Show error message if any
              <p className='col-span-4 text-red-500'>{error}</p>
            ) : selectedId === null ? (
              <p className='col-span-4 text-gray-500'>
                Click on an album to start viewing photos.
              </p>
            ) : photos.length > 0 ? (
              photos.map((photo, index) => <Photo {...photo} key={index} />)
            ) : (
              <p className=' col-span-4'> No photos found in this album</p>
            )}

            {/* {DUMMY_DATA.map((photo, index) => (
              <Photo {...photo} key={index} />
            ))}

            {!DUMMY_DATA.length && (
              <p className='col-span-4'>No photos found in this album</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
