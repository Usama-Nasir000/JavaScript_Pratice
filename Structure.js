
function Stack_Struc () {
    return {Items:[],

    push : function(element){
        this.Items.push(element)
    },
    pop : function(){
       return this.Items.pop()
    },
    size : function(){
        return this.Items.length
    },
    print : function(){
        console.log(this.Items)
    },
    peek : function(){
        return this.Items[this.Items.length-1]
    }
}
}
const Stack_1 = Stack_Struc()

Stack_1.push(25)
Stack_1.push(35)
Stack_1.push(45)
Stack_1.push(20)
Stack_1.push(30)
Stack_1.push(40)
Stack_1.print()
console.log(Stack_1.pop()) 
console.log(Stack_1.size())
console.log(Stack_1.peek())

// console.log("abcd")
const Stack_2 = Stack_Struc()

Stack_2.push(1)
Stack_2.push(5)
Stack_2.push(10)
Stack_2.push(15)
Stack_2.push(16)
Stack_2.push(19)
Stack_2.print()
console.log(Stack_2.pop()) 
console.log(Stack_2.size())
console.log(Stack_2.peek())