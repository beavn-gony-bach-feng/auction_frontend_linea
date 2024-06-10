"use client";

import { fetchJson, usePostRequest } from "@/lib/fetchJson";
import React, { useEffect } from "react";

type Props = {
    url: string;
    query: string;
};

export const useTheGraph = ({ url, query }:Props) => {
  const {
    data, loading, error, postData,
  } = usePostRequest(
    url,
  );
  useEffect(() => {
    const getData = async () => {
      try {
        postData({
          query,
        });
      } catch (err: any) {
        console.error(err);
      } finally {
        console.log("finally");
      }
    };
    getData();
  }, []);
  return { data, loading, error };
};
