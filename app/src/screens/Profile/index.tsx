import React from "react";
import UserInfo from "./components/UserInfo";
import "./style.css";
import Container from "../../components/Container";
import UserPhotos from "./components/UserPhotos";
import { fetchUserData } from "../../apis/unsplash";
import { User } from "../../types";
import { DISABLED } from "../../theme";

interface Props {
  match: {
    params: {
      userId: string;
    };
  };
  fetchUser: any;
}

interface State {
  loading: boolean;
  user: User | null;
  error: boolean;
}

class Profile extends React.Component<Props, State> {
  state = {
    user: null,
    loading: true,
    error: false,
  };
  componentDidMount() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;

    fetchUserData(userId)
      .then(({ data }) => {
        this.setState({ user: data, loading: false });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }
  render() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;
    const { user, loading, error } = this.state;
    if (!error) {
      return (
        <Container>
          <UserInfo {...{ user, loading }} />
          <UserPhotos {...{ userId }} />
        </Container>
      );
    } else
      return (
        <Container>
          <div className="error-placeholder-container">
            <h1 style={{ color: DISABLED }}>User doest not exist</h1>
          </div>
        </Container>
      );
  }
}

export default Profile;
