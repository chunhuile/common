/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    let res = 1;

    
    function depth(rootNode){
        
        if(!rootNode) return 0;

        let left = depth(rootNode.left)
        let right = depth(rootNode.right)

        res = Math.max(res,left + right +1 )

        return Math.max(left,right) + 1 ;
    }
     depth(root);
   
    return res -1
};

  