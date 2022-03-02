import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { ContextProvider } from './ContextReducer/Context';
function App() {


  return (
    <div className="App">
      <ContextProvider>

        <Header />
        <Shop />
        <Footer />

      </ContextProvider>
    </div>
  );
}

export default App;
