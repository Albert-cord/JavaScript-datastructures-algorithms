
export default class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        let temp = this.items[--this.count]
        // this.items[this.count - 1] = undefined
        delete this.items[this.count]
        return temp
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    clear() {
        this.items = {}
        this.count = 0
    }

    toString() {
        if(this.isEmpty()) return ''

        let objString = `${this.items[0]}`
        for (var i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
