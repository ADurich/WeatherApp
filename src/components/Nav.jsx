import React,{useState} from 'react';
import './Nav.css';
import '../index.css'
import Cards from './Cards.jsx'
const axios= require('axios');

export default function Nav() {

  const [nameCity,setNameCity] = useState("") 
  const [citiesInfo,setCitiesInfo] = useState({cities:[]})
  const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";  
  var repeatedState=true

  function handleInputChange(e){
    e.preventDefault() 
    setNameCity(e.target.value) 
  }

  function handleSort(e){
    e.preventDefault()
    let orderName = e.target.value === 'asc' ?
                    citiesInfo.cities.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    citiesInfo.cities.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })

    setCitiesInfo({
                  ...citiesInfo,
                  cities:orderName                                        
                  })                
     
  }

  function handleSortTemp(e){
    e.preventDefault() 
    let orderTemp = e.target.value === 'min' ?
                    citiesInfo.cities.sort(function (a, b) {
                        if (a.temp > b.temp) {
                            return 1;
                        }
                        if (b.temp > a.temp) {
                            return -1;
                        }
                        return 0;
                    }) :
                    citiesInfo.cities.sort(function (a, b) {
                        if (a.temp > b.temp) {
                            return -1;
                        }
                        if (b.temp > a.temp) {
                            return 1;
                        }
                        return 0;
                    })

    setCitiesInfo({
                  ...citiesInfo,
                  cities:orderTemp                                        
                  })
  }

  async function handleSubmit(e){
    e.preventDefault(); 
    try{
      const infoWeather=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${API_KEY}&units=metric`);      

    citiesInfo.cities.map(el=>{
      if(nameCity===el.name){
        repeatedState=false
      }
    })

    if(repeatedState){
      setCitiesInfo({
          ...citiesInfo,
          cities:[...citiesInfo.cities,
                  {
                    name:infoWeather.data.name,
                    id:infoWeather.data.id,
                    temp:Math.round(infoWeather.data.main.temp),
                    min:Math.round(infoWeather.data.main.temp_min),
                    max:Math.round(infoWeather.data.main.temp_max),
                    img: infoWeather.data.weather[0].icon
                  }
                ]         
        })
    }
      setNameCity("");
      
    }catch(error){
      console.log(error)
      alert("Colocar un ciudad que exista")
    }
    
  }  


  return (
    <div>
        <nav id="navbar" className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input value={nameCity} className="form-control mr-sm-2" type="text" placeholder="Ciudad..." aria-label="Search" onChange = {(e) => handleInputChange(e)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => handleSubmit(e)}>Agregar</button>
          </form>
        </nav> 
        <select onChange = {(e) => handleSort(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>        
        <select onChange = {(e) => handleSortTemp(e)}>
          <option value="min">Mínimo</option>
          <option value="max">Máximo</option>
        </select>
         <div className='cards'>
            {citiesInfo.cities.map(el => 
              <div key={el.id} className="col-sm-4 col-md-4 col-lg-4">
                <div className="card" id="card">
                  <div id="closeIcon" className="row">
                      <button onClick={function onClose(e){
                      let nameCities=citiesInfo.cities.filter(c=> c.id!==el.id)
                      setCitiesInfo({
                            ...citiesInfo,
                            cities:nameCities                                        
                          })
                      }} className="btn btn-sm btn-danger">X</button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <h2>{el.temp}°</h2>
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <p>Min</p>
                        <p>{el.min}°</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <p>Max</p>
                        <p>{el.max}°</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+el.img+"@2x.png"} width="80" height="80" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
             )}
         </div>      
    </div>
  );
};

