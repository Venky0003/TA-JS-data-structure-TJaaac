/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);
// 2. Log the length of the "houses" key
console.log(got.houses.length);
// 3. Log the name of all houses in got one by one
  for(house of got.houses){
    console.log(house.name);
    }
  
// 4. Log the name of all the people in house Starks (index 0) one by one
for(peoples of got.houses[0].people){
  console.log(peoples.name);
}
// 5. Log the name of all the people in house Lannisters (index 1) one by one
for(peoples of got.houses[1].people){
  console.log(peoples.name);
}
// 6. Log the description of all the people in house Lannisters (index 1) one by one
for(peoples of got.houses[1].people){
  console.log(peoples.description);
}
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for(peoples of got.houses[1].people){
  console.log(`I am ${peoples.name} and my bio is ${peoples.description}`);
}
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(peoples of got.houses[0].people){
  console.log(`I am ${peoples.name} and my bio is ${peoples.description}`);
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(peoples of got.houses[0].people){
  if(peoples.name === "Robb Stark"){
  console.log(`I am ${peoples.name} and my bio is ${peoples.description}`);
  }
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for(peoples of got.houses[1].people){
  if(peoples.name === "Tywin Lannister"){
  console.log(`I am ${peoples.name} and my bio is ${peoples.description}`);
  }
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
 let houseNames=[];
 for(house of got.houses){
 houseNames.push(house.name);
 console.log(houseNames);
 }

// 12. Log the size of people in Starks house
console.log(got.houses[0].people.length)
// 13. Log the size of people in Lannisters house
console.log(got.houses[1].people.length)
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
  let nameSize = {};
  for(house of got.houses){
    nameSize[house.name]=house.people.length
    }

  console.log(nameSize)
// 15. Log the name of all the people of all the houses in got one by one
for(house of got.houses){
  for(peoples of house.people){
    console.log(peoples.name)
  }
}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople = [];
for(house of got.houses){
  for(peoples of house.people){
    allPeople.push(peoples.name)
  }
}
  console.log(allPeople);

// 17. Log the value and length of `allPeople` array created above
for(allpeoples of allPeople){
  console.log(allpeoples);
}
console.log(allPeople.length)
// 18. Push all descriptions into an array named `allDescription`
let allDescription = [];
for(house of got.houses){
  for(peoples of house.people){
    allDescription.push(peoples.description)
  }
}
console.log(allDescription);
// 19. Log the value and length `allDescription`
for(allDescriptions of allDescription){
  console.log(allDescriptions);
}
console.log(allDescription.length)
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(allDescriptions of allDescription){
  if(allDescriptions.length > 30){
  console.log(allDescriptions);
  }
}