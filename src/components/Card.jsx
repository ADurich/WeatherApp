import React,{useState} from 'react';
import './Card.css';
import Cards from './Cards.jsx';

export default function Card ({min, max, name, img, id,}) {

    //const [nameCity,setNameCity] = useState({check:false})
/*
    function onClose(){
      let deletedCity=cities.cities.filter(el=>el.id!==id)
      setNameCity({
          ...nameCity,
          check:true,
          cities:deletedCity
        
        })
    }*/
    //if(!nameCity.check){
      return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
    //}else{
      //return(
        //<Cards cities={nameCity} />
       // )
    //}
};
