/*  Objects
 ------------ */
 console.log('0.-----Strings------');
 let test = {
    name: "Fahad", 
    age: 27, 
    origion:'Asian', 
    education: true, 
    hobbies:'Soccer'
};
console.log('Name:',test.name);
console.log('Age:',test.age);
console.log('Origion:',test.origion);
console.log('Edcation:',test.education);
console.log('Hobbies:',test.hobbies); 

// --------------------------------//
console.log('1.-----Strings-----');

let myString = "Hi everyone this is foo-cafe free academy"
console.log(myString);

// --------------------------------//
console.log('2.1-------------------');

console.log('Maher favorite animali is Turtle in the following animals list');
console.log('2.2-------------------');
let favoriteAnimals = ["'Turtle'", "Blowfish", "Capricorn", "Giraffe"];

console.log('a:-',favoriteAnimals[0]); // Prints “Turtle”
console.log('b:-',favoriteAnimals[1]); // Prints “Blowfish”
console.log('c:-',favoriteAnimals[2]); // Prints “Capricorn”
console.log('d:-',favoriteAnimals[3]); // Prints “Giraffe”

// --------------------------------//
console.log('2.3-------------------');
let favoriteAnimals1 = ["Turtle", "Blowfish", "Meerkat", "Capricorn", "Giraffe"];
console.log('In this new array you will see one more animal which has added to the list');
console.log('a',favoriteAnimals1[0]);
console.log('b',favoriteAnimals1[1]);
console.log('c',favoriteAnimals1[2]);
console.log('d',favoriteAnimals1[3]);
console.log('e',favoriteAnimals1[4]);
// --------------------------------//
console.log('2.4-------------------');
console.log('The length of the above array is about:',favoriteAnimals1.length);

// --------------------------------//
console.log('2.5-------------------');

favoriteAnimals.splice(3);
console.log("Giraffe has been deleted from the array and now its:",favoriteAnimals.length);

// --------------------------------//
console.log('2.6-------------------');

console.log("It's quite simple when you don't like any of the items, do the following steps");
console.log("eg: myarray.splice(start, deletecount);");

// --------------------------------//
console.log('// ----------------Java-Script----------------//');
console.log('1: Function with 3 arguments and returning the sum of same arguments');
console.log ('for eg: var sum = (2+3*2)');
var sum = (2+3*2) 
{
console.log(sum)
};
// --------------------------------//
console.log(' -------------------------------- ');
console.log('2: Created a function & named colorCar for returning the color of cars');

var colorCar = 'Red , green';

if (colorCar == 2)
{console.log("The car is Red")
}
else
{console.log("you're failiure")
};
// --------------------------------//
console.log(' -------------------------------- ');
console.log('3: Create an object and a function that takes and prints out all of its properties and values.');
function Car(make, model, year) {
    car.make = make;
    car.model = model;
    car.year = year;
  }
  var Car = ('Eagle', 'Talon TSi', 1993);
  console.log('For eg: The car model is:','Eagle', 'Talon TSi', Car);
// --------------------------------//
console.log(' -------------------------------- ');
console.log('4: Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike');
  // --------------------------------//
    function vehicleType(color,code){
    if(code == 1){
    return console.log("A ",color,"car")}
    else if(code == 2){
      return console.log("A ",color,"motorbike")}
  }
  vehicleType("blue", 2);

  console.log(' -------------------------------- ');
  console.log('5: Can you write the following without the if statement, with a single line with console.log(...);?');
  
  3 === 3 ? console.log('The result is:',"yes") : console.log("no");
  
  console.log(' -------------------------------- ');
  //calling the function with diffrent cases
  console.log('6: Create a function called vehicle, like before, but takes another   parameter called age, so that vehicle("blue", 1, 5) prints a blue used car');
  
  function vehicle(color,code,age)
  {
    if(code == 1)
    {
      if(age == 5)
      {
       console.log("a",color,"used car");
      }
      else
      {  
       console.log("a",color,"car");
      }
    }
    else if(code == 2 )
    {
        return console.log("a",color,"motorbike");
    }
  else 
    {
      return console.log("This is not a vehicle");
    }
  }

    vehicle("blue",1,5);
    vehicle("blue",1,2);
    vehicle("blue",2,5);
    vehicle("blue",2,3);
    vehicle("blue",3,5);
    vehicle("blue",3,0);

    console.log(' -------------------------------- ');
    console.log('7: Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.');
    
    let vehicles = ["motorbike", "caravan", "bike","car"];

    console.log(' -------------------------------- ');
    console.log('8: How do you get the third element from that list?');

    console.log('3rd element is:',vehicles[2]);


    console.log(' -------------------------------- ');
    console.log('9: Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike"');
       
    function vehicleList(color,code,age){
        let c;
        if (c = vehicles[0]); 
        else if(code == 2){c = vehicles[1];} else if(code == 3){c = vehicles[2]} else if(code == 4){c = vehicles[3]} else{c = " ";}
        let a;
        if(age == 1){a = "new";}
        else if (age == 5){a = "used";} 
        else {a = " ";}
        
      console.log("a",color,a,c);
    }
        vehicleList("red",4,5);
        console.log(vehicles);

    console.log(' -------------------------------- ');
    console.log('10: Use the list of vehicles to write an advertisement. So that it prints something like "xyz" ');

    let vehicleToService="";
for(let counter=0; counter<vehicleToService.length ;counter++)
{
  if(counter == vehicles.length - 1){vehicleToService += vehicles[counter] + "s.";}
 else {vehicleToService += vehicles[counter] + "s, ";}
 
}
 console.log('Printed:'," \" Amazing Joe's Garage, we service" , vehicleToService,"\"");

 console.log(' -------------------------------- ');
 console.log('11: Use the list of vehicles to write an advertisement. So that it prints something like "xyz" ');
 
    
    vehicles = "scoter";
    console.log(vehicles);
    vehicleToService="";

    for(let counter=0; counter<vehicles.length ;counter++)
{
    if(counter == vehicles.length - 1){vehicleToService += vehicles[counter] + "s.";}
    else {vehicleToService += vehicles[counter] + "s, ";}
 
}
 console.log(" \"Amazing Joe's Garage, we service" , vehicleToService,"\"");

 console.log(' -------------------------------- ');
 console.log('12: Create an empty object');
 console.log('var objectA = {}');
 console.log('var objectB = new Object()');


 console.log(' -------------------------------- ');
 console.log('13 & 14: Create an object about the teacher and add the property to same object');
 var myTeacher = {
    tName: 'Baraa',
    tAdd: 'xyz',
    tGend: 'Female',
    tAge: 35,
    tTel: '0778055600',
    tStatus: true

};
console.log('tName:',myTeacher.tName);
console.log('tAdd:',myTeacher.tAdd);
console.log('tGend:',myTeacher.tGend);
console.log('tAge:',myTeacher.tAge);
console.log('tTel:',myTeacher.tTel);
console.log('tStatus:',myTeacher.tStatus);

console.log(' -------------------------------- ');
console.log('15: Write some code to test two arrays for equality using == and ===. Test the following:');
console.log ('let x = [1, 2, 3];')
console.log ('let y = [1, 2, 3];')
console.log ('let z = y;')

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(y = y);
console.log(y == y);
console.log(y === y);
console.log(y == x);
console.log(y === x);
console.log(y === z);
console.log(y <= x);

console.log('-------------------');

console.log(x <= y);
console.log(x = x);
console.log(x == x);
console.log(x === x);
console.log(x === z);
console.log(x === y);
console.log(x == y);

console.log('-------------------');

console.log(x === y);
console.log(x == y);
console.log(y = x);

console.log('-------------------');

console.log(z === y);
console.log(z == y);
console.log(z = x);

console.log(' -------------------------------- ');
console.log('16: Take a look at the following code:');
console.log('let o1 = { foo: "bar" };');
console.log('let o2 = { foo: "bar" };');
console.log('let o3 = o2;');


let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o2 = o3);
console.log(o3 = o2);

console.log(' -------------------------------- ');
console.log('17: What does the following code return? (And why?)');

let bar = 42;
typeof typeof bar;

console.log('returns:',typeof bar);
console.log('returns:',bar);
console.log('returns:',typeof typeof bar);
