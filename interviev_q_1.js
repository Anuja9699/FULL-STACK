// let input="aabbcdd";
// let result ="";
// let count =1;
// for(let i=0;i<input.length;i++)
// {
//     if( input[i]===input[i+1])
//     {
//         count++;
//     }
//     else{
//         result+= input[i]+count;
//     }
// }
// console.log(result);
function encodeString(input) {
    let result = "";
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result += input[i].repeat(count) + count;
            count = 1; // Reset count for the next character
        }
    }

    return result;
}

let input = "aabbcdd";
let output = encodeString(input);
console.log(output); // Output: aa2bb2c1dd2

