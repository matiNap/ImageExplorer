import React, { useState, useEffect } from "react";
import { Image } from "../types";
import { searchPhotos } from "../apis/unsplash";

export default (search: { color?: string; query?: string }, page: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<Image[] | null>(null);

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (!loading) {
      searchPhotos(search, page)
        .then(({ data }) => {
          setLoading(false);
          const prevImages = images ? images : [];
          setImages([...prevImages, ...data.results]);
        })
        .catch(() => {
          setError(true);
        });
    }
    // eslint-disable-next-line
  }, [page]);

  return { error, loading, page, images };
};
