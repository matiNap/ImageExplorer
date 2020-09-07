import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import { useHistory } from "react-router-dom";
import * as qs from "qs";
import { searchUsers } from "../../apis/unsplash";
import { User } from "../../types";
import UserItem from "./components/UserItem";
import "./style.css";
import { DISABLED } from "../../theme";
import Loader from "../../components/Loader";

const renderInfoPlaceholder = (
  users: null | any[],
  error: boolean,
  loading: boolean
) => {
  if (users && users.length === 0 && !loading) {
    return (
      <div className="error-placeholder-container">
        <h1 style={{ color: DISABLED }}>Can not find any user</h1>
      </div>
    );
  } else if (error)
    return (
      <div className="error-placeholder-container">
        <h1 style={{ color: DISABLED }}>Something went wrong</h1>
      </div>
    );
  else return <Loader />;
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const {
    location: { search },
  } = useHistory();
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  useEffect(() => {
    setLoading(true);
    setError(false);
    searchUsers(params["query"])
      .then(({ data }) => {
        setLoading(false);

        setUsers(data.results);
      })
      .catch(() => {
        setError(true);
      });
    // eslint-disable-next-line
  }, [search]);

  return (
    <Container>
      <SearchNav />
      {!loading && !error ? (
        <ul className="search-user-list">
          {users.map((user) => (
            <UserItem user={user} />
          ))}
        </ul>
      ) : (
        renderInfoPlaceholder(users, error, loading)
      )}
    </Container>
  );
};
