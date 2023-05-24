import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [singleVideoId, setSingleVideoId] = useState("");

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi("/").then((response) => {
      console.log(response.data.posts);
      setSearchResults(response.data.posts);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        singleVideoId,
        setSingleVideoId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
