
QueueElement = function (element, priority) {
    this.element = element
    this.priority = priority
}

export default class Queue {
    constructor() {
        this.count = 0
        this.items = {}
        this.forefrontCount = 0
    }

    enqueue(element, priority) {
        let el = element
        let prio = priority
        let qel = new QueueElement(el, prio)
        if(this.isEmpty()) {
            this.items[this.count++] = qel
        } else {
            let obj = Object.keys(this.items)
            let isAdd = false
            for (var i = this.forefrontCount; i < this.count; i++) {
                if(qel.priority > this.items[i].priority) {
                    isAdd = true
                    for (var j = obj.length - 1; j >= i; j--) {
                        obj[j + 1] = obj[j]
                    }
                    obj[j] = qel
                }
            }
            if(!isAdd) {
                this.items[this.count++] = qel
            }
        }
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
