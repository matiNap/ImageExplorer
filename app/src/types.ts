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
}
