'use strict';
const linkedlist = require('../LinkedList')

describe('Linked List ',()=>{
    it('test Add at Begin...',()=>{
        const ll = new linkedlist()
        ll.addBeginning('item1')
        ll.addBeginning('item2')
        ll.addBeginning('item3')
        expect(ll).toBeInstanceOf(linkedlist)
        expect(ll.head.value).toEqual('item3')
        expect(ll.head.next.next.next).toBeNull()
        expect(ll.length).toBe(3)
    })

    it('test Add at End...',()=>{
        const ll = new linkedlist()
        ll.addEnd('item1')
        ll.addEnd('item2')
        ll.addEnd('item3')
        expect(ll).toBeInstanceOf(linkedlist)
        expect(ll.head.value).toEqual('item1')
        expect(ll.head.next.next.next).toBeNull()
        expect(ll.head.next.next.value).toEqual('item3')
        expect(ll.length).toBe(3)
    })

    it('test Add At specific Location...',()=>{
        const ll = new linkedlist()
        ll.addEnd('item1')
        ll.addEnd('item2')
        ll.addEnd('item3')
        
        ll.addAt('mid',1)
       
        expect(ll.length).toBe(4)
        expect(ll).toBeInstanceOf(linkedlist)
        expect(ll.head.next.value).toEqual('mid')
        expect(ll.head.next.next.next.next).toBeNull()
    })

    
    it('test Delete Mid...',()=>{
        const ll = new linkedlist()
        ll.addEnd('item1')
        ll.addEnd('item2')
        ll.addEnd('item3')
        
        expect(ll.length).toBe(3)
        ll.deleteMid();
        expect(ll.length).toBe(2)
       
        expect(ll).toBeInstanceOf(linkedlist)
        expect(ll.head.value).toEqual('item1')
        expect(ll.head.next.next).toBeNull()
    })


})