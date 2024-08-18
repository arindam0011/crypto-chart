import React, { useState, useEffect } from 'react';
import '../App.css';
import Table from './Table';

const SearchAndSoetingBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const result = await res.json();
      setData(result);
      setSortedData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredData = data;
    if (searchValue) {
      filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setSortedData(filteredData);
  }, [searchValue, data]);

  const sortData = (key) => {
    const sorted = [...sortedData].sort((a, b) => b[key] - a[key]);
    setSortedData(sorted);
  };

  return (
    <div id="container-main">
      <div className="SearchAndSoetingBar">
        <input
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search By Name or Symbol"
        />
        <div
          id="sort-btn1"
          className="btn"
          onClick={() => sortData('market_cap')}
        >
          Sort By Mkt Cap
        </div>
        <div
          id="sort-btn2"
          className="btn"
          onClick={() => sortData('ath_change_percentage')}
        >
          Sort By Percentage
        </div>
      </div>
      <Table data={sortedData} />
    </div>
  );
};

export default SearchAndSoetingBar;
