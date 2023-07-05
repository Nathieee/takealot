import { useState } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";



function RegisterBody(){

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const submitFunc = (e) => {
        e.preventDefault();
        if (firstname === "" || lastname === "" || email ==="" || phone ==="" || password==="" ){
            setErr(true);
            return;
        }
    }



    return(
        <div className="register_bg">
            <div className="register_form">
                <h3>Register</h3>
                <div className="register_aternatives">
                    <button><IoLogoGoogle className="google_register_icon"/> Register with Google</button>
                    <button><IoLogoFacebook className="facebook_register_icon"/> Register with Facebook</button>
                </div>
                <form onSubmit={submitFunc}>
                    <div className="form_group">
                        <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                        {err && firstname ==="" ? <span>First name Required</span> : null}
                    </div>
                    <div className="form_group">
                        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>   
                        {err && lastname ==="" ? <span>Last name Required</span> : null}
                    </div>
                    <div className="form_group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {err && email ==="" ? <span>Email Required</span> : null}
                    </div>
                    <div className="form_group">
                        <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        {err && phone ==="" ? <span>Phone Number Required</span> : null}
                    </div>
                    <div className="form_group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {err && password ==="" ? <span>Password Required</span> : null}
                    </div>
                    <button>Register</button>
                </form>
                <p>By clicking on 'Register', you agree to our <span>Terms and Conditions</span> and confirm that you are over 18 years of age</p>
            </div>
        </div>
    )
}

export default RegisterBody;