import SignIn from './SignIn.jsx';
import SignUp from "./SignUp.jsx";

export default function LandingPage() {
    return (
        <div>
            <div className="landingPage">
            <h1>Welcome to the Landing Page</h1>
            <img src="/assets/fzbo_compressed.jpg" alt="FZBO logo" />
            </div>

            <div className="signIn">
            <p> Have a FBZO Account allready?</p>
            <div>
                <SignIn />
            </div>
            </div>

            <div className="signUp">
            <p> Don't have an FBZO Account?</p>
            <div>
                <SignUp />
            </div>
            </div>

        </div>
    );
}