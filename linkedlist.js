
// class Node{
  
//   constructor(value){
//     this.value=value;
//     this.next=null;
//   }
// }

// class linkelist{
//   constructor(){
//     this.head=null;
//     this.size=0;
//   }

//   isEmpty(){
//     return this.size==0;
//   }
//   getSize(){
//     return this.size;
//   }

//   // o(1) T
//   prepend(value){                         //insert a node at the begginning of the list

//     const node=new Node(value);
//     if(this.isEmpty()){
//       this.head=node;                     //insert a node when the list is empty
//       console.log('node emptyyy');
//     }else{
//       node.next=this.head;                //inserting another node
//       this.head=node
//     }
//     this.size++;    
//     console.log('node:',node);
//   }
//   //o(n) T
//   append(value){     
    
//     const node=new Node(value);
    
//     if(this.isEmpty()){
//       this.head=node;
//     }else{
//       let prev=this.head;              //setting a pointer 'prev' to get the last node.       
//       while(prev.next){                //loop work untill next point to null.
//         prev=prev.next;                //advance 'prev' to the last node.
//       }
//       prev.next=node;                  //make the newly created node as the last 
//     }
//     this.size++;

//     console.log('list:',this.head);
    
//   }
  
//   insert(value,index){
    
//     if(index < 0 || index > this.size){
//       console.log('wrong index');
//       return 
//     }

//     if(index===0){
//       this.prepend(value)               //inserting in first index is same as prepend
//     }else{
//       const node=new Node(value);             
//       let prev=this.head;               //initialising 'prev' pointer as the head
//       console.log('prev:',prev)
//       for(let i=0;i<index-1;i++){       //bring or place the 'prev' pointer at previous node  
//           prev=prev.next;               
//       }
//       node.next=prev.next;              //making the next of the new node as the next
//       prev.next=node;                   //inserting new node between these nodes
//       this.size++;
      
//     } 
    
//   }
//   //o(n) T
//   removeFrom(index){
//     if(index < 0 || index > this.size){
//       console.log('invalid index for removing')
//       return 
//     }
    
//     let removeNode;
//     if(index==0){
//       removeNode=this.head;
//       this.head=this.head.next;         //making head as the next node
//     }else{
//        let prev=this.head;
//         for(let i=0;i<index-1;i++){
//           prev=prev.next;
//         }
//         removeNode=prev.next
//         prev.next=removeNode.next;
//     }

//     this.size--;
//     return removeNode.value;
    
//   }
  
//   removeValue(value){
//     if(this.isEmpty()){
//         return null;
//     }
//     if(this.head.value===value){          //if the value is 1st position
//       this.head=this.head.next;           //change the head to the next
//     }else{
//       let prev=this.head;                
//       while(prev.next && prev.next.value!==value){ 
//         prev=prev.next;
//       }
//       let removeNode=prev.next;
//       prev.next=removeNode.next;
//       this.size--;
//     }
//   }
  
//   // o(n) T - linear time complexity
//   search(value){
//     if(this.isEmpty()){
//       return -1;
//    }else{
//       let curr=this.head;
//       let i=0;
//       while(curr){
//         if(curr.value==value){
//           return i;
//         }
//         curr=curr.next;
//         i++;
//       }
//     return -1;  
//    }
//   }

//   reverse(){
//     let prev=null;             
//     let curr=this.head; 
    
//     while(curr){
//       let next=curr.next;                     //setting a temp variable next to curr.next
//       curr.next=prev;                         //making current node's next as previous node
//       prev=curr;                              //changing that previous pointer to current
//       curr=next;                              //changing the current pointer to next node
//     }
//     this.head=prev;
//     // prev=this.head;
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log('linkedlist is empty');
//     }else{
//       let curr=this.head;
//       let listValues='';
      
//       while(curr){
//         listValues+=`${curr.value}  `;
//         curr=curr.next;
//       }
//       console.log('List size:',this.size);
//       console.log('listValues:',listValues);
//     }
//   }
// }

