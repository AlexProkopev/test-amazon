import { useState } from "react";
import SliderArrow from "../SliderArrow/SliderArrow";
import ReviewsCardItem from "../ReviewsCardItem/ReviewsCardItem";
import SliderDots from "../SliderArrow/SliderDots/SliderDots";
import { useItemsPerPage } from "../../utils/useItemsPerPage";
import {
  btnLeftPositionStyles,
  btnRightPositionStyles,
  listAnimation,
  section,
} from "./Reviews.Styles";

const ReviewsSlider = ({ data }) => {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const itemsPerPage = useItemsPerPage();

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goTo = (newPage) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      const fixedPage = (newPage + totalPages) % totalPages;
      setPage(fixedPage);
      setAnimating(false);
    }, 300);
  };

  const pagedData = data.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className={section}>
      <div className="relative">
        <SliderArrow
          direction="left"
          onClick={() => goTo(page - 1)}
          className={btnLeftPositionStyles}
        />

        <ul className={listAnimation(animating)}>
          {pagedData.map((item, index) => (
            <ReviewsCardItem key={index} reviews={item} />
          ))}
        </ul>

        <SliderArrow
          direction="right"
          onClick={() => goTo(page + 1)}
          className={btnRightPositionStyles}
        />
      </div>

      <SliderDots total={totalPages} current={page} onClick={goTo} />
    </section>
  );
};

export default ReviewsSlider;
