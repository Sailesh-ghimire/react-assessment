import { albumsService, photosService } from '../services/albumService';

export const useAlbums = () => {
  const fetchAlbums = async () => {
    return await albumsService();
  };
  return { fetchAlbums };
};

export const usePhotos = () => {
  const fetchPhotos = async albumID => {
    return await photosService(albumID);
  };
  return { fetchPhotos };
};
