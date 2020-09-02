export interface User {
  username: string;

  first_name: string;
  last_name: string;
  id: string;
  location: string;
  name: string;
  profile_image: {
    large: string;
    medium: string;
    small: string;
  };
  instagram_username: string;
  twitter_username: string;
  total_likes: number;
  total_photos: number;
}

export interface Image {
  id: string;
  uri: string;
  color: string;
  created_at: string;
  description: string;
  likes: number;
  links: {
    download: string;
    download_location: string;
  };
  user: User;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  height: number;
  width: number;
}

export interface Tag {
  type: string;
  title: string;
}
export interface SingleImage extends Image {
  exif: {
    make: string;
    model: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  tags: Tag[];
  downloads: number;
}
