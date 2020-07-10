import React from "react";
import PropTypes from "prop-types";
import StarButton from "./components/StarButton";
import styled from "styled-components/native";

const StyledView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ dir }) => `${dir}`};
`;
const BackgroundStars = styled.View`
  display: flex;
  position: relative;
  flex-direction: ${({ dir }) => `${dir}`};
`;
const ColoredStars = styled.View`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex-direction: ${({ dir }) => `${dir}`};
  width: ${({ percentage, dir }) =>
    dir === "column" || dir === "column-reverse" ? `100%` : `${percentage}%`};
  height: ${({ percentage, dir }) =>
    dir === "row" || dir === "row-reverse" ? `100%` : `${percentage}%`};

  top: ${({ dir }) => (dir === "column" ? 0 : "auto")};
  bottom: ${({ dir }) => (dir === "column-reverse" ? 0 : "auto")};
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
  direction,
}) => {
  const percentage = (rated / totalCount) * 100;
  return (
    <StyledView dir={direction}>
      <BackgroundStars dir={direction}>
        {Array.from({ length: totalCount }, (_, i) => (
          <StarButton
            name={icon}
            size={size}
            position={i}
            key={`bgstar_${i}`}
            color={ratingBackgroundColor}
            margin={marginBetweenRatingIcon}
            onStarTap={onStarTap}
            readonly={readonly}
          />
        ))}
        <ColoredStars percentage={percentage} dir={direction}>
          {Array.from({ length: totalCount }, (_, i) => (
            <StarButton
              name={icon}
              size={size}
              color={ratingColor}
              position={i}
              key={`cstar_${i}`}
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
  direction: "row",
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
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export default Rating;
