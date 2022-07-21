import './styles/Global.scss';
import { Navbar } from './components/navbar/navbar';
import { Xbox } from './components/xboxSeries/xboxSeries';
import { Controller } from './components/controller/controller';
import { Games } from './components/games/games';
import { Questions } from './components/questions/questions';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Xbox />
      <Controller />
      <Games />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
