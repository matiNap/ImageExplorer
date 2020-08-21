import React from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";

export default () => {
  const { palette } = useTheme();
  return (
    <div className="search-input-container">
      <FiSearch size={31} color={palette.text.primary} />
      <input
        style={{ color: palette.text.primary }}
        type="search"
        placeholder="Search image"
        className="search-input"
      />
    </div>
  );
};
