import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galleryList}>
      {images.map((url, index) => (
        <li key={index}>
          <ImageCard smallUrl={url} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
