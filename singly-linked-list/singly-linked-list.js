/**
 * 
 * 
 */



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getList(){
        return this;
    }

    size(){
        return this.length;
    }

    clearList(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);

        this.length++;

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return this;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
        
    }

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

    // deletes last node from list
    pop(){  
        

        // Check if there is are any nodes
        if(!this.head){ return undefined }

        // Set the first node 
        let node = this.head;
        this.length--;

        // loop throught list while there are nodes
        while(node){

            if(this.length === 0){
                this.clearList();
                break;
            }
           
            if(node.next.next === null){
                node.next = null;
                this.tail = node;
                
                break;
            }

            node = node.next;
        }

    }

    // delete first node from the beginning of the list
    shift(){

        if(!this.head) { return undefined; }

        this.head = this.head.next;
        this.length--;

        if(this.length === 0){ 
            this.clearList()
            return undefined;
        }

    }

    // add new node to the beginning of the list
    unshift(val){

        if(!this.head){
            this.push(val);
            return;
        }

        let newHead = new Node(val);
        let oldHead = this.head;

        this.head = newHead;
        this.head.next = oldHead;
        this.length++;
    }
    
}