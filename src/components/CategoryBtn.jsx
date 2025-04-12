export function CategoryBtn({category, onClickFunction}){
    return (
        <button onClick={onClickFunction} className="h-[50px] flex justify-center items-center p-5 rounded-lg bg-cyan-700 text-white hover:bg-teal-400 hover:text-black">
           {category}
        </button>
    )
}