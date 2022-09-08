'use strict';

const LinkedList = require("./LinkedList");

const linkedlist = new LinkedList();

linkedlist.addBeginning('6')
linkedlist.addBeginning('5')
linkedlist.addBeginning('4')
linkedlist.addBeginning('3')
linkedlist.addBeginning('2')
linkedlist.addBeginning('1')
linkedlist.addBeginning('0')

linkedlist.addEnd('7')
linkedlist.addEnd('8')
linkedlist.addEnd('9')
linkedlist.addEnd('10')
linkedlist.addEnd('11')
linkedlist.addEnd('12')
linkedlist.addEnd('13')
linkedlist.addEnd('14')
linkedlist.addAt('added at 5',5)
linkedlist.addAt('added at 10',10)

console.log('***********************************************************')
linkedlist.showList()
console.log('***********************************************************')

// linkedlist.deleteMid()


linkedlist.showList()

