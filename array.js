// let arr=[1,'Anuja',false];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);
// let arr2=[];
// arr2[0]=2;
// arr2[1]=8;
// arr2[2]=99;

// console.log(arr2);
// let arr3=[];
// arr3.push(1);
// arr3.push(2);
// arr3.push(3);
// console.log(arr3);
// let arr4=["anuja","hinge"];
// let arr5=arr4.toString();
// console.log(arr5,typeof(arr5));
// let arr6=arr4.join();
// console.log(arr6);
// let str="hello";
// console.log(str.split());
// for(let i=1;i<=10;i++)
// {
//     console.log("2*"+i+"=" +2*i);
// }

// myprofile();
// function myprofile(){
//     console.log("hello");
// }
// myprofile();
// let myprofile=()=>{
//     console.log("hello");
// };
// myprofile();
// let newarr=[11,22,33,44];
// let updated=newarr.map((ele,index) =>{
//     return ele*2;
// });
// console.log("newarr=",newarr);
// console.log("updated=",updated);
// let newarr=[{name:"anuja"},{name:"snehal"}];
// let updated=newarr.map((ele,index) =>{
//        return ele.name;})
//        console.log("newarr=",newarr);
// console.log("updated=",updated);
// let newarr1=[22,33,65,8,99,55,76];

// let updatedarr=newarr1.filter((ele,index)=>
// {
//  return ele>150;
// })
// console.log(updatedarr);

// let arr23=[22,33,65,8,99,55,76];
// let updatedarr23=arr23.map((ele,index)=>
// {
//    return ele*3;    
// }).filter((ele,index)=>
// {
//        return ele>150;
// });
//  console.log(updatedarr23);
//  let a=[1,1,2,3,4,5,5];
//  let b=[...new set(a)];
//  console.log(b);
// let str="hello ms anuja";
// let arr=[];
// for(let i=0;i<str.length;i++)
// {
//        if((str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'))
//        {
//          arr.push(str[i]);   
//        }

// }
// console.log(arr);
// let b=[...new Set(arr)];
// console.log(b);

// using map 
let newarr=[1,2,3,4,5,6,7,8,9];
let even=[];
let odd=[];
newarr.map((ele,index) =>{
  if(ele%2==0){
  
  even.push(ele)} ;
});
newarr.map((ele,index) =>{
  if(ele%2!=0)
  odd.push(ele) ;
});
console.log(even);
console.log(odd);




    
