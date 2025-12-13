import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Navbar from './components/Navbar.jsx'
import Opportunity from './pages/Opportunity.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddOpportunity from './pages/AddOpportunity.jsx'
import Pipeline from './pages/Pipeline.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/opportunites" element={<Opportunity />} />
        <Route path="/opportunites/:id" element={<App />} />
        <Route path="/opportunites/ajouter" element={<AddOpportunity />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </Provider>
  </StrictMode>,
)
