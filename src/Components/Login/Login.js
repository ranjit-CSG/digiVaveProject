// import React, { Fragment, useState } from "react";
// import TextField from "@mui/material/TextField";
// import banner from "../Images/home_banner.png"
// import "./Login.css";
// import { Minimize } from "@mui/icons-material";
 
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
 
//   const isFormValid = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const isEmailValid = email.trim() !== "" && emailRegex.test(email);
//     const isPasswordValid = password.trim() !== "" && password.length == 6;
 
//     return isEmailValid && isPasswordValid && isChecked;
//   };
 
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
 
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
 
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
 
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your login logic here
//   };
 
//   return (
//     <Fragment>
//       <div className="full-forms">
//         <div className="formContainer-left">
//            <img src={banner} alt="image" className="img"></img>
//         </div>
//         <div className="formContainer-right">
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="signup login">
//               <h3>Login</h3>
//             </div>
//             <div className="form-inputs">
//               <div className="form-inputs">
//                 <TextField
//                   className="form-lable form-input fname textfield"
//                   id="email"
//                   type="email"
//                   name="email"
//                   htmlFor="email"
//                   label="Username"
//                   size="small"
//                   value={email}
//                   onChange={handleEmailChange}
//                   InputLabelProps={{ className: "textfiled__lable" }}
//                 />
//               </div>
 
//               <div className="form-inputs">
//                 <TextField
//                   className="form-lable form-input fname textfield"
//                   id="password"
//                   type="password"
//                   name="password"
//                   htmlFor="password"
//                   label="Password"
//                   size="small"
//                   inputProps={{
//                     minLength: 8,
//                   }}
//                   value={password}
//                   onChange={handlePasswordChange}
//                   InputLabelProps={{ className: "textfiled__lable" }}
//                 />
//               </div>
 
//               <div className="textfield std">
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//                 <span> </span>
//                 <label className="lab">
//                   By Proceeding you agree to ACE Taxi{" "}
//                   <a href="#" className="link">
//                     Privacy Policy
//                   </a>
//                   , User Agreement and{" "}
//                   <a href="#" className="link">
//                     T&Cs
//                   </a>
//                 </label>
//               </div>
 
//               <button type="submit" className="btn" disabled={!isFormValid}>
//                 Login
//               </button>
//             </div>
//             <div className="bottom_cnt">
//               <div>
//                 <a href="#" className="link forgotPassword">
//                   Forgot Password
//                 </a>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// }
 
// export default Login;

import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection
import TextField from "@mui/material/TextField";
import banner from "../Images/home_banner.png";
import "./Login.css";
import { Minimize } from "@mui/icons-material";

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email.trim() !== "" && emailRegex.test(email);
    const isPasswordValid = password.trim() !== "" && password.length === 6;

    return isEmailValid && isPasswordValid && isChecked;
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, simply navigate to the admin page
    navigate("/admin-dashboard");
  };

  return (
    <Fragment>
      <div className="full-forms">
        <div className="formContainer-left">
          <img src={banner} alt="image" className="img"></img>
        </div>
        <div className="formContainer-right">
          <form className="form" onSubmit={handleSubmit}>
            <div className="signup login">
              <h3>Login</h3>
            </div>
            <div className="form-inputs">
              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="email"
                  type="email"
                  name="email"
                  htmlFor="email"
                  label="Username"
                  size="small"
                  value={email}
                  onChange={handleEmailChange}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
              </div>

              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="password"
                  type="password"
                  name="password"
                  htmlFor="password"
                  label="Password"
                  size="small"
                  inputProps={{
                    minLength: 8,
                  }}
                  value={password}
                  onChange={handlePasswordChange}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
              </div>

              <div className="textfield std">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span> </span>
                <label className="lab">
                  By Proceeding you agree to ACE Taxi{" "}
                  <a href="#" className="link">
                    Privacy Policy
                  </a>
                  , User Agreement and{" "}
                  <a href="#" className="link">
                    T&Cs
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={!isFormValid()}
              ><a href="/admin-dashboard"> Login</a>
                
              </button>
            </div>
            <div className="bottom_cnt">
              <div>
                <a href="#" className="link forgotPassword">
                  Forgot Password
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
