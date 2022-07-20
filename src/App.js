import './styles/Global.css';
import { Navbar } from './components/navbar';
import { Xbox } from './components/xboxSeries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Xbox />
    </div>
  );
}

export default App;
