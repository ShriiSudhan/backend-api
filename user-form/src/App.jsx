import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PersonalDetails from './pages/PersonalDetails';
import Address from './pages/Address';
import Employment from './pages/Employment';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="" element={<Navigate to="personal" />} />
          <Route path="personal" element={<PersonalDetails />} />
          <Route path="address" element={<Address />} />
          <Route path="employment" element={<Employment />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;