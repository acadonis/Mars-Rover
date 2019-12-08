

//Rover 1 positioning

//input
const roverOnePositionString = '1 2 N'

//split into array
const roverOnePositionArray = roverOnePositionString.split(' ')

//deconstruct arrays
const [roverOneEastingString, roverOneNorthingString, roverOneDirectionUncoverted] = roverOnePositionArray

//convert grid ref to integer
let roverOneEasting = parseInt(roverOneEastingString, 10)
let roverOneNorthing = parseInt(roverOneNorthingString, 10)

//check conversions
console.log('Easting', roverOneEasting, 'Northing', roverOneNorthing, 'Direction', roverOneDirectionUncoverted)

//NESW conversion function
let roverOneDirection = direction => {
  switch(true) {
    case direction === 'N':
      roverOneDirection = 1
      break
    case direction === 'E':
      roverOneDirection = 2
      break
    case direction === 'S':
      roverOneDirection = 3
      break
    case direction === 'W':
      roverOneDirection = 4
  }
}

//reconvert back to NESW

const roverOneDirectionReconvert = direction => {
  switch(true) {
    case direction === 1:
      roverOneDirection = 'N'
      break
    case direction === 2:
      roverOneDirection = 'E'
      break
    case direction === 3:
      roverOneDirection = 'S'
      break
    case direction === 4:
      roverOneDirection = 'W'
  }
}



roverOneDirection(roverOneDirectionUncoverted)
console.log('converted direction', roverOneDirection)

//Rover 1 instructions

const roverOneStringInstructions = 'LMLMLMLMM'
const roverOneInstructions = roverOneStringInstructions.split('')

//grid sizing

const gridString= '5 5'

const gridArray = gridString.split(' ')

const [maxWidthString, maxHeightString] = gridArray

//convert grid ref to integer
const maxWidth = parseInt(maxWidthString, 10)
const maxHeight = parseInt(maxHeightString, 10)

console.log('max width', maxWidth, 'max height', maxHeight)
// movement

//if command is M and direction is N, add one to roverOneNorthing

//if command is M and direction is E, add one to roverOneEasting

//if command is M and direction is S, minus one from roverOneNorthing

//if command if M and direction is W, minus one from roverOneNorthing

//rotation

//if command is L and facing - 1 > 0, -1 from facing, otherwise set to 4

//if command is R and facing +1 < 4, +1 to facing, otherwise set to 1

const moveRoverFunction = movementArray => {
  for (let i = 0; i <= movementArray.length - 1; i++) {
    console.log('Function time!')
    switch (true) {
      case movementArray[i] === 'M':
        if(roverOneDirection === 1 && roverOneNorthing + 1 <= maxHeight) {
          roverOneNorthing += 1
        } else if(roverOneDirection === 2 && roverOneEasting + 1 <= maxWidth){
          roverOneEasting +=1
        } else if(roverOneDirection === 3 && roverOneNorthing - 1 >= 0){
          roverOneNorthing -=1
        } else if (roverOneDirection === 4 && roverOneEasting - 1 >= 0){
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
    console.log('northing', roverOneNorthing)
    console.log('easting', roverOneEasting)
    console.log('direction', roverOneDirection)
  }
}
moveRoverFunction(roverOneInstructions)
roverOneDirectionReconvert(roverOneDirection)


console.log(roverOneInstructions)
console.log(roverOneEasting)
console.log(roverOneNorthing)
console.log(roverOneDirection)
