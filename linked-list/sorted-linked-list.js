import { Compare, defaultCompare, defaultEquals } from '../utils'
import { LinkedList } from './linked-list'

class SortedLinkedList extends LinkedList {
    constructor(ef = defaultEquals, cf = defaultCompare ) {
        super(ef)
        this.ef = ef
        this.cf = cf
    }

    push(element) {
        if(this.isEmpty()) {
            super.push(element)
        }
        let index = this.getIndexNextSortedElement(element)
        this.insert(element, index)
    }

    getIndexNextSortedElement(element) {
        let current = this.head
        let i = 0
        for ( ; i < this.size() && current != null; i++) {
            const comp = this.cf(element, current.element)
            if(comp === Compare.LESS_THAN) {
                return i
            }
            current = current.next
        }
        return i
    }
    //这里为什么要index = 0
    insert(element, index = 0) {
        if(this.isEmpty()) {
            return super.insert(element, index === 0 ? index : 0)
        }
        const pos = this.getIndexNextSortedElement(element)
        super.insert(element, pos)
    }
}
