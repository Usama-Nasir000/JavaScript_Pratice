
function Queue_Struc(capacity) {
    return {
        item: new Array(capacity),
        capacity: capacity,
        currentlength: 0,
        front: -1,
        rear: -1,

        isFull: function () {
            return this.currentlength === this.capacity;
        },

        isEmpty: function () {
            return this.currentlength === 0;
        },

        enQueue: function (element) {
            if (!this.isFull()) {
                this.rear = (this.rear + 1) % this.capacity;
                this.item[this.rear] = element;
                this.currentlength += 1;
                if (this.front === -1) {
                    this.front = this.rear;
                }
            }
        },

        deQueue: function () {
            if (this.isEmpty()) {
                return null;
            }
            this.element = this.item[this.front];
            this.item[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentlength -= 1;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return this.element;
        },

        peek: function () {
            return this.item[this.front];
        },

        print: function () {
            if (this.isEmpty()) {
                console.log("Queue is Empty");
            } else {
                let i;
                let string = "";
                for (i = this.front; i !== (this.rear + 1) % this.capacity; i = (i + 1) % this.capacity) {
                    string += this.item[i] + " ";
                }
                console.log(string);
            }
        },
    };
}

const My_Q = new Queue_Struc(8)

console.log("is Empty: ", My_Q.isEmpty())
My_Q.print()
My_Q.enQueue(0)
My_Q.enQueue(5)
My_Q.enQueue(9)
My_Q.enQueue(1)
My_Q.enQueue(7)
My_Q.enQueue(2)
My_Q.enQueue(4)
My_Q.enQueue(3)
console.log("is Full: ", My_Q.isFull())
console.log(My_Q.deQueue())
console.log(My_Q.peek())
My_Q.print()
