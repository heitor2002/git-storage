import { useEffect, useState } from "react";

export default function fetchApi(url) {
  const [data, setData] = useState(null);
  useEffect(async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json)
      return {data}
    } catch (err) {}
  }, [url]);
}
