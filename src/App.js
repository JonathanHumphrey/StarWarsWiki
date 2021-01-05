import React, { useState, useEffect } from 'react'
import './App.css';

import Header from './Components/Header'
import Search from './Components/Search'
import Information from './Components/Information'

function App() {
  const [queryType, setQueryType] = useState('people')
  const [loading, setLoading] = useState(true)
  const [information, setInformation] = useState([])
  const [error, setError] = useState(null)
  const [starShips, setStarShips] = useState([])


  /* useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => {
        setStarShips([...' '],data)
        setLoading(false)
    })
  }, []) */
  const search = searchValue => {
    setLoading(true)
    setError(null)
    fetch(`https://swapi.dev/api/${queryType}/?search=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        setInformation(data.results[0])
        data.results[0].starships.map((i) => {
          console.log(i)
          fetch(i)
            .then(response => response.json())
            .then(data => {
              let newArr = []
              console.log('data', data)
              setStarShips(data)
              newArr.push(starShips)
              console.log(newArr)
            })
            .catch(err => console.log(err))
        }) 
        console.log(starShips)
    })
  }
  return (
    <div className="App">
      <Header
      />
      <Search 
        search={search}
        setQueryType={setQueryType}
        setInformation={setInformation}
      />
      <p>Search up your favorite {queryType}!</p>
      <div className='information'>
        <Information
          information={information}
          queryType={queryType}
          starShips={starShips}
        />
      </div>

    </div>
  );
}

export default App;
