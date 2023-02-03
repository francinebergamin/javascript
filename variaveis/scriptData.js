// data: 7 different types

// string - characters
var name = "Luca";
var lastName = "Takahashi";
var email = "luca_M4ST3R@gmail.com";

// number
var age = 17;

// boolean - true or false
var hasDog = true;
var hasCat = false;

/* undefined 
    it isnt any type of data, consequently, it doesnt have a value assigned,
    but it can have a data and value assigned to it later */
var volleyTeam; // created as undefined
volleyTeam = "Brazil"; // now its a string (type of data) and its value is "Brazil"

/* null
    it doesnt have any value assigned,
    its originally considerated as an object by JavaScript */
var favFood = null;

// symbol - it creates a unique identification value in the memory for its variable
var dogsPedigree = Symbol("Scooby's Pedigree");

// object - personal entity that has properties and types (e.g., as arrays)
var dogsFavToy = {};
var d1 = new Date();
var d2 = new Date("February 16, 2023 09:37");
var timeDiff = d2.getTime() - d1.getTime();
var dayDiff = timeDiff / (1000 * 3600 * 24);

// execution

// remembering: dont use switch with boolean values (they just have 2 options, switch case arent necessary)
console.log("\n" + name + " has at least one pet, which animal is it?");
if (hasDog == true && hasCat == " " + true) {
  console.log(
    name + " has a dog? ----  Yes 🐶\n",
    name + " has a cat? ----  Yes 😽"
  );
} else if (hasDog == true && hasCat == false) {
  console.log(
    " " + name + " has a dog? ----  Yes 🐶\n",
    name + " has a cat? ----  No"
  );
} else if (hasDog == false && hasCat == true) {
  console.log(
    " " + name + " has a dog? ----  No\n",
    name + " has a cat? ----  Yes 😽"
  );
} else {
  console.log(
    " " + name + " has a dog? ----  No\n",
    name + " has a cat? ----  No"
  );
}

console.log("\nLet's see " + name + "'s full name: " + name + " " + lastName);
console.log("\nLet's see " + name + "'s birthday: " + d2);
console.log(
  "\nLet's calculate how many days left until " +
    name +
    " complete his 18 years: " +
    Math.round(dayDiff) +
    " days."
);

console.log(
  "\nLet's see the data types of each variable that we have associated with " +
    name +
    ": ",
  "\n Name ------------------ " + typeof name,
  "\n Last Name ------------- " + typeof lastName,
  "\n Email ----------------- " + typeof email,
  "\n Age ------------------- " + typeof age,
  "\n Birthday -------------- " + typeof date,
  "\n Has a Dog ------------- " + typeof hasDog,
  "\n Has a Cat ------------- " + typeof hasCat,
  "\n Volley Team ----------- " + typeof volleyTeam,
  "\n Favorite Food --------- " + typeof favFood,
  "\n Dog's Pedrigree ------- " + typeof dogsPedigree,
  "\n Dog's Favorite Toy ---- " + typeof dogsFavToy
);
