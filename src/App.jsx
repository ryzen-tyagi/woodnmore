import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CartProvider from './context/CartProvider';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
