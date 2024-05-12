

let array=[6,7,5,7,5,7,45,2,6, 1,-1,2,-2,-3,4];




function findtriple(array,num){
    let sum=[];
  
        for(let i=0;i<array.length;i++){
            if(num===(array[i]+array[i+1]+array[i+2]))
            sum.push(array[i]);
            sum.push(array[i+1]);
            sum.push(array[i+2]);
        }
        return sum
    }

console.log(findtriple(array,21));

let arr=[10,30,20,50,60,70,80,40]

[[2,3,1],[]]