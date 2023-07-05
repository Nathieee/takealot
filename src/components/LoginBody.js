import { useState } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";



function LoginBody(){

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const submitFunc = (e) => {
        e.preventDefault();
        if ( email ==="" || password==="" ){
            setErr(true);
            return;
        }
    }


    return(
        <div className="login_bg">
            <div className="login_form">
                <h3>Login</h3>               
                <form onSubmit={submitFunc}>      
                    <div className="form_group">
                        <input type="email" placeholder="Email" />     
                        {err && email ==="" ? <span>Email Required</span> : null}
                    </div>              
                    <div className="form_group">
                        <input type="password" placeholder="Password" />
                        {err && password ==="" ? <span>Password Required</span> : null}
                    </div>
                    <button>Login</button>
                </form >
                <div className="login_aternatives">
                    <button><IoLogoGoogle className="google_login_icon"/> Login with Google</button>
                    <button><IoLogoFacebook className="facebook_login_icon"/> Login with Facebook</button>
                </div>
                <p>New to takealot? <span>Register</span></p>
            </div>
        </div>
    )
}

export default LoginBody;