/*
  由于lowestCommonAncestor(root, p, q)的功能是找出以root为根节点的两个节点p和q的最近公共祖先。 我们考虑：

  如果p和q分别是root的左右节点，那么root就是我们要找的最近公共祖先
  如果root是None，说明我们在这条寻址线路没有找到，我们返回None表示没找到
  我们继续在左右子树执行相同的逻辑。
  如果左子树没找到，说明在右子树，我们返回lowestCommonAncestor(root.right, p , q)
  如果右子树没找到，说明在左子树，我们返回lowestCommonAncestor(root.left, p , q)
  如果左子树和右子树分别找到一个，我们返回root

*/

var lowestCommonAncestor = function(root, p, q) {
  // 当传入的root 为null 或 当祖先节点root等于p 或 等于q 节点 表示其最近祖先元素就是自身 故返回自身 终止递归条件（包含 null 和 等于p、q节点的情况）
  if(!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if(!left) return right   // 左子树找不到，返回右子树
  if(!right) return left   // 右子树找不到，返回左子树
  return root;
}

// 非递归
// 使用中序遍历找到其中一个节点值。然后按顺序出栈，判断出栈的节点下面是否有另外一个节点值，有则当前节点就是最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
    const ifhasval = (root, target) => {
      if(root) {
        if(root.val === target.val) {
          return true;
        } else {
          return ifhasval(root.left, target) || ifhasval(root.right, target)
        }
      }
      return false
    }

    const stack = []
    let node = root, res;
    while(node || stack.length) {
      if(node) {
        if(node.val === p.val) {
          stack.push(node);
          while(stack.length) {
            node = stack.pop()
            if(ifhasval(node, q)) {
              res = node;
              break;
            }
          }
          break;
        } else if(node.val === q.val) {
          stack.push(node);
          while(stack.length) {
            node = stack.pop()
            if(ifhasval(node, p)) {
              res = node;
              break;
            }
          }
          break;
        }
        stack.push(node);
        node = node.left
      } else {
        node = stack.pop()
        node = node.right
      }
    }
    return res
}