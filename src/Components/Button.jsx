export default function Button({children, ...props}){
    return(
        <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-700"> {children}</button>
    )   
}