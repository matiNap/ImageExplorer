import React from "react";
import { selectUser } from "../../../selectors/user";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import { FiMapPin, FiInstagram, FiTwitter } from "react-icons/fi";
import { DISABLED } from "../../../theme";
import Stats from "./Stats";
import UserInfoPlaceholder from "./UserInfoPlaceholder";

export default () => {
  const { user, loading } = useSelector(selectUser);
  const { palette } = useTheme();
  // return <UserInfoPlaceholder />;
  if (!loading && user) {
    const {
      location,
      profile_image,
      username,
      name,
      total_likes,
      total_photos,
      twitter_username,
      instagram_username,
    } = user;
    return (
      <div className="profile-container">
        <div
          style={{ backgroundColor: palette.secondary.main }}
          className="profile-info-header"
        >
          <Avatar
            src={profile_image.large}
            alt="user-profile"
            className="profile-avatar"
          />
          <div className="profile-info">
            <p className="profile-name text-ellipsis">{name}</p>
            <p className="profile-username text-ellipsis">{username}</p>
            {location && (
              <div className="profile-location ">
                <FiMapPin style={{ color: DISABLED }} size={17} />
                <p
                  className="profile-location-text text-ellipsis"
                  style={{ color: DISABLED }}
                >
                  {location}
                </p>
              </div>
            )}
          </div>
          <div className="profile-stats">
            <Stats label="Likes" value={total_likes} />
            <Stats label="Photos" value={total_photos} />
          </div>
        </div>
        <div className="profile-socials-container">
          {instagram_username && (
            <a
              href={`https://www.instagram.com/${instagram_username}`}
              className="profile-social-link"
            >
              <FiInstagram color={palette.text.primary} size={22} />
              <p className="social-name">{instagram_username}</p>
            </a>
          )}
          {twitter_username && (
            <a
              href={`https://www.twitter.com/${twitter_username}`}
              className="profile-social-link"
            >
              <FiTwitter color={palette.text.primary} size={22} />
              <p className="social-name">{twitter_username}</p>
            </a>
          )}
        </div>
      </div>
    );
  } else return <UserInfoPlaceholder />;
};
