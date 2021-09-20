import './App.css';
import Countries from './component/Countries/Countries';
import Heading from './component/Heading/Heading';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Countries></Countries>
    </div>
  );
}


export default App;


/*
import logo from './logo.svg';

import { useEffect, useState } from 'react';

<Title></Title>
<Main></Main>


function Title(){
  return(
    <h1>ALL Country Contant</h1>
  )
}
function Countries(){
   
  const [ countrys, setCountries ] = useState([]);

  useEffect( () =>{
     fetch('https://restcountries.eu/rest/v2/all').then( res => res.json()).then( data => setCountries(data))
  },[])

  return(
    <div  className="compo-box">
        {
          // name,flag,population,nativeName
          countrys.map( country => <ShowData name={country.name} flag={country.flag} population={country.population} nativeName={country.nativeName}></ShowData>)
        }
   </div>
  )
}


function Main(){
  return (
   <div className="compo-container">
     {<Countries></Countries>}
   </div>
  )
}


function ShowData(propes){
  const {name,flag,population,nativeName} = propes;
   return( 
    <div>
        <img src={flag} />
        <h3> Name: {name}</h3>
        <h4>People : {population}</h4>
        <h4>Native Name : {nativeName}</h4>
    </div>
   )
}

*/
