
let tables  = [ 2, 4, 6, 8, 10 ]

function createTable( tableArray ) 
{
    for ( let i = 0; i < tableArray.length; i++) {
        let bodyElement = document.querySelector( 'body' )
        bodyElement.innerHTML += "<h2>Tafel van " + tableArray[i] +  "</h2>"

        for ( let x = 1; x < 11; x++ ) {
            element = x + " x " + tableArray[i] + " = " + (x * tableArray[i]) + "<br />"
            bodyElement.innerHTML += element
        }

    } 

}

window.addEventListener("DOMContentLoaded", (event) => {

    createTable( tables )
});