class stack{
    constructor(){
        this.items=[];
    }

    push(val){
        this.items.push(val);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length===0;
    }

    print(){
        console.log(this.items.toString());
    }

}

const stack1=new stack();
// stack1.push
let str='helloworld';
for(let i=0;i<str.length;i++){
    stack1.push(str[i]);
}

// for(let j=0;j<stack1.
let reversed='';
while(!stack1.isEmpty()){
    reversed+=stack1.pop();
    
}

console.log(reversed);


let a={
    stud1:{
        curse:{
            cours1:{
                name:'adhil',
                grade:34
            },
            course2:{
                name:'adhil',
                grade:98
            }
        }
    },
    stud2:{
        curse:{
            cours1:{
                name:'adhil',
                grade:67
            },
            course2:{
                name:'adhil',
                grade:12
            }
        }
    }
}