
let arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function optellen(arrayEen, arrayTwee) 
{
    let HTMLElement = document.getElementById( 'sum' )
    for (const [index, number] of arrayEen.entries()) { 
        HTMLElement.innerHTML += number + " + " + arrayTwee[index] + " = " + ( parseInt( number ) + parseInt( arrayTwee[index] ) ) + '<br />'
    }
}
function aftrekken(arrayEen, arrayTwee) 
{
    let HTMLElement = document.getElementById( 'minus' )
    for (const [index, number] of arrayEen.entries()) { 
        HTMLElement.innerHTML += number + " - " + arrayTwee[index] + " = " + ( parseInt( number ) - parseInt( arrayTwee[index] ) ) + '<br />'
    }
}
function vermenigvuldigen(arrayEen, arrayTwee) 
{
    let HTMLElement = document.getElementById( 'multiply' )
    for (const [index, number] of arrayEen.entries()) { 
        HTMLElement.innerHTML += number + " * " + arrayTwee[index] + " = " + ( parseInt( number ) * parseInt( arrayTwee[index] ) ) + '<br />'
    }
}
function delen(arrayEen, arrayTwee) 
{
    let HTMLElement = document.getElementById( 'divide' )
    for (const [index, number] of arrayEen.entries()) { 
        HTMLElement.innerHTML += number + " / " + arrayTwee[index] + " = " + ( parseInt( number ) / parseInt( arrayTwee[index] ) ) + '<br />'
    }
}


window.addEventListener("DOMContentLoaded", (event) => {

    optellen(arrayEen, arrayTwee);
    aftrekken(arrayTwee, arrayEen);
    vermenigvuldigen(arrayEen, arrayTwee);
    delen(arrayTwee, arrayEen);
});