function dfs(aaa) {   // aaa = '原始参数'
  // 终止条件---递归必须要有终止条件
  if('终止条件') {
    // 存放结果
    return;
  }

  for(let i = '循环开始参数'; i < '循环结束参数'; i++) {    // for循环开始结束参数
    // 一些逻辑操作（视情况而定）

    // 做出选择

    // 递归--处理节点
    dfs('新的参数')
    // 一些逻辑操作（视情况而定）

    // 撤销选择  --- 回溯
  }
}


/*
  排列问题：
  1.每层都是从0开始搜索而不是startIndex
  2.需要used数组记录path里都放了哪些元素了
*/