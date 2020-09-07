import { useHistory } from "react-router-dom";
import * as qs from "qs";

export default () => {
  const {
    location: { search },
  } = useHistory();
  const params = qs.parse(search, { ignoreQueryPrefix: true });

  return params["query"];
};
