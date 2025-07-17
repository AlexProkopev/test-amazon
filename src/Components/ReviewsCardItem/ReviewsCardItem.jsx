import {
  cardItem,
  companyLogo,
  personAvatar,
  personInfo,
  personName,
  personPosition,
  personWrapper,
  quoteMark,
  reviewText,
} from "./ReviewsCardItem.style";

function ReviewsCardItem({ reviews }) {
  const { company, text, person } = reviews;

  return (
    <li className={cardItem}>
      <img src={company.logo} alt={company.name} className={companyLogo} />
      <p className={reviewText}>{text}</p>
      <div className={personWrapper}>
        <img src={person.avatar} alt={person.name} className={personAvatar} />
        <div className={personInfo}>
          <span className={quoteMark}>”</span>
          <p className={personName}>{person.name}</p>
          <p className={personPosition}>{person.position}</p>
        </div>
      </div>
    </li>
  );
}

export default ReviewsCardItem;
