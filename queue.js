//Queue implementation
// class Queue{

//     constructor(){
//         this.items=[];
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     dequeue(){
//         return this.items.shift();        //shift method is linear time complextiy
//                                           // so this is not good method 
//     }

//     peek(){
//         if(this.items.length>0){
//             return this.items[0];
//         }
//         return null;
//     }

//     size(){
//         return this.items.length;
//     }
    
//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue=new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.dequeue();
// console.log(queue.peek());;
// queue.print()


//optimised queue implementation

class Queue{

    constructor(){
        this.items={};
        this.rear=0;
        this.front=0;
    }

    enqueue(element){
        this.items[this.rear]=element;
        this.rear++;
    }

    dequeue(){
        delete this.items[this.front];
        this.front++;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear-this.front;
    }

    print(){
        console.log(this.items);
    }


}

const queue=new Queue();
queue.enqueue(100)
queue.enqueue(200)
queue.dequeue();
queue.enqueue(300)
queue.enqueue(400)
console.log(queue.peek());
console.log(queue.size());

queue.print();

// class Queue1{
//     constructor(){
//         this.items={};
//         this.rear=0;
//         this.front=0;
//     }

//     enqueue(value){
//         this.items[this.rear]=value;
//         this.rear++;
//     }
// }




var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.stack1.length === 0){
        this.stack1.push(x) 
    }else{        
        while(this.stack1.length!=0){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(x)
        while(this.stack2.length!=0){
            this.stack1.push(this.stack2.pop())
        }
    }    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop()    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length-1]    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */