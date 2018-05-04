
export default class Stack {
    constructor() {
        this.items = []
    }
    // 这里可以push 多个element吗？
    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    toArray() {
        return this.items
    }

    toString() {
        return this.items.toString()
    }
}
