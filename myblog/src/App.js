import logo from './logo.svg';
import './App.css';
import Body from './Component/body/Body'
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
