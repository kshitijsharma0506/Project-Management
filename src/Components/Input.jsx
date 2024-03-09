export default function Input({label,textarea, ...props}){
    return(
        <p className="flex flex-col gap-1 ss">
            <label>{label}</label>
            {textarea ? <textarea {...props}/> : <input {...props}/>}
        </p>
    )
}