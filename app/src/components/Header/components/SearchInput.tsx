import React, { useState, useEffect, useMemo } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";
import { SEARCH_PHOTOS } from "../../../navRoutes";
import { useHistory } from "react-router-dom";
import * as qs from "qs";

export default () => {
  const [value, setValue] = useState("");
  const { palette } = useTheme();
  const history = useHistory();

  const {
    location: { search },
  } = history;
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  const query = params["query"];
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
            history.push(`${SEARCH_PHOTOS}?query=${value}`);
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
