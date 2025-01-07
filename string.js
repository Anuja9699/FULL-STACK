// string declaration
let str = `This is "javascript" scripting language`;
console.log(str);

let firstname = " Anuja";
let lastname = "Hinge";
console.log("hello miss" + firstname + " " + lastname);
console.log(`hello miss ${firstname} ${lastname} `);

let str1 = "Anuja";
// string declaration using new keyword object
let str2 = new String("Anuja");
console.log(str1);
console.log(str2);

console.log(str1 == str2); //compare by using value
console.log(str1 === str2); //compare by using datatype

let str3 = new String("Anuja");
console.log(str1 === str3); //comparison betn two object does not possible because it pass by refernce not by value
// uppercase
let str4="anuja";
console.log(str4.toUpperCase());
let lower=str4.toLowerCase();
console.log(lower);
// slice
let slice=str4.slice(0,-3);//ne
console.log(slice);

let string="javascript";
console.log(string.slice(-7,-6));
console.log(string.slice(-9,10));
console.log(string.slice(-9,-3));
console.log(string.slice(-9,0));
console.log(string.slice(-4));
// substring
console.log(string.substring(-4,9));


// trim :-which is remove spaces from both Sides
let s1="     Anuja  Hinge";
console.log(s1.trim());

//replace 
let s2="Anuja Anuja Hinge";
console.log(s2.replace("Anuja","Anu"));
//replaceall();


console.log(s2.replaceAll("Anuja","Anu"));

//indexof();
console.log(s2.indexOf("Anuja"));
console.log(s2.indexOf("Hinge"));
//lastindexof()
console.log(s2.lastIndexOf("Anuja"));



