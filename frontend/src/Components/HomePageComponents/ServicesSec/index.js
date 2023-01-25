import axios from "axios";
import React, { useEffect, useState } from "react";

import "./index.scss";

function ServicesSec() {
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/users`).then((response) => {
          setData(response.data)
        })
      })
  return (
    <>
      <div>
        <div className="serviceWord">
          <h3>SERVICES</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="serviceCard">
          {data.map((element) => {
            return (
              <div className="cards" key={element.id}>
                <img src={element.imgUrl} alt="img"/>
                <h4>{element.description}</h4>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ServicesSec;
