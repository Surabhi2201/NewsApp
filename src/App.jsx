import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { NavBar } from './components/NavBar'
import { CategoryDiv } from './components/CategoryDiv'
import { Card } from './components/Card'

function App() {
  const [searchvalue, setSearchvalue]= useState("india");
  const [news,setNews]= useState([]);
const API_KEY = "8daa8c7738fc47fa8f2af2dabdd9cab3";
const API_KEY2= "8e79104ebmsh3d52daa3ffbcd70p14f118jsn15a0d9ed1926"
const getData = async ()=>{
try{
  let response=await  axios.get(`https://newsapi.org/v2/everything?q=${searchvalue}&apiKey=${API_KEY}`);
  
  let result = await response.data;
  console.log('Data:', response.data);
  setNews(result.articles); 
 }
 catch(error){
   console.log('Error fetching data:', error);
 }
}
const categoryFunction=async(e)=>{
  if(e.target.value==='Sports'){
    setSearchvalue('sports');
    getData();
    
  }
  if(e.target.value==='Technology'){
    setSearchvalue('technology');
    getData();
    
  }
  if(e.target.value==='Politics'){
    setSearchvalue('politics');
    getData();
    
  }
  if(e.target.value==='Health'){
    setSearchvalue('health');
    getData();
    
  }
  if(e.target.value==='Fitness'){
    setSearchvalue('fitness');
    getData();
  }

 
}


  return (
    <>
      <div className='w-full h-full bg-cyan-950'>
      <NavBar onChangeFunction={setSearchvalue} onClickFunction={getData}/>
      <CategoryDiv onClickFunction={categoryFunction}/>
      <Card data={news}/>
      </div>
    </>
  )
}

export default App
