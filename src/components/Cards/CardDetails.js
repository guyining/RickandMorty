import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Cards.module.scss'

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, created } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
    <div className="d-flex flex-column gap-3">
      <div className="content">
        <div className="row">
          <div className="col-4">
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
          </div>
          <div className="col-8">
            <br />
            <br />
            <h1 className="">{name}</h1>
          </div>
        </div>
      </div>
      <h2>Personal Info</h2>
      
      <div className="content">
        <div className="">
          <span className="fw-bold">Status : </span>
          {status}
        </div>
        <div className="">
          <span className="fw-bold">Gender : </span>
          {gender}
        </div>
        <div className="">
          <span className="fw-bold">Species: </span>
          {species}
        </div>
        <div className="">
          <span className="fw-bold">Location: </span>
          {location?.name}
        </div>
        <div className="">
          <span className="fw-bold">Origin: </span>
          {origin?.name}
        </div>
        <div className="">
          <span className="fw-bold">Created Date: </span>
          {created}
        </div>
        
      </div>

      <h2>Episodes</h2>

    </div>
  </div>
);
};

export default CardDetails;