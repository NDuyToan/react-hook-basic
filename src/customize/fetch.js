import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    async function getDataCovid() {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        const data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = item.Date.split("T")[0];
            return item;
          });
          data.reverse();
        }
        setTimeout(() => {
          setIsLoading(false);
          setData(data);
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        setIsErr(true);
        console.log("err", error.name + ": " + error.message);
      }
    }

    getDataCovid();
  }, [url]);

  return {
    data,
    isLoading,
    isErr,
  };
};

export default useFetch;
