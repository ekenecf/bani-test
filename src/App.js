import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'

import Home from './Home'
import Fixed from './Fixed'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixed/:share-the-money" element={<Fixed />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
