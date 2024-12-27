// object creation
let aobject= {
    firstname:"Anuja",
    lastname:"Hinge",
};
console.log(aobject);



// object creation using new object();
let obj= new Object();
obj.name="Anuja",
obj.surname="hinge",
obj.age=21
console.log(obj);


// accessing object properties
console.log(aobject.firstname);       //using dot
console.log(aobject["firstname"]);   //using square bracket


// modyfying object properties

aobject.firstname="Anu";
console.log(aobject.firstname); 


// adding properties in object
aobject.middlename="Hanumant";
console.log(aobject);


// removing properties
delete aobject.middlename;
console.log(aobject);


// checking if property exist or not
console.log("firstname" in aobject);
console.log(aobject.hasOwnProperty("firstname"));

// merging object
let obj1 ={ name:"anuja"};
let obj2={  age:21};
let obj3={ ...obj1,...obj2};
console.log(obj3);
