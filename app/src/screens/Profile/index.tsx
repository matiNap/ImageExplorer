import React from "react";
import { fetchUser } from "../../reducers/userReducer";
import { connect } from "react-redux";
import UserInfo from "./components/UserInfo";
import "./style.css";
import Container from "../../components/Container";
import UserPhotos from "./components/UserPhotos";

interface Props {
  match: {
    params: {
      userId: string;
    };
  };
  fetchUser: any;
}

class Profile extends React.Component<Props> {
  componentDidMount() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;

    this.props.fetchUser(userId);
  }
  render() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;
    return (
      <Container>
        <UserInfo />
        <UserPhotos {...{ userId }} />
      </Container>
    );
  }
}

export default connect(null, { fetchUser })(Profile);
