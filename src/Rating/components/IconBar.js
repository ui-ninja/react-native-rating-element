import React from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const StyledIcon = styled(Icon)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
`;
const StyledImage = styled(Image)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const IconBar = ({
  name,
  size,
  color,
  margin,
  onIconTap,
  readonly,
  position,
  type,
  selectedIconImage,
  emptyIconImage,
  filled = false,
}) => (
  <TouchableOpacity
    onPress={() => {
      if (!readonly) {
        onIconTap(position + 1);
      }
    }}
  >
    {type === "custom" ? (
      <StyledImage
        source={filled ? selectedIconImage : emptyIconImage}
        margin={margin}
        size={size}
      />
    ) : (
      <StyledIcon name={name} size={size} color={color} margin={margin} />
    )}
  </TouchableOpacity>
);

IconBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  margin: PropTypes.number,
  onIconTap: PropTypes.func,
  readonly: PropTypes.bool,
  position: PropTypes.number,
  filled: PropTypes.bool,
  type: PropTypes.oneOf(["icon", "custom"]),
  selectedIconImage: PropTypes.node,
  emptyIconImage: PropTypes.node,
};

export default IconBar;
