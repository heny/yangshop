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
    state.list.push(newVal)
    localStorage.list = JSON.stringify(state.list)
  }
}