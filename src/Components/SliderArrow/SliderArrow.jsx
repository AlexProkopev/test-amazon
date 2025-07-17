import { sliderArrow, sliderArrowImg } from "./SliderArrow.styles";

const SliderArrow = ({ direction = "left", onClick, className = "" }) => {
  const iconPath = `/assets/${direction}-slider.svg`;

  return (
    <button
      onClick={onClick}
      className={sliderArrow(className)}
    >
      <img
        src={iconPath}
        alt={`${direction} arrow`}
        className={sliderArrowImg}
      />
    </button>
  );
};

export default SliderArrow;
