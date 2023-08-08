
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log(this.items);
        }
    }
}


const MY_Stack = new Stack();
MY_Stack.push(10);
MY_Stack.push(20);
MY_Stack.push(30);

console.log("Peek:", MY_Stack.peek());
console.log("Size:", MY_Stack.size());
console.log("Is Empty:", MY_Stack.isEmpty());

MY_Stack.print();
console.log(MY_Stack.pop())
