import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

import styled from "styled-components/native";

const StarIcon = styled(Icon)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
`;

const StarButton = ({
  name,
  size,
  color,
  margin,
  onStarTap,
  readonly,
  position,
}) => (
  <StarIcon
    onPress={() => {
      if (!readonly) {
        onStarTap(position + 1);
      }
    }}
    name={name}
    size={size}
    color={color}
    margin={margin}
  />
);

StarButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  margin: PropTypes.number,
  onStarTap: PropTypes.func,
  readonly: PropTypes.bool,
  position: PropTypes.number,
};

export default StarButton;
