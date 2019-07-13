export default {
  setList (state, newVal) {
    // 如果是第一次 就将localStorage赋值
    if(!localStorage.list){
      localStorage.list = JSON.stringify(newVal)
    }

    // 如果用户刷新了;
    if(state.list.length == 0){
      if (JSON.parse(localStorage.list) instanceof Array){  // 如果此时本地存入的是数组;
        state.list = JSON.parse(localStorage.list)
      }else{
        state.list = JSON.parse('[' + localStorage.list + ']')
      }
    }
    
    // 循环删除重复的值;
    state.list.map((item,index)=>{
      if(item.cid === newVal.cid){
        state.list.splice(index,1)
      }
    })
  // 将值添加进vuex
    state.list.unshift(newVal)
    localStorage.list = JSON.stringify(state.list)
  },
  delList (state, newVal) {
    // 删除localStorage的数据
    let arr = JSON.parse(localStorage.list)
    arr.map((item,index)=>{
      if(item.cid === newVal){
        arr.splice(index,1)
      }
    })
    // 将本地管理数据存入
    localStorage.list = JSON.stringify(arr)
  }
}