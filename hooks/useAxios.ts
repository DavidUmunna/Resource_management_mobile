import axios, { AxiosRequestConfig, Method } from 'axios';
import { useEffect, useState } from 'react';

type UseAxiosProps = {
  url: string;
  method?: Method;
  data?: any;
  config?: AxiosRequestConfig;
};

const useAxios = <T = unknown>({ url, method = 'GET', data, config }: UseAxiosProps) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios({ url, method, data, ...config });
        if (isMounted) {
          setResponse(res.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, method, JSON.stringify(data)]); // re-fetch if these change

  return { response, loading, error };
};

export default useAxios;
