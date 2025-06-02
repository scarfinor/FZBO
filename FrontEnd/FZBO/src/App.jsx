import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SignUp from './components/SignUpPage/SignUp.jsx';
import SignIn from './components/SignInPage/SignIn.jsx';
import SignInSuccess from "./components/SignInPage/SignInSuccess.jsx";
import SignUpSuccess from "./components/SignUpPage/SignUpSuccess.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LogoutSuccess from "./components/Logout/LogoutSuccess.jsx";
import ListingForm from "./components/ListingPage/ListingForm.jsx";
import ListingTable from "./components/ListingPage/ListingTable.jsx";
import ListingPage from "./components/ListingPage/ListingPage.jsx";
import OAuth2Success from "./components/SignInPage/OAuth2Success.jsx";

function App() {
    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignInSuccess" element={<SignInSuccess />} />
            <Route path="/SignUpSuccess" element={<SignUpSuccess />} />
            <Route path="/LogoutSuccess" element={<LogoutSuccess />} />
            <Route path="/ListingForm" element={<ListingForm />} />
            <Route path="/ListingTable" element={<ListingTable />} />
            <Route path="/ListingPage/:id" element={<ListingPage />} />
            <Route path="/OAuth2Success" element={< OAuth2Success/>} />
        </Routes>
        <Footer />
    </Router>
    )
}

export default App