import React, { useState } from 'react';

function App() {

  const [state, setState] = useState({data:null,loading:true,error:null});

  const url = `https://www.breakingbadapi.com/api/characters`;
  
  fetch(url)
    .then( resp => resp.json() )
    .then( data => {
      
      setState( {
        data:data,
        loading:false,
        error:null
      } );

    } )
    .catch( () => {

      setState( {
        data:null,
        loading:false,
        error:'No se pudo cargar'
      } );

    } );

  // console.log(state.data)

  return (
    <div className="App container pt-4">
      <h1 className="text-center mb-4">App de BreakingBadApi</h1>
        <div className="cont_cards">
        { 
          state.data &&
          
          state.data.map( item => 
            <div className="card" key={item.char_id}>
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.nickname}</p>
              </div>
            </div>
          
          )
        }
        </div>
      
      
    </div>
  );
}

export default App;
