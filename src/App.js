import './styles/Global.scss';
import { Navbar } from './components/navbar/navbar';
import { Xbox } from './components/xboxSeries/xboxSeries';
import { Controller } from './components/controller/controller';
import { Games } from './components/games/games';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Xbox />
      <Controller />
      <Games />
    </div>
  );
}

export default App;
