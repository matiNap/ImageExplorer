import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";
import { SEARCH_PHOTOS } from "../../../navRoutes";
import { useHistory } from "react-router-dom";

export default () => {
  const [value, setValue] = useState("");
  const { palette } = useTheme();
  const history = useHistory();

  return (
    <div className="search-input-container">
      <FiSearch size={31} color={palette.text.primary} type="text" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ color: palette.text.primary }}
        type="search"
        placeholder="Search image"
        className="search-input"
        onKeyDown={(e) => {
          if (e.key === "Enter")
            history.push(`${SEARCH_PHOTOS}?query=${value}`);
        }}
      />
    </div>
  );
};
