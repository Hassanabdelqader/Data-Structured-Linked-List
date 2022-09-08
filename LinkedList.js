"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  // Add At the begin Function
  addBeginning(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.length += 1;
    } else {
      node.next = this.head;
      this.head = node;
      this.length += 1;
    }
  }

  // Add Value to specific Location
  addAt(value,index) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.length += 1;
    } else {
        if(index === 0){
            this.addBeginning(value)
        }
        else if(index>this.length){
            this.addEnd(value)
        }else{
            let count = 0;
            let current = this.head;
            while (current) {
                if (count === index-1) {
                     node.next = current.next;
                     current.next = node;
                     break;
                }
                current = current.next
                count++;
            }
        }
    }
  }
  
  // Deleting at the middle
  deleteMid() {
    if (this.length === 0) {
      this.head = null;
    } else if(this.length === 1){
     this.head.next = null;
     this.length--;
  }else{
    let mid = Math.floor(this.length / 2);
    let count = 0 ;
    let current = this.head;
    while (current) {
        if (count === mid-1) {
             current.next = current.next.next;
             this.length--;
             break;
        }
        current = current.next
        count++;
    }

  }
}


  addEnd(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.length += 1;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = node;
        this.length += 1;
    }
  }



  showList() {
    if(!this.head){
        console.log('No Data')
        return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
    console.log(`${count} : ${current.value}`);
    current = current.next;
    count++;
    }
  }
}

module.exports = LinkedList;
