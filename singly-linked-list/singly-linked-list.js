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

        // takes a number, index, or position, and it returns the item in that position
        getNodeByIndex(index){
            if(!this.head){ return undefined}
    
            if(index < 0 || this.length - 1 < index){ return null;}
    
            let i = 0;
            let currentNode = this.head; 
    
    
            while(i <= index) {
               if(i === index){ return currentNode; }
    
                currentNode = currentNode.next;
                i++;
            }
    
        }

        // update the data in a node based off of its index
        updateNodeByIndex(index, value){
            let node = this.getNodeByIndex(index);
    
            if(node){
                node.data = value;
            } 
        }

        insert(index, value){
            if(!this.head) { return undefined}
            if(index < 0 || this.length < index){ return null;}
    
            // if index is at the starting position 
            if(index === 0) {  return this.unshift(value)}
    
            // if index is at the end position
            if(index === this.length) { return this.push(value)}
    
            let newNode = new Node(value);
            let previousNode = this.getNodeByIndex(index - 1);
            let temporaryNode = previousNode.next;
            previousNode.next = newNode;
            newNode.next = temporaryNode;
            this.length++;
            return true;
        }  

        remove(index){
            if(!this.head){ return undefined};
            if(index < 0 || this.length <= index){ return null};
    
    
           // get the node at the index 
           // get the previous node of the node getting delee
           // store the next of that node thats getting deleted in varable
            let deletedNode = this.getNodeByIndex(index);
            let childNodeOfDeleted = deletedNode.next;
    
            if(index === 0){
                this.head = childNodeOfDeleted;
                return;
            }
    
            let previousNode = this.getNodeByIndex(index - 1);
            previousNode.next = childNodeOfDeleted;
            this.length--;
        }

        reverse(){
            let oldHead = this.head; // to save a reference to the original head before changing it to the tail
            this.head = this.tail; // switching the tail to the head
            this.tail = oldHead; // switching the original head to the tail
            let next;
            let previous = null;
    
            for(let i = 0; i < this.length; i++) {
                next = oldHead.next;
                oldHead.next = previous;
                previous = oldHead;
                oldHead = next;
            }
            return this;
        }
    
}