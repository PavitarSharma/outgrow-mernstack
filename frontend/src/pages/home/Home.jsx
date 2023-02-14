import React, { useState, useEffect } from "react";
import SourceFilter from "../../components/source/SourceFilter";
import axios from "axios";
import NewsList from "../../components/news/News";
import News from "../../components/news/News";
const Home = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSources, setSelectedSources] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get("http://localhost:5000/api/news", {
      params: { q: searchQuery, sources: selectedSources.join(",") },
    });
    setNews(response.data.news);
  };

  const handleCheckboxChange = (event) => {
    const source = event.target.value;
    if (event.target.checked) {
      setSelectedSources([...selectedSources, source]);
    } else {
      setSelectedSources(selectedSources.filter((s) => s !== source));
    }
  };

  useEffect(() => {
    handleSearch();
  }, [selectedSources, searchQuery]);

  const sourceData = [...new Set(news.map((data) => data.source))];
  
  function handleFilterChange(selected) {
    setSelectedSources(selected);
    console.log(selected);
  }
  return (
    <div>
      <SourceFilter
        selectedSources={selectedSources}
        sourceData={sourceData}
        onFilterChange={handleFilterChange}
      />
      {/* <SearchBar /> */}
      <News news={news} />
    </div>
  );
};

export default Home;
