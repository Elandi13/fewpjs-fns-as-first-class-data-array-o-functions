let wakeDog = function(dogName="Nugget", dogBreed="Pitbull") {
    console.log(`Wake ${dogName} the ${dogBreed}`)
    // console.log(`Leash ${dogName} the ${dogBreed}`)
    // console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    // console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    // console.log(`Walk home with ${dogName} the ${dogBreed}`)
    // console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Wake ${dogName} the ${dogBreed}`
}

let leashDog = function(dogName="Nugget", dogBreed="Pitbull"){
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return `Leash ${dogName} the ${dogBreed}`
}

let walkToPark = function(dogName="Nugget", dogBreed="Pitbull"){
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

let throwFrisbee = function(dogName="Nugget", dogBreed="Pitbull"){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}



let walkHome = function(dogName="Nugget", dogBreed="Pitbull"){
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return `Walk home with ${dogName} the ${dogBreed}`
}



let unleashDog = function(dogName="Nugget", dogBreed="Pitbull"){
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`
}


const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed){
    return routine.map(hi => hi(dog,breed))
}