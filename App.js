
import './App.css';
import { FakestoreDetails } from './fakestore-details';
import { FakestoreHome } from './fakestore-home';
import { FakestoreProducts } from './fakestore-products';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header className='text-center p-2 border border-2 mt-2'>
            <h3>STORE HUB</h3>
          </header>
          <section className='mt-4'>
              <Routes>
                   <Route path="/" element={<FakestoreHome />} />
                   <Route path='products/:category' element={<FakestoreProducts />} />
                   <Route path='details/:id' element={<FakestoreDetails />} />
              </Routes>
          </section>
       
        </BrowserRouter>
    </div>
  );

}

export default App;
