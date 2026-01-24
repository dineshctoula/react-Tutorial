import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error(error));
  }, [url]); // runs again if URL changes

  return data;
}

export default useFetch;
