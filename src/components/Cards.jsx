import './Cards.css';

export default function Cards({cities}) {
  
    var infoCities=cities

    return (
      <div className='cards'>
        {infoCities.cities.map(el => 
            <div className="card">
              <div id="closeIcon" className="row">
                  <button className="btn btn-sm btn-danger">X</button>
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
    );
  
}
