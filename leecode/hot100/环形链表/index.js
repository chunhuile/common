/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @desc 解法1:快慢指针 解法2:
 */
var hasCycle = function(head) {
    if(!head) return false;

    let slower = head,faster = head;
    while(faster.next != null && faster.next.next != null){
        slower = slower.next;
        faster = faster.next.next;

        if(slower === faster){
            return true;
        }
    } 

    return false
    
};