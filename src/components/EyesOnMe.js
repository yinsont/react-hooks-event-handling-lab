// Code EyesOnMe Component Here

function EyesOnMe () {
    return (
        <button onFocus ={food} onBlur = {drink}>Eyes on me</button>
    )
}

function food () {
    console.log('Good!')
}

function drink () {
    console.log('Hey! Eyes on me!')
}
export default EyesOnMe