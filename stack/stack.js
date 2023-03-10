class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingNode =  this.top;
            this.top = newNode;
            this.top.next = holdingNode;
        }

        this.length++
        return this;
    }
    pop(){
        if (this.length > 0) {
            this.top = this.top.next;
            this.length--;
            if (this.length === 0) {
                return this.bottom = null;
            }
            }
            return this;
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);