import logo from './logo.svg';
import './App.css';

// class shoppingList extends React.Component {
//   render() {
//     return (
//       <div className='shopping-list'>
//         <h1>shopping list for {this.props.name}</h1>
//         <ul>
//           <li>dd</li>
//           <li>dd2</li>
//           <li>dd3</li>
//         </ul>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      {/* <ShoppingList name="Mark" /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 111
        </a>
      </header>
    </div>
  );
}

export default App;
