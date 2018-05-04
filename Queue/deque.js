
class Deque {
    constructor() {
        this.items = {}
        this.count = 0
        this.forefrontCount = 0
    }

    addFront(elememt) {
        this.isEmpty() ? this.addBack(element)
         : this.forefrontCount > 0
         ? this.items[--this.forefrontCount] = element
         : {
             for (var i = this.count; i > 0; i--) {
                 this.items[i] = this.items[i - 1]
             }
             this.items[0] = element
             this.count++
         }
    }

    addBack(elememt) {
        this.items[this.count] = elememt
        this.count++
    }

    removeFront() {
        if(this.isEmpty()) {
            return
        }
        let result = this.items[this.forefrontCount]
        delete this.items[this.forefrontCount++]
        return result
    }

    removeBack() {
        if(this.isEmpty()) {
            return
        }
        let result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count -= 1
        return result
    }

    peekFront() {
        if(this.isEmpty()) {
            return
        }

        return this.items[this.forefrontCount]
    }

    peekBack() {
        if(this.isEmpty()) {
            return
        }

        return this.items[this.count - 1]
    }

    isEmpty() {
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

        for (var i = this.items[this.forefrontCount]; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
