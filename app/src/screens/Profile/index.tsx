import React from "react";
import UserInfo from "./components/UserInfo";
import "./style.css";
import Container from "../../components/Container";
import UserPhotos from "./components/UserPhotos";
import { fetchUserData } from "../../apis/unsplash";
import { User } from "../../types";

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
}

class Profile extends React.Component<Props, State> {
  state = {
    user: null,
    loading: true,
  };
  componentDidMount() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;

    fetchUserData(userId).then(({ data }) => {
      this.setState({ user: data, loading: false });
    });
  }
  render() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;
    const { user, loading } = this.state;
    return (
      <Container>
        <UserInfo {...{ user, loading }} />
        <UserPhotos {...{ userId }} />
      </Container>
    );
  }
}

export default Profile;
