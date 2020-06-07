import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BackgroundStars = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const ColoredStars = styled.View`
  width: ${({ percentage }) => `${percentage}%`};
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: absolute;
  top: 0;
`;
const StarIcon = styled(Icon)`
  margin-right: 2px;
`;

const Rating = ({
  rated,
  totalCount,
  ratingColor,
  ratingBackgroundColor,
  size,
  icon,
}) => {
  const percentage = (rated / totalCount) * 100;
  return (
    <StyledView>
      <BackgroundStars>
        <StarIcon name={icon} size={size} color={ratingBackgroundColor} />
        <StarIcon name={icon} size={size} color={ratingBackgroundColor} />
        <StarIcon name={icon} size={size} color={ratingBackgroundColor} />
        <StarIcon name={icon} size={size} color={ratingBackgroundColor} />
        <StarIcon name={icon} size={size} color={ratingBackgroundColor} />
        <ColoredStars percentage={percentage}>
          <StarIcon name={icon} size={size} color={ratingColor} />
          <StarIcon name={icon} size={size} color={ratingColor} />
          <StarIcon name={icon} size={size} color={ratingColor} />
          <StarIcon name={icon} size={size} color={ratingColor} />
          <StarIcon name={icon} size={size} color={ratingColor} />
        </ColoredStars>
      </BackgroundStars>
    </StyledView>
  );
};

Rating.defaultProps = {
  rated: 0,
  totalCount: 5,
  ratingColor: "#b5121b",
  ratingBackgroundColor: "#c8c7c8",
  size: 12,
  icon: "ios-star",
};

Rating.propTypes = {
  rated: PropTypes.number,
  totalCount: PropTypes.number,
  ratingColor: PropTypes.string,
  ratingBackgroundColor: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string,
};

export default Rating;
