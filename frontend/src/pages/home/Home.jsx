import React, { useState, useEffect } from "react";
import SourceFilter from "../../components/source/SourceFilter";
import axios from "axios";
import "./Home.css"
import News from "../../components/news/News";
import SearchBar from "../../components/search/SearchBar";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSources, setSelectedSources] = useState([]);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://outgrow-backend.onrender.com/api/news",
        {
          params: { q: searchQuery, sources: selectedSources.join(",") },
        }
      );
      setNews(response.data.news);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleCheckboxChange = (event) => {
    const source = event.target.value;
    const checked = event.target.checked;
    setSelectedSources((prevSelectedSources) =>
      checked
        ? [...prevSelectedSources, source]
        : prevSelectedSources.filter((s) => s !== source)
    );
  };

  useEffect(() => {
    handleSearch();
  }, [selectedSources, searchQuery]);

  // const handleSearch = async () => {
  //   const response = await axios.get("http://localhost:5000/api/news", {
  //     params: { q: searchQuery, sources: selectedSources.join(",") },
  //   });
  //   setNews(response.data.news);
  // };

  const sourceData = [...new Set(news.map((data) => data.source))];

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/news");
  //       setNews(response.data.news);
  //     } catch (err) {
  //       console.error(`Error fetching news: ${err.message}`);
  //     }
  //   };
  //   fetchNews();
  // }, []);

  // const handleCheckboxChange = (event, source) => {
  //   if (event.target.checked) {
  //     setSelectedSources([...selectedSources, source]);
  //   } else {
  //     setSelectedSources(selectedSources.filter((s) => s !== source));
  //   }
  // };

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
        // onFilterChange={handleFilterChange}
        handleCheckboxChange={handleCheckboxChange}
      />
      {loading ? (
        <div className="loading">
          <p>Loading....</p>
        </div>
      ) : (
        <News news={news} />
      )}
      
    </div>
  );
};

export default Home;
