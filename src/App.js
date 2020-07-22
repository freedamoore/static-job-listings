import React, { useState } from 'react';
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

  console.log(filterList);
  console.log(filteredjobs);

  return (
    < div className="App" >
      {
        filteredjobs.map(item => (
          <div key={item.id}>
            <h3> {item.company} </h3>
            <ol>{item.languages.map((lang, i) => (<li key={i} onClick={addToFilter} style={{ color: 'blue' }}>{lang}</li>))}</ol>
            <ul>{item.tools.map((tool, i) => (<li key={i} onClick={addToFilter}>{tool}</li>))}</ul>
          </div>
        ))
      }
    </div >
  );
}

export default App;
