import './index.css'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Task() {
  const [keyword, setKeyword] = useState('')
  const {taskStore} = useStore()
  function allChange(e) {
    taskStore.allCheckItem(e.target.checked)
  }
  function keywordChange(e) {
    setKeyword(e.target.value)
  }
  const saveItem = (e) => {
    if(e.keyCode === 13) {
      taskStore.addItem({
        id: uuidv4(),
        name: keyword,
        isDone: false
      })
      setKeyword('')
    }
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={keyword}
          onChange={keywordChange}
          onKeyUp={saveItem}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={allChange}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {taskStore.list.map(item => {
            return (
              <li
                key={item.id}
                className={item.isDone ? "todo completed" : 'todo'}
              >
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.isDone} onChange={() => taskStore.checkItem(item.id)}/>
                  <label >{item.name}</label>
                  <button className="destroy" onClick={() => taskStore.delItem(item.id)}></button>
                </div>
              </li>
            )
          })}
          
        </ul>
      </section>
    </section>
  )
}

export default observer(Task)