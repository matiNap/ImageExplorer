/* eslint react/jsx-no-target-blank: 0 */

import React from "react";
import UserAvatar from "./UserAvatar";
import { FiDownload, FiInfo } from "react-icons/fi";
import { IconButton, Theme, withTheme } from "@material-ui/core";
import ImageLookup from "./ImageLookup";
import SharePopup from "./SharePopup";
import InfoDialog from "./InfoDialog";
import { connect } from "react-redux";
import {
  fetchCurrentImage,
  nextImage,
  prevImage,
} from "../../../reducers/appReducer";
import { RootState } from "../../../store";
import { SingleImage, Image } from "../../../types";
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import LookupPlaceholder from "./LookupPlaceholder";
import { DISABLED } from "../../../theme";

interface Props {
  fetchCurrentImage: any;
  theme: Theme;
  photoId: string;
  nextImage: any;
  prevImage: any;
  moving: boolean;
  currentImage: {
    loading: boolean;
    error: boolean;
    data: SingleImage | any;
  };
  selectedImages: Image[] | null;
}
class Lookup extends React.Component<Props> {
  state = {
    infoOpened: false,
  };
  componentDidMount() {
    const { photoId, selectedImages, moving } = this.props;

    if (!selectedImages && !moving) {
      this.props.fetchCurrentImage(photoId, null);
    }
  }

  render() {
    const { infoOpened } = this.state;
    const { palette } = this.props.theme;
    const { data, loading, error } = this.props.currentImage;

    if (!loading && data && !error) {
      const {
        urls: { full: imgUrl },
        links: { download },
        user,
        width,
        height,
        color,
      } = data;
      const { profile_image } = user;
      return (
        <div className="lookup-container">
          <FiChevronLeft
            onClick={() => {
              this.props.prevImage();
            }}
            size={45}
            className="lookup-next-image"
            color={palette.text.primary}
          />
          <FiChevronRight
            onClick={() => {
              this.props.nextImage();
            }}
            size={45}
            className="lookup-prev-image"
            color={palette.text.primary}
          />
          <UserAvatar
            name={user.name}
            username={user.username}
            avatarUri={profile_image.medium}
          />
          <ImageLookup
            src={imgUrl}
            width={width}
            height={height}
            color={color}
          />
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
              imageData={data}
              opened={infoOpened}
              onClose={() => this.setState({ infoOpened: false })}
            />
          </div>
        </div>
      );
    } else if (loading && !error) {
      return (
        <div className="lookup-placeholder-container">
          <LookupPlaceholder />
        </div>
      );
    } else {
      return (
        <div className="error-placeholder-container">
          <FiImage size={100} color={DISABLED} />
          <h1 style={{ color: DISABLED }}>This image does not exist</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentImage: state.app.selectedData,
    selectedImages: state.app.selectedImages,
    moving: state.app.moving,
  };
};

export default connect(mapStateToProps, {
  fetchCurrentImage,
  nextImage,
  prevImage,
})(withTheme(Lookup));
