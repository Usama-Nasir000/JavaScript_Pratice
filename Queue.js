// Queue_Structure


class Circular_Queue{
    constructor(capacity){
        this.item = new Array(capacity)
        this.capacity = capacity
        this.currentlength = 0
        this.front = -1
        this.rear =-1
    }

    isFull(){
        return this.currentlength == this.capacity 
    }

    isEmpty(){
        return this.currentlength ==0 
        
    }

    enQueue(element){
        if (!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.item[this.rear] = element  
            this.currentlength += 1
            if(this.front==-1){
                this.front = this.rear
            }
        }
    }

    deQueue(){
        if (this.isEmpty()){
            return null
        }
        const item = this.item[this.front]
        this.item [this.front] = null
        this.front =( this.front +1) % this.capacity
        this.currentlength -=1
        if (this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if (!this.isEmpty()){
            return this.item[this.rear]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty")
        }
        else{
            let i
            let string = ''
            for (i=this.front ; i !== this.rear ; i = (i + 1)% this.capacity ){
                string += this.item[i]+' '
            }
            string += this.item[i] +' '
            console.log(string)
        }
    }
}

const My_Q = new Circular_Queue(4)

console.log("is Empty: ", My_Q.isEmpty())
My_Q.print()
My_Q.enQueue(5)
My_Q.enQueue(8)
My_Q.enQueue(9)
My_Q.enQueue(1)
console.log("is Full: ", My_Q.isFull())
My_Q.print()
console.log(My_Q.deQueue())
console.log(My_Q.peek())
