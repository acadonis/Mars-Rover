# Mars Rover

### Installation 

Unzip to local directory

Navigate to directory in terminal

Run *yarn* in the terminal to install dependencies

Run *yarn test* in the terminal to run unit tests 

### Brief

Write a program to control two rovers exploring Mars, inputting starting positions and orientation, movement instructions and a grid search size, and outputting the final position of each rover. 

Input and Output

Test Input:

5 5 - Grid size

1 2 N - Rover 1 starting position 

LMLMLMLMM - Rover 1 instructions

3 3 E - Rover 2 starting position 

MMRMMRMRRM - Rover 2 instructions

Test Output

### Technologies used

JavaScript ES6, HTML5, Yarn, Mocha, Chai, git, github

### Approach taken

I commenced the project by assessing how the string inputs could be converted into useable data objects, quickly settling on functions to split these into arrays as the best starting point, and converting the strings to integers where appropriate. For the rovers and the grid search area, I decided that objects would be the best way to store the related data, in “key: value” pairs.

The rover direction presented an interesting challenge. I decided to use a switch statement to convert this into an integer to store in the rover object, allowing easier manipulation than the original string values. This allowed rotation of the rover to be controlled with simple addition and subtraction from this integer value.

Overall movement is controlled with a switch statement which loops over the array of string instructions, and deals with the three possible inputs of L, R or M. It avoids possible run-off from the grid with a series of checks on the value of the grid object in the nested conditional statements.  

The conversion and movement functions are brought together into a single function with 5 parameters, which takes the original string inputs and outputs the final positions of the rovers as a string. 

Development was undertaken intially using the Chrome console, console logging as I built to ensure that code performed as expected. This is why there is an index.html file, which is otherwise superfluous. Version control was managed with git and github.

Once I was satisfied with the basic build, I then switched to mocha and chai (installed with Yarn) to build unit tests and more thoroughly test the code. These tests are located in test/tests_spec.js, and the final test passes with the required output of the final position of both rovers, stored in an object. 
