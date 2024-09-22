interface IOutlidenButton {
    title: string
}

export default function OutlinedButton({title}: IOutlidenButton){

    return (
        <button 
        className="rounded-full border-white 
        border-2 p-2 hover:bg-white hover:text-black
        transition" 
        >
            {title}
        </button>
    )
}