import React from "react";
import PropTypes from "prop-types";
import StarButton from "./components/StarButton";
import styled from "styled-components/native";

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

const Rating = ({
  rated,
  totalCount,
  ratingColor,
  ratingBackgroundColor,
  size,
  icon,
  marginBetweenRatingIcon,
  readonly,
  onStarTap,
}) => {
  const percentage = (rated / totalCount) * 100;
  return (
    <StyledView>
      <BackgroundStars>
        {Array.from({ length: totalCount }, (_, i) => (
          <StarButton
            name={icon}
            size={size}
            position={i}
            color={ratingBackgroundColor}
            margin={marginBetweenRatingIcon}
            onStarTap={onStarTap}
            readonly={readonly}
          />
        ))}
        <ColoredStars percentage={percentage}>
          {Array.from({ length: totalCount }, (_, i) => (
            <StarButton
              name={icon}
              size={size}
              color={ratingColor}
              position={i}
              margin={marginBetweenRatingIcon}
              onStarTap={onStarTap}
              readonly={readonly}
            />
          ))}
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
  marginBetweenRatingIcon: 1,
  readonly: false,
};

Rating.propTypes = {
  rated: PropTypes.number,
  totalCount: PropTypes.number,
  ratingColor: PropTypes.string,
  ratingBackgroundColor: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.string,
  marginBetweenRatingIcon: PropTypes.number,
  readonly: PropTypes.bool,
  onStarTap: PropTypes.func,
};

export default Rating;
