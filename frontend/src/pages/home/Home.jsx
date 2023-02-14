import React, { useState, useEffect } from "react";
import SourceFilter from "../../components/source/SourceFilter";
import axios from "axios";
import NewsList from "../../components/news/News";
import News from "../../components/news/News";
import SearchBar from "../../components/search/SearchBar";
const Home = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSources, setSelectedSources] = useState([]);
  

  const handleSearch = async () => {
    const response = await axios.get("https://outgrow-backend.onrender.com/api/news", {
      params: { q: searchQuery, sources: selectedSources.join(",") },
    });
    setNews(response.data.news);
  };

 

  useEffect(() => {
    handleSearch();
  }, [selectedSources, searchQuery]);

  const sourceData = [...new Set(news.map((data) => data.source))];


  function handleFilterChange(selected) {
    setSelectedSources(selected);
    
  }
  return (
    <div className="news">
      <SearchBar
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SourceFilter
        selectedSources={selectedSources}
        sourceData={sourceData}
        onFilterChange={handleFilterChange}
      />

      <News news={news} />
    </div>
  );
};

export default Home;
