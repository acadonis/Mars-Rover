

//Rover 1 positioning
let roverOneEasting = 1
let roverOneNorthing = 1
let roverOneDirection = 1


//Rover 1 instructions

const roverOneStringInstructions = 'MMRMM'
const roverOneInstructions = roverOneStringInstructions.split('')

//grid sizing
const width = []
const height = []


// movement

//if command is M and direction is N, add one to roverOneNorthing

//if command is M and direction is E, add one to roverOneEasting

//if command is M and direction is S, minus one from roverOneNorthing

//if command if M and direction is W, minus one from roverOneNorthing

//rotation

//if command is L and facing - 1 > 0, -1 from facing, otherwise set to 4

//if command is R and facing +1 < 4, +1 to facing, otherwise set to 1

//split roverOneStringInstructions into array roverOneInstructions




const moveRoverFunction = movementArray => {
  for (let i = 0; i <= movementArray.length - 1; i++) {
    console.log('Function time!')
    switch (true) {
      case movementArray[i] === 'M':
        if(roverOneDirection === 1) {
          roverOneNorthing += 1
        } else if(roverOneDirection === 2){
          roverOneEasting +=1
        } else if(roverOneDirection === 3){
          roverOneNorthing -=1
        } else if (roverOneDirection === 4){
          roverOneEasting -=1
        }
        break
      case movementArray[i] === 'L':
        if (roverOneDirection - 1 === 0) {
          roverOneDirection = 4
        } else
          roverOneDirection -= 1
        break
      case movementArray[i] === 'R':
        if (roverOneDirection + 1 === 5) {
          roverOneDirection = 1
        } else
          roverOneDirection += 1
    }
    console.log(roverOneNorthing)
    console.log(roverOneEasting)
    console.log(roverOneDirection)
  }
}
moveRoverFunction(roverOneInstructions)

console.log(roverOneInstructions)
console.log(roverOneEasting)
console.log(roverOneNorthing)
console.log(roverOneDirection)
