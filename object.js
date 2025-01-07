// object creation
let aobject= {
    firstname:"Anuja",
    lastname:"Hinge",
    occupation:{name:"web developer"},
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
console.log(Object.assign(obj1,obj2));


// console.log(aobject.occupation.name);
// //display keys


// console.log(Object.keys(aobject));

// //display values
// console.log(Object.values(aobject));
// //display both




const customObject = {
    firstname: "anuja",
    lastname: "hinge",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};


console.log(customObject.fullname());


const you={
    name:"Mosh",
    talk:function(){
        console.log(this);
    },
};
you.talk();
