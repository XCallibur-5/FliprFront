import './App.css';
import Temp from './components/topButton'
import Page1 from './pages/overview'
import Page2 from './pages/graphs'
import Tp from './components/deets'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1 />
        <Page2 />
      </header>
    </div>
  );
}

export default App;
