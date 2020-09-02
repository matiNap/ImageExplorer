import { useState, useEffect } from "react";
import { fetchSimilarImages } from "../apis/unsplash";

export default (color: string, query: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [similarImages, setSimilarImages] = useState([]);

  useEffect(() => {
    fetchSimilarImages(color, query)
      .then(({ data }) => {
        setLoading(false);
        setSimilarImages(data.results);
      })
      .catch((error) => {
        setError(true);
      });
  }, [color, query]);

  return { similarImages, loading, error };
};
