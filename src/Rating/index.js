import React from "react";
import PropTypes from "prop-types";
import IconBar from "./components/IconBar";
import styled from "styled-components/native";

const StyledView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ dir }) => `${dir}`};
`;
const BackgroundIcons = styled.View`
  display: flex;
  position: relative;
  flex-direction: ${({ dir }) => `${dir}`};
`;
const ColoredIcons = styled.View`
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
  onIconTap,
  direction,
  type,
  selectedIconImage,
  emptyIconImage,
}) => {
  const percentage = (rated / totalCount) * 100;

  return (
    <StyledView
      dir={direction}
      accessible={!readonly}
      importantForAccessibility={!readonly ? "yes" : "no"}
    >
      <BackgroundIcons dir={direction}>
        {Array.from({ length: totalCount }, (_, i) => (
          <IconBar
            isAccessible
            name={icon}
            key={`bgstar_${i}`}
            size={size}
            position={i}
            color={ratingBackgroundColor}
            margin={marginBetweenRatingIcon}
            onIconTap={onIconTap}
            readonly={readonly}
            type={type}
            selectedIconImage={selectedIconImage}
            emptyIconImage={emptyIconImage}
            totalCount={totalCount}
          />
        ))}
        <ColoredIcons percentage={percentage} dir={direction}>
          {Array.from({ length: totalCount }, (_, i) => (
            <IconBar
              filled
              name={icon}
              key={`cstar_${i}`}
              size={size}
              position={i}
              color={ratingColor}
              margin={marginBetweenRatingIcon}
              onIconTap={onIconTap}
              readonly={readonly}
              type={type}
              selectedIconImage={selectedIconImage}
              emptyIconImage={emptyIconImage}
              totalCount={totalCount}
            />
          ))}
        </ColoredIcons>
      </BackgroundIcons>
    </StyledView>
  );
};

Rating.defaultProps = {
  rated: 0,
  totalCount: 5,
  ratingColor: "#f1c644",
  ratingBackgroundColor: "#d4d4d4",
  size: 12,
  icon: "ios-star",
  marginBetweenRatingIcon: 1,
  readonly: false,
  direction: "row",
  type: "icon",
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
  onIconTap: PropTypes.func,
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  type: PropTypes.oneOf(["icon", "custom"]),
  selectedIconImage: PropTypes.node,
  emptyIconImage: PropTypes.node,
};

export default Rating;
