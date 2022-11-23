// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,5,6]
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(number of numbers){
    sum += number;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
for(number of numbers){
    sum += number;
}
console.log(sum/numbers.length);
// 4. Find the highest number in the array and print it to the console using console.log()
let max=0;
for (let i=0;i < numbers.length ; i++){
if(numbers[i]>max){
    max=numbers[i]
}
}
console.log(max);

// 5. Find the lowest number in the array and print it to the console using console.log()
let min = 1;
for (let i=0;i < numbers.length ; i++){
if(numbers[i] < min){
    min = numbers[i]
}
}
console.log(min);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even=[];
 let odd=[];
for(number of numbers){
  if(number % 2 === 0){
    even.push(number)
  }
  else{
    odd.push(number)
  }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divFive=[];
let divThree=[];
for(number of numbers){
    if(number % 5 === 0){
     divFive.push(number)
    }
    else if(number % 3 === 0){
        divThree.push(number)
    }
   
}
console.log(divFive)
// 9. Log all the element of the array one by one
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[numbers.length-1]);
// 10. Find all the number in the array that is divisible by 3
console.log(divThree)