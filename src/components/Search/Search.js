import React from 'react'
import styles from './Search.module.scss'


const Search = ({ setSearch, setPageNumber }) => {

  return (
    <div>
    <div className="d-flex justify-content-center">
      <h2>Contact</h2>
    </div>
    <form className="d-flex justify-content-center mb-6">
        <input 
        onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }}
            placeholder="Search Characters" type="text" className={styles.input}/>
        
    </form>
    </div>
  )
}

export default Search