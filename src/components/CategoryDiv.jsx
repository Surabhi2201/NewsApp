import { useEffect } from "react";
import { CategoryBtn } from "./CategoryBtn";


export function CategoryDiv({onClickFunction}){
    useEffect(()=>{
      
    },[])
    return <div className="w-full flex  h-[100px] pt-5 justify-center items-center">
      <div className="flex w-full justify-evenly">
      <CategoryBtn onClickFunction={onClickFunction} category='Sports'/>
        <CategoryBtn  onClickFunction={onClickFunction} category='Entertainment'/>
        <CategoryBtn onClickFunction={onClickFunction} category='Politics'/>
        <CategoryBtn onClickFunction={onClickFunction} category='Health'/>
        <CategoryBtn onClickFunction={onClickFunction} category='Fitness'/>
      </div>
    </div>
}