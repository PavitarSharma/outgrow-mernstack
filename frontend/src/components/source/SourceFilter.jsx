import React, { useState, useEffect } from "react";


const SourceFilter = ({ selectedSources, onFilterChange, sourceData }) => {
  const [checkedSources, setCheckedSources] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedSources([...checkedSources, value]);
    } else {
      setCheckedSources(checkedSources.filter((source) => source !== value));
    }
  };
  useEffect(() => {
    onFilterChange(checkedSources);
  }, [checkedSources]);

  return (
    <div>
      <h2>Select Sources:</h2>
      {sourceData.map((source, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={source}
            checked={selectedSources.includes(source)}
            onChange={handleCheckboxChange}
          />
          {source}
        </label>
      ))}
    </div>
  );
};

export default SourceFilter;
