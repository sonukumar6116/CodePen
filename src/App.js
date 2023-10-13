import Dataprovider from './Context/Dataprovider';
import './App.css';
import Home from './components/Home';

function App() {
  return (<>
    <>
      <Dataprovider>
        <Home />
      </Dataprovider>
    </>
  </>
  );
}

export default App;
