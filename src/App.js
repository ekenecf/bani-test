import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'

import Home from './Home'
import Fixed from './Fixed'
import Dynamic from './Dynamic'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixed/:share" element={<Fixed />} />
          <Route path="/dynamic/:donate-vera-wangg" element={<Dynamic />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
