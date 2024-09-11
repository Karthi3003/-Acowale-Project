import React from 'react';

const Filters = ({ setCategory, setCountry, setLanguage }) => {
  return (
    <div className="my-3">
      <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
      </select>

      <select className="form-select mt-3" onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option value="us">United States</option>
        <option value="in">India</option>
      </select>

      <select className="form-select mt-3" onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Select the Language</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
      <br>
      </br>
      <h1 class="rr">World News by 24/7🕐</h1>
      
    </div>
  );
};

export default Filters;
