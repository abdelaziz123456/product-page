
import './App.css';
import FilterSide from './components/FilterSide';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductSide from './components/ProductsSide';
 import './scss/bootstrapcustom.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="py-3 px-5  d-flex">

        <FilterSide/>

        <ProductSide/>
        
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
