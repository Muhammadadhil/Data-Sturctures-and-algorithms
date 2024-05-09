

// function binarySearch(arr,n){
//     let startIndex=0;
//     let endIndex=arr.length-1;

//     while(startIndex<=endIndex){
//         let middle=Math.floor((startIndex+endIndex)/2);

//         if(n==arr[middle]){
//             return middle;
//         }

//         if(n>arr[middle]){
//             startIndex=middle+1;
//         }else{
//             endIndex=middle-1;
//         }

//     }
//     return -1;

// }
// let arr=[1,2,3,4,5];
// binarySearch(arr,4)


function factorial(n){
    if(n<=1){
        return n;
    }
    return n*factorial(n-1)
}

console.log(factorial(5));