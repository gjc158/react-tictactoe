import RouterWrap from './route'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <Index /> */}
      <RouterWrap></RouterWrap>
    </BrowserRouter>
  );
}

export default App;
