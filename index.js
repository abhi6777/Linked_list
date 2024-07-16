class Node{
     constructor(value = null, nextNode = null) {
          this.value = value;
          this.nextNode = nextNode;
     }
}

class LinkedList{
     constructor() {
          this.head = null;
     }

     // append(value) adds a new node containing value to the end of the list
     append(value){
          const newNode = new Node(value);
          if (this.head === null) {
               this.head = newNode;
          } else {
               let current = this.head;
               while (current.nextNode !== null) {
               current = current.nextNode;
               }
               current.nextNode = newNode;
          }
     }

     // prepend(value) adds a new node containing value to the start of the list
     prepend(value) {
          const newNode = new Node(value, this.head);
          this.head = newNode;
     }
     
     // size returns the total number of nodes in the list
     size() {
          let current = this.head;
          let count = 0;
          while (current.nextNode !== null) {
               count++;
               current = current.nextNode;
          }
          return count;
     }

     // head returns the first node in the list
     head() {
          return this.head;
     }

     // tail returns the last node in the list
     tail() {
          let current = this.head;
          if (current === null) {
               return null;
          }

          while(current.nextNode !== null) {
               current = current.nextNode;
          }
          return current;
     }

     // at(index) returns the node at the given index
     at(index) {
          let count = 0;
          current = this.head;
          while(current !== null && count !== index) {
               current = current.nextNode;
               count++;
          }

          if (current === null) {
               return null; // Index out of bounds
          }

          return current;
     }

     // pop removes the last element from the list
     pop() {
          if(this.head == null) {
               return null; // list is empty
          }

          if (this.head.nextNode === null) {
               // List has only one node
               const value = this.head.value;
               this.head = null;
               return value;
          }
             
          let current = this.head;
          while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
          }
      
          const value = current.nextNode.value;
          current.nextNode = null;
          return value;
     }

     // contains(value) returns true if the passed in value is in the list and otherwise returns false.
     contains(value) {
          let current = this.head;
          while(current !== null) {
               if(current.value == value) {
                    return true;
               }
               current = current.nextNode;
          }
          return false;
     }

     // find(value) returns the index of the node containing value, or null if not found.
     find(value){
          let index = 0;
          let current = this.head;
          while(current !== null) {
               if(current.value == value) {
                    return index;
               }
               current = current.nextNode;
               index++;
          }

          return -1;
     }

     // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
     toString() {
          let current = this.head;
          let string = "";
          while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
          }
          string += "null";
          return string;
     }
}


// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // Output: ( 1 ) -> ( 2 ) -> ( 3 ) -> null