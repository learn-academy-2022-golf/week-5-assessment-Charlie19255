// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("changer", () => {
    it("takes in a string and returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        const output1 = "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        const output2 = "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        const output3 = "3cc3ntr1c"
      expect(changer(secretCodeWord1)).toEqual(output1)
      expect(changer(secretCodeWord2)).toEqual(output2)
      expect(changer(secretCodeWord3)).toEqual(output3)
    })
  })

// ReferenceError: changer is not defined

// b) Create the function that makes the test pass.

//create a function called changer
//will take the parameter of string
  //function will go through each letter of the string
  //the function will change each vowel to a specific number
  //will return the new string
//test function

const changer = (string) => {
    const newString = []
    for(i=0; i<string.length; i++){
        if(string[i]==='a') {newString.push(string[i].replace("a",4))
        }
        else if(string[i]==='A') {newString.push(string[i].replace("A",4))
        }
        else if(string[i]==='e') {newString.push(string[i].replace("e",3))
        }
        else if(string[i]==='E') {newString.push(string[i].replace("E",3))
        }
        else if(string[i]==='i') {newString.push(string[i].replace("i",1))
        }
        else if(string[i]==='I') {newString.push(string[i].replace("I",1))
        }
        else if(string[i]==='o') {newString.push(string[i].replace("o",0))
        }
        else if(string[i]==='O') {newString.push(string[i].replace("O",0))
        }
        else {newString.push(string[i])}
    }
    return newString.join("")
}


// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("finder", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

        const letterA = "a"
        output4 = ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        output5 = ["Cherry", "Blueberry", "Peach"]
      expect(finder(fruitArray, letterA)).toEqual(output4)
      expect(finder(fruitArray, letterE)).toEqual(output5)
    })
  })


//   ReferenceError: finder is not defined

// b) Create the function that makes the test pass.

//create a function called finder
//it will take the parameter of array and letter
    //create a new variable called newArray. From the result of using map to lowercase all strings
    // using the filter method we can find which strings in the array has the letter
    //use map to uppercase the strings again
    //return the array with strings that only has the letter
//test function

// const finder = (array, letter) => {
    
//    return array.filter(value=> value.includes(letter))
// }

// - Expected  - 1
// + Received  + 0

const finder = (array, letter) => {
    let newArray = array.map(value=>value.toLowerCase())
    return newArray.filter(value=> value.includes(letter)).map(value=>value.charAt(0).toUpperCase() + value.slice(1))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        let output6 = true
        const hand2 = [5, 5, 3, 3, 4]
        let output7 = false
        const hand3 = [5, 5, 5, 5, 4]
        let output8 = false
        const hand4 = [7, 2, 7, 2, 7]
        let output9 = true
      expect(fullHouse(hand1)).toEqual(output6)
      expect(fullHouse(hand2)).toEqual(output7)
      expect(fullHouse(hand3)).toEqual(output8)
      expect(fullHouse(hand4)).toEqual(output9)
    })
  })

//   ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

//create a function called fullHouse
//it will take in the parameter of an array
//create an object to keep count
  //create a for loop where it looks at the value at each index of the array
  //the object will keep count for each value found in the for loop starting at 0 and adding 1 for each one found
  //create a variable to check the object count of each value
  // an if statement will check if the values of the object will pass as a full house by checking whether each one is equal to a count of 3 and 2.
  //if it does then it returns true
  //if not then it returns false
//test the function

// const fullHouse = (array) => {
    
//     for(i=0;i<array.length;i++){
//         for(j=0;j<array.length;j++)
//         if(array.indexOf(array[i], 3) && array.indexOf(array[j],2)){
//             return true
//         }
//         else {return false}
//     }
// }
// Expected: false
// Received: true
// const fullHouse = (array) => {
//   let check = array.slice(0,1)
//   for(i=0;i<array.length;i++)
//     if(array[i]===check)
//         {return true}
//     else {return false}
// }

// Expected: true
// Received: false

const fullHouse = (array) => {
    let countObj = {}
    for(let i of array){
      countObj[i] = (countObj[i]|| 0 )+1;
    }
    let count = Object.values(countObj)
    if((count[0] === 2 && count[1] === 3) || (count[1] === 2 && count[0] === 3)){
      return true;
    }
    return false;
  }

//   Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total