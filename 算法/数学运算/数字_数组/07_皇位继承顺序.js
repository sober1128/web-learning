//  1600  多叉树的前序遍历


var ThroneInheritance = function(kingName) {
  this.edges = new Map();   // 在树中添加一条从 parentName 到 childName 的边，将 childName 作为 parentName 的子节点；
  this.dead = new Set();    // 使用一个集合记录死亡人员
  this.king = kingName;
}

ThroneInheritance.prototype.birth = function(parentName, childName) {
  if(!this.edges.has(parentName)) {
    this.edges.set(parentName, []);
  }
  this.edges.get(parentName).push(childName);
}

ThroneInheritance.prototype.death = function(name) {
  this.dead.push(name);
}

ThroneInheritance.prototype.getInheritanceOrder = function() {
  const res = [];
  const preorder = (name) => {
    if(!this.dead.has(name)) {
      res.push(name);
    }
    if(this.edges.has(name)) {
      for(const childName of this.edges.get(name)) {
        preorder(childName);
      }
    }
  }
  preorder(this.king);
  return res;
}