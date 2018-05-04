import{ defaultEquals } from '../util'
import { Node } from '../models/node'

export default class LinkedList {
    constructor(ef = defaultEquals) {
        this.ef = ef
        this.count = 0
        this.head = undefined
    }

    push(element) {
        const node = new Node(element)
        let current
        if(this.head === null){
            this.head = node
        } else {
            current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    getElementAt(index) {
        if(index >= 0 && index <= this.count){
            let node = this.head
            //这里我觉得不需要node != null
            for (var i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return
    }

    insert(element, index) {
        if(index >= 0 && index <= this.count){
            const node = new Node(element)
            if(index === 0) {
                let current = this.head
                this.head = node
                node.next = current
            }else {
                const prev = this.getElementAt(index - 1)
                node.next = prev.next
                prev.next = node
            }
            this.count++
            return true
        }
        return false
    }

    removeAt(index) {
        if(index >= 0 && index <= this.count){
            let current = this.head
            if(index === 0) {
                this.head = current.next
            }else {
                const prev = this.getElementAt(index - 1)
                current = prev.next
                prev.next = current.next
            }
            this.count--
            return current.element
        }
        return
    }

    remove(element) {
        let index = this.indexOf(element)
        this.removeAt(index)
    }

    indexOf(element) {
        let current = this.head
        for (var i = 0; i < this.size() && current != null; i++) {
            if(this.ef(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
    }
    isEmpty() {
   return this.size() === 0;
    }
    size() {
        return this.count;
    }
    getHead() {
        return this.head;
    }
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    toString() {
        if(this.head = null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (var i = 0; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}