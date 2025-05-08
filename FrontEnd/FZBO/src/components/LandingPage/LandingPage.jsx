import SignIn from '../SignInPage/SignIn.jsx';
import SignUp from "../SignUpPage/SignUp.jsx";
import './LandingPage.scss';

export default function LandingPage() {
    return (
        <div className="landingPage">
            <h1 className="welcome-text">FZBO</h1>

            <div className="auth-container">
                <div className="signIn">
                    <SignIn />
                </div>
                <div className="signUp">
                    <SignUp />
                </div>
            </div>
        </div>
    );
}
