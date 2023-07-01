"use client";
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, [url]);

  return { data, isLoading };
}
