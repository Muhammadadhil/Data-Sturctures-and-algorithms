//bubble sort
// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped=false;
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 temp=arr[i];    
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped=true;
//             }
//         }
        
//     }while(swapped);

// }
// arr=[12,5,6,7,20,5]
// bubbleSort(arr);
// console.log(arr);

//insertion sort  -o(n2)
// let array=[10,20,70,90,40,60,30];
// function insertionSort(array){
    
//     for(let i=1;i<array.length;i++){
//         let valueToInsert=array[i];
//         let j=i-1;
//         while(j>=0 && valueToInsert<array[j]){
//             console.log('valuetoInsert:',valueToInsert);
//             array[j+1]=array[j];
//             j--;
//         }
//         array[j+1]=valueToInsert;
//     }
//     return array;

// }
// console.log(insertionSort(array));


//quick sort
// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot=arr[arr.length-1];
//     let left=[];
//     let right=[];

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     console.log('left:',left);
//     console.log('right:',right);


//     return [...quickSort(left), pivot ,...quickSort(right)]

// }
// let arr=[12,23,50,43,10,87,73];
// console.log(quickSort(arr));


// merge sort
// function mergeSort(array){

//     if(array.length<2){
//         return array;
//     }
//     let middle=Math.floor(array.length/2);                       

//     let array1=array.slice(0,middle);     // 
//     let array2=array.slice(middle); 

//     return merge(mergeSort(array1),mergeSort(array2));             

// }

// function merge(array1,array2){
//     let sortedArray=[];
//     while(array1.length && array2.length){
//         if(array2[0]>array1[0]){
//             sortedArray.push(array1.shift());
//         }else{
//             sortedArray.push(array2.shift());
//         }
//     }
//     const resultarr=[...sortedArray,...array1,...array2];
//     console.log('resultArr:',resultarr);
//     return resultarr;
// }
// let array=[-6,20,8,-2,4];
// console.log(mergeSort(array));


//insertion sort -practice
function sort(arr){

    for(let i=1;i<arr.length;i++){
        let valueToinsert=arr[i];
        let j=i-1;
        while(j>=0 && valueToinsert<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=valueToinsert;
    }
    return arr;

}
let arr=[12,5,6,7,20,5];
console.log(sort(arr));


//merge sort-try
// function mergeSort(array){
//     if(array.length<2){
//         return array;
//     }
    
//     let middle=Math.floor(array.length/2);
//     let 

//     // for(let i=0;i<array.length;i++){
//     //     if(i>=middle){
//     //         array2.push(array[i]);
//     //     }else{
//     //         array1.push(array[i]);
//     //     }
//     // }
//     console.log(array1);
//     console.log(array2)

//     let tempArray=[];
    
//     for(let i=0;i<array2.length;i++){
//         if(array2[0]<array1[0]){
//             tempArray.push(array2[0]);
//         }else{
//             tempArray.push(array1[0])
//         }
//     }

//     console.log('temp:',tempArray);

//     return [...mergeSort(array1),...mergeSort(array2)];

// }
// let array=[-6,20,8,-2,4];
// console.log(mergeSort(array));



