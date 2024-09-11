import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsFeed from './NewsFeed';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Pagination from './Pegination';
import './App.css';
import backgroundImage from './assets/n2.jpg';






const API_KEY = 'eab851244488d038cb3bd4173f56db6b';
const API_URL = 'https://gnews.io/api/v4/search';


const App = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
 
   
  

  const fetchNews = async (page = 1, searchTerm = '', category = '', country = '', language = 'en') => {
    const pageSize = 10;
    const query = searchTerm || 'latest news';
    const categoryParam = category ? `&category=${category}` : '';
    const countryParam = country ? `&country=${country}` : '';
    const languageParam = language ? `&language=${language}` : '';

    const url = `${API_URL}?q=${query}&token=${API_KEY}&page=${page}&max=${pageSize}${categoryParam}${countryParam}${languageParam}`;
    
    
    try {
      const response = await axios.get(url);
      setNews(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalArticles / pageSize));
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(page, searchTerm, category, country, language);
  }, [page, searchTerm, category, country, language]);

  return (
    <div className="container1" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h1 className="text-center my-4">News Feed🌍</h1>
    <SearchBar setSearchTerm={setSearchTerm} />
    <Filters setCategory={setCategory} setCountry={setCountry} setLanguage={setLanguage} />
    <NewsFeed news={news} />
    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
  </div>
  );
};

export default App;
