import { useState } from "react";
import axios from "axios";




export function NavBar({onChangeFunction, onClickFunction}){




    return(
     <div className="w-full h-[100px] flex justify-between items-center bg-cyan-700 p-[10px] text-white">
       <h1 className="text-2xl font-bold">NEWS</h1>
       <a>Get connected to the World through News</a>
      <div className="flex gap-3">
      <input onChange={(e)=>{
        onChangeFunction(e.target.value)
       }} className="h-[50px] text-black p-4 rounded-lg outline-none" placeholder="Search for latest news" type="text"/>
       <button onClick={onClickFunction} className="h-[50px] text-cyan-950 bg-teal-200 p-5 flex justify-center items-center rounded-lg hover:text-blue-800 hover:bg-cyan-400">Search</button>
      </div>
      
     </div>
    )
}