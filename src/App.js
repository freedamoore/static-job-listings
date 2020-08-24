import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBox from './components/FilterBox';
import Card from './components/Card';
import './App.css';
import data from './data/data.json';


function App() {

  const [filterList, setFilterList] = useState([]);

  const addToFilter = (e) => setFilterList([...filterList, e.target.innerText]);

  const containsFilterItem = (filterArray, array1, array2, item1, item2) => {
    for (let i = 0; i < filterArray.length; i++)
      if (array1.includes(filterArray[i]) || array2.includes(filterArray[i]) || item1 === filterArray[i] || item2 === filterArray[i]) {
        return true;
      }
  }

  let filteredjobs;
  if (filterList.length) {
    filteredjobs = data.filter(job => containsFilterItem(filterList, job.languages, job.tools, job.level, job.role));
  } else {
    filteredjobs = data;
  }

  console.log(filterList);
  // console.log(filteredjobs);

  return (
    < div className="App" >
      <Header />
      <FilterBox />
      {
        filteredjobs.map(item => (
          <Card key={item.id} jobDetails={item} addToFilter={addToFilter} />
        ))
      }
      <Footer />
    </div >
  );
}

export default App;
