import classes from './Album.module.css';

export const Album = ({ album, onClick }) => {
  return (
    <div className={classes.container} onClick={() => onClick(onClick)}>
      <h2>{album.title}</h2>
    </div>
  );
};
