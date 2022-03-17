import React,{useState} from 'react';
import Logo from '../logoHenry.png'
import './Nav.css';
import Cards from "./Cards";
const axios= require('axios');

export default function Nav() {

  const [nameCity,setNameCity] = useState("") 
  const [citiesInfo,setCitiesInfo] = useState({cities:[]})  
  const API_KEY='4ae2636d8dfbdc3044bede63951a019b'  
  var repeatedState=true

  //[4,[2, 5, 11],3,[1,3,4]]
  function sumMultArray(array){
    var sumTotal=0
    for(let i=0;i<array.length;i++){
       if(Array.isArray(array[i])){
        sumTotal=sumTotal+sumMultArray(array[i])
       }else{
        sumTotal=sumTotal+array[i]
       }
    }
    return sumTotal
  }
  function handleInputChange(e){
    e.preventDefault() 
    setNameCity(e.target.value) 
  }

  async function handleSubmit(e){
    e.preventDefault(); 
    try{
      const infoWeather=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${API_KEY}&units=metric`);
      //el nombre que pongo como input puede estar tanto en inglés como en español(imagino que también en otros) y en minúsculas.
    //Los que tengan dos o más palabras se ponen así y automáticamente la api les agrega el %20. Osea, obtengo la respuesta.
    //el cambiar el lenguaje cuando hago la llamada solo modifica el campo descripcion y el nombre

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
                    min:Math.round(infoWeather.data.main.temp_min),
                    max:Math.round(infoWeather.data.main.temp_max),
                    img: infoWeather.data.weather[0].icon
                  }
                ]         
        })
    console.log(citiesInfo.cities)
    }
    
    }catch(error){
      console.log(error)
      alert("Colocar un ciudad que exista")
    }
    
  }  


  return (
    <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Ciudad..." aria-label="Search" onChange = {(e) => handleInputChange(e)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => handleSubmit(e)}>Agregar</button>
          </form>
        </nav> 
         <div className='cards'>
            {citiesInfo.cities.map(el => 
                <div className="card">
                  <div id="closeIcon" className="row">
                      <button onClick={function onClose(e){
                      let nameCities=citiesInfo.cities.filter(c=> c.id!==el.id)
                      setCitiesInfo({
                            ...citiesInfo,
                            cities:nameCities                                        
                          })
                      console.log("las ciudades que tengo son: ",nameCities)
                      }} className="btn btn-sm btn-danger">X</button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
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
             )}
         </div>  
         <div>{sumMultArray([4,[2, 5, 11],3,[1,3,4]])}</div>        
    </div>
  );
};

/*

let cityInfo=await infoWeather.data.map((el)=>{
      return {
        name:el.name,
        id:el.id,
        min:Math.round(el.main.temp_min),
        max:Math.round(el.main.temp_max),
        img:el.weather[0].icon
      }
    })
    */