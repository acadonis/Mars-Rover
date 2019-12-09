

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


//deconstruct arrays into values then create Rover object

const createRoverObject = roverArray => {
  const [roverEastingString, roverNorthingString, roverDirectionUncoverted] = roverArray
  const roverEasting = parseInt(roverEastingString, 10)
  const roverNorthing = parseInt(roverNorthingString, 10)

  let roverConvert = direction => {
    switch(true) {
      case direction === 'N':
        roverConvert = 1
        break
      case direction === 'E':
        roverConvert = 2
        break
      case direction === 'S':
        roverConvert = 3
        break
      case direction === 'W':
        roverConvert = 4
        break
    }
    return roverConvert
  }

  const roverDirection = roverConvert(roverDirectionUncoverted)


  const roverObject = {
    easting: roverEasting,
    northing: roverNorthing,
    direction: roverDirection
  }
  return roverObject
}

const roverTwoObject = createRoverObject(roverOnePositionArray)
console.log(roverTwoObject)
// convert grid ref to integer




// NESW conversion function


//reconvert back to NESW function - ungainly

let roverReconvert = direction => {
  switch(true) {
    case direction === 1:
      roverReconvert = 'N'
      break
    case direction === 2:
      roverReconvert = 'E'
      break
    case direction === 3:
      roverReconvert = 'S'
      break
    case direction === 4:
      roverReconvert = 'W'
  }
}


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
