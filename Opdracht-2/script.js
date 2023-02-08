
function createString( array ) {
    let string = ""
    for (const element of array) {
        if (string != "") {
            string += ", " + element
        } else {
            string += element
        }
    }
    return string
}

function createNameArray() 
{
    let names = []
    let namesAmount = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)", "3") 
    if (parseInt(namesAmount) >= 3) {
        for (var i = 0; i < namesAmount; i++) {
            let name = prompt("Naam "+ (i + 1) +": ")
            names.push(name)
        }
        console.log(names)
        return names
    } else {
        createNameArray()
    }
}

window.addEventListener("DOMContentLoaded", (event) => {

    let names = createNameArray() 
    document.getElementById( 'names' ).innerHTML = createString( names )
    document.getElementById( 'names-reverse' ).innerHTML = createString( names.reverse() ) 
});
