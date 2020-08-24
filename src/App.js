import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBox from './components/FilterBox';
import Card from './components/Card';
import './App.css';
import data from './data/data.json';


function App() {

  const [filterList, setFilterList] = useState([]);

  const addToFilter = (e) => {
    if(!filterList.includes(e.target.innerText)){
      setFilterList([...filterList, e.target.innerText]);
    }
  }

  const removeFilter = (itemToRemove) => {
    const newList = filterList.filter(item => item !== itemToRemove.item)
    setFilterList(newList);
  }

  const clearAllFilters = () => setFilterList([]);
  
  const containsFilterItem = (filterArray, array1, array2, item1, item2) => {
    for (let i = 0; i < filterArray.length; i++)
      if (array1.includes(filterArray[i]) || array2.includes(filterArray[i]) || item1 === filterArray[i] || item2 === filterArray[i]) {
        return true;
      }
  }

  //if there are no filters, show all jobs otherwise show filtered jobs
  let filteredjobs;
  if (filterList.length) {
    filteredjobs = data.filter(job => containsFilterItem(filterList, job.languages, job.tools, job.level, job.role));
  } else {
    filteredjobs = data;
  }

  // console.log(filterList);
  // console.log(filteredjobs);

  return (
    < div className="App" >
      <Header />
      {
        filterList.length ? <FilterBox filterList={filterList} clearAllFilters={clearAllFilters} removeFilter={removeFilter} /> : null
      }
     
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
