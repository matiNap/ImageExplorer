/* eslint react-hooks/exhaustive-deps: 0 */

import { useState, useEffect } from "react";
import { fetchUserPhotos } from "../apis/unsplash";
import { Image } from "../types";

export default (userId: string, page: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<null | Image[]>(null);
  useEffect(() => {
    setLoading(true);
    fetchUserPhotos(userId, page)
      .then(({ data }) => {
        const prevImages = images ? images : [];
        console.log(data);
        setLoading(false);
        setImages([...prevImages, ...data]);
      })
      .catch(() => {
        setError(true);
      });
  }, [page, userId]);

  return { loading, error, images };
};
