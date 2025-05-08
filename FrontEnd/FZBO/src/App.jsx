import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SignUp from './components/SignUpPage/SignUp.jsx';
import SignIn from './components/SignInPage/SignIn.jsx';
import SignInSuccess from "./components/SignInPage/SignInSuccess.jsx";
import SignUpSuccess from "./components/SignUpPage/SignUpSuccess.jsx";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignInSuccess" element={<SignInSuccess />} />
            <Route path="/SignUpSuccess" element={<SignUpSuccess />} />
        </Routes>
    </Router>
    )
}

export default App