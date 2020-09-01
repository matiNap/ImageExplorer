import React, { useState } from "react";
import UserAvatar from "./UserAvatar";
import { FiDownload, FiInfo, FiShare2 } from "react-icons/fi";
import { IconButton, Theme, withTheme } from "@material-ui/core";
import ImageLookup from "./ImageLookup";
import SharePopup from "./SharePopup";
import InfoDialog from "./InfoDialog";
import { connect } from "react-redux";
import { fetchCurrentImages } from "../../../reducers/appReducer";
import { RootState } from "../../../store";
import { SingleImage } from "../../../types";

interface Props {
  fetchCurrentImages: any;
  theme: Theme;
  photoId: string;
  currentImage: {
    loading: boolean;
    error: boolean;
    data: SingleImage | any;
  };
}
class Lookup extends React.Component<Props> {
  state = {
    infoOpened: false,
  };
  componentDidMount() {
    const { photoId } = this.props;
    this.props.fetchCurrentImages(photoId);
  }
  render() {
    const { infoOpened } = this.state;
    const { palette } = this.props.theme;
    console.log(this.props.currentImage);
    const { data, loading, error } = this.props.currentImage;
    if (data && !loading) {
      const {
        urls: { full: imgUrl },
        links: { download },
        user,
      } = data;
      const { profile_image } = user;
      return (
        <div className="lookup-container">
          <UserAvatar
            name={user.name}
            username={user.username}
            avatarUri={profile_image.medium}
          />
          <ImageLookup src={imgUrl} />
          <div className="lookup-panel">
            <SharePopup />
            <a href={download} target="_blank">
              <IconButton>
                <FiDownload />
              </IconButton>
            </a>
            <IconButton onClick={() => this.setState({ infoOpened: true })}>
              <FiInfo />
            </IconButton>
            <InfoDialog
              opened={infoOpened}
              onClose={() => this.setState({ infoOpened: false })}
            />
          </div>
        </div>
      );
    } else return <div>Loading</div>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentImage: state.app.selectedData,
  };
};

export default connect(mapStateToProps, { fetchCurrentImages })(
  withTheme(Lookup)
);
