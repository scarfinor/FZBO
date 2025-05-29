import SignIn from '../SignInPage/SignIn.jsx';
import './LandingPage.scss';

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div className="auth-container">
                    <SignIn />
            </div>
        </div>
    );
}