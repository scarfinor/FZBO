import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
        </Routes>
    </Router>
    )
}

export default App