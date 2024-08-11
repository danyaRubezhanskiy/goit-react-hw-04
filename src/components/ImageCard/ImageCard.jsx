import css from "./ImageCard.module.css";

const ImageCard = ({ smallUrl }) => {
  return (
    <div>
      <img className={css.image} src={smallUrl} alt="" />
    </div>
  );
};

export default ImageCard;
