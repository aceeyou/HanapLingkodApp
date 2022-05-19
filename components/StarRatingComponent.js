import React, { useState } from "react";
import { View } from "react-native";
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
  const updateRate = (r) => {
    if (r) {
      let gR = parseFloat(r);
      setRating(gR);
    }
  };

  return (
    <View>
      {/* {updateRate(props.givenRating)} */}
      <StarRating
        rating={props.givenRating ? props.givenRating : rating}
        onChange={setRating}
        color={"#fec601"}
        emptyColor={!rating ? "#fec601" : "#B0B0B0"}
        starSize={props.starSize}
      />
      {/* {updateRate(0)} */}
    </View>
  );
};

export default StarRatingComponent;
