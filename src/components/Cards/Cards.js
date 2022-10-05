import React from 'react'
import styles from './Cards.module.scss'
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";


export const Cards = ({ page,results }) => {
  let display;
  //if there is data in results, the run the func
  if (results){
    display = results.map(x=>{
      //distract
      let { id, name, image, species} = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${id}`}
          key={id}
        >
        <div key={id} className='mb-4 position-relative'>
          <div className={styles.cards}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src={image} alt="" className={`${styles.img} img-fluid`} />
                </div>
                <div className="col">
                  <div style={{ padding:"10px" }} className="content">
                    <div className="fs-5 fw-bold mb-5">{name}</div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          {(()=>{
            if(species === "Alien"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-danger`}>{species}</div>
              )
            }
            else if (species === "Human"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`}>{species}</div>
              )
            }
            else{
              return(
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{species}</div>
              )
            }
          })()}
          
        </div>
        </Link>
      );
    });
  }
  else{
    display = "No Characters Found";
  }



  //console.log(results)
  return (
    <>{display}</>
  )
}
