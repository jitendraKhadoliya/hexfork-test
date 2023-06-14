"use client";
// import React, { useEffect, useState } from "react";

// const useDataFetcher = (url, headers, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const queryParams = new URLSearchParams(query);
//         const apiUrl = `${url}?${queryParams}`;

//         const response = await fetch(apiUrl, {
//           method: "GET",
//           headers: headers,
//         });
//         if (!response.ok) {
//           throw new Error("failed to fetch the data");
//         }
//         const responseData = await response.json();
//         // if (responseData.data) {
//         setData(responseData.data);
//         // }
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//   }, [url, headers, query]);
//   return { data, isLoading, error };
// };

// export default useDataFetcher;

// ! to test in local I have created an hook to fetch data and save it into LocalStorage and access it from localStorage

import { useState, useEffect } from "react";

const useDataFetcher = (url, headers, query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams(query);
        const apiUrl = `${url}?${queryParams}`;

        const cacheKey = `${apiUrl}-${JSON.stringify(headers)}`;

        // Check if the data exists in localStorage
        const storedData = localStorage.getItem(cacheKey);
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: headers,
          });

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const responseData = await response.json();
          if (responseData.data) {
            setData(responseData);
            // Store the fetched data in localStorage
            localStorage.setItem(cacheKey, JSON.stringify(responseData));
          }
        }
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useDataFetcher;
