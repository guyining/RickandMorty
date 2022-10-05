import React, { useState, useEffect } from "react";

const Episodes = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    //console.log(info);  combine data to setInfo
    let {name, air_date, episode, created} = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;
    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res) => res.json());
            //console.log(data)
            setInfo(data);
        })();
    }, [api]);
    return(    
      <div className="content">
        <div className="row">
            <div className="col-3">
                Name
            </div>
            <div className="col-3">
                Air Date
            </div>
            <div className="col-3">
                Episode
            </div>
            <div className="col-3">
                Created Date
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                {name}
            </div>
            <div className="col-3">
                {air_date}
            </div>
            <div className="col-3">
                {episode}
            </div>
            <div className="col-3">
                {created}
            </div>
        </div>
    </div>
    );


};

export default Episodes;