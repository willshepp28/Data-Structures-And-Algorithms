class Node {
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}



class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(data){
        let node = new Node(data);

        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
            return this;
        }

        this.head.next = node;
        this.tail = node;
        this.tail.previous = this.head;
        this.length++;
        return this;

        
    }
}



let list = new DoublyLinkedList();

list.push(1);

console.log(list.push(2));