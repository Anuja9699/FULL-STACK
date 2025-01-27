// let promise= new Promise((resolve,reject) =>{
//  let x=10;
//  if(x==0){
//     resolve("operation resolved");

//  }
//  else{
//       reject("operation rejected");
//  }

// }
// );
// promise
// .then((msg)=>{
// console.log("the promise message is",msg);})
// .catch((msg)=>{
//     console.log("the msg of the rejection",msg);})
// ;----------------------------------------------
async function mydata(){
    let response=await fetch('https://dummyjson.com/products');
        let data=await response.json();
        console.log(data);
    
}
mydata();