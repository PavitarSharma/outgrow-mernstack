import React, { useState, useEffect } from "react";
import "./SourceFilter.css";

const sourceData = [
  "Computerworld.dk",
  "Tom's Guide",
  "Seeking Alpha",
  "Diepresse.com",
  "Www.bt.dk",
  "Biztoc.com",
  "Handelsblatt",
  "Slickdeals.net",
  "A16z.com",
  "Jalopnik",
  "Orf.at",
  "Jornaldenegocios.pt",
  "Daily Mail",
  "New York Post",
  "Motley Fool",
  "Www.vg.no",
  "PRNewswire",
  "Killerstartups.com",
  "Business Insider",
  "Génération NT",
  "Elchapuzasinformatico.com",
  "Wirtschafts Woche",
  "Meneame.net",
  "Autoblog",
  "Billings Gazette",
  "Richmond.com",
  "Roanoke Times",
  "Techblog.gr",
  "Forbes",
  "FRANCE 24 English",
  "Fortune",
  "The Denver Post",
  "Barron's",
  "Electrek",
  "MarketWatch",
  "CNBC",
  "Environment + Energy Leader",
  "Newsweek",
  "Giga",
  "RTL Nieuws",
  "GlobeNewswire",
  "Yahoo Entertainment",
  "Challenges",
  "PBS",
  "Xataka.com",
  "RoadandTrack.com",
  "International Business Times",
  "Madshrimps.be",
  "Lastampa.it",
  "Habr.com",
  "Toronto Star",
  "Associated Press",
  "Gizmodo Australia",
  "Gizmodo.com",
  "Clubic",
  "Vnexpress.net",
  "The Guardian",
  "BMWBLOG",
  "Reviewgeek.com",
  "CNET",
  "Eschatonblog.com",
  "VentureBeat",
  "Wattsupwiththat.com",
  "PC Games Hardware",
  "Www.hln.be",
];

const SourceFilter = ({ selectedSources, onFilterChange }) => {
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
    <div className="source">
      {sourceData.map((source, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={source}
            checked={selectedSources.includes(source)}
            onChange={handleCheckboxChange}
          />
          <span> {source}</span>
        </label>
      ))}
    </div>
  );
};

export default SourceFilter;
