import css from "./ImageCard.module.css";

const ImageCard = ({ smallUrl, largeUrl, onImageClick }) => {
  const handleClick = () => {
    onImageClick(largeUrl);
  };

  return (
    <div onClick={handleClick}>
      <img className={css.image} src={smallUrl} alt="" />
    </div>
  );
};

export default ImageCard;
