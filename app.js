const roverOneStart = '1 2 N'

const roverOneInstructions = 'LMLMLMLMM'

// const roverTwoStartString = '3 3 E'
//
// const roverTwoStringInstructions = 'MMRMMRMRRM'
//
const gridSize= '5 5'

//future variables

let roverPositionArray = []



// get initial values for Rover Starting Point
const createArray = string =>  {
  const roverPositionArray = string.split(' ')
  return roverPositionArray
}

roverPositionArray = createArray(roverOneStart)

console.log(roverPositionArray)

//deconstruct arrays into values then create Rover object

const createRover = array => {
  const [roverEastingString, roverNorthingString, roverDirectionUncoverted] = array
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

const roverObject = createRover(roverPositionArray)

console.log(roverObject)

//Rover 1 instructions function

const createInstructionsArray = string => {
  const roverArrayInstructions = string.split('')
  return roverArrayInstructions
}

const roverInstructions = createInstructionsArray(roverOneInstructions)
console.log(roverInstructions)

//create grid

const createGrid = string => {
  const gridArray = string.split(' ')
  const [maxWidthString, maxHeightString] = gridArray

  //convert grid ref to integer
  const maxWidth = parseInt(maxWidthString, 10)
  const maxHeight = parseInt(maxHeightString, 10)

  const gridObject = {
    maxHeight: maxHeight,
    maxWidth: maxWidth
  }
  return gridObject
}

const grid = createGrid(gridSize)

console.log(grid)

//fuction to move rover

const moveRover = instructionsArray => {
  for (let i = 0; i <= instructionsArray.length - 1; i++) {
    console.log('Function time!')
    switch (true) {
      case instructionsArray[i] === 'M':
        if(roverObject.direction === 1 && roverObject.northing + 1 <= grid.maxHeight) {
          roverObject.northing += 1
        } else if(roverObject.direction === 2 && roverObject.easting + 1 <= grid.maxWidth){
          roverObject.easting +=1
        } else if(roverObject.direction === 3 && roverObject.northing - 1 >= 0){
          roverObject.northing -=1
        } else if (roverObject.direction === 4 && roverObject.easting - 1 >= 0){
          roverObject.easting -=1
        }
        break
      case instructionsArray[i] === 'L':
        if (roverObject.direction - 1 === 0) {
          roverObject.direction = 4
        } else
          roverObject.direction -= 1
        break
      case instructionsArray[i] === 'R':
        if (roverObject.direction + 1 === 5) {
          roverObject.direction = 1
        } else
          roverObject.direction += 1
    }
    console.log('northing', roverObject.northing)
    console.log('easting', roverObject.easting)
    console.log('direction', roverObject.direction)
  }

  //reconvert back to NESW function -

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
    return roverReconvert
  }

  roverObject.direction = roverReconvert(roverObject.direction)

  const result = roverObject.easting + ' ' + roverObject.northing + ' ' + roverObject.direction
  return result

}

console.log(moveRover(roverInstructions))

module.exports = {
  createArray,
  createRover,
  createInstructionsArray,
  createGrid,
  roverOneStart
}
