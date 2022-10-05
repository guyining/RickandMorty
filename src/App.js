import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Cards } from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Search from './components/Search/Search';
import Navbar from "./components/Navbar/Navbar";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from './components/Cards/CardDetails';
import Episodes from './components/Cards/Episodes';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/contact" element={<Home />} />
        <Route path="/contact/:id" element={<Home />} />

      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json())
      updateFetchedData(data);
      //console.log(data);
    })()

  }, [api])
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-1">           
          </div>
          <div className="col-4">
            <div className="row">
              <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
            </div>
            <div className="row">
              <Filters
                pageNumber={pageNumber}
                status={status}
                updateStatus={updateStatus}
                updateGender={updateGender}
                setPageNumber={setPageNumber}
              />
            </div>
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
          <div className="col-7">
            <CardDetails results={results} />
            <Episodes results={results}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
