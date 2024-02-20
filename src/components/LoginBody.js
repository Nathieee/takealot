import { useState } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function LoginBody(){

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const navigate = useNavigate();

    const submitFunc = (e) => {
        e.preventDefault();
        if ( email ==="" || password==="" ){
            setErr(true);
            return;
        }

        let User = {            
            email: email,
            password: password,                
          }

          fetch("http://159.65.21.42:9000/users")
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            const loginData = data.find((user) => user.email === User.email && user.password === User.password);
            console.log(loginData)
            if (loginData ){
              alert("Login Successful");
              console.log(data);
              setIsLoggedIn(true)
              navigate('/');
            }
            else {
                alert("Login Unsuccessful");
                console.log(data);
                setIsLoggedIn(false)
            }                
          })
          .catch((err) => console.log(err));  
    }


    return(
        <div className="login_bg">
            <div className="login_form">
                <h3>Login</h3>               
                <form onSubmit={submitFunc}>      
                    <div className="form_group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>     
                        {err && email ==="" ? <span>Email Required</span> : null}
                    </div>              
                    <div className="form_group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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




