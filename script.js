//  var userAge = prompt("Apni age batayein:");

//  userAge = Number(userAge);

//  if (userAge >= 18) {
//      alert("Aap ek adult hain.");
//  } else {
//    alert("Aap abhi minor hain.");
//  }


// var userInput = prompt("Koi number daalein:");

// var num = Number(userInput);

// if (num > 0) {
//     console.log("Positive number");
// } else {
//     console.log("not positive");
// }
// User se ek number lete hain
// var userInput = prompt("Koi number daalein:");

// // Number mein convert karte hain
// var num = Number(userInput);

// // Check karte hain agar number even hai ya odd
// if (num % 2 === 0) {
//     alert("Even number");
// } else {
//     alert("Odd number");
// }
// User se username lete hain
// var username = prompt("Apna username daalein:");

// // Check karte hain agar username 'admin' hai
// if (username === "admin") {
//     alert("Welcome, admin!");
// } else {
//     alert("Access denied.");
// }

// var firstNum = prompt("Pehla number daalein:");

// var secondNum = prompt("Doosra number daalein:");


// firstNum = Number(firstNum);
// secondNum = Number(secondNum);

// if (firstNum === secondNum) {
//     console.log("Both numbers are the same");
// } else {
//     console.log("The numbers are different");
// }

// var firstNum = prompt("Pehla number daalein:");


// var secondNum = prompt("Doosra number daalein:");


// firstNum = Number(firstNum);
// secondNum = Number(secondNum);


// if (firstNum > secondNum) {
//     alert("First is larger");
// } else if (secondNum > firstNum) {
//     alert("Second is larger");
// } else {
//     alert("Dono numbers barabar hain");
// }

// var numInput = prompt("Koi number daalein:");

// var num = Number(numInput);

// if (num > 100) {
//     alert("Too big!");
// } else {
//     alert("Within range");
// }
// var scoreInput = prompt("Apna score daalein:");

// var score = Number(scoreInput);

// if (score >= 50) {
//     console.log("You passed!");
// } else {
//     console.log("You failed.");
// }

// var tempInput = prompt("Temperature daalein:");

// var temperature = Number(tempInput);

// if (temperature > 30) {
//     alert("It's hot!");
// } else {
//     alert("It's not hot.");
// }
// var input = prompt("Koi number daalein:");

// var number = Number(input);

// if (number === 0) {
//     alert("Zero");
// } else {
//     alert("Not zero");
// }
// var ageInput = prompt("Apni age daalein:");

// var age = Number(ageInput);

// if (age >= 60) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("You are not a senior.");
// }

// var userName = prompt("Apna naam likhein:");


// if (userName === "Anas") {
//     alert("Hi, Anas");
// } else {
//     alert("You're not Alice!");
// }

// var password = prompt("Apna password daalein:");

// if (password === "12345") {
//     console.log("Correct password");
// } else {
//     console.log("Wrong password");
// }

// var hourInput = prompt("Abhi ka waqt (0–23) mein daalein:");


// var hour = Number(hourInput);

// if (hour < 12) {
//     alert("Good morning!");
// } else {
//     alert("Good afternoon!");
// }

// var input = prompt("Koi number daalein:");

// var number = Number(input);

// if (number % 5 === 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Not divisible by 5");
// }
// var answer = prompt("Kya aap game khelna chahtay hain? (yes/no)");


// if (answer === "yes") {
//     alert("Let's play!");
// } else {
//     alert("Maybe next time!");
// }
// var color = prompt("Apna favourite color likhein:");


// if (color === "blue") {
//     console.log("Cool choice!");
// } else {
//     console.log("Interesting color!");
// }
// var day = prompt("Aaj ka din kya hai?");

// if (day === "Sunday") {
//     alert("Weekend!");
// } else {
//     alert("Weekday");
// }
// var fruit = prompt("Koi fruit ka naam likhein:");


// if (fruit === "banana" || fruit === "apple") {
//     alert("We have that!");
// } else {
//     alert("Sorry, out of stock.");
// }
// var input = prompt('Game shuru karne ke liye "start" type karein:');