// const list=new linkelist();

// list.print();

// list.append(1000);
// list.append(2000);
// list.append(3000);
// list.insert(5000,3);

// console.log('searchresult:',list.search(3000))
// list.reverse();
// list.print();






// //with tail pointer
// class Node{
  
//     constructor(value){
//       this.value=value;
//       this.next=null;
//     }
    
//   }
  
//   class Linkedlist{

//     constructor(){
//       this.head=null;
//       this.tail=null;
//       this.size=0;
//     }
  
//     isEmpty(){
//       return this.size==0;
//     }
  
//     getSize(){
//       return this.size;
//     }

//     //o(1)T
//     prepend(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }

//         this.size++;
//         console.log('list:',this.head)
//     }

//     //o(1) T
//     append(value){
//         const node=new Node(value);
//         if(this.size==0){
//             this.head=node;
//             this.tail=node;
//         }else{
//             this.tail.next=node;
//             this.tail=node;
//         }
//         this.size++;
//         console.log('list:',this.head)
        
//     }

//     removeFromFront(){
//         if(this.size===0){
//             return null
//         }else{
//             this.head=this.head.next;
//             this.size--;
//         }
//     }

//     removeFromEnd(){
//         if(this.size==0){
//             return null;
//         }

//         if(this.size==1){
//             this.head=null;
//             this.tail=null;
//         }else{
//             let prev=this.head;
//             while(prev.next!==this.tail){
//                 prev=prev.next;
//             }
//             this.tail=prev;
//             prev.next=null;
//             this.size--;

//         }
//     }


//     print(){
//       if(this.head==null){
//         console.log('list empty');
//         return 
//       }else{
//         let listItems='';
//         let curr=this.head;
//         while(curr){            
//           listItems+=`${curr.value} `;
//           curr=curr.next;
//         }
//         console.log('listItems:',listItems);
    
//       }
//     }
    
//   }
  
//   const list1=new Linkedlist();
//   list1.print()
// list1.append(100)
// list1.append(200)
// list1.append(300)
// list1.append(400)

//   list1.removeFromEnd()


//   list1.print()





// class Node{
//     constructor(value){
//         this.value=value;
//         this.size=0;
//     }
// }

// class Linkedlist{

//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     append(value){
//         const node=new Node(value);
//         if(this.size==0){
//             this.head=node;
//             this.tail=node;
//         }else{
//             this
//             this.tail=node;
//         }
//         this.size++;
//         console.log(this.head);

//     }

//     print(){
//         if(this.size==0){
//             return null;
//         }else{
//             let curr=this.head;
//             let listItems=''
//             while(curr){
//                 listItems+=`${curr.value} `;
//                 curr=curr.next
//             }
//             console.log(listItems);
//         }
//     }
    
// }

// const list1=new Linkedlist();
// list1.append(10);
// list1.append(20);
// list1.append(30);
// list1.print();



//convert this array into linkedlist
let array=[10,15,20,25,25,35,40];

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class linkedlist{

  constructor(){
    this.size=0;
    this.head=null;
    this.tail=null;
  }

  append(value){
    const node=new Node(value);
    if(this.size==0){
      this.head=node;
      this.tail=node;
    }else{
      this.tail.next=node;
      this.tail=node;
    }
    this.size++;
    console.log(this.head);
  }

  print(){
    let curr=this.head;
    let listItems=''
    while(curr){
      listItems+=`${curr.value} `
      curr=curr.next;
    }
    return listItems;
  }

  removeDuplicates(){
    let curr=this.head;
    while(curr && curr.next){
      if(curr.value==curr.next.value){
        curr.next=curr.next.next;
      }else{
        curr=curr.next;
      }
    }

  }
}


const list1=new linkedlist();

array.forEach((val)=>{
  list1.append(val);
})

console.log(list1.print());
list1.removeDuplicates();
console.log(list1.print());






