import { gallery } from '../data/data.json';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-6 py-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
      {gallery.map(({ title, image }) => (
        <GalleryItem key={title} title={title} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
