
// function search(arr,target){
//     let middle=Math.ceil(arr.length/2);
//     let middleElem=arr[middle]
    
//     let i;
//     let n=arr.length;

//     if(target==middleElem){
//         return middle;
//     }else if(target>middleElem){
//         i=middle+1;
//     }else if(target<middleElem){
//         i=0;
//         n=middle;
//     }

//     for(i=i;i<n;i++){
//         if(arr[i]==target) 
//         return i;
//     }

// }
// let arr=[10,20,30,40,50,60,70];
// console.log(search(arr,20));


//o(log n)
// //binary search
// function binarySearch(arr,target){
//     let startIndex=0;
//     let endIndex=arr.length-1;


//     while(startIndex <= endIndex){
//         let middle=Math.floor((startIndex+endIndex)/2);
//         console.log('middle:',middle);

//         if(target==arr[middle]){
//             return middle;
//         }

//         if(target> arr[middle]){
//             startIndex=middle+1;
//             console.log('1');
//         }else{

//             endIndex=middle-1;
//             console.log('end:',endIndex);

//         }
        
//     }
//     return -1;
// }
// console.log(binarySearch(arr,30));


// //change the all the occurance number n to zero using binary search
// let arr=[1,2,3,4,5,6,8,9,10];
// arr=arr.sort((a,b) => a-b);
// console.log(arr);
// function change(arr,n){

//     let startIndex=0;
//     let endIndex=arr.length-1;

//     while(startIndex<=endIndex){
//         let middle=Math.floor((startIndex+endIndex)/2);
//         console.log(middle);

//         if(n==arr[middle]){
//             arr[middle]=0;
//         }

//         if(n>arr[middle]){
//             startIndex=middle+1;
//         }else{
//             endIndex=middle-1;
//         }
//     }
//     return arr;

// }
// console.log(change(arr,1));


//recursive binary search
function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1);
}

function search(arr,target,startIndex,endIndex){
    if(startIndex>endIndex){
        console.log('vdee');
        return -1;
    }

    let middle=Math.floor((startIndex+endIndex)/2);
    if(target==arr[middle]){
        return middle;  //return the index
    }

    if(target>arr[middle]){
        return search(arr,target,middle+1,endIndex);
    }else{
        return search(arr,target,startIndex,middle-1);
    }
    
}


let arr1=[-5,2,3,4,5,7,8,9,12,15]
console.log(recursiveBinarySearch(arr1,15));
