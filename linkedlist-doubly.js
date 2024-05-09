
class Node{

    constructor(value){
        this.value=value;
        this.next=null;
        this.previous=null;
    }

}

class Linkedlist{

    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    // o(1)T constant 
    append(value){
        const node=new Node(value);
        if(this.size==0){
            this.head=node;
            this.tail=node;           //changing the tail as last inserted node
        }else{
            node.previous=this.tail;
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
        console.log(this.head);
    }
    //o(1)T
    removeFromStart(){
        if(this.head==null){
            return null;
        }
        this.head=this.head.next;
        this.head.previous=null;
        this.size--;
    }

    print(){
        if(this.head==null){
          console.log('list empty');
          return 
        }else{
          let listItems='';
          let curr=this.head;
          while(curr){            
            listItems+=`${curr.value} `;
            curr=curr.next;
          }
          console.log('listItems:',listItems);
        }
      }
}


const list1=new Linkedlist();

list1.append(1000);
list1.append(2000);
list1.append(3000);
list1.removeFromStart();

list1.append(6000);




list1.print()