// if (input === "start") {
//     alert("Game started!");
// } else {
//     alert("Waiting for input...");
// }

// var marksInput = prompt("Apne marks daalein (0 se 100 ke darmiyan):");

// var marks = Number(marksInput);

// if (marks < 0 || marks > 100 || isNaN(marks)) {
//     console.log("Invalid Marks");
// } else if (marks >= 80) {
//     console.log("Distinction");
// } else if (marks >= 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }
// var ageInput = prompt("Apni age daalein:");
// var membership = prompt("Kya aap premium member hain? (yes/no)");

// var age = Number(ageInput);
// var isPremium = membership.toLowerCase() === "yes";
// if (age >= 60 && isPremium) {
//     console.log("Senior Premium Discount");
// } else if (age >= 60) {
//     console.log("Senior Discount");
// } else if (isPremium) {
//     console.log("Premium Discount");
// } else {
//     console.log("No Discount");
// }
// var loggedIn = prompt("Kya aap logged in hain? (yes/no)").toLowerCase() === "yes";

// if (loggedIn) {
//     var emailVerified = prompt("Kya aapka email verify hua hai? (yes/no)").toLowerCase() === "yes";

//     if (emailVerified) {
//         console.log("Access granted");
//     } else {
//         console.log("Please verify your email");
//     }
// } else {
//     console.log("Please log in");
// }
// var ageInput = prompt("Apni age daalein (18-35 ke darmiyan):");
// var age = Number(ageInput);

// var country = prompt("Aap ka mulk kya hai? (Pakistan/India)");

// var bannedInput = prompt("Kya aap banned hain? (yes/no)").toLowerCase();
// var isBanned = bannedInput === "yes";

// if (age < 18 || age > 35 || isNaN(age)) {
//     console.log("Aap ki age contest ke liye munasib nahi hai.");
// } else if (country !== "Pakistan" && country !== "India") {
//     console.log("Contest sirf Pakistan aur India ke logon ke liye hai.");
// } else if (isBanned) {
//     console.log("Aap contest mein shamil nahi ho sakte kyun ke aap banned hain.");
// } else {
//     console.log("Mubarak ho! Aap contest ke liye eligible hain.");
// }
// var plan = prompt("Apna subscription plan daalein (premium/free):").toLowerCase();

// var loggedInInput = prompt("Kya aap logged in hain? (yes/no):").toLowerCase();
// var loggedIn = loggedInInput === "yes";

// if (loggedIn) {
//     if (plan === "premium") {
//         console.log("Welcome Premium User");
//     } else if (plan === "free") {
//         console.log("Welcome Free User");
//     } else {
//         console.log("Invalid subscription");
//     }
// } else {
//     console.log("Please log in to continue");
// }
// var priceInput = prompt("Product ki price daalein:");
// var price = Number(priceInput);

// var stockInput = prompt("Product stock mein hai? (yes/no):").toLowerCase();
// var inStock = stockInput === "yes";

// var memberInput = prompt("Kya aap member hain? (yes/no):").toLowerCase();
// var isMember = memberInput === "yes";

// if (price > 1000 && inStock && isMember) {
//     console.log("Buy now with discount");
// } else if (inStock) {
//     console.log("Buy now");
// } else if (!inStock) {
//     console.log("Out of stock");
// } else {
//     console.log("Invalid product");
// }

// var hoursInput = prompt("Kitne ghante kaam kiye hain?");
// var hoursWorked = Number(hoursInput);

// var weekendInput = prompt("Kya aaj weekend hai? (yes/no)").toLowerCase();
// var isWeekend = weekendInput === "yes";

// if (hoursWorked > 40 && !isWeekend) {
//     console.log("Overtime");
// } else if (hoursWorked > 0 && isWeekend) {
//     console.log("Weekend work");
// } else if (hoursWorked > 0 && hoursWorked <= 40) {
//     console.log("Regular hours");
// } else if (hoursWorked === 0) {
//     console.log("No work");
// } else {
//     console.log("Invalid input");
// }
// var ageInput = prompt("Apni age daalein:");
// var age = Number(ageInput);

// var gender = prompt("Apna gender daalein (male/female):").toLowerCase();

// if (age >= 13 && age <= 19) {
//     if (gender === "male") {
//         console.log("Teen Male");
//     } else if (gender === "female") {
//         console.log("Teen Female");
//     } else {
//         console.log("Invalid gender");
//     }
// } else if (age >= 20) {
//     console.log("Adult");
// } else if (age < 13 && age >= 0) {
//     console.log("Child");
// } else {
//     console.log("Invalid age");
// }
// var tempInput = prompt("Temperature daalein (°C):");
// var temperature = Number(tempInput);

// var humidityInput = prompt("Humidity daalein (%):");
// var humidity = Number(humidityInput);

// if (temperature >= 40 && humidity >= 60) {
//     console.log("Heatwave Alert");
// } else if (temperature >= 40 && humidity < 60) {
//     console.log("Hot and Dry");
// } else if (temperature <= 20) {
//     console.log("Cool Weather");
// } else {
//     console.log("Moderate");
// }
// var scoreInput = prompt("Apna score daalein (0 se 100 ke darmiyan):");
// var score = Number(scoreInput);

// if (score < 0 || score > 100 || isNaN(score)) {
//     console.log("Invalid Score");
// } else if (score >= 90) {
//     console.log("Excellent");
// } else if (score >= 70) {
//     console.log("Good");
// } else if (score >= 50) {
//     console.log("Average");
// } else if (score >= 30) {
//     console.log("Poor");
// } else {
//     console.log("Fail");
// }
// var loggedIn = prompt("Kya aap logged in hain? (yes/no)").toLowerCase() === "yes";

// if (loggedIn) {
//     var enrolled = prompt("Kya aap course mein enrolled hain? (yes/no)").toLowerCase() === "yes";
//     var banned = prompt("Kya aap banned hain? (yes/no)").toLowerCase() === "yes";

//     if (banned) {
//         console.log("User is banned");
//     } else if (!enrolled) {
//         console.log("Enroll in course first");
//     } else {
//         console.log("Access granted");
//     }
// } else {
//     console.log("Please log in");
// }hain

// var speedInput = prompt("Apni gaadi ki speed daalein (km/h):");
// var speed = Number(speedInput);

// var hasLicense = prompt("Kya aapke paas driving license hai? (yes/no)").toLowerCase() === "yes";

// if (speed > 120) {
//     console.log("License suspended");
// } else if (speed >= 100 && speed <= 120) {
//     console.log("Warning");
// } else if (speed <= 100 && hasLicense) {
//     console.log("Normal driving");
// } else {
//     console.log("Driving without license");
// }
// var paymentStatus = prompt("Payment status daalein (complete/pending/failed):").toLowerCase();

// if (paymentStatus === "complete") {
//     var shippedInput = prompt("Kya order ship ho chuka hai? (yes/no):").toLowerCase();
//     var shipped = shippedInput === "yes";

//     if (shipped) {
//         console.log("Order on the way");
//     } else {
//         console.log("Preparing your order");
//     }
// } else if (paymentStatus === "pending") {
//     console.log("Awaiting payment");
// } else if (paymentStatus === "failed") {
//     console.log("Payment failed");
// } else {
//     console.log("Invalid payment status");
// }
// var levelInput = prompt("Battery level daalein (0 se 100):");
// var level = Number(levelInput);

// var chargingInput = prompt("Kya battery charging mein hai? (yes/no):").toLowerCase();
// var isCharging = chargingInput === "yes";

// if (level === 100) {
//     console.log("Fully Charged");
// } else if (level < 100 && isCharging) {
//     console.log("Charging...");
// } else if (level < 20 && !isCharging) {
//     console.log("Low Battery");
// } else {
//     console.log("Battery OK");
// }
// var browser = prompt("Apna browser batayein (e.g., Chrome, Firefox, Safari):").toLowerCase();

// var device = prompt("Apna device type batayein (Desktop/Mobile):").toLowerCase();

// if (browser === "chrome" && device === "desktop") {
//     console.log("Full features enabled");
// } else if (browser === "chrome" && device === "mobile") {
//     console.log("Limited mobile features");
// } else {
//     console.log("Please switch to Chrome");
// }