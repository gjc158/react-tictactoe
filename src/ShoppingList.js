import React from 'react'

class shoppingList extends React.Component {
  render() {
    return (
      <div className='shopping-list'>
        <h1>shopping list for {this.props.name}</h1>
        <ul>
          <li>dd</li>
          <li>dd2</li>
          <li>dd3</li>
        </ul>
      </div>
    )
  }
}

export default shoppingList