import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';
import data from './data/data.json';

function App() {

  const [filterList, setFilterList] = useState([]);

  const addToFilter = (e) => setFilterList([...filterList, e.target.innerText]);

  const containsFilterItem = (filterArray, array1, array2) => {
    for (let i = 0; i < filterArray.length; i++)
      if (array1.includes(filterArray[i]) || array2.includes(filterArray[i])) {
        return true;
      }
  }

  let filteredjobs;
  if (filterList.length) {
    filteredjobs = data.filter(job => containsFilterItem(filterList, job.languages, job.tools));
  } else {
    filteredjobs = data;
  }

  // console.log(filterList);
  // console.log(filteredjobs);

  return (
    < div className="App" >
      <Header />
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
