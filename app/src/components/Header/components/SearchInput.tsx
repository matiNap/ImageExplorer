import React, { useState, useMemo } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";
import { SEARCH_PHOTOS, SEARCH_USER } from "../../../navRoutes";
import useQueryParam from "../../../hooks/useQueryParam";
import { useHistory } from "react-router-dom";

export default () => {
  const [value, setValue] = useState("");
  const { palette } = useTheme();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const query = useQueryParam();
  useMemo(() => {
    if (query) setValue(query);
  }, [query]);
  return (
    <div className="search-input-container">
      <FiSearch
        size={27}
        color={palette.text.primary}
        type="text"
        className="search-input-icon"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ color: palette.text.primary }}
        type="text"
        placeholder="Search image"
        className="search-input"
        onKeyDown={(e) => {
          if (e.key === "Enter")
            history.push(
              `${
                pathname === SEARCH_USER ? SEARCH_USER : SEARCH_PHOTOS
              }?query=${value}`
            );
        }}
      />
      <div className="search-delete-container">
        {value.length > 0 && (
          <FiX
            size={15}
            color={palette.text.primary}
            onClick={() => setValue("")}
          />
        )}
      </div>
    </div>
  );
};
