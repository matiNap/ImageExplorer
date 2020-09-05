import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import { useHistory } from "react-router-dom";
import * as qs from "qs";
import { searchUsers } from "../../apis/unsplash";
import { User } from "../../types";
import UserItem from "./components/UserItem";
import "./style.css";

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  const {
    location: { search },
  } = useHistory();
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  useEffect(() => {
    setError(false);
    searchUsers(params["query"], page)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        const prev = users ? users : [];
        setUsers([...prev, ...data.results]);
      })
      .catch(() => {
        setError(true);
      });
  }, [search, page, params, users]);
  return (
    <Container>
      <SearchNav />
      <ul className="search-user-list">
        {users.map((user) => (
          <UserItem user={user} />
        ))}
      </ul>
    </Container>
  );
};
