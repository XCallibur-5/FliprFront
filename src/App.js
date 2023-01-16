import './App.css';
import Page1 from './pages/overview'
import Page2 from './pages/graphs'
import Page3 from './pages/login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1 />
        <Page2 />
        <Page3 />
      </header>
    </div>
  );
}

export default App;
