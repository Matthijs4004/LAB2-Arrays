window.addEventListener("DOMContentLoaded", (event) => {

const pricesArray = {
    'bolletje' : 1.10,
    'bakje' : 0.75,
    'hoorntje' : 1.25,
    'slagroom' : 0.50, // extra kosten
    'sprinkels' : 0.30, // per bolletje
    'caramelB' : 0.90, // prijs bij een bakje
    'caramelH' : 0.60, // prijs bij een hoorntje
    'liter' : 9.80
}
let businessArray = {
    'liter' : 0
}
let toppingArray = {
    'sprinkels' : 0,
    'caramel' : 0,
    'slagroom' : 0,
}
let holderArray = {
    'bakje' : 0,
    'hoorntje' : 0
}
let bolletjesArray = {
    'bolletjes' : 0
}
let bakje = false
let hoorntje = false
let flavor, holder, topping, again, bolletjesAantal, literInput, market
let body = document.querySelector( 'body' )

// Execute first step
start()
//stepOne()

function stepOne() 
{
    bolletjesAantal = prompt( "Hoeveel bolletjes wilt u?" )
    bolletjesArray[ 'bolletjes' ] += parseInt( bolletjesAantal )
    if ( bolletjesAantal >= 1 && bolletjesAantal < 4) {
        flavorChoice(  )
    } else if ( bolletjesAantal >= 4 && bolletjesAantal <= 8 ) {
        holderArray[ 'bakje' ] += 1
        bakje = true
        flavorChoice()
    } else if ( bolletjesAantal > 8 ) {
        alert( "Sorry, zulke grote bakken hebben we niet." )
        stepOne()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        stepOne()
    }
}

function flavorChoice() 
{
    for ( let i = 1; i < parseInt(bolletjesAantal) + 1; i++) {
        flavor = prompt( "Welke smaak wilt u voor bolletje nummer " + i + "? A) Aardbei, C) Chocolade of V) Vanille" )
    }
    if ( flavor.toLowerCase() === "a" || flavor.toLowerCase() === "c" || flavor.toLowerCase() === "v") {
        holderChoice()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        flavorChoice()
    }
    
}

function holderChoice() 
{
    if ( !holderArray['bakje'] ) {
        holder = prompt( "Wilt u deze " + bolletjesAantal + " bolletje(s) in A) een hoorntje of B) een bakje?" )

        if ( holder.toLowerCase() === "a" || holder.toLowerCase() === "hoorntje" ) {
            holderArray[ 'hoorntje' ] += 1
            hoorntje = true
            toppings()
        } else if ( holder.toLowerCase() === "b" || holder.toLowerCase() === "bakje" ) {
            holderArray[ 'bakje' ] += 1
            bakje = true
            toppings()
        } else {
            alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
            holderChoice()
        }

    } else {
        toppings()
    }
}

function toppings()
{
    topping = prompt( "Wat voor topping wilt u: A) Geen, B) Slagroom, C) Sprinkels of D) Caramel Saus?" )
    switch ( topping.toLowerCase() ) {
        case "a":
            orderMore()
            break
        case "b":
            toppingArray[ 'slagroom' ] += 1
            orderMore()
            break
        case "c":
            toppingArray[ 'sprinkels' ] += bolletjesAantal
            orderMore()
            break
        case "d":
            toppingArray[ 'caramel' ] += 1
            orderMore()
            break
    }
}

function orderMore() 
{
    if ( holderArray[ 'bakje' ] ) {
        again = prompt( "Hier is uw bakje met " + bolletjesAantal + " bolletje(s). Wilt u nog meer bestellen? Y/N" )
    } else {
        again = prompt( "Hier is uw hoorntje met " + bolletjesAantal + " bolletje(s). Wilt u nog meer bestellen? Y/N" )
    }

    if ( again.toLowerCase() === "y" ) {
        stepOne()
    } else if ( again.toLowerCase() === "n" ) {
        receipt()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        orderMore()
    }
}

function receipt() 
{
    let sprinkelsPrice = bolletjesArray[ 'bolletjes' ] * pricesArray[ 'sprinkels' ]
    let bolletjesPrice = parseFloat( ( bolletjesArray[ 'bolletjes' ] * pricesArray[ 'bolletje' ] ).toFixed(2) )
    let totalPrice = parseFloat(bolletjesPrice) + parseFloat( holderArray[ 'bakje' ] * pricesArray[ 'bakje' ] ) + parseFloat( holderArray[ 'hoorntje' ] * pricesArray[ 'hoorntje' ] ) + parseFloat( toppingArray[ 'slagroom' ] * pricesArray[ 'slagroom' ] )

    body.innerHTML += "<h2>-------Papi Gelato-------</h2>"
    body.innerHTML += "<p>Bolletjes " + bolletjesArray[ 'bolletjes' ] + " x € " + pricesArray[ 'bolletje' ].toFixed(2) + " = €" + bolletjesPrice.toFixed(2) + "</p>"
    if ( holderArray[ 'bakje' ] > 0 ) {
        body.innerHTML += "<p>Bakje " + holderArray[ 'bakje' ] + " x €" + pricesArray[ 'bakje' ].toFixed(2) + " = €" + ( holderArray[ 'bakje' ] * pricesArray[ 'bakje' ]).toFixed(2)  + "</p>"
    }
    if ( holderArray[ 'hoorntje' ] > 0 ) {
        body.innerHTML += "<p>Hoorntje " + holderArray[ 'hoorntje' ] + " x €" + pricesArray[ 'hoorntje' ].toFixed(2) + " = €" + ( holderArray[ 'hoorntje' ] * pricesArray[ 'hoorntje' ]).toFixed(2)  + "</p>"
    }
    if ( toppingArray[ 'sprinkels' ] !== 0 ) {
        totalPrice += parseFloat( sprinkelsPrice )
        body.innerHTML += "<p>Sprinkels " + bolletjesArray[ 'bolletjes' ] + " x €" + pricesArray[ 'sprinkels' ].toFixed(2) + " = €" + ( sprinkelsPrice ).toFixed(2)  + "</p>"
    }
    if ( toppingArray[ 'slagroom' ] !== 0 ) {
        body.innerHTML += "<p>Slagroom " + toppingArray[ 'slagroom' ] + " x €" + pricesArray[ 'slagroom' ].toFixed(2) + " = €" + ( toppingArray[ 'slagroom' ] * pricesArray[ 'slagroom' ] ).toFixed(2)  + "</p>"
    } 
    if ( toppingArray[ 'caramel' ] !== 0 && holderArray[ 'bakje' ] !== 0 ) {
        totalPrice += parseFloat( toppingArray[ 'caramel' ] * pricesArray[ 'caramelB' ] )
        body.innerHTML += "<p>Caramel (B) " + toppingArray[ 'caramel' ] + " x €" + pricesArray[ 'caramelB' ].toFixed(2) + " = €" + ( toppingArray[ 'caramel' ] * pricesArray[ 'caramelB' ] ).toFixed(2)  + "</p>"
    }
    if ( toppingArray[ 'caramel' ] !== 0 && holderArray[ 'hoorntje' ] !== 0 ) {
        totalPrice += parseFloat( toppingArray[ 'caramel' ] * pricesArray[ 'caramelH' ])
        body.innerHTML += "<p>Caramel (H) " + toppingArray[ 'caramel' ] + " x €" + pricesArray[ 'caramelH' ].toFixed(2) + " = €" + ( toppingArray[ 'caramel' ] * pricesArray[ 'caramelH' ] ).toFixed(2)  + "</p>"
    }
    console.log( holderArray )
    console.log( pricesArray )
    console.log( bolletjesArray )
    console.log( toppingArray )

    body.innerHTML += "<p>Totaal: €" + totalPrice.toFixed(2) + "</p>"
}

function start() {
    market = prompt( "Bent u A) particulier of B) zakelijk" )
    if ( market.toLowerCase() === "a" ) {
        stepOne()
    } else if ( market.toLowerCase() === "b" ) {
        businessStepOne()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        start()
    }
}
function businessStepOne() {
    literInput = prompt( "Hoeveel liter ijs wilt u? (heel getal)" )
    businessArray[ 'liter' ] += parseInt( literInput )
    if ( literInput > 1 ) {
        businessFlavorChoice()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        businessArray[ 'liter' ] -= parseInt( literInput )
        businessStepOne()
    }

}
function businessFlavorChoice() {
    for ( let i = 1; i < parseInt( literInput ) + 1; i++) {
        flavor = prompt( "Welke smaak wilt u voor liter nummer " + i + "? A) Aardbei, C) Chocolade of V) Vanille" )
    }
    if ( flavor.toLowerCase() === "a" || flavor.toLowerCase() === "c" || flavor.toLowerCase() === "v") {
        businessReceipt()
    } else {
        alert( "Het programma kan dit antwoord niet doorvoeren, probeer opnieuw" )
        businessFlavorChoice()
    }
}
function businessReceipt() {
    let literPrice = businessArray[ 'liter' ] * pricesArray[ 'liter' ]
    let quotient = literPrice / 100
    let procent = quotient * 6

    body.innerHTML += "<p>----------Papi Gelato----------</p>"
    body.innerHTML += "<p>Liter&nbsp " + businessArray[ 'liter' ] + " x " + pricesArray[ 'liter' ] + " = €" + literPrice.toFixed(2) + "</p><br />"
    body.innerHTML += "<p>Totaal&nbsp = €" + literPrice.toFixed(2) + "</p>"
    body.innerHTML += "<p>BTW (6%)&nbsp = €" + procent.toFixed(2) + "</p>"
}
});