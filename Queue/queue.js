export default class Queue {
    constructor() {
        this.count = 0
        this.items = {}
        this.forefrontCount = 0
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    dequeue() {
        if(this.isEmpty()) {
            return undefined
        }
        let result = this.items[this.forefrontCount]
        delete this.items[this.forefrontCount]
        this.forefrontCount++
    }

    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.forefrontCount]
    }

    isEmpty() {
        // return this.count === 0
        return this.size() === 0
    }
    size() {
        return this.count - this.forefrontCount
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }

        let objString = `${this.items[this.forefrontCount++]}`

        for (var i = this.forefrontCount; i < this.count; i++) {
            objString = `${objString},${this.items[this.forefrontCount]}`
        }
        return objString
    }
}
