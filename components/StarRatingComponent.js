import React, { useState } from "react";
import StarRating from "react-native-star-rating-widget";

const StarRatingComponent = (props) => {
  const [rating, setRating] = useState(0);
  //   console.log(rating);
  //   props.getRating(rating);

  //   const updateRating = (rate) => {
  //     setRating(...rate);
  //     props.getRating(...rating);
  //   };
  props.getR(rating);

  return (
    <StarRating
      rating={rating}
      onChange={setRating}
      color={"#fec601"}
      emptyColor={!rating ? "#fec601" : "#B0B0B0"}
    />
  );
};

export default StarRatingComponent;
