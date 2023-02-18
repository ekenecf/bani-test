import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import PaymentMethod from './PaymentMethod';


function App() {

  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/payment-method" element={<PaymentMethod />}/>
        </Routes>
      </Router>
  );
}

export default App


