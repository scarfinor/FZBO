import SignIn from '../SignInPage/SignIn.jsx';
import './LandingPage.scss';

export default function LandingPage() {
    return (
        <div className="landingPage">
            <h1 className="welcome-text">Welcome To FZBO</h1>

            <div className="auth-container">
                    <SignIn />
                <div className="signUp">
                Dont Have an Account? <a href="/SignUp">Sign Up</a>
                </div>
            </div>
        </div>
    );
}