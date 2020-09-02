import { useState, useEffect } from "react";
import { fetchSimilarImages } from "../apis/unsplash";

export default (color: string | null, query: string | null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [similarImages, setSimilarImages] = useState([]);

  useEffect(() => {
    if (color && query) {
      fetchSimilarImages(query)
        .then(({ data }) => {
          setLoading(false);
          setSimilarImages(data.results);
        })
        .catch((error) => {
          setError(true);
        });
    }
  }, [color, query]);

  return { similarImages, loading, error };
};
