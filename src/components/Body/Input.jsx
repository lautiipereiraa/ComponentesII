export const Input = () => {

    const inputHandler = (event) =>{
        event.preventDefault()
        //event.preventDefault()
        event.stopPropagation(); //solo para el input, si clickeo el onClick de App se dispara
        console.log(event)
        console.log(event.nativeEvent)
    }
    return (
        <input type="text" onClick={inputHandler} name="nombre" id="i" />
)
}

export default Input