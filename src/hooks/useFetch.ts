import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, [url]);

  return { data };
};
