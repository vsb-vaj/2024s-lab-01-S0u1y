// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
 const drawTriangle = (length = 5) => {
  // for (let i = 0; i < length+1; i++) {
  //   console.log(Array(i).fill("*").join(" "))
  // }
  for (let i = 1; i < length+1; i++) {
    let str = ""
    for (let j = i; j > 0; j--) {
      str += "* "
    }
    console.log(str)
  }
};
drawTriangle()
console.log("  ")

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
  word = word.toUpperCase()
  for (let i = word.length; i >= 0; i--){
    let arr = Array(i).fill("*")
    for (let k = i; k < word.length; k++){
      arr[k] = word[k]
    }
    arr = arr.join(" ")
    console.log(arr)
  }
};
drawJavascriptWord()

// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
const vehicles = [
  { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
  { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
  { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
  vehicles.map((x)=>{
    x.topSpeed = Math.max(...x.measuredSpeeds)
    delete x.measuredSpeeds
    return x
  })
  console.log(vehicles)
};
getVehiclesAndTopSpeed(vehicles)