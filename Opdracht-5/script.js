
window.addEventListener("DOMContentLoaded", (event) => {

    let body = document.querySelector( 'body' )
    const pyramidLength = prompt( "Vul een getal in ")
    let numbersArray = []

    for ( let y = 0; y < parseInt( pyramidLength ) + 1; y++ ) {
        numbersArray.push( y )
    }
    console.log(numbersArray)

    for ( const number of numbersArray ) {
        for ( let x = 0; x < number + 1; x++) {
            body.innerHTML += x
        }
        body.innerHTML += "<br />"
    }
});

