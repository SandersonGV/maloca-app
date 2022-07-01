import logo from './logo.svg';
import './App.css';
import Footer from './containers/footer';
import Newsletter from './containers/newsletter';
import Header from './containers/header';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
