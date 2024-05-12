//basic hashtable implementation
// class HashTable{

//     constructor(size){
//         this.table=new Array(size);  //creating an array with fixed size
//         this.size=size;
//     }

//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total%this.size;
//     }

//     set(key,value){
//         const index=this.hash(key);
//         this.table[index]=value;
//     }

//     get(key){
//         const index=this.hash(key);
//         return this.table[index];
//     }

//     remove(key){
//         const index=this.hash(key);
//         this.table[index]='undefined';
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log('index:',i,'value:',this.table[i]);
//             }
//         }
//     }
// }

// const table1=new HashTable(50);
// table1.set('name','aadhil');
// table1.set('age','21');
// console.log(table1.get('name'));
// table1.set('enam','bahir');      //this will also map to the same index-collision

// table1.display();


//hashtable handled collision:
 
// class HashTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;
//     }

//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total%this.size;
//     }

//     set(key,value){
//         const index=this.hash(key);
//         let bucket=this.table[index];
//         if(!bucket){ 
//             this.table[index]=[[key,value]];
//         }else{
//             const sameKeyItem=bucket.find((item) => item[0]===key);
//             if(sameKeyItem){
//                 sameKeyItem[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//     }
    
//     get(key){
//         const index=this.hash(key);
//         let bucket=this.table[index];

//         if(bucket){
//             const sameKeyItem=bucket.find(item => item[0]==key);
//             if(sameKeyItem){
//                 return sameKeyItem[1];
//             }
//         }
//         return undefined;
//     }

//     remove(key){
//         const index=this.hash(key);
//         const bucket=this.table[index];
//         if(bucket){
//             const deleteItem=bucket.find(item=> item[0]==key);
//             if(deleteItem){
//                 bucket.splice(bucket.indexOf(deleteItem),1);                
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table1=new HashTable(20);
// table1.set('name','adhil');
// table1.set('hello','bahir');
// table1.set('helol','ajil');
// console.log(table1.get('name'));
// console.log(table1.get('hello'));
// table1.display();



// class hashtable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;
//     }

//     hash(key){
//         let total;
//         for(let i=0;i<key.length;i++){
//             total+=key[i].charCodeAt();
//         }
//         return total%this.size;
//     }

//     set(key,value){
//         const index=this.hash(key);
//         const bucket=this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKeyItem=bucket.find(item=> item[0]==key);
//             if(sameKeyItem){
//                 sameKeyItem[1]=value;
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
        
//     }
// }

