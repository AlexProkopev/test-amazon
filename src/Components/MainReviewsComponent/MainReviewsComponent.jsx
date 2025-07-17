import Title from "../Title/Title";

import ReviewsSlider from "../ReviewsSlider/ReviewsSlider";
import { testimonials } from "../dataReviews";

function MainReviewsComponent() {
  return (
    <>
      <Title>Voices of Success with Sales Fortuna</Title>
      <ReviewsSlider data={testimonials} />
    </>
  );
}

export default MainReviewsComponent;
