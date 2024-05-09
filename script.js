
// let arr=[6,3,2,4,9,1];
// const target=10;

// function findTarget(arr,target){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }

// console.log(findTarget(arr,target));;



let nums=[6,3,2,4,9,1]; 
const target=10;

const newSet=new Set();

function findTarget(nums,target){
    for(let i=0;i<nums.length-1;i++){
        let matchNum=target-nums[i];
        if(newSet.has(matchNum)){
            return [matchNum,nums[i]]
        }else{
            newSet.add(nums[i]);
        }
    }
    return [0,0]
}

console.log(findTarget(nums,target));;


// let nums=[5,3,2,5,1,5,2,9,5,6]; 
// const target=5;


// function moveToEnd(nums,target){
//     let i=0;
//     let j=nums.length-1;

//     while(i<j){

//         while(i<j && nums[j]==target){
//             j--;
//             console.log('j decremented:::')
//         }
//         if(nums[i]==target){
//             nums[i]=nums[j];
//             nums[j]=target;
//             console.log('target moved');
//         }
//         i++;
//     }

//     // return nums;
//     console.log(nums);
// }

// console.log(moveToEnd(nums,target));;


// function fibonacci(n){
//     let arr=[0,1];
//     for(let i=2;i<n;i++){
//          arr[i]=arr[i-1]+arr[i-2];
//     }
//     return arr;
// }

// console.log(fibonacci(7));;

// function factorial(n){
//     let factor=1;
//     for(let i=1;i<=n;i++){
//         factor=factor*i;
//     }
//     return factor;
// }
// console.log(factorial(0));
// console.log(factorial(4));
// console.log(factorial(5));

//fibonacci using normal iterative method
// function findFibonacci(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     let prev=0;
//     let curr=1;

//     for(let i=2;i<n;i++){
//         let next=prev+curr;
//         prev=curr;
//         curr=next;
//     }
//     return curr;
// }

// console.log(findFibonacci(5));

//fibonacci using recursion
function recursivefib(n){
    
    if(n<2){
        return n;
    }
    return recursivefib(n-1)+recursivefib(n-2);
}

// console.log(recursivefib(3));

// let n=6;
// for(let i=0;i<n;i++){
//     console.log(recursivefib(i));;
// }


// function factorial(n){

//     let result=1;
//     for(let i=2;i<=n;i++){
//         result=result*i;
//     }
//     return result; 
// }
// console.log(factorial(3));


// //factorial using recurive 
// function fact(n){
//     if(n<=1){
//         return 1;
//     }
//     return n*fact(n-1);
// }
// console.log(fact(3));


//max element in an array
let arr=[1,1,2,3,1,3,1,5,6,9];

let maxElement=0;
let maxCount=0;

for(let i=0;i<arr.length-1;i++){
    let elemCount=1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            elemCount++;

        }
    }
    if(elemCount>maxCount){
        maxCount=elemCount;
        maxElement=arr[i];
    }
}

console.log(maxElement);
console.log(maxCount);


