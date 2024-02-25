// // let number = max(22,20);
// // console.log(number);

// // function max(a, b){

// //       return a>b ?a: b;
// // }

// // console.log(isLandscape(800, 1600));
// // function isLandscape(width, height){
// //     return (width>height);
// // }

// // const output = fizzBuzz(true);
// // console.log(output);

// // function fizzBuzz(input) {
// //   if (typeof input !== "number") return NaN;

// //   if (input % 3 === 0 && input % 5 === 0) return "Fizzbuzz";

// //   if (input % 3 === 0) return "Fizz";

// //   if (input % 5 === 0) return "Buzz";

// //   return input;
// // }

// // checkSpeed(50);

// // 5 > 1 Point

// // 12 points-> Suspended

// checkSpeed(130);

// function checkSpeed(speed){
//       const speedLimit = 70;
//       const KmPerPoint = 5;

//     if (speed < speedLimit + KmPerPoint){
//         console.log('ok');
//         return;
//     }
//      const points = Math.floor((speed - speedLimit)/KmPerPoint);
//      if (points >= 12)
//      console.log('License Suspended')
//     else
//     console.log('Points', points);
//   }

//

//  if (speed >= 70 && speed< 80);

//  return console.log("ok");

//  if (speed >= 80 && speed < 90);
//  return console.log('You have one points');

//    showNumbers(9);

//    function showNumbers(limit){

//     for(let i = 0;i <= limit; i++){
//     //    if(i % 2 === 0)? console.log(i, 'Even')
//     //    else console.log(i, 'ODD');

//       const Message = (i % 2 === 0)? 'Even' : 'ODD'
//       console.log(i, Message);

//     }
//    }

// Lis to falsy
//undefined
//null
//''
//false
//0
//Nan

// const array =[1, 2 ,3,4,'b',0,'m'];

//  console.log(countTruthy(array));
//  let count = 0;

//  function countTruthy(array){
//     let count = 0;

//     for (let value of array)
//     if(value)
//     count++;
//   return count;

// }

// const movie = {
//   title: "a",
//   relaeaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);
// function showProperties(obj) {
//   for (let key in obj) {
//     // if let value  =typeof(String)

//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// Multiples of 3: 3,6,9
// Multiples of 5: 5, 10

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

// const marks = [ 50, 50];

// console.log(calculatorGrade(marks));
// console.log(calculateAverage(marks));

// function calculatorGrade(marks) {
//   const average = calculateAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   let sum = 0;

//   for (let value of array) sum += value;
//   return sum / array.length;
// }


