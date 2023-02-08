
const weekDays = [ 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag' ]

function WorkDays( weekDays, type ) {
    let newArray = []
    for (var i = 0; i < 5; i++) {
        newArray.push( weekDays[i] )
    }
    if (type === "reverse") {
        return newArray.reverse()
    } else {
        return newArray
    }
}

function WeekendDays( weekDays, type ) {
    let array = weekDays
    let newArray = []
    array.reverse()

    for (var i = 0; i < 2; i++) {
        newArray.push( array[i] )
        console.log(array[i])
    }

    array.reverse()
    if (type === "reverse") {
        return newArray
    } else {
        return newArray.reverse()
    }
}

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

window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById( 'week-days' ).innerHTML = createString( weekDays )
    document.getElementById( 'work-days' ).innerHTML = createString( WorkDays( weekDays ) )
    document.getElementById( 'weekend-days' ).innerHTML = createString( WeekendDays( weekDays ) )
    document.getElementById( 'week-days-reverse' ).innerHTML = createString( weekDays.reverse() )
    weekDays.reverse()
    document.getElementById( 'work-days-reverse' ).innerHTML = createString( WorkDays( weekDays, "reverse" ) )
    document.getElementById( 'weekend-days-reverse' ).innerHTML = createString( WeekendDays( weekDays, "reverse" ) )
});
