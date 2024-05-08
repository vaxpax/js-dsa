import { SinglyLinkedList, Node } from "./SinglyLinkedList.js";
import { defaultCompare, Order } from "../../utils/Utils.js";
import { NotSupportedError } from "../../utils/Errors.js";

class OrderedSinglyLinkedList extends SinglyLinkedList {

    constructor(compare = defaultCompare, ordering = Order.ASC) {
        super();
        this.compare = compare;
        this.ordering = ordering;
    }

    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return true;
        }

        if ( (this.compare(this.tail.data, data) < 0 && this.ordering === Order.ASC)
            || (this.compare(this.tail.data, data) > 0) && (this.ordering === Order.DESC) ) {
            this.tail.next = node;
            this.tail = node;
            return true;
        } else {
            return false;
        }
    }

    appendAll(dataArray) {
        throw new NotSupportedError('OrderedSinglyLinkedList.appendAll()');
    }

    insert(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let previous = null;
            let current = this.head;
            while (current) {
                if ( (this.compare(current.data, data) < 0 && this.ordering === Order.ASC)
                    || (this.compare(current.data, data) > 0) && (this.ordering === Order.DESC) ) {
                    previous = current;
                    current = current.next;
                } else {
                    break;
                }
            }
            if (current === this.head) {
                node.next = this.head;
                this.head = node;
            } else {
                node.next = current;
                previous.next = node;
            }

            // fix tail
            if (current == null) {
                // previous is tail
                this.tail = node;
            }
        }
    }

    insertAll(dataArray) {
        for (let item of dataArray) {
            this.insert(item);
        }
    }

    addFirst(data) {
        throw new NotSupportedError('OrderedSinglyLinkedList.addFirst()');
    }

    set(index, data) {
        throw new NotSupportedError('OrderedSinglyLinkedList.set()');
    }
}

export { OrderedSinglyLinkedList };
