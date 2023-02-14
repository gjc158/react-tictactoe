
import {  makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id:1,
      name: '学习react',
      isDone: true
    },
    {
      id:2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
  addItem = (item) => {
    this.list.push(item)
  }
  // 单选
  checkItem = (id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
    console.info(id)
  }
  // 删除
  delItem(id) {
    this.list = this.list.filter(item => item.id !== id)
  }
  // 全选
  allCheckItem(checked) {
    this.list.forEach(item => {
      item.isDone = checked
    })
  }
  // computed判断是否全选
  get isAll() {
    return this.list.every(item => item.isDone)
  }

}
export default TaskStore
