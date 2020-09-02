import axios from "axios";

const unsplash = axios.create({
  headers: { Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}` },
  baseURL: "https://api.unsplash.com/",
});

export const fetchUserData = (userId: string) =>
  unsplash.get(`users/${userId}`);

export const fetchUserPhotos = (userId: string, page: number) => {
  return unsplash.get(`users/${userId}/photos`, {
    params: { page, per_page: 30 },
  });
};

export const fetchPhotos = (page: number) => {
  return unsplash.get("/photos", {
    params: {
      page,
      per_page: 30,
    },
  });
};

export const fetchSimilarImages = (query: string) => {
  return unsplash.get("search/photos", {
    params: { query, per_page: 10 },
  });
};

export const fetchPhoto = (imageId: string) => {
  return unsplash.get(`photos/${imageId}`);
};

export const fetchRandomImage = () => {
  return unsplash.get("photos/random");
};

export default unsplash;
