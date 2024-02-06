import trainer from './pictures/mainTrainer.jpg';
import client from './pictures/mainClient.jpg';
import mainLogo from './pictures/mainLogo.png';
import '../App.css';
import { useState } from 'react';
import SignUp from './signUp';
function Login() {
    const [sidesHovered, setIsHovered] = useState([false, false]);
  const handleClientHover = () => {
    setIsHovered([false, true]);
  }

  const handleTrainerHover = () => {
    setIsHovered([true, false]);
  }

  const launchSignUpPage = () => {
    setSignupPage(true);
  }
  const [signupPageActive, setSignupPage] = useState(false);

  if (signupPageActive) {
    return (<SignUp/>);
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div className='picDiv'>
            <div className="trainerDiv">
              <img className={sidesHovered[0] ? "trainerPic picshovered" :" trainerPic pics"} src={trainer} onMouseEnter={(handleTrainerHover)}/>
              <div className={sidesHovered[0] ? "trainerTitle titleshovered" :"trainerTitle titles"}>Looking for Clients?</div>
              <div className={sidesHovered[0] ? "trainerBack backHovered" :" trainerBack back"}>
                  <img className="loginLogo" src={mainLogo}></img>
                  <p className='loginTitle'>TRAINER LOGIN</p>
                  <input type="text" className="loginInputs" value="username"></input><br></br>
                  <input className="loginInputs" value="password"></input><br></br>
                  <button className="loginButton">LOGIN</button><br></br>
                  <p className="signUpText">No Account? Sign Up <u>Here</u></p>
              </div>
            </div>
            <div className="clientDiv">
              <div className="clientFront">
                <img className={sidesHovered[1] ? "clientPic picshovered" :"clientPic pics"}  src={client} onMouseEnter={(handleClientHover)}/>
                <div className={sidesHovered[1] ? "clientTitle titleshovered" :" clientTitle titles"}>Looking for Personal Trainers?</div>
                <div className={sidesHovered[1] ? "clientBack backHovered" :" clientBack back"}>
                  <img className="loginLogo" src={mainLogo}></img>
                  <p className='loginTitle'>CLIENT LOGIN</p>
                  <input className="loginInputs" value="username"></input><br></br>
                  <input className="loginInputs" value="password"></input><br></br>
                  <button className="loginButton">LOGIN</button><br></br>
                  <p className="signUpText">No Account? Sign Up <u onClick={(launchSignUpPage)}>Here</u></p>
                </div>
              </div>
              
              
            </div>
            
           
          </div>
          
        </header>
      </div>
    );

  }
  
}

export default Login;