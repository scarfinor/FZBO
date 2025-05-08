import SignIn from '../SignInPage/SignIn.jsx';
import SignUp from "../SignUpPage/SignUp.jsx";

export default function LandingPage() {
    return (
        <div>
            <div className="landingPage">
            <h1>Welcome to the Landing Page</h1>
            </div>

            <div>
                <SignIn />
            </div>

            <div className="signUp">
            <div>
                <SignUp />
            </div>
            </div>

        </div>
    );
}