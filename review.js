// -find all the triples in array [6,7,5,7,5,7,45,2,6, 1,-1,2,-2,-3,4] whose sum is 6
// Output should be [[6, 1, -1], [2,-2,-4] …]

// let arr=[6,7,5,7,5,7,45,2,6,1,-1,2,-2,-3,4];

// // let arr=[1,2,3,4,5,6,7,8,9,0];
// let result=[];
// let num=6;

// for(let i=0;i<arr.length-2;i++){
//     let subarray=[];
//     for(let j=i+1;j<arr.length-1;j++){
//         for(let k=j+1;k<arr.length;k++){
//             if(arr[i]+arr[j]+arr[k]==num){
//                 let subarray=[arr[i],arr[j],arr[k]];
//                 result.push(subarray);
//             }
//         }
//     }

// }

// console.log(result);

//find pairs whose sum is target
// let arr1=[1,2,-3,4,-2,-1];
// const target=1;
// let result=[];

// // arr1=arr1.sort((a,b)=> a-b);

// for(let i=0,j=arr1.length-1;i<j;i++,j--){
//     if(arr1[i]+arr1[j]==target){
//         // let subarr=[arr1[i],arr1[j]];
//         result.push(subarr);
//     }
// }

// console.log(result);



// function tripleTarget(arr,target){
//     let result=[];
//     arr=arr.sort((a,b)=> a-b);
//     for(let i=0;i<arr.length-2;i++){
//         let j=i+1;
//         let k=arr.length-1;
//         let sum=target-arr[i]; 
        
//         while(j<k){
//             let tsum=arr[j]+arr[k];
//             if(tsum==sum){
//                 let subarr=[arr[i],arr[j],arr[k]];
//                 result.push(subarr);
//                 j++;
//                 k--;
//             }else if (tsum < sum) {
//                 j++; // Move j to the right
//             } else {
//                 k--; // Move k to the left  
//             }
//         }
//     }

//     return result;

// }
// let arr=[1,2,-3,4,-2,-1];
// // let arr=[6,7,5,7,5,7,45,2,6,1,-1,2,-2,-3,4];

// const target=1;
// console.log(tripleTarget(arr,target));



// class Solution3 {
//     constructor() {
//         class Pair {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//             }
//         }
//         this.Pair = Pair;
//     }

//     findTriplet(arr, sum) {
//         const n = arr.length;
//         if (n < 3) {
//             console.log("No triplets found");
//             return;
//         }

//         for (let i = 0; i < n - 2; i++) {
//             const remainingSum = sum - arr[i];
//             const pairList = this.findPair(arr, i + 1, n, remainingSum);
//             pairList.forEach(p => {
//                 console.log(`Triplet found: [${arr[i]}, ${p.x}, ${p.y}]`);
//             });
//         }
//     }

//     findPair(arr, left, right, sum) {
//         const pairList = [];
//         const visitedElements = new Set();
//         for (let i = left; i < right; i++) {
//             const curElement = arr[i];
//             const searchElement = sum - arr[i];
//             if (visitedElements.has(searchElement)) {
//                 pairList.push(new this.Pair(searchElement, curElement));
//             } else {
//                 visitedElements.add(curElement);
//             }
//         }
//         return pairList;
//     }
// }

// // Test
// const arr = [1,1,1,5,5,5,2,2,2];
// const solution = new Solution3();
// solution.findTriplet(arr, 8);


let arr=[1,4,2,5,3,7,9,8];

function findTriple(arr,target){
    let triples=[];

    for(let i=0;i<arr.length-2;i++){
        let remainSum=target-arr[i];
        let left=i+1;
        let right=arr.length-1;

        let result=findPair(left,right,arr);
        if(result.length){
            triples.push(result);
        }

        function findPair(left,right,arr){
            let array=[];
            let visitedElement=new Set();
            while(left<right){
                let curr=arr[left];
                let searchItem=remainSum-curr;
                if(visitedElement.has(searchItem)){
                    array.push(arr[i],arr[left],searchItem);
                }else{
                    visitedElement.add(curr);
                }

                left++;
            }
            return array;
        }
    }

    return triples;
}
console.log(findTriple(arr,15));






























// function findtriple(array,num){
//     let sum=[];
  
//         for(let i=0;i<array.length;i++){
//             if(num===(array[i]+array[i+1]+array[i+2]))
//             sum.push(array[i]);
//             sum.push(array[i+1]);
//             sum.push(array[i+2]);
//         }
//         return sum
//     }

// console.log(findtriple(array,21));

// let arr=[10,30,20,50,60,70,80,40]

// [[2,3,1],[]]