// Code Keypad Component Here
function handleChange () {
    console.log('Entering password...')
}
function Keypad (){
    return (
        <div>
            <input onChange = {handleChange} type="password" />
        </div>
    )
}

export default Keypad;