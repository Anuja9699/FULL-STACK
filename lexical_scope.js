function outer(){
    let a=10;
    function inner(){
       
        console.log(a);
    }
    inner();
      /* b is note defined because is initiasize in inner function*/
}
outer();

function outer1(){
    let a=10;
    function inner2(){
        
        console.log(a);
    }
    return inner2;
     
}
let updatedfun=outer1();
updatedfun();

