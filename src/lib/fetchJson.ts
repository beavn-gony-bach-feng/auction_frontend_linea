import { useState } from "react";
import { postRequestAction } from "./actions";

export const fetchJson = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
};

export const usePostRequest = (url: string | URL | Request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body: any) => {
    setLoading(true);
    setError(null);

    try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });

      //   if (!response.ok) {
      //     throw new Error(`Error: ${response.status}`);
      //   }

      const result = await postRequestAction(url, body);
      setData(result);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data, loading, error, postData,
  };
};
