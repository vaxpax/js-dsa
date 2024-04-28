import { SinglyLinkedList, Node } from "./SinglyLinkedList.js";
import { defaultCompare, order } from "../../utils/Utils.js";
import { NotSupportedError } from "../../utils/Errors.js";

class OrderedSinglyLinkedList extends SinglyLinkedList {

    constructor(compare = defaultCompare, ordering = order.ASC) {
        super();
        this.compare = compare;
        this.ordering = ordering;
    }

    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let previous = null;
            let current = this.head;
            while (current) {
                if ( (this.compare(current.data, data) < 0 && this.ordering === order.ASC)
                    || (this.compare(current.data, data) > 0) && (this.ordering === order.DESC) ) {
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
