import React, { useState, useEffect } from "react";
import "./SourceFilter.css";

const sourceData = [
  "CNN",
  "CNBC",
  "CBS News",
  "YouTube",
  "Space.com",
  "Richmond.com",
  "USA Today"
];

const SourceFilter = ({
  selectedSources,
  handleCheckboxChange,
}) => {
  // const [checkedSources, setCheckedSources] = useState([]);
  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setCheckedSources([...checkedSources, value]);
  //   } else {
  //     setCheckedSources(checkedSources.filter((source) => source !== value));
  //   }
  // };
  // useEffect(() => {
  //   onFilterChange(checkedSources);
  // }, [checkedSources]);

  return (
    <div className="source">
      {sourceData.map((source, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={source}
            checked={selectedSources.includes(source)}
            onChange={handleCheckboxChange}
          />
          <span>{source}</span>
        </label>
      ))}
    </div>
  );
};

export default SourceFilter;
