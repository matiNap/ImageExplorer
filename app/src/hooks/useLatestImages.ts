/* eslint react-hooks/exhaustive-deps: 0 */

import { useState, useEffect } from "react";
import { fetchPhotos } from "../apis/unsplash";
import { Image } from "../types";

export default (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<null | Image[]>(null);
  useEffect(() => {
    setLoading(true);
    fetchPhotos(page)
      .then(({ data }) => {
        const prevImages = images ? images : [];
        setLoading(false);
        setImages([...prevImages, ...data]);
      })
      .catch(() => {
        setError(true);
      });
  }, [page]);

  return { loading, error, images };
};
