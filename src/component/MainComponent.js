import React, { useState } from 'react';
import axios from 'axios';
import SearchComponent from './SearchBar';
import ResultsComponent from './ResultsComponent';
import Sidebar from './SideBar';

const MainComponent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://66a359c944aa63704580ddbf.mockapi.io/laptops');
      const filteredItems = response.data.filter(item => 
        item.productName.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filteredItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      
      <div className="flex">
        <Sidebar/>
        <main className="flex-1 p-5 bg-gray-100">
          <ResultsComponent items={items} />
        </main>
      </div>
    </div>
  );
};

export default MainComponent;
