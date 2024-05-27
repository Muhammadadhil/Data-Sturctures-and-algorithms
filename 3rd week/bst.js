class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
            // console.log('inserted rooot node');
        } else {
            this.insertnew(this.root, node);
        }
    }

    insertnew(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
                // console.log("insertedd on the left");
            } else {
                this.insertnew(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
                // console.log("insertedd on the right");
            } else {
                this.insertnew(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            // console.log("root is empty!");
            return false;
        } else {
            if (root.value == value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else if (value > root.value) {
                return this.search(root.right, value);
            }
        }
    }

    //DFS
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    //BFS
    levelOrder(root){
        let queue=[];
        queue.push(root);
        while(queue.length){
            const node=queue.shift();
            console.log(node.value);

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }

    min(root){
        if(root.left){
            return this.min(root.left);
        }else{
            return root.value;
        }
    }

    max(root){
        if(root.right){
            return this.max(root.right);
        }else{
            return root.value;
        }  
    }

    delete(value){
        this.root=this.deleteNode(this.root,value);
    }

    deleteNode(root,value){
        if(!root){
            return root;
        }

        if(value < root.value){
            root.left=this.deleteNode(root.left,value);
        }else if(value > root.value){
            root.right=this.deleteNode(root.right,value);
        }else{
            if(!root.left && !root.right){    //if the node is leaf node
                return null;
            }

            if(!root.left){                   //if the node has one child
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value=this.min(root.right);  //if the node has two childs
            root.right=deleteNode(root.right,root.value);
        }

        return root;
    }

}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(2);

// bst.postOrder(bst.root);
console.log("nodes:", bst.levelOrder(bst.root));
bst.delete(5);
console.log("nodes:", bst.levelOrder(bst.root));


// console.log("minimum:", bst.min(bst.root));
// console.log("maximum:", bst.max(bst.root));
// console.log(bst.search(bst.root, 50));
// console.log('this is bst root:',bst.root);
