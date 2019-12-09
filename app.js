

//Rover 1 positioning

//inputs
const roverOneStartString = '1 2 N'

const roverOneStringInstructions = 'LMLMLMLMM'

const roverTwoStartString = '3 3 E'

const roverTwoStringInstructions = 'MMRMMRMRRM'

const gridString= '5 5'


//split into array

// get initial values for Rover Starting Point
const makePositionArray = roverStartString =>  {
  const roverPositionArray = roverStartString.split(' ')
  return roverPositionArray
}

const roverOnePositionArray = makePositionArray(roverOneStartString)
console.log(roverOnePositionArray)

const roverTwoPositionArray = makePositionArray(roverTwoStartString)
console.log(roverTwoPositionArray)


//deconstruct arrays into values then object

const createRoverObject = roverArray => {
  const [roverOneEastingString, roverOneNorthingString, roverOneDirectionUncoverted] = roverPositionArray
}


//convert grid ref to integer
let roverOneEasting = parseInt(roverOneEastingString, 10)
let roverOneNorthing = parseInt(roverOneNorthingString, 10)



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

//reconvert back to NESW function

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



const roverOneInstructions = roverOneStringInstructions.split('')

//grid sizing



const gridArray = gridString.split(' ')

const [maxWidthString, maxHeightString] = gridArray

//convert grid ref to integer
const maxWidth = parseInt(maxWidthString, 10)
const maxHeight = parseInt(maxHeightString, 10)


//fuction to move rover

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
  roverOneDirectionReconvert(roverOneDirection)

  const result = roverOneEasting + ' ' + roverOneNorthing + ' ' + roverOneDirection
  console.log(result)
  return result

}

moveRoverFunction(roverOneInstructions)
