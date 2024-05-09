
class Stack{

    constructor(){
        this.items=[];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        this.items.pop();
    }

    top(){
        return  this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
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

stack.print();


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


