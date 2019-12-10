//VARIABLES

let roverPositionArray = []
let roverObject = {}
let roverInstructions = []
let grid = {}
let roverOneOutput = ''
let roverTwoOutput = ''

//FUNCTIONS

// CREATE ARRAY FROM ROVER STARTING POINT
const createArray = string =>  {
  const roverPositionArray = string.split(' ')
  return roverPositionArray
}


// roverPositionArray = createArray(roverOneStart)

//CREATE ROVER FUNCTION

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

// roverObject = createRover(roverPositionArray)

//INSTRUCTIONS STRING TO ARRAY FUNCTION

const createInstructionsArray = string => {
  const roverArrayInstructions = string.split('')
  return roverArrayInstructions
}

// roverInstructions = createInstructionsArray(roverOneInstructions)

//CREATE GRID FUNCTION

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



//MOVE ROVER FUNCTION

const moveRover = instructionsArray => {
  for (let i = 0; i <= instructionsArray.length - 1; i++) {
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
  }
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

//MAKE GRID

// const gridSize= '5 5'
//
// grid = createGrid(gridSize)

//TRYING TO REFACTOR TO AVOID DUPLICATION

// const roverOneStart = '1 2 N'
// const roverOneInstructions = 'LMLMLMLMM'
//
// const roverTwoStart = '3 3 E'
// const roverTwoInstructions = 'MMRMMRMRRM'
//
// const roverOnePosition = createArray(roverOneStart)
// const roverOneObject = createRover(roverOnePosition)
//
// const roverTwoPosition = createArray(roverTwoStart)
// const roverTwoObject = createRover(roverTwoPosition)
//
// const rovers = [roverOneObject, roverTwoObject]
//
// const roverOneInstructionsArray = createInstructionsArray(roverOneInstructions)
// const roverTwoInstructionsArray = createInstructionsArray(roverTwoInstructions)

// roverEndOutput = (moveRover(roverInstructions))

// CREATE AND MOVE ROVER ONE

const roverOneStart = '1 2 N'
const roverOneInstructions = 'LMLMLMLMM'
const gridSize = '5, 5'

const roverOneFunction = (roverOneStart, roverOneInstructions, gridSize) => {
  grid = createGrid(gridSize)
  roverPositionArray = createArray(roverOneStart)
  roverObject = createRover(roverPositionArray)
  roverInstructions = createInstructionsArray(roverOneInstructions)
  roverOneOutput = (moveRover(roverInstructions))
  return roverOneOutput
}

console.log(roverOneFunction(roverOneStart, roverOneInstructions, gridSize))

// CREATE AND MOVE ROVER TWO



const roverTwoStart = '3 3 E'
const roverTwoInstructions = 'MMRMMRMRRM'

roverPositionArray = createArray(roverTwoStart)

roverObject = createRover(roverPositionArray)

roverInstructions = createInstructionsArray(roverTwoInstructions)

roverTwoOutput = (moveRover(roverInstructions))

console.log(roverTwoOutput)


//Export to test suite, working but console throws error

module.exports = {
  createArray,
  createRover,
  createInstructionsArray,
  createGrid
}
