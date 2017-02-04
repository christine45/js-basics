/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
var firstName = "christine";
console.log(firstName);
var lastName = "garingan";
console.log(lastName);
var birthPlace = "Honolulu";
console.log(birthPlace);
var favoriteFood = "local moco";
console.log(favoriteFood);
var favoriteMovie = "She's The Man";
console.log(favoriteMovie);
var favoriteSong = "From The Ground Up";
console.log(favoriteSong);
var cuteAnimal = "puppies";
console.log(cuteAnimal);
var favColor = "pink";
console.log(favColor);
var favSneaker = "vans";
console.log(favSneaker);
var coffeeShop = "Sure Shot";
console.log(coffeeShop);


/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
var favoriteNumber = 45;
console.log(favoriteNumber);
var currentYear = 2017;
console.log(currentYear);
var thatOnePrinceSong = 1;
console.log(thatOnePrinceSong);
var tokyoOlympics = 2018;
console.log(tokyoOlympics);
var mariahCareyAge = 35;
console.log(mariahCareyAge);
var currentTemp = 50;
console.log(currentTemp);
var studentsInClass = 12;
console.log(studentsInClass);
var numOfJapanPrefectures = 47;
console.log(numOfJapanPrefectures);
var currentIphoneModel = 6;
console.log(currentIphoneModel);
var shoeSize = 6;
console.log(shoeSize);


/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcDonalds = true;
console.log(likesMcDonalds);
var watchedMrRobot = false;
console.log(watchedMrRobot);
var ranMarathon = false;
console.log(ranMarathon);
var wrestledABear = false;
console.log(wrestledABear);
var lovesDonuts = true;
console.log(lovesDonuts);
var readHarryPotter = false;
console.log(readHarryPotter);
var sleptInClass = true;
console.log(sleptInClass);
var drinksCoffee = true;
console.log(drinksCoffee);
var shopsAtWholeFoods = false;
console.log(shopsAtWholeFoods);
var ownsRedShoes = false;
console.log(ownsRedShoes);



/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass = null;
console.log(completedPrepClass);
var traveledToMars = null;
console.log(traveledToMars);
var scoredTDinNFL = null;
console.log(scoredTDinNFL);

/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/
//A null is a unknown data
//Something is undefined when no value has been assigned to it yet

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
var plateLunch = ["Kalua pig", "Fried rice", "Loco moco", "Garlic chicken", "beef stew"];
console.log(plateLunch);
var fruitBasket = ["Strawberry", "Blueberry", "Kiwi", "Blackberry", "Rasberry"];
console.log(fruitBasket);
var westCoast = ["California", "Washington", "Oregon"];
console.log(westCoast);
var lotteryResult = [4, 24, 153, 47, 185];
console.log(lotteryResult);
var duets = [ ["NSYNC and Backstreet Boys"], ["Taylor Swift and John Mayer"], ["Dan and Shay"]];
console.log(duets); 
var mixPlate = [3, "cake", [5>2], drinksCoffee];
console.log(mixPlate);


/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/ 

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];
partyList.length;
console.log(partyList.length);


var carrotcakeindex = partyList.indexOf ("carrot cake");
console.log(carrotcakeindex);

var lemonbarindex = partyList.indexOf ("lemon bars");
console.log(lemonbarindex);


/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.


* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/

var firstName = "Christine";
var lastName = " Tamamoto";
var fullName = firstName.concat(lastName);
console.log(firstName.concat(lastName));

var whereFrom = " is from Honolulu";
console.log(fullName.concat(whereFrom));





var num1 = 9
console.log(num1);
var num2 = 4
console.log(num2);

var sum = num1 + num2;
console.log(sum);

var difference = num1 - num2; 
console.log(difference);

var product = num1 * num2;
console.log(product);

var quotient = num1 / num2;
console.log(quotient);

var remainder = num1 % num2;
console.log(remainder);




//
/**
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
**/
var isStrictlyEqual = "Tacocat" === "tacocat";
console.log(isStrictlyEqual);

var isLooselyEqual = "Tacocat" == "tacocat";
console.log(isLooselyEqual);

//Both answers are false because they are not equal value or of equal type

/**
* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
**/

var sameNum = "5" === 5;
console.log(sameNum);

var sameNumba = "5" == 5;
console.log(sameNumba);
/**
// The answers are different because they have the string and the number are of the same value.  However, they have are of different types

/**
* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?
**/

compareNum1 = 3>2 || 3<1;
console.log(compareNum1);

compareNum2 = 3>2 && 6>3;
console.log(compareNum2);

compareNum3 = 7>2 && 8<5;
console.log(compareNum3);

/**
//The first line, one of the equations is true, and one is false. || makes the statement true because one the of statements is true.
//The second line, both statements are true.
// The last line needs the statment to all be equal for it to be true.  Only one statement is true, therefore, it is false.


/**
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*
**/
var myBox = 45
console.log(myBox);
myBox -= 4;
console.log(myBox);
myBox += 8;
console.log(myBox);
myBox *= 9;
console.log(myBox);
myBox /= 2;
console.log(myBox);
myBox %= 1;
console.log(myBox);

/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.

**/
function bakePie(ingredient){
	return "Today's special is " + ingredient + "pie."
}
console.log(bakePie);

var pet = "Kamau";
console.log(pet);






/**
* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/

