export function Card({data}){
    const newsPage = async(url)=>{
       window.open(url);
    }
    return (
       <div className="flex flex-wrap gap-7 justify-center items-center bg-sky-200">
         {data.map((item, index)=>{
          if(item.title!=='[Removed]'){
            return(
              <div className="h-[350px] flex-col justify-center items-center w-full sm:w-[450px] rounded-lg  p-5 bg-sky-200">
                 <img src={item.urlToImage} className="h-[150px]  w-full"/>
                 <div>
                   <a className="font-bold">{item.title}</a>
                   <p className="overflow-auto hide-scrollbar h-[50px]">{item.description}</p>
                   <button onClick={()=>{
                    newsPage(item.url);
                   }} className="h-[50px] p-2 m-4 rounded-sm bg-sky-400 text-black" >Read More</button>
                 </div>
              </div>
            )
          }
         })}
       </div>
    )
}
