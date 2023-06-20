import { useEffect, useState } from "react";

export default function fetchApi(url) {
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json()
      setData(json)
    } catch (err) {}
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data };
}
