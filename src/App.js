import './styles/Global.css';
import { Navbar } from './components/navbar';
import { Xbox } from './components/xboxSeries';
import { Controller } from './components/controller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Xbox />
      <Controller />
    </div>
  );
}

export default App;
