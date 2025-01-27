let age=25;
if(age>18)
{
    console.log("can vote");
}
else{l
    console.log("cannot vote");
}
let even=[];
let odd=[];
let arr=[1,2,3,4,5,6,7,8];
for(let i=0;i<8;i++)
{
    if(arr[i]%2==0)
    {
       even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}
console.log(even);
console.log(odd);