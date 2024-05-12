
class Stack{

    constructor(){
        this.items=[];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    top(){
        return  this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length==0
    }

    print(){
        console.log(this.items.toString());
    }
}
const stack=new Stack();
stack.push(200);
stack.push(400);
stack.push(250);
stack.push(450);
stack.push(560);
stack.push(600);
console.log('top:',stack.top());
console.log('size:',stack.size());

console.log('ans:',reverseString('helloworld'));

// function reverseString(str){
//     const stack=new Stack();
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i]);
//     }

//     stack.print();

//     let reversedStirng='';
//     while(!stack.isEmpty()){
//         reversedStirng+=stack.pop();
//     }
//     return reversedStirng;




//implement stack using linkedlist
// stack.print();

// class Node{

//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class stack{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }

//     push(x){
//         // this.items.push(x);
//         const node=new Node(x);
//         if(this.size==0){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     pop(){
//         // this.items.pop();
//         this.head=this.head.next;
//         this.size--;
//     }

//     top(){
//         // return this.items[items.length-1];
//         return this.head.value;
//     }

//     size(){
//         return this.items.length;
//     }

//     // print(){
//     //     console.log(this.items.toString());
//     // }
//     print(){
//         if(this.size==0){
//             console.log('linkedlist is empty');
//         }else{
//             let curr=this.head;
//             let listValues='';
            
//             while(curr){
//             listValues+=`${curr.value}  `;
//             curr=curr.next;
//             }
//             console.log('List size:',this.size);
//             console.log('listValues:',listValues);
//         }
//     }
// }

// const stack1=new stack();
// stack1.push(30);
// stack1.push(340);
// stack1.push(230);
// stack1.push(450);
// console.log(stack1.top());

// stack1.pop();
// stack1.print();




//stack implementation using queues
// class Queues{
    
//     constructor(){
//         this.items=[];
//     }
//     enqueue(value){
//         return this.items.push(value);                                                           
//     }
//     dequeue(){
//         return this.items.shift();
//     }
//     isEmpty() {
//         return this.items.length==0;
//     }
//     peek(){
//         return this.items[0];
//     }
//     getSize(){
//         return this.items.length;
//     }
// }

// class Stack{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//     constructor(){
//         this.q1=new Queues();
//         this.q2=new Queues();
//     }

//     push(x){
//         this.q2.enqueue(x); 
//         console.log('q2:',this.q2);
//         while(!this.q1.isEmpty()){
//             this.q2.enqueue(this.q1.peek());
//             this.q1.dequeue();
//         }
//         [this.q1, this.q2] = [this.q2, this.q1];
//         console.log('q2:',this.q2);
//         console.log('q1:',this.q1);

//     }

//     pop(){
//         return  this.q1.dequeue();
//     }

//     top(){
//         return this.q1.peek();
//     }

//     isEmpty(){
//         return this.q1.isEmpty();
//     }


//     print(){
//         console.log(this.q1);
//     }
// }

// const stack=new Stack();
// stack.push(200);
// stack.push(400);
// stack.print();

// stack.push(600);
// // stack.push(450);
// // stack.push(560);
// // stack.push(600);
// // console.log('pop:',stack.pop());
// // console.log('top:',stack.top());
// // console.log('size:',stack.size());

// stack.print();

// let x=10;
// let y=20;

// [x,y]=[y,x];


