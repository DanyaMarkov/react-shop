import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Context } from './Context/Context';
function App() {


  return (
    <div className="App">
      <Context>

        <Header />
        <Shop />
        <Footer />

      </Context>
    </div>
  );
}

export default App;
