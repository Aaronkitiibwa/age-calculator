//write a function that prompts a user to enter their year of birth
//declare the current year to be 2024
//declare a formula that calculates someone's age
//use an if statement that seeks to check for the three age categories
//display result in the console

let yearOfBirth = prompt('please enter your year of birth')
  const currentYear = 2024;
  let age = currentYear- yearOfBirth;
  if(age <18){
    console.log("you are a minor")
  } else if(age <= 36){
    console.log("you are an adult")
  } else if(age > 36){
    console.log("you are an elder")
  }

