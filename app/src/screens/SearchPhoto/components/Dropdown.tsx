import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/styles";
import { FiChevronDown } from "react-icons/fi";
import * as qs from "qs";
import { current } from "@reduxjs/toolkit";
import _ from "lodash";

interface Item {
  label: string;
  value: string;
}

interface Props {
  renderContent: ({
    setValue,
  }: {
    setValue: (value: string) => void;
  }) => React.ReactElement[];
  valueKey: string;
  defaultValue: string;
  items: Item[];
}

const createSearch = (
  currentSearch: string,
  value: string,
  key: string
): string => {
  const params = qs.parse(currentSearch, { ignoreQueryPrefix: true });

  if (value.length === 0) {
    return `?query=${params["query"]}`;
  } else if (!params[key]) {
    return `?${qs.stringify({ ...params })}` + `&${value}`;
  } else return `?${qs.stringify({ ...params })}` + `&${value}`;
};

export default ({ renderContent, valueKey, defaultValue, items }: Props) => {
  const history = useHistory();
  const {
    location: { pathname, search },
  } = history;

  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    const params = qs.parse(search, { ignoreQueryPrefix: true });
    const currentParam = params[valueKey];
    const currentIndex = _.findIndex(
      items,
      ({ value }) => value === `${valueKey}=${currentParam}`
    );
    const value =
      currentParam && currentIndex !== -1
        ? items[currentIndex].label
        : defaultValue;
    setCurrentValue(value);
  }, [search]);

  const [selecting, setSelecting] = useState(false);
  const { palette } = useTheme();

  const setValue = useCallback((value: string) => {
    history.push(createSearch(search, value, valueKey));
  }, []);
  return (
    <div className="dropdown" onClick={() => setSelecting(!selecting)}>
      <div className="dropdown-selected-value-container">
        <Typography className="dropdown-selected-value">
          {currentValue}
        </Typography>
        <FiChevronDown
          color={palette.text.primary}
          className={`dropdown-icon ${
            selecting ? "dropdown-icon-selecting" : ""
          }`}
        />
      </div>
      <div
        className={`dropdown-content ${
          selecting ? "dropdown-content-selecting" : ""
        }`}
        style={{ backgroundColor: palette.secondary.text }}
      >
        {renderContent({
          setValue,
        })}
      </div>
    </div>
  );
};
