class MinHeap1 {
    constructor() {
        this.heap = [];
    }

    // Get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child node
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child node
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up to maintain the heap property after insertion
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Extract the minimum element (root) from the heap
    extractMin() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Heapify down to maintain the heap property after extraction
    heapifyDown() {
        let index = 0; 
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[smallerChildIndex]) {
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }

    // Get the minimum element (root) without extracting it
    peek() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage:
const minHeap1 = new MinHeap();
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(6);
minHeap.insert(5);
minHeap.insert(2);
minHeap.insert(4);

console.log(minHeap.extractMin()); // 1
console.log(minHeap.extractMin()); // 2
console.log(minHeap.peek()); // 3
console.log(minHeap.isEmpty()); // false










class minHeap {
    constructor() {
        this.heap = [];
    }

    //get the index of parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        return ([this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]);
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length == 0) {
            return "heap is empty";
        }

        if (this.heap.length == 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Heapify down to maintain the heap property after extraction
    heapifyDown(){
        let index=0;
        while(this.getLeftChildIndex(index) < this.heap.length){
            let smaller=this.getLeftChildIndex(index);
            if(this.getLeftChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex()] < this.heap[smaller]){
                smaller=this.getRightChildIndex();
            } 

            if(this.heap[smaller] < this.heap[index]){
                this.swap(index,smaller);
                index=smaller;
            }else{
                break;
            }
        }
    }


    showHeap() {
        console.log(this.heap);
    }
}


const heap1=new minHeap();
heap1.insert(20);
heap1.insert(10);
heap1.insert(30);
heap1.insert(60);
heap1.insert(5);

heap1.extractMin();

heap1.showHeap();



