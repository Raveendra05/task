import {BrowserRouter} from 'react-router-dom'
import AllRoutes from './allRoutes';
function App() {
  return (
    <>
      <BrowserRouter>
      <AllRoutes/>
      </BrowserRouter>
    </>
  );
}
export default App;
